-- Replace the security-definer summary view with a protected aggregate-only table.
-- This prevents instructors from selecting individual student response rows while allowing them to view their own aggregate scores.
drop view if exists public.evaluation_summaries;

create table if not exists public.evaluation_summaries (
  instructor_id uuid not null references public.profiles(id) on delete cascade,
  form_type text not null check (form_type in ('student','department_head','peer','self')),
  area text,
  response_count integer not null default 0 check (response_count >= 0),
  average_score numeric(6,2),
  weighted_score numeric(6,2),
  strengths text,
  improvements text,
  updated_at timestamptz not null default now()
);

create unique index if not exists evaluation_summaries_unique_idx
on public.evaluation_summaries (instructor_id, form_type, (coalesce(area, '')));

create index if not exists assignments_created_by_idx
on public.evaluation_assignments(created_by);
create index if not exists evaluations_evaluator_fk_idx
on public.evaluations(evaluator_id);

alter table public.evaluation_summaries enable row level security;
drop policy if exists "instructor reads own aggregate or admin reads all" on public.evaluation_summaries;
create policy "instructor reads own aggregate or admin reads all"
on public.evaluation_summaries for select to authenticated
using (instructor_id = (select auth.uid()) or (select private.is_admin()));

revoke all on public.evaluation_summaries from anon;
revoke all on public.evaluation_summaries from authenticated;
grant select on public.evaluation_summaries to authenticated;

-- Refresh one instructor/form aggregate under a transaction-scoped lock so simultaneous student submissions
-- cannot overwrite a fresh aggregate with a calculation that missed a concurrent insert.
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
    select e.id,
           avg((e.answers ->> q.id)::numeric) as average_score
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
           when 'student' then 40
           when 'department_head' then 35
           when 'peer' then 15
           when 'self' then 10
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
    from response_area
    group by area
  )
  insert into public.evaluation_summaries
    (instructor_id, form_type, area, response_count, average_score, weighted_score, updated_at)
  select p_instructor_id, p_form_type, area, response_count, round(average_score, 2), null, now()
  from area_rows;

  update public.evaluation_summaries s
  set strengths = (
        select string_agg(distinct nullif(btrim(e.strengths), ''), E'\n')
        from public.evaluations e
        where e.instructor_id = p_instructor_id and e.form_type = p_form_type
      ),
      improvements = (
        select string_agg(distinct nullif(btrim(e.improvements), ''), E'\n')
        from public.evaluations e
        where e.instructor_id = p_instructor_id and e.form_type = p_form_type
      ),
      updated_at = now()
  where s.instructor_id = p_instructor_id and s.form_type = p_form_type and s.area is null;
end;
$$;

revoke all on function private.refresh_evaluation_summaries(uuid, text) from public, anon, authenticated;

create or replace function private.refresh_evaluation_summaries_after_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform private.refresh_evaluation_summaries(new.instructor_id, new.form_type);
  return new;
end;
$$;
revoke all on function private.refresh_evaluation_summaries_after_insert() from public, anon, authenticated;

drop trigger if exists refresh_aupes_summary_after_insert on public.evaluations;
create trigger refresh_aupes_summary_after_insert
after insert on public.evaluations
for each row execute function private.refresh_evaluation_summaries_after_insert();

-- Backfill existing submissions in case this migration runs after the evaluation cycle has already begun.
do $$
declare r record;
begin
  for r in select distinct instructor_id, form_type from public.evaluations loop
    perform private.refresh_evaluation_summaries(r.instructor_id, r.form_type);
  end loop;
end;
$$;

-- A server-only question catalogue intentionally exposes no selectable rows through the Data API.
-- This explicit deny policy also documents that the restriction is intentional for security scanners.
drop policy if exists "questions are server only" on public.evaluation_questions;
create policy "questions are server only" on public.evaluation_questions
for all to authenticated using (false) with check (false);
