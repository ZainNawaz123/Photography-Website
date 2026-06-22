import { z } from "zod";

export const guestbookSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please share your name.")
    .max(80, "Name must be 80 characters or fewer."),
  location: z
    .string()
    .trim()
    .max(120, "Location must be 120 characters or fewer.")
    .optional()
    .transform((value) => value || undefined),
  message: z
    .string()
    .trim()
    .max(500, "Message must be 500 characters or fewer.")
    .optional()
    .transform((value) => value || undefined),
});

export type GuestbookFormData = z.infer<typeof guestbookSchema>;
