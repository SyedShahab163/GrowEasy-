"use server";

import { supabase } from "../lib/supabase";
import { revalidatePath } from "next/cache";

export async function createProduct(data: any) {
  const { error } = await supabase.from("products").insert(data);

  if (error) throw new Error(error.message);

  revalidatePath("/products");
}

export async function updateProduct(id: string, data: any) {
  const { error } = await supabase
    .from("products")
    .update(data)
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/products");
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/products");
}