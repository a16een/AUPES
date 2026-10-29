import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
const corsHeaders={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"authorization, apikey, content-type, x-client-info","Access-Control-Allow-Methods":"POST, OPTIONS"};
const roles=new Set(["student","department_head","peer","instructor","adhoc_committee","college_admin","dean","academic_affairs","admin"]);
const json=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:{...corsHeaders,"Content-Type":"application/json"}});
Deno.serve(async(req:Request)=>{
 if(req.method==="OPTIONS")return new Response("ok",{headers:corsHeaders});
 if(req.method!=="POST")return json({error:"Method not allowed"},405);
 const url=Deno.env.get("SUPABASE_URL");const publishable=Deno.env.get("SUPABASE_ANON_KEY")??Deno.env.get("SUPABASE_PUBLISHABLE_KEY");const secret=Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")??Deno.env.get("SUPABASE_SECRET_KEY");
 if(!url||!publishable||!secret)return json({error:"Server configuration is incomplete. Check the Supabase URL, publishable/anon key and server-only service-role/secret key in the Edge Function environment."},500);
 const auth=req.headers.get("Authorization");if(!auth?.toLowerCase().startsWith("bearer "))return json({error:"Sign in as an administrator first."},401);
 const userClient=createClient(url,publishable,{global:{headers:{Authorization:auth}},auth:{persistSession:false,autoRefreshToken:false}});const adminClient=createClient(url,secret,{auth:{persistSession:false,autoRefreshToken:false}});
 try{
  const {data:{user},error:authError}=await userClient.auth.getUser(auth.slice(7));if(authError||!user)return json({error:"Your session is invalid or expired. Sign in again."},401);
  const {data:actor,error:actorError}=await adminClient.from("profiles").select("role,is_active").eq("id",user.id).maybeSingle();if(actorError||!actor||actor.role!=="admin"||!actor.is_active)return json({error:"Only active AUPES administrators can create accounts."},403);
  const body=await req.json();
  const department=String(body.department??"").trim()||null;
  const college=String(body.college??"").trim()||null;
  if(body.action==="bulk"){
   const count=Number(body.count);const role=String(body.role??"student");
   if(!Number.isInteger(count)||count<1||count>200)return json({error:"Choose a whole number between 1 and 200 accounts per batch."},400);
   if(!roles.has(role)||role==="admin")return json({error:"Choose a supported non-admin role for bulk account generation."},400);
   const createdAccounts:Array<{email:string;password:string;full_name:string;role:string}>=[];
   const failures:string[]=[];
   const digits=(length:number)=>{const bytes=new Uint8Array(length);crypto.getRandomValues(bytes);return Array.from(bytes,b=>String(b%10)).join("");};
   for(let i=0;i<count;i++){
    let createdAccount:{email:string;password:string;full_name:string;role:string}|null=null;
    let lastError="Unable to create account.";
    for(let attempt=0;attempt<4&&!createdAccount;attempt++){
     const email=digits(10)+"@accounts.aupes.edu.et";
     const password=digits(12);
     const full_name=role.replaceAll("_"," ").replace(/\b\w/g,(letter:string)=>letter.toUpperCase())+" Account "+String(i+1).padStart(3,"0");
     const {data:created,error:createError}=await adminClient.auth.admin.createUser({email,password,email_confirm:true,user_metadata:{full_name}});
     if(createError||!created.user){lastError=createError?.message??lastError;if(createError?.message?.toLowerCase().includes("already"))continue;break;}
     const {error:profileError}=await adminClient.from("profiles").update({full_name,email,role,department,college,is_active:true,updated_at:new Date().toISOString()}).eq("id",created.user.id);
     if(profileError){await adminClient.auth.admin.deleteUser(created.user.id);lastError="Profile provisioning failed: "+profileError.message;break;}
     createdAccount={email,password,full_name,role};
    }
    if(createdAccount)createdAccounts.push(createdAccount);else failures.push("Account "+String(i+1)+": "+lastError);
   }
   return json({created:createdAccounts,failures,requested:count,created_count:createdAccounts.length},createdAccounts.length?200:400);
  }
  const full_name=String(body.full_name??"").trim();const email=String(body.email??"").trim().toLowerCase();const password=String(body.password??"");const role=String(body.role??"");
  if(full_name.length<2||full_name.length>120)return json({error:"Enter a full name between 2 and 120 characters."},400);
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254)return json({error:"Enter a valid university email address."},400);
  if(password.length<8||password.length>128)return json({error:"Temporary password must contain at least 8 characters."},400);
  if(!roles.has(role))return json({error:"Choose a supported AUPES role."},400);
  const {data:created,error:createError}=await adminClient.auth.admin.createUser({email,password,email_confirm:true,user_metadata:{full_name}});if(createError||!created.user)return json({error:createError?.message??"Supabase could not create the account."},400);
  const {error:profileError}=await adminClient.from("profiles").update({full_name,email,role,department,college,is_active:true,updated_at:new Date().toISOString()}).eq("id",created.user.id);
  if(profileError){await adminClient.auth.admin.deleteUser(created.user.id);return json({error:"Profile provisioning failed: "+profileError.message},500);}
  return json({user:{id:created.user.id,email,full_name,role},message:"Account created."},201);
 }catch(error){return json({error:error instanceof Error?error.message:"Unexpected account-provisioning error."},500);}
});
