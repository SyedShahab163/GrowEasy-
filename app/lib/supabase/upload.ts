import { createClient } from "@/lib/supabase/client";

const supabase = createClient(); // ✅ client ko ek baar create karke reuse karenge

export async function uploadImage(file: File): Promise<string> {
  // Unique file name
  const fileName = `${Date.now()}-${file.name}`;

  // Upload file to "products" storage bucket
  const { error } = await supabase.storage
    .from("products")
    .upload(fileName, file);

  if (error) throw new Error(error.message);

  // Get public URL of uploaded file
  const { data } = supabase.storage
    .from("products")
    .getPublicUrl(fileName);

  return data.publicUrl;
}