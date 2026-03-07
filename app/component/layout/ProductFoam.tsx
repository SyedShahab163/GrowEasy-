// "use server";

// import { createClient } from "@/app/lib/server";
// import { revalidatePath } from "next/cache";

// export default async function createProduct(data: any) {
//   const supabase = await createClient(); // ✅ await add karo

//   const { error } = await supabase.from("products").insert(data);

//   if (error) throw new Error(error.message);

//   revalidatePath("/products");
// }

// export async function updateProduct(id: string, data: any) {
//   const supabase = await createClient(); // ✅ await add karo

//   const { error } = await supabase
//     .from("products")
//     .update(data)
//     .eq("id", id);

//   if (error) throw new Error(error.message);

//   revalidatePath("/products");
// }

// export async function deleteProduct(id: string) {
//   const supabase = await createClient(); // ✅ await add karo

//   const { error } = await supabase
//     .from("products")
//     .delete()
//     .eq("id", id);

//   if (error) throw new Error(error.message);

//   revalidatePath("/products");
// }
// ProductForm.tsx
"use client";

import { FormEvent, useState } from "react";
import { createProduct } from "../../action/product-action";


export default function ProductForm() {
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createProduct({ name });
    setName(""); // reset
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <button type="submit">Add Product</button>
    </form>
  );
}