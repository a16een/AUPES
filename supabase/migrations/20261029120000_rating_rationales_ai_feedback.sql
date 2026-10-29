-- Preserve a short explanation for each selected rating and expose aggregate text for feedback review.
alter table public.evaluations
  add column if not exists rationales jsonb not null default '{}'::jsonb;
alter table public.evaluation_summaries
  add column if not exists rating_reasons text;

drop function if exists public.submit_evaluation(uuid, jsonb, text, text);
create or replace function public.submit_evaluation(
  p_assignment_id uuid,
  p_answers jsonb,
  p_rationales jsonb default '{}'::jsonb,
  p_strengths text default null,
  p_improvements text default null
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_assignment public.evaluation_assignments%rowtype;
  v_role text;
  v_evaluation_id uuid;
begin
  if (select auth.uid()) is null then
    raise exception 'Authentication required' using errcode = '42501';
  end if;

  select a.* into v_assignment
  from public.evaluation_assignments a
  where a.id = p_assignment_id and a.evaluator_id = (select auth.uid())
  for update;

  if not found then raise exception 'This evaluation is not assigned to your account' using errcode = '42501'; end if;
  if v_assignment.status <> 'open' then raise exception 'This evaluation is no longer open' using errcode = '22023'; end if;
  if v_assignment.due_date is not null and v_assignment.due_date < current_date then raise exception 'The due date for this evaluation has passed' using errcode = '22023'; end if;

  select p.role into v_role
  from public.profiles p
  where p.id = (select auth.uid()) and p.is_active = true;

  if v_role is null
    or (v_assignment.form_type = 'student' and v_role <> 'student')
    or (v_assignment.form_type = 'department_head' and v_role <> 'department_head')
    or (v_assignment.form_type = 'peer' and v_role <> 'peer')
    or (v_assignment.form_type = 'self' and (v_role <> 'instructor' or v_assignment.instructor_id <> (select auth.uid())))
  then raise exception 'Your account role is not allowed to complete this form' using errcode = '42501'; end if;

  if p_answers is null or jsonb_typeof(p_answers) <> 'object' then
    raise exception 'Answers must be a JSON object' using errcode = '22023';
  end if;
  if exists (
    select 1 from jsonb_each_text(p_answers) supplied(key, value)
    where supplied.value not in ('0','1','2','3','4','5','NA')
      or not exists (select 1 from public.evaluation_questions q where q.id = supplied.key and q.form_type = v_assignment.form_type)
  ) then raise exception 'One or more answers are invalid' using errcode = '22023'; end if;
  if exists (
    select 1 from public.evaluation_questions q
    where q.form_type = v_assignment.form_type and not (p_answers ? q.id)
  ) then raise exception 'Please answer every item, selecting NA where not applicable' using errcode = '22023'; end if;

  if p_rationales is null or jsonb_typeof(p_rationales) <> 'object'
    or exists (
      select 1 from jsonb_each(p_rationales) supplied(key, value)
      where not exists (select 1 from public.evaluation_questions q where q.id = supplied.key and q.form_type = v_assignment.form_type)
        or jsonb_typeof(supplied.value) <> 'string'
        or length(btrim(supplied.value #>> '{}')) > 500
    )
  then raise exception 'One or more rating explanations are invalid' using errcode = '22023'; end if;

  insert into public.evaluations(assignment_id, instructor_id, form_type, evaluator_id, answers, rationales, strengths, improvements)
  values (
    v_assignment.id, v_assignment.instructor_id, v_assignment.form_type,
    case when v_assignment.form_type = 'student' then null else (select auth.uid()) end,
    p_answers, coalesce(p_rationales, '{}'::jsonb),
    nullif(btrim(coalesce(p_strengths, '')), ''),
    nullif(btrim(coalesce(p_improvements, '')), '')
  )
  returning id into v_evaluation_id;

  update public.evaluation_assignments set status = 'submitted', submitted_at = now() where id = v_assignment.id;
  return v_evaluation_id;
end;
$$;

revoke all on function public.submit_evaluation(uuid, jsonb, jsonb, text, text) from public, anon;
grant execute on function public.submit_evaluation(uuid, jsonb, jsonb, text, text) to authenticated;

create or replace function private.refresh_evaluation_summaries(p_instructor_id uuid, p_form_type text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform pg_advisory_xact_lock(hashtextextended(p_instructor_id::text || ':' || p_form_type, 0));

  delete from public.evaluation_summaries
  where instructor_id = p_instructor_id and form_type = p_form_type;

  with response_overall as (
    select e.id, avg((e.answers ->> q.id)::numeric) as average_score
    from public.evaluations e
    join public.evaluation_questions q on q.form_type = e.form_type
    where e.instructor_id = p_instructor_id
      and e.form_type = p_form_type
      and e.answers ->> q.id in ('0','1','2','3','4','5')
    group by e.id
  ),
  component_row as (
    select count(*)::integer as response_count, avg(average_score) as average_score
    from response_overall
  )
  insert into public.evaluation_summaries
    (instructor_id, form_type, area, response_count, average_score, weighted_score, updated_at)
  select p_instructor_id, p_form_type, null, response_count,
         round(average_score, 2),
         round((average_score / 5.0) * case p_form_type
           when 'student' then 40 when 'department_head' then 35 when 'peer' then 15 when 'self' then 10
         end, 2),
         now()
  from component_row
  where response_count > 0;

  with response_area as (
    select e.id, q.area, avg((e.answers ->> q.id)::numeric) as average_score
    from public.evaluations e
    join public.evaluation_questions q on q.form_type = e.form_type
    where e.instructor_id = p_instructor_id
      and e.form_type = p_form_type
      and e.answers ->> q.id in ('0','1','2','3','4','5')
    group by e.id, q.area
  ),
  area_rows as (
    select area, count(*)::integer as response_count, avg(average_score) as average_score
    from response_area group by area
  )
  insert into public.evaluation_summaries
    (instructor_id, form_type, area, response_count, average_score, weighted_score, updated_at)
  select p_instructor_id, p_form_type, area, response_count, round(average_score, 2), null, now()
  from area_rows;

  update public.evaluation_summaries s
  set strengths = (
        select string_agg(distinct nullif(btrim(e.strengths), ''), E'\n')
        from public.evaluations e where e.instructor_id = p_instructor_id and e.form_type = p_form_type
      ),
      improvements = (
        select string_agg(distinct nullif(btrim(e.improvements), ''), E'\n')
        from public.evaluations e where e.instructor_id = p_instructor_id and e.form_type = p_form_type
      ),
      rating_reasons = (
        select string_agg(distinct format('%s — rating %s: %s', q.prompt, e.answers ->> q.id, btrim(e.rationales ->> q.id)), E'\n' order by format('%s — rating %s: %s', q.prompt, e.answers ->> q.id, btrim(e.rationales ->> q.id)))
        from public.evaluations e
        join public.evaluation_questions q on q.form_type = e.form_type
        where e.instructor_id = p_instructor_id and e.form_type = p_form_type
          and nullif(btrim(e.rationales ->> q.id), '') is not null
      ),
      updated_at = now()
  where s.instructor_id = p_instructor_id and s.form_type = p_form_type and s.area is null;
end;
$$;

revoke all on function private.refresh_evaluation_summaries(uuid, text) from public, anon, authenticated;

-- Refresh all existing aggregate rows to include the new feedback field.
do $$
declare r record;
begin
  for r in select distinct instructor_id, form_type from public.evaluations loop
    perform private.refresh_evaluation_summaries(r.instructor_id, r.form_type);
  end loop;
end;
$$;
