"use client"
import { supabase } from "./lib/supabase"; // make sure path sahi ho
import { DataTable } from "./component/layout/data-table"; // make sure path sahi ho

export default async function DashboardPage() {
  // 1️⃣ Fetch products from Supabase
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    // console.error(error);
    return <div>Error loading products</div>;
  }

  // 2️⃣ Define DataTable columns
  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Price", accessorKey: "price" },
    { header: "Stock", accessorKey: "stock" },
    {
      header: "Actions",
      accessorKey: "id",
      cell: (row: any) => (
        <button className="text-blue-500 hover:underline">Edit</button>
      ),
    },
  ];

  // 3️⃣ Return server-side rendered table
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <DataTable columns={columns} data={products || []} />
    </div>
  );
}