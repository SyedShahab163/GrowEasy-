import ProductForm from "../../component/layout/ProductFoam";

export default function Page(data :any) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>
      <ProductForm />
    </div>
  );
}