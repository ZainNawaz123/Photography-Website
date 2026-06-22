-- Add optional project type for contact submissions

alter table public.contact_submissions
  add column if not exists project_type text
  check (project_type is null or char_length(project_type) <= 120);
