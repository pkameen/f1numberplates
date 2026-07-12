"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

import type { Plate } from "@/types/plate";
export type PlateProduct = Plate;

interface ManageProductsTableProps {
  products: PlateProduct[];
  onEdit: (product: PlateProduct) => void;
  onDelete: (product: PlateProduct) => void;
}

const categories = [
  "All",
  "Bike Plates",
  "Car Plates",
  "Honey Comb Plates",
  "Taxis Plates",
  "Electric Plates",
  "TP Number Plates",
];

export default function ManageProductsTable({
  products,
  onEdit,
  onDelete,
}: ManageProductsTableProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.plateNumber
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

      <div>

      <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-orange-300">

      Premium Inventory

      </span>

      <h2 className="mt-5 text-4xl font-black text-white">

      Manage Products

      </h2>

      <p className="mt-3 text-zinc-400 max-w-xl">

      Manage, search and edit every premium number plate from one dashboard.

      </p>

      </div>

      <Button
      href="/admin/add-product"
      className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-bold text-white shadow-xl hover:scale-105 transition"
      >

      + Add New Plate

      </Button>

      </div>

      {/* Filters */}

      <div className="rounded-[30px]
      border border-white/10
      bg-white/5
      backdrop-blur-2xl
      p-6
      shadow-[0_20px_60px_rgba(0,0,0,.35)]">

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Search Plate Name..." 
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="h-14 rounded-2xl border border-white/10 bg-black/30 px-5 text-white placeholder:text-zinc-500"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="h-14 rounded-2xl border border-white/10 bg-black/30 px-5 text-white"
          >
            {categories.map((item) => (

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

      {/* Table */}

      <div className="hidden md:block overflow-hidden rounded-[30px]
      border border-white/10
      bg-white/5
      backdrop-blur-3xl
      shadow-[0_30px_70px_rgba(0,0,0,.45)]">

        <table className="w-full">

          <thead className="bg-black/40 border-b border-white/10 text-orange-300">

            <tr>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider font-bold">
                Images
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider font-bold">
                Plate
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider font-bold">
                Category
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider font-bold">
                Price
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider font-bold">
                Status
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider font-bold">
                Featured
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider font-bold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>
                        {filteredProducts.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="p-10 text-center text-gray-500"
                >
                  No number plates found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-white/10 hover:bg-orange-500/5 transition-all duration-300"
                >
                  {/* Images */}

                  <td className="p-4">
                    <div className="flex gap-2">
                      {product.images.slice(0, 3).map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={product.plateNumber}
                          width={60}
                          height={60}
                          className="rounded-xl border border-white/10 object-cover shadow-lg"
                        />
                      ))}

                      {product.images.length > 3 && (
                        <div className="w-[60px] h-[60px] rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold">
                          +{product.images.length - 3}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Plate */}

                  <td className="p-4">
                    <h3 className="font-bold text-white"> 
                      {product.plateNumber}
                    </h3>

                    <p className="text-sm text-zinc-400 line-clamp-2">
                      {product.description}
                    </p>
                  </td>

                  {/* Category */}

                  <td className="p-4 text-zinc-300 text-black">
                    {product.category}
                  </td>

                  {/* Price */}

                  <td className="p-4 font-semibold text-orange-400 text-lg text-black">
                    ₹ {product.price.toLocaleString()}
                  </td>

                  {/* Status */}

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.availability === "Available"
                          ? "bg-emerald-500/20 text-emerald-300"
                          : product.availability === "Reserved"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-red-500/20 text-red-300" 
                      }`}
                    >
                      {product.availability}
                    </span>
                  </td>

                  {/* Featured */}

                  <td className="p-4">
                    {product.featured ? (
                      <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-orange-700 text-xs font-semibold">
                        Featured
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-white/10 text-zinc-400 text-gray-500 text-xs">
                        No
                      </span>
                    )}
                  </td>

                  {/* Actions */}

                  <td className="p-4">
                    <div className="flex gap-2">

                      <Button
                        variant="secondary"
                        onClick={() => onEdit(product)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => onDelete(product)}
                      >
                        Delete
                      </Button>

                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile View */} 

      <div className="space-y-5 md:hidden">

      {filteredProducts.length === 0 ? (

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

      <div className="text-6xl">🚘</div>

      <h3 className="mt-5 text-2xl font-bold text-white">

      No Products

      </h3>

      <p className="mt-2 text-zinc-400">

      No number plates available.

      </p>

      </div>

      ) : (

      filteredProducts.map((product) => (

      <div
      key={product.id}
      className="overflow-hidden rounded-[28px]
      border border-white/10
      bg-white/5
      backdrop-blur-2xl
      shadow-[0_15px_50px_rgba(0,0,0,.35)]"
      >

      {/* Image */}

      <div className="relative h-52">

      <Image
      src={product.images[0]}
      alt={product.plateNumber}
      fill
      className="object-cover"
      />

      </div>

      {/* Body */}

      <div className="p-5">

      <div className="flex items-center justify-between">

      <h2 className="text-2xl font-black text-white">

      {product.plateNumber}

      </h2>

      <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-300">

      ₹ {product.price.toLocaleString()}

      </span>

      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-400">

      {product.description}

      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">

      <div>

      <p className="text-xs uppercase text-zinc-500">

      Category

      </p>

      <p className="mt-1 font-semibold text-white">

      {product.category}

      </p>

      </div>

      <div>

      <p className="text-xs uppercase text-zinc-500">

      Status

      </p>

      <span
      className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
      product.availability==="Available"
      ?"bg-green-500/20 text-green-300"
      :product.availability==="Reserved"
      ?"bg-yellow-500/20 text-yellow-300"
      :"bg-red-500/20 text-red-300"
      }`}
      >

      {product.availability}

      </span>

      </div>

      <div>

      <p className="text-xs uppercase text-zinc-500">

      Featured

      </p>

      <p className="mt-1 text-white">

      {product.featured ? "⭐ Featured" : "No"}

      </p>

      </div>

      </div>

      <div className="mt-6 flex gap-3">

      <Button
      variant="secondary"
      className="flex-1"
      onClick={()=>onEdit(product)}
      >

      Edit

      </Button>

      <Button
      variant="outline"
      className="flex-1"
      onClick={()=>onDelete(product)}
      >

      Delete

      </Button>

      </div>

      </div>

      </div>

      ))

      )}

      </div>

      {/* Footer */}

      <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-zinc-400 backdrop-blur-xl md:flex-row md:items-center md:justify-between">

        <p>

        Total Products :

        <span className="ml-2 font-bold text-orange-400">

        {filteredProducts.length}

        </span>

        </p>

        <p>

        Premium F1 Number Plates Admin Dashboard

        </p>

      </div>

    </div>
  );
}
