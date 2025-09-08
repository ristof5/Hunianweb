import { object, string, z } from "zod";

//validation schema contact form
export const ContactSchema = object({
  name: string().min(6, "Name at least 6 character"),
  email: string()
    .min(6, "Email at least 6 character")
    .email("Please enter a valid email"),
  subject: string().min(6, "Subject at least 6 character"),
  message: string()
    .min(50, "Message at least 50 character")
    .max(200, "Message maximum 200 characters"),
});
