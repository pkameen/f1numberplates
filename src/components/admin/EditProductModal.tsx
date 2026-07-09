"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import type { Plate } from "@/types/plate";

export type PlateProduct = Plate;

const categories = [
  "Bike Plates",
  "Car Plates",
  "Honey Comb Plates",
  "Taxis Plates",
  "Electric Plates",
  "TP Number Plates",
];

const availabilityOptions: PlateProduct["availability"][] = [
  "Available",
  "Reserved",
  "Sold",
];

export interface ProductUpdatePayload {
  plateNumber: string;
  category: string;
  price: number;
  description: string;
  availability: PlateProduct["availability"];
  featured: boolean;
  newImages: File[];
  removedImages: string[];
}

interface EditProductModalProps {
  open: boolean;
  product: PlateProduct | null;
  onClose: () => void;
  onSave: (
    id: string,
    data: ProductUpdatePayload
  ) => void;
}

interface FormState {
  plateNumber: string;
  category: string;
  price: string;
  description: string;
  availability: PlateProduct["availability"];
  featured: boolean;

  currentImages: string[];
  newImages: File[];
  removedImages: string[];
}

export default function EditProductModal({
  open,
  product,
  onClose,
  onSave,
}: EditProductModalProps) {

  const [form, setForm] = useState<FormState>({
  plateNumber: product?.plateNumber ?? "",
  category: product?.category ?? "",
  price: String(product?.price ?? ""),
  description: product?.description ?? "",
  availability: product?.availability ?? "Available",
  featured: product?.featured ?? false,

  currentImages: product?.images ?? [],
  newImages: [],
  removedImages: [],
});

  const previewImages = useMemo(() => {
    return form.newImages.map((file: File) => ({
      file,
      url: URL.createObjectURL(file),
    }));
  }, [form.newImages]);

  const updateField = <
    K extends keyof FormState
  >(
    key: K,
    value: FormState[K]
  ) => {

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    updateField(
      "newImages",
      [...form.newImages, ...files]
    );

  };

  const removeCurrentImage = (
    index: number
  ) => {

    const image =
      form.currentImages[index];

    updateField(
      "removedImages",
      [...form.removedImages, image]
    );

    updateField(
      "currentImages",
      form.currentImages.filter(
        (_, i) => i !== index
      )
    );

  };

  const removeNewImage = (
    index: number
  ) => {

    updateField(
      "newImages",
      form.newImages.filter(
        (_, i) => i !== index
      )
    );

  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();
    
    onSave(product!.id, {
      plateNumber: form.plateNumber,
      category: form.category,
      price: Number(form.price),
      description: form.description,
      availability: form.availability,
      featured: form.featured,
      newImages: form.newImages,
      removedImages: form.removedImages,
    });

    onClose();

  };
  if (!open || !product) {
    return null;
  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border border-yellow-500/20 bg-[#111111] shadow-[0_0_80px_rgba(0,0,0,.7)]"
      >

        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-yellow-500/20 bg-[#111111]/95 backdrop-blur-xl px-8 py-6">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Edit Product
            </h2>

            <p className="text-sm text-zinc-400 mt-1">
              Update premium number plate details
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-11 w-11 rounded-xl bg-zinc-800 text-white hover:bg-red-600 transition"
          >
            ✕
          </button>

        </div>

        <div className="p-8 space-y-8">

          {/* Images */}

          <div>

            <label className="mb-4 block text-lg font-semibold text-white">
              Plate Images
            </label>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

              {form.currentImages.map((image, index) => (

                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900"
                >

                  <Image
                    src={image}
                    alt="Plate"
                    width={220}
                    height={220}
                    className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <button
                    type="button"
                    onClick={() => removeCurrentImage(index)}
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white opacity-0 transition group-hover:opacity-100"
                  >
                    ✕
                  </button>

                </div>

              ))}

              {previewImages.map((item, index) => (

                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-zinc-900"
                >

                  <Image
                    src={item.url}
                    alt="Preview"
                    width={220}
                    height={220}
                    className="aspect-square w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => removeNewImage(index)}
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white opacity-0 transition group-hover:opacity-100"
                  >
                    ✕
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-500 py-1 text-center text-xs font-semibold text-black">
                    NEW
                  </div>

                </div>

              ))}

              <label
                htmlFor="editImages"
                className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-yellow-500/40 bg-zinc-900 text-zinc-400 transition hover:border-yellow-500 hover:text-yellow-400"
              >

                <div className="text-5xl font-light">
                  +
                </div>

                <p className="mt-2 text-sm">
                  Upload Images
                </p>

                <Input
                  id="editImages"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

              </label>

            </div>

          </div>

          {/* Details */}

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-white">
                Plate Number
              </label>

              <Input
                value={form.plateNumber}
                onChange={(e) =>
                  updateField(
                    "plateNumber",
                    e.target.value
                  )
                }
                className="border-zinc-700 bg-zinc-900 text-white"
              />

            </div>

            <div>

              <label className="mb-2 block text-white">
                Category
              </label>

              <select
                value={form.category}
                onChange={(e) =>
                  updateField(
                    "category",
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
              >

                {categories.map((cat) => (

                  <option
                    key={cat}
                    value={cat}
                  >
                    {cat}
                  </option>

                ))}

              </select>

            </div>

            <div>

              <label className="mb-2 block text-white">
                Price
              </label>

              <Input
                type="number"
                value={form.price}
                onChange={(e) =>
                  updateField(
                    "price",
                    e.target.value
                  )
                }
                className="border-zinc-700 bg-zinc-900 text-white"
              />

            </div>

            <div>

              <label className="mb-2 block text-white">
                Availability
              </label>

              <select
                value={form.availability}
                onChange={(e) =>
                  updateField(
                    "availability",
                    e.target
                      .value as PlateProduct["availability"]
                  )
                }
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
              >

                {availabilityOptions.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

            </div>

          </div>

          {/* Description */}

          <div>

            <label className="mb-2 block text-white">
              Description
            </label>

            <textarea
              rows={5}
              value={form.description}
              onChange={(e) =>
                updateField(
                  "description",
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none transition focus:border-yellow-500"
              placeholder="Enter premium plate description..."
            />

          </div>

          {/* Featured */}

          <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-5">

            <label className="flex cursor-pointer items-center justify-between">

              <div>

                <h3 className="font-semibold text-white">
                  Featured Product
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Show this plate on homepage featured section.
                </p>

              </div>

              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) =>
                  updateField(
                    "featured",
                    e.target.checked
                  )
                }
                className="h-6 w-6 accent-yellow-500"
              />

            </label>

          </div>

        </div>

        {/* Footer */}

        <div className="sticky bottom-0 flex items-center justify-end gap-4 border-t border-yellow-500/20 bg-[#111111]/95 px-8 py-6 backdrop-blur-xl">

          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="bg-yellow-500 text-black hover:bg-yellow-400"
          >
            Save Changes
          </Button>

        </div>

      </form>

    </div>

  );

}