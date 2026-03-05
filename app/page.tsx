// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "./lib/supabase";
// import Image from "next/image";

// export default function ProductsPage() {
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     async function load() {
//       const { data } = await supabase
//         .from("products")
//         .select("*")
//         // .order("created_at", { ascending: false });
//       setProducts(data || []);
//     }
//     load();
//   }, []);

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Products</h1>
//         <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
//           Add Product
//         </button>
//       </div>

//       {/* CARD STYLE TABLE WRAPPER */}
//       <div className="bg-white shadow-md rounded-xl overflow-hidden">
//         <table className="w-full text-left">
//           {/* TABLE HEAD */}
//           <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
//             <tr>
//               <th className="px-6 py-3">Image</th>
//               <th className="px-6 py-3">Name</th>
//               <th className="px-6 py-3">Price</th>
//               <th className="px-6 py-3">Stock</th>
//               <th className="px-6 py-3">Category</th>
//               <th className="px-6 py-3">Status</th>
//               <th className="px-6 py-3">Actions</th>
//             </tr>
//           </thead>

//           {/* TABLE BODY */}
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id} className="border-b hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   {product.image_url ? (
//                     // <Image
//                     //   src={product.image_url}
//                     //   alt={product.name}
//                     //   width={70}
//                     //   height={50}
//                     //   className="rounded"
//                     // />
//                     <img
//   src={product.image_url}
//   alt={product.name}
//   className="rounded w-[50px] h-[50px] object-cover"
// />
//                   ) : (
//                     <span className="text-gray-400">No image</span>
//                   )}
//                 </td>

//                 <td className="px-6 py-4 font-medium text-gray-800">
//                   {product.name}
//                 </td>

//                 <td className="px-6 py-4 text-gray-700">
//                   Rs {product.price}
//                 </td>

//                 <td className="px-6 py-4 text-gray-700">
//                   {product.stock}
//                 </td>

//                 <td className="px-6 py-4 text-gray-700">
//                   {product.category || "-"}
//                 </td>

//                 <td className="px-6 py-4 text-gray-700">
//                   <span
//                     className={`px-2 py-1 text-xs rounded-full ${
//                       product.status === "in_stock"
//                         ? "bg-green-100 text-green-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {product.status}
//                   </span>
//                 </td>

//                 <td className="px-6 py-4">
//                   <button className="text-indigo-600 hover:underline mr-3">
//                     Edit
//                   </button>
//                   <button className="text-red-600 hover:underline">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }