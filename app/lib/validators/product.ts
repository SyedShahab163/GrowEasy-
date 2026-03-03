import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  stock: z.coerce.number().min(0, "Stock cannot be negative"),
  description: z.string().min(5, "Description too short"),
  image: z.any().optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;