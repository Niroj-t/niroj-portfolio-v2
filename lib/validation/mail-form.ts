import { z } from "zod";

const mailFormSchema = z.object({
  name: z
    .string()
    .refine((val) => val.trim() !== "", { message: "Name is required" })
    .refine((val) => val.trim().length >= 3, {
      message: "Name must be 3 chars",
    }),

  email: z
    .string()
    .transform((val) => val.trim())
    .pipe(
      z.string().min(1, "Email is required").pipe(
        z.email({ error: "Invalid email" })
      )
    ),

  subject: z
    .string()
    .refine((val) => val.trim() !== "", { message: "Subject is required" })
    .refine((val) => val.trim().length >= 3, {
      message: "Subject must be at least 3 characters",
    }),

  message: z
    .string()
    .refine((val) => val.trim() !== "", { message: "Message is required" })
    .refine((val) => val.trim().length >= 3, {
      message: "Message must be at least 3 characters",
    }),
});

export default mailFormSchema;
