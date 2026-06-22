import { z } from "zod";
import { PROJECT_TYPE_OPTIONS } from "@/types/contact";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please share your name.")
    .max(120, "Name must be 120 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email must be 254 characters or fewer."),
  project_type: z
    .string()
    .trim()
    .optional()
    .transform((value) => value || undefined)
    .refine(
      (value) =>
        !value ||
        PROJECT_TYPE_OPTIONS.includes(
          value as (typeof PROJECT_TYPE_OPTIONS)[number],
        ),
      "Please choose a valid project type.",
    ),
  message: z
    .string()
    .trim()
    .min(1, "Please tell me about your idea.")
    .max(2000, "Message must be 2000 characters or fewer."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
