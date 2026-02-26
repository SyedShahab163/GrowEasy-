import { supabase } from "../lib/supabase"; // our Supabase client
import { DataTable } from "../component/layout/data-table"; // from shadcn/ui
import { columns } from "../dashboard/coloums"; // we will create this

export const revalidate = 0; // optional for fresh data every request

async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

export default async function DashboardPage() {
  const products = await getProducts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products Dashboard</h1>
      <DataTable columns={columns} data={products} />
    </div>
  );
}