# AUPES — Ambo University Performance Evaluation System

A responsive academic staff evaluation application using React, Vite, TypeScript, Tailwind CSS, Supabase Auth/Postgres and Netlify. Visual direction: forest green, warm gold and ivory, inspired by the Ambo University context.

## Included

- Landing page and secure email/password sign-in.
- Role-aware dashboards for students, department heads, peers, instructors, system admins and academic oversight roles.
- Form A, B, C and D question sets from the supplied directive.
- Required ratings: 5, 4, 3, 2, 1, 0, NA. NA is excluded; 0 is a valid score.
- Form E-style scoring: Students 40%, Department Head 35%, Peer 15%, Self-evaluation 10%. Each component weight is applied once, and no final score is shown until all four component averages exist.
- Administrator account provisioning via a server-side Edge Function, assignment creation, RLS, atomic response submission and aggregate-only instructor result summaries.
- Netlify SPA routing.

## Supabase configuration

The client currently uses the connected project URL and its publishable browser key as fallback values in src/lib/supabase.ts. Publishable keys are intended for client use. No service-role/secret key is included in the frontend or Git. Override with VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in local or Netlify environment settings. See .env.example.

## One-time administrator setup

For security, visitors cannot self-register as admins.

1. Open the Supabase Dashboard for the connected project and go to Authentication → Users. Create the first administrator account with the intended email and a strong password.
2. The database trigger creates a profile. In the SQL editor, promote only that known account:
   update public.profiles set role='admin', is_active=true, updated_at=now() where lower(email)=lower('YOUR_ADMIN_EMAIL');
   Confirm that exactly one intended profile was updated.
3. Deploy the account-provisioning function. It permits only an authenticated active admin and requires a server-only Supabase service-role or secret key in the Edge Function environment as SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SECRET_KEY. Never put that secret in VITE variables or GitHub.
4. Sign in, create evaluator/instructor accounts and assign course evaluations.

Deploy the function using the Supabase CLI after linking this project:
supabase functions deploy admin-create-user

The database migration is at supabase/migrations/20261024150000_aupes_core.sql. It has been applied to the connected database; apply it with the normal Supabase migration workflow when setting up another environment.

## Local run and deployment

Run npm install, copy .env.example to .env.local if you want explicit local settings, then run npm run dev. Use npm run build to verify a production build. netlify.toml sets npm run build, publishes dist, and rewrites SPA paths to index.html. Configure the VITE_* variables in Netlify when deploying against a different Supabase project.

## Scoring detail and source-form mismatch

For each response, all valid 0–5 values are averaged; NA is excluded. The component contribution is average / 5 × its evaluator weight. Missing components are pending, not zeros. Focus-area averages are supporting breakdowns, not extra weights.

The source Form E mentions a student Assessment Method & Feedback row and additional self-evaluation rows that are not provided as separate questions in the supplied Form A/D text. This implementation preserves the supplied question items and reports the focus areas actually present rather than inventing additional questions.

## Privacy and security

Student responses store a null respondent ID. The instructor-facing view contains aggregated component/area averages and aggregated comments, not individual student submission rows. Direct response writes are revoked; submissions use the validating submit_evaluation RPC. Never expose a service-role/secret key in browser code.
