-- Contact form submissions (admin reads via Supabase Dashboard)

create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  message text not null check (char_length(message) between 1 and 2000),
  read boolean not null default false,
  created_at timestamptz not null default now()
);

create index contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

alter table public.contact_submissions enable row level security;

-- Anyone can submit a contact message; no public read access
create policy "Anyone can submit contact messages"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);
