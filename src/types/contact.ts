export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  project_type: string | null;
  message: string;
  read: boolean;
  created_at: string;
};

export const PROJECT_TYPE_OPTIONS = [
  "Portrait Session",
  "Couple Session",
  "Graduation",
  "Event",
  "Personal Project",
  "Something else meaningful",
] as const;
