import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Name required"),
  price: z.number().min(1, "Price required"),
  stock: z.number().min(0),
  description: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;