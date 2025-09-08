"use server";

import { ContactSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";

//validasi untuk contact-form
export const ContactMessage = async (prevState: unknown, formData: FormData) => {
  const rawData = Object.fromEntries(formData.entries());

  const validatedFields = ContactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: { name, email, subject, message },
    });

    return { success: "Thanks for contacting us." };
  } catch (error) {
    console.error("Prisma Error: ", error);
    return { formError: "Something went wrong, please try again." };
  }
};
