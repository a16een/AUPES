-- AUPES core schema: role-aware assignments, private responses and weighted summaries.
create schema if not exists private;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text not null default '',
  role text not null default 'student' check (role in ('admin','student','department_head','peer','instructor','adhoc_committee','college_admin','dean','academic_affairs')),
  department text, college text, is_active boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.evaluation_questions (
  id text primary key, form_type text not null check (form_type in ('student','department_head','peer','self')),
  area text not null, prompt text not null, position integer not null, unique(form_type,position)
);

insert into public.evaluation_questions(id,form_type,area,prompt,position) values
('a_001','student','Instructional skills','Presents the course objective clearly.',1),
('a_002','student','Instructional skills','Specifies the activities to be done during the lesson clearly.',2),
('a_003','student','Instructional skills','Explains the content of each unit or chapter clearly.',3),
('a_004','student','Instructional skills','Covers the course content according to the given timetable.',4),
('a_005','student','Instructional skills','Presents the course clearly using the language of instruction.',5),
('a_006','student','Instructional skills','Responds to students’ questions positively.',6),
('a_007','student','Instructional skills','Links the lesson clearly to previous and future lessons.',7),
('a_008','student','Instructional skills','Adapts knowledge to the level of the learners.',8),
('a_009','student','Instructional skills','Makes students active participants during teaching and learning.',9),
('a_010','student','Instructional skills','Supports students’ attempts at solving problems.',10),
('a_011','student','Instructional skills','Gives students time during lessons.',11),
('a_012','student','Instructional skills','Uses a variety of teaching techniques to accommodate different learning styles.',12),
('a_013','student','Instructional skills','Makes the class thought-provoking and interesting.',13),
('a_014','student','Instructional skills','Provides make-up classes properly when classes are missed.',14),
('a_015','student','Instructional skills','Provides tutorial classes properly when assigned.',15),
('a_016','student','Professional Ethics & Attitude Towards Students','Begins and ends class on time.',16),
('a_017','student','Professional Ethics & Attitude Towards Students','Makes effective use of class time.',17),
('a_018','student','Professional Ethics & Attitude Towards Students','Provides consultation during arranged hours.',18),
('a_019','student','Professional Ethics & Attitude Towards Students','Shows genuine concern for students’ learning and problems.',19),
('a_020','student','Professional Ethics & Attitude Towards Students','Encourages students to freely express feelings, opinions and ideas in class.',20),
('a_021','student','Professional Ethics & Attitude Towards Students','Encourages peer and cooperative learning.',21),
('a_022','student','Professional Ethics & Attitude Towards Students','Acts in a professionally acceptable manner.',22),
('a_023','student','Professional Ethics & Attitude Towards Students','Maintains a classroom atmosphere conducive to learning.',23),
('b_001','department_head','Core Competency','Makes efforts toward self-development in their specialization.',1),
('b_002','department_head','Core Competency','Demonstrates adequate subject-matter knowledge.',2),
('b_003','department_head','Core Competency','Accepts additional teaching assignments when compelling situations arise in the department.',3),
('b_004','department_head','Core Competency','Accepts related departmental assignments beyond regular teaching, such as mentorship.',4),
('b_005','department_head','Core Competency','Is effective as a mentor in educational development activities, internships and similar work.',5),
('b_006','department_head','Core Competency','Actively participates in improving the teaching-learning process.',6),
('b_007','department_head','Core Competency','Participates in community-service affairs.',7),
('b_008','department_head','Core Competency','Actively participates in seminars, workshops and symposia.',8),
('b_009','department_head','Core Competency','Identifies priority areas in their discipline and pursues research in those areas.',9),
('b_010','department_head','Core Competency','Participates in research projects and project-proposal development.',10),
('b_011','department_head','Core Competency','Performs well as an academic advisor.',11),
('b_012','department_head','Professional Competency','Participates in identifying and solving problems at department, college or institution level.',12),
('b_013','department_head','Professional Competency','Implements continuous assessment.',13),
('b_014','department_head','Professional Competency','Actively participates in departmental, college and institutional affairs.',14),
('b_015','department_head','Professional Competency','Provides and reports tutorial activities designed for students.',15),
('b_016','department_head','Professional Competency','Participates in preparing and reviewing teaching materials.',16),
('b_017','department_head','Professional Competency','Updates teaching materials.',17),
('b_018','department_head','Professional Competency','Willingly shares University resources with colleagues.',18),
('b_019','department_head','Time Management','Executes assigned classes and invigilation on time.',19),
('b_020','department_head','Time Management','Notifies and implements consultation in a timely way.',20),
('b_021','department_head','Time Management','Provides timely feedback to students.',21),
('b_022','department_head','Time Management','Meets deadlines for reports, SIMS result entry, submissions and related duties.',22),
('b_023','department_head','Ethical Competency','Has a positive attitude toward working with others.',23),
('b_024','department_head','Ethical Competency','Shows concern for the use of departmental and University resources.',24),
('b_025','department_head','Ethical Competency','Willingly participates in committees at department and University level.',25),
('b_026','department_head','Ethical Competency','Is willing to take assignments outside the University in their area of specialization.',26),
('b_027','department_head','Ethical Competency','Demonstrates professional ethics in dress, presentation and conduct.',27),
('c_001','peer','Subject Matter Competency','Contributes to preparing and searching for teaching materials.',1),
('c_002','peer','Subject Matter Competency','Continuously updates subject-matter knowledge.',2),
('c_003','peer','Subject Matter Competency','Attends seminars organized by the department, college, school or institute.',3),
('c_004','peer','Subject Matter Competency','Demonstrates subject-matter knowledge and skill.',4),
('c_005','peer','Research & Community Services','Shows willingness and engagement in community-service activities.',5),
('c_006','peer','Research & Community Services','Participates in seminars and workshops at department, college, school or institute level during the year.',6),
('c_007','peer','Research & Community Services','Identifies priority areas in their discipline and pursues research in those areas.',7),
('c_008','peer','Research & Community Services','Is willing to prepare research projects with colleagues.',8),
('c_009','peer','Research & Community Services','Helps colleagues identify research areas and develop proposals.',9),
('c_010','peer','Professional Competency','Provides guidance and counseling to students.',10),
('c_011','peer','Professional Competency','Contributes ideas and activities that improve the teaching-learning process.',11),
('c_012','peer','Professional Competency','Participates in identifying and solving problems at department, college or institution level.',12),
('c_013','peer','Professional Competency','Shows willingness and preparedness to implement change tools.',13),
('c_014','peer','Professional Competency','Actively participates in 1–5 grouping (Education Development Army) activities.',14),
('c_015','peer','Professional Competency','Implements different teaching methods in their discipline.',15),
('c_016','peer','Professional Competency','Properly invigilates exams and tests to ensure academic integrity.',16),
('c_017','peer','Ethical Competency','Willingly participates in committee work and demonstrates commitment.',17),
('c_018','peer','Ethical Competency','Actively participates in departmental, college and institute meetings.',18),
('c_019','peer','Ethical Competency','Willingly shares University resources with colleagues.',19),
('c_020','peer','Ethical Competency','Shows cordiality toward others.',20),
('c_021','peer','Ethical Competency','Has a positive attitude toward working with others.',21),
('c_022','peer','Ethical Competency','Respects other people’s ideas.',22),
('c_023','peer','Ethical Competency','Respects institutional rules and guidelines.',23),
('c_024','peer','Ethical Competency','Maintains appropriate professional discipline and conduct.',24),
('c_025','peer','Time Management','Manages time effectively in departmental affairs.',25),
('c_026','peer','Time Management','Uses consultation hours effectively.',26),
('d_001','self','Instructional skills','Presents the course objective clearly.',1),
('d_002','self','Instructional skills','Specifies the activities to be done during the lesson clearly.',2),
('d_003','self','Instructional skills','Explains the content of each unit or chapter clearly.',3),
('d_004','self','Instructional skills','Covers the course content according to the given timetable.',4),
('d_005','self','Instructional skills','Presents the course clearly using the language of instruction.',5),
('d_006','self','Instructional skills','Responds to students’ questions positively.',6),
('d_007','self','Instructional skills','Links the lesson clearly to previous and future lessons.',7),
('d_008','self','Instructional skills','Adapts knowledge to the level of the learners.',8),
('d_009','self','Instructional skills','Makes students active participants during teaching and learning.',9),
('d_010','self','Instructional skills','Supports students’ attempts at solving problems.',10),
('d_011','self','Instructional skills','Gives students time during lessons.',11),
('d_012','self','Instructional skills','Uses a variety of teaching techniques to accommodate different learning styles.',12),
('d_013','self','Instructional skills','Makes the class thought-provoking and interesting.',13),
('d_014','self','Instructional skills','Provides make-up classes properly when classes are missed.',14),
('d_015','self','Instructional skills','Provides tutorial classes properly when assigned.',15),
('d_016','self','Professional Ethics & Attitude Towards Students','Begins and ends class on time.',16),
('d_017','self','Professional Ethics & Attitude Towards Students','Makes effective use of class time.',17),
('d_018','self','Professional Ethics & Attitude Towards Students','Provides consultation during arranged hours.',18),
('d_019','self','Professional Ethics & Attitude Towards Students','Shows genuine concern for students’ learning and problems.',19),
('d_020','self','Professional Ethics & Attitude Towards Students','Encourages students to freely express feelings, opinions and ideas in class.',20),
('d_021','self','Professional Ethics & Attitude Towards Students','Encourages peer and cooperative learning.',21),
('d_022','self','Professional Ethics & Attitude Towards Students','Acts in a professionally acceptable manner.',22),
('d_023','self','Professional Ethics & Attitude Towards Students','Maintains a classroom atmosphere conducive to learning.',23),
('d_024','self','Assessment Methods & Feedback','Provides students with appropriate assignments.',24),
('d_025','self','Assessment Methods & Feedback','Checks whether students have understood the topic.',25),
('d_026','self','Assessment Methods & Feedback','Assesses student learning with a variety of techniques.',26),
('d_027','self','Assessment Methods & Feedback','Publishes students’ results on time for every assessment.',27),
('d_028','self','Assessment Methods & Feedback','Provides follow-up feedback on time.',28),
('d_029','self','Assessment Methods & Feedback','Constructs tests that represent the course content.',29),
('d_030','self','Assessment Methods & Feedback','Allots appropriate time to complete exams.',30),
('d_031','self','Assessment Methods & Feedback','Continuously assesses student performance to improve instruction.',31),
('d_032','self','Assessment Methods & Feedback','Uses continuous assessment during instruction.',32),
('d_033','self','Overall Personal Behavior','Shows appropriate respect for colleagues and department heads.',33),
('d_034','self','Overall Personal Behavior','Maintains the dignity of the job and professional ethics.',34),
('d_035','self','Overall Personal Behavior','Remains free from alcohol and drug addiction.',35),
('d_036','self','Overall Personal Behavior','Arrives on time for appointments and institutional meetings.',36),
('d_037','self','Overall Personal Behavior','Acts as a role model for students and the surrounding society.',37),
('d_038','self','Overall Personal Behavior','Takes appropriate care of materials borrowed from the institution for teaching and learning.',38),
('d_039','self','Overall Personal Behavior','Does not present others’ work or findings as their own.',39),
('d_040','self','Overall Personal Behavior','Raises complaints through the appropriate channel.',40),
('d_041','self','Overall Personal Behavior','Proposes ideas to improve teaching and learning in the department.',41),
('d_042','self','Professional Attitude','Attends professional meetings and seminars.',42),
('d_043','self','Professional Attitude','Participates in activities to improve personal knowledge.',43),
('d_044','self','Professional Attitude','Participates in solving problems that arise in the department.',44),
('d_045','self','Professional Attitude','Conducts professional research in their field.',45),
('d_046','self','Professional Attitude','Shares research outcomes with the concerned college community.',46),
('d_047','self','Professional Attitude','Is ready to share knowledge and experience with colleagues.',47),
('d_048','self','Professional Attitude','Accepts constructive evaluation comments and attempts to apply them.',48),
('d_049','self','Professional Attitude','Helps less experienced colleagues identify research areas and develop proposals.',49),
('d_050','self','Professional Attitude','Performs additional mandates and responsibilities.',50),
('d_051','self','Professional Attitude','Participates in instructor performance-efficiency evaluations in the department.',51),
('d_052','self','Professional Attitude','Works with the college and department head on curriculum development and instructional goals.',52),
('d_053','self','Professional Attitude','Adheres to established laws, policies, rules and regulations for effective teaching and learning.',53),
('d_054','self','Professional Attitude','Serves, especially in leadership roles, on major University and college committees.',54),
('d_055','self','Professional Attitude','Handles institutional resources and materials carefully and wisely.',55)
on conflict (id) do nothing;

create table if not exists public.evaluation_assignments (
  id uuid primary key default gen_random_uuid(),
  evaluator_id uuid not null references public.profiles(id) on delete cascade,
  instructor_id uuid not null references public.profiles(id) on delete cascade,
  form_type text not null check (form_type in ('student','department_head','peer','self')),
  course_title text not null, course_code text not null, academic_year text not null,
  semester smallint not null check (semester in (1,2)), batch smallint check(batch between 1 and 5),
  due_date date, status text not null default 'open' check(status in ('open','submitted','closed')),
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(), submitted_at timestamptz,
  constraint student_batch_required check(form_type <> 'student' or batch is not null),
  constraint self_assignment_same_user check(form_type <> 'self' or evaluator_id = instructor_id)
);
create index if not exists assignments_evaluator_idx on public.evaluation_assignments(evaluator_id,status);
create index if not exists assignments_instructor_idx on public.evaluation_assignments(instructor_id,form_type);

create table if not exists public.evaluations (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid not null unique references public.evaluation_assignments(id) on delete cascade,
  instructor_id uuid not null references public.profiles(id) on delete cascade,
  form_type text not null check(form_type in ('student','department_head','peer','self')),
  evaluator_id uuid references public.profiles(id) on delete set null,
  answers jsonb not null check(jsonb_typeof(answers) = 'object'),
  strengths text, improvements text, submitted_at timestamptz not null default now()
);
create index if not exists evaluations_instructor_form_idx on public.evaluations(instructor_id,form_type);

create or replace function private.current_role()
returns text language sql stable security definer set search_path = ''
as $$
 select p.role from public.profiles p where p.id=(select auth.uid()) and p.is_active=true limit 1
$$;
create or replace function private.is_admin()
returns boolean language sql stable security definer set search_path = ''
as $$
 select exists(select 1 from public.profiles p where p.id=(select auth.uid()) and p.role='admin' and p.is_active=true)
$$;
create or replace function private.handle_new_user()
returns trigger language plpgsql security definer set search_path = ''
as $$
begin
 insert into public.profiles(id,full_name,email,role)
 values(new.id,coalesce(new.raw_user_meta_data->>'full_name',''),coalesce(new.email,''),'student')
 on conflict(id) do nothing;
 return new;
end;
$$;
drop trigger if exists on_auth_user_created_aupes on auth.users;
create trigger on_auth_user_created_aupes after insert on auth.users
for each row execute function private.handle_new_user();

revoke all on function private.current_role() from public,anon;
revoke all on function private.is_admin() from public,anon;
revoke all on function private.handle_new_user() from public,anon,authenticated;
grant usage on schema private to authenticated;
grant execute on function private.current_role() to authenticated;
grant execute on function private.is_admin() to authenticated;

alter table public.profiles enable row level security;
alter table public.evaluation_questions enable row level security;
alter table public.evaluation_assignments enable row level security;
alter table public.evaluations enable row level security;

drop policy if exists "profile self or admin read" on public.profiles;
create policy "profile self or admin read" on public.profiles for select to authenticated using(
 id=(select auth.uid()) or (select private.is_admin()) or exists(
  select 1 from public.evaluation_assignments a where a.evaluator_id=(select auth.uid()) and a.instructor_id=profiles.id
 )
);
drop policy if exists "profile owner limited update" on public.profiles;
create policy "profile owner limited update" on public.profiles for update to authenticated using(id=(select auth.uid())) with check(id=(select auth.uid()));
drop policy if exists "admins manage profiles" on public.profiles;
create policy "admins manage profiles" on public.profiles for all to authenticated using((select private.is_admin())) with check((select private.is_admin()));

drop policy if exists "assignment owner and admins read" on public.evaluation_assignments;
create policy "assignment owner and admins read" on public.evaluation_assignments for select to authenticated
using(evaluator_id=(select auth.uid()) or (select private.is_admin()));
drop policy if exists "admins manage assignments" on public.evaluation_assignments;
create policy "admins manage assignments" on public.evaluation_assignments for all to authenticated
using((select private.is_admin())) with check((select private.is_admin()));

drop policy if exists "evaluators and admins read own non-student responses" on public.evaluations;
create policy "evaluators and admins read own non-student responses" on public.evaluations for select to authenticated
using((select private.is_admin()) or (evaluator_id=(select auth.uid()) and form_type <> 'student'));

revoke all on public.evaluation_questions from anon,authenticated;
revoke all on public.evaluations from anon,authenticated;
grant usage on schema public to authenticated;
grant select on public.profiles to authenticated;
grant update(full_name,department,college,updated_at) on public.profiles to authenticated;
grant select,insert,update,delete on public.evaluation_assignments to authenticated;
grant select on public.evaluations to authenticated;

create or replace function public.submit_evaluation(p_assignment_id uuid,p_answers jsonb,p_strengths text default null,p_improvements text default null)
returns uuid language plpgsql security definer set search_path = ''
as $$
declare v_assignment public.evaluation_assignments%rowtype; v_role text; v_evaluation_id uuid;
begin
 if (select auth.uid()) is null then raise exception 'Authentication required' using errcode='42501'; end if;
 select a.* into v_assignment from public.evaluation_assignments a
 where a.id=p_assignment_id and a.evaluator_id=(select auth.uid()) for update;
 if not found then raise exception 'This evaluation is not assigned to your account' using errcode='42501'; end if;
 if v_assignment.status <> 'open' then raise exception 'This evaluation is no longer open' using errcode='22023'; end if;
 if v_assignment.due_date is not null and v_assignment.due_date < current_date then raise exception 'The due date for this evaluation has passed' using errcode='22023'; end if;
 select p.role into v_role from public.profiles p where p.id=(select auth.uid()) and p.is_active=true;
 if v_role is null
 or (v_assignment.form_type='student' and v_role<>'student')
 or (v_assignment.form_type='department_head' and v_role<>'department_head')
 or (v_assignment.form_type='peer' and v_role<>'peer')
 or (v_assignment.form_type='self' and (v_role<>'instructor' or v_assignment.instructor_id<>(select auth.uid())))
 then raise exception 'Your account role is not allowed to complete this form' using errcode='42501'; end if;
 if p_answers is null or jsonb_typeof(p_answers)<>'object' then raise exception 'Answers must be a JSON object' using errcode='22023'; end if;
 if exists(select 1 from jsonb_each_text(p_answers) supplied(key,value)
   where supplied.value not in ('0','1','2','3','4','5','NA')
   or not exists(select 1 from public.evaluation_questions q where q.id=supplied.key and q.form_type=v_assignment.form_type))
 then raise exception 'One or more answers are invalid' using errcode='22023'; end if;
 if exists(select 1 from public.evaluation_questions q where q.form_type=v_assignment.form_type and not(p_answers ? q.id))
 then raise exception 'Please answer every item, selecting NA where not applicable' using errcode='22023'; end if;
 insert into public.evaluations(assignment_id,instructor_id,form_type,evaluator_id,answers,strengths,improvements)
 values(v_assignment.id,v_assignment.instructor_id,v_assignment.form_type,
   case when v_assignment.form_type='student' then null else (select auth.uid()) end,
   p_answers,nullif(btrim(coalesce(p_strengths,'')),''),nullif(btrim(coalesce(p_improvements,'')),''))
 returning id into v_evaluation_id;
 update public.evaluation_assignments set status='submitted',submitted_at=now() where id=v_assignment.id;
 return v_evaluation_id;
end;
$$;
revoke all on function public.submit_evaluation(uuid,jsonb,text,text) from public,anon;
grant execute on function public.submit_evaluation(uuid,jsonb,text,text) to authenticated;

create or replace view public.evaluation_summaries with (security_invoker=false) as
with visible_evaluations as (
 select e.* from public.evaluations e
 where e.instructor_id=(select auth.uid()) or (select private.is_admin())
),
response_overall as (
 select e.id,e.instructor_id,e.form_type,avg((e.answers->>q.id)::numeric) as average_score
 from visible_evaluations e join public.evaluation_questions q on q.form_type=e.form_type
 where e.answers->>q.id in ('0','1','2','3','4','5') group by e.id,e.instructor_id,e.form_type
),
component_rows as (
 select e.instructor_id,e.form_type,count(*)::integer as response_count,
 round(avg(ro.average_score),2) as average_score,
 round((avg(ro.average_score)/5.0)*case e.form_type when 'student' then 40 when 'department_head' then 35 when 'peer' then 15 when 'self' then 10 end,2) as weighted_score,
 string_agg(distinct nullif(btrim(e.strengths),''),E'\n') as strengths,
 string_agg(distinct nullif(btrim(e.improvements),''),E'\n') as improvements
 from visible_evaluations e join response_overall ro on ro.id=e.id group by e.instructor_id,e.form_type
),
response_area as (
 select e.id,e.instructor_id,e.form_type,q.area,avg((e.answers->>q.id)::numeric) as average_score
 from visible_evaluations e join public.evaluation_questions q on q.form_type=e.form_type
 where e.answers->>q.id in ('0','1','2','3','4','5')
 group by e.id,e.instructor_id,e.form_type,q.area
),
area_rows as (
 select instructor_id,form_type,area,count(*)::integer as response_count,round(avg(average_score),2) as average_score
 from response_area group by instructor_id,form_type,area
)
select instructor_id,form_type,null::text as area,response_count,average_score,weighted_score,strengths,improvements from component_rows
union all
select instructor_id,form_type,area,response_count,average_score,null::numeric as weighted_score,null::text as strengths,null::text as improvements from area_rows;

revoke all on public.evaluation_summaries from anon;
grant select on public.evaluation_summaries to authenticated;
