import { z } from "zod";

export const userObjectSchema = z.object({
  name: z.string().min(1),
  contact: z.string().regex(/^\+[1-9]\d{1,14}$/, {
    message: "Contact number must be in valid E.164 format (e.g., +1234567890)",
  }),
  email: z.string().email(),
});
