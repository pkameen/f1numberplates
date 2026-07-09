import ProductForm from "@/components/admin/ProductForm";
import type { NextPage } from "next";

const AddProductPage: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-8">
        Add New Product
      </h1>

      <ProductForm />
    </div>
  );
};

export default AddProductPage;