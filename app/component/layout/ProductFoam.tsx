"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createProduct(data: any) {
  const supabase = createClient();

  const { error } = await supabase.from("products").insert(data);

  if (error) throw new Error(error.message);

  revalidatePath("/products");
}

export async function updateProduct(id: string, data: any) {
  const supabase = createClient();

  const { error } = await supabase
    .from("products")
    .update(data)
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/products");
}

export async function deleteProduct(id: string) {
  const supabase = createClient();

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/products");
}