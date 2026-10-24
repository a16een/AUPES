import { FORM_META, type FormType } from "../data/forms";
export type Rating = 0|1|2|3|4|5|"NA";
export type SummaryRow = {instructor_id:string;form_type:FormType;area:string|null;response_count:number;average_score:number|null;weighted_score:number|null;strengths:string|null;improvements:string|null};
export function averageRatings(values:Rating[]) {
 const valid=values.filter((v):v is 0|1|2|3|4|5=>v!=="NA");
 return valid.length?valid.reduce((sum,v)=>sum+v,0)/valid.length:null;
}
export function weightedContribution(average:number|null|undefined,form:FormType) {
 return average==null||Number.isNaN(average)?null:(average/5)*FORM_META[form].weight;
}
export function finalWeightedScore(rows:SummaryRow[]) {
 const components=rows.filter((r)=>r.area===null);
 const averages=new Map(components.map((r)=>[r.form_type,r.average_score]));
 const forms:FormType[]=["student","department_head","peer","self"];
 if(forms.some((form)=>averages.get(form)==null))return null;
 return Number(forms.reduce((sum,form)=>sum+(weightedContribution(averages.get(form)!,form)??0),0).toFixed(2));
}
