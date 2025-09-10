import { object, string, coerce, array } from "zod";

// validation schema room dengan pesan error custom
export const RoomSchema = object({
  name: string().min(1, { message: "Room name is required." }),

  description: string().min(50, {
    message: "Description must be at least 50 characters long.",
  }),

  capacity: coerce
    .number()
    .gt(0, { message: "Capacity must be greater than 0." }),

  price: coerce.number().gt(0, { message: "Price must be greater than 0." }),

  amenities: array(string()).nonempty({
    message: "At least one amenity must be selected.",
  }),
});

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
