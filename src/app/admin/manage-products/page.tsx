"use client";

import { useEffect, useState } from "react";
import { getAllPlates, deletePlate } from "@/services/plateService";
import ManageProductsTable, {
  PlateProduct,
} from "@/components/admin/ManageProductsTable";
import type { Plate } from "@/types/plate";
import DeleteModal from "@/components/admin/DeleteModal";

export default function ManageProductsPage() {
  const [products, setProducts] = useState<PlateProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] =
    useState<PlateProduct | null>(null);

  const [deleteProduct, setDeleteProduct] =
    useState<PlateProduct | null>(null);

  // Load Firestore Products
  const loadProducts = async () => {
    try {
      setLoading(true);

      const plates = await getAllPlates();

      const formatted: PlateProduct[] = plates.map((plate: Plate) => ({
        id: plate.id!,
        plateNumber: plate.plateNumber,
        category: plate.category,
        price: plate.price,
        availability: plate.availability as "Available" | "Reserved" | "Sold",
        featured: plate.featured,
        description: plate.description,
        images: plate.images ?? [],
      }));

      setProducts(formatted);
    } catch (error) {
      console.error("Load Products Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      async function fetchProducts() {
          await loadProducts();
      }

      fetchProducts();
  }, []);

  const handleEdit = (product: PlateProduct) => {
    setSelectedProduct(product);
  };

  const handleDelete = (product: PlateProduct) => {
    setDeleteProduct(product);
  };

  const closeDeleteModal = () => {
    setDeleteProduct(null);
  };

  const confirmDelete = async () => {
    if (!deleteProduct) return;

    try {
      await deletePlate(deleteProduct.id!);

      setProducts((prev) =>
        prev.filter((item) => item.id !== deleteProduct.id)
      );
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }

    setDeleteProduct(null);
  };

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-lg font-semibold">
          Loading Products...
        </div>
      </div>
    );
  }

  return (
    <>
      <ManageProductsTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <DeleteModal
        open={deleteProduct !== null}
        product={deleteProduct}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />

      {selectedProduct && (
        <div className="fixed bottom-6 right-6 rounded-xl bg-green-600 px-6 py-3 text-white shadow-xl">
          Editing : {selectedProduct.plateNumber}
        </div>
      )}
    </>
  );
}