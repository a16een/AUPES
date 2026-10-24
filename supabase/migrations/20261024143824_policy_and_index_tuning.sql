-- Add a primary key to the aggregate table and simplify overlapping RLS policies.
drop index if exists public.evaluation_summaries_unique_idx;
alter table public.evaluation_summaries
  add column if not exists area_key text generated always as (coalesce(area, '')) stored;
alter table public.evaluation_summaries
  add constraint evaluation_summaries_pkey primary key (instructor_id, form_type, area_key);

-- Keep one read policy for profiles and one combined update policy to avoid broad duplicate policies.
drop policy if exists "admins manage profiles" on public.profiles;
drop policy if exists "profile owner limited update" on public.profiles;
drop policy if exists "profile self or admin read" on public.profiles;
create policy "profiles readable by owner assigned evaluator or admin" on public.profiles
for select to authenticated
using (
 id = (select auth.uid())
 or (select private.is_admin())
 or exists (
  select 1 from public.evaluation_assignments a
  where a.evaluator_id = (select auth.uid()) and a.instructor_id = profiles.id
 )
);
create policy "profiles update by owner or admin" on public.profiles
for update to authenticated
using (id = (select auth.uid()) or (select private.is_admin()))
with check (id = (select auth.uid()) or (select private.is_admin()));

-- Admin assignment CRUD is separate from SELECT, so regular evaluators read only their own assignments.
drop policy if exists "admins manage assignments" on public.evaluation_assignments;
drop policy if exists "assignment owner and admins read" on public.evaluation_assignments;
create policy "assignment owner and admins read" on public.evaluation_assignments
for select to authenticated using (evaluator_id = (select auth.uid()) or (select private.is_admin()));
create policy "admins create assignments" on public.evaluation_assignments
for insert to authenticated with check ((select private.is_admin()));
create policy "admins update assignments" on public.evaluation_assignments
for update to authenticated using ((select private.is_admin())) with check ((select private.is_admin()));
create policy "admins delete assignments" on public.evaluation_assignments
for delete to authenticated using ((select private.is_admin()));
