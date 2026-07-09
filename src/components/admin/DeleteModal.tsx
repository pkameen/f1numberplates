"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { PlateProduct } from "./ManageProductsTable";

interface DeleteModalProps {
  open: boolean;
  product: PlateProduct | null;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({
  open,
  product,
  onClose,
  onConfirm,
}: DeleteModalProps) {
  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">

        {/* Header */}

        <div className="border-b px-6 py-5">

          <h2 className="text-2xl font-bold text-black">
            Delete Product
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            This action cannot be undone.
          </p>

        </div>

        {/* Product Preview */}

        <div className="flex items-center gap-4 p-6">

          <div className="relative h-20 w-20 overflow-hidden rounded-xl border">

            <Image
              src={
                product.images.length > 0
                  ? product.images[0]
                  : "/placeholder.png"
              }
              alt={product.plateNumber}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <h3 className="text-lg font-bold text-black">
              {product.plateNumber}
            </h3>

            <p className="text-sm text-gray-500">
              {product.category}
            </p>

            <p className="mt-1 font-semibold text-black">
              ₹ {product.price.toLocaleString()}
            </p>

          </div>

        </div>

        {/* Warning */}

        <div className="mx-6 rounded-xl border border-red-200 bg-red-50 p-4">

          <p className="text-sm text-red-700">
            Are you sure you want to permanently delete this
            premium number plate? This action cannot be reversed.
          </p>

        </div>

                {/* Footer */}

        <div className="flex items-center justify-end gap-3 border-t px-6 py-5">

          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Delete Product
          </Button>

        </div>

      </div>

    </div>
  );
}