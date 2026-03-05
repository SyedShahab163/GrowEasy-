// // import { createClient } from "@/lib/supabase/33
// // client";

// export async function uploadImage(file: File) {
//   // const supabase = createClient();

  

//   const fileName = `${Date.now()}-${file.name}`;

//   // const { error } = await supabase.storage
//     .from("products")
//     .upload(fileName, file);

//   if (error) throw new Error(error.message);

//   const { data } = supabase.storage
//     .from("products")
//     .getPublicUrl(fileName);

//   return data.publicUrl;
// }