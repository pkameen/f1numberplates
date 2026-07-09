"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { getAllPlates } from "@/services/plateService";
import type { Plate } from "@/types/plate";

export default function AdminDashboardPage() {
  const [plates, setPlates] = useState<Plate[]>([]);
  const [loading, setLoading] = useState(true);

  /* -------------------------------- */
  /* Load Products                    */
  /* -------------------------------- */

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getAllPlates();
        setPlates(data);
      } catch (error) {
        console.error("Dashboard Load Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  /* -------------------------------- */
  /* Dashboard Statistics             */
  /* -------------------------------- */

  const totalProducts = plates.length;

  const featuredProducts = useMemo(() => {
    return plates.filter(
      (plate) => plate.featured
    ).length;
  }, [plates]);

  const availableProducts = useMemo(() => {
    return plates.filter(
      (plate) =>
        plate.availability === "Available"
    ).length;
  }, [plates]);

  const highestPricePlate = useMemo(() => {
    if (plates.length === 0) return null;

    return [...plates].sort(
      (a, b) => b.price - a.price
    )[0];
  }, [plates]);

  /* -------------------------------- */
  /* Loading Screen                   */
  /* -------------------------------- */

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">

        <div className="rounded-3xl bg-white shadow-xl px-10 py-8">

          <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-500 border-t-transparent mx-auto" />

          <p className="mt-6 text-gray-600 font-medium">
            Loading Dashboard...
          </p>

        </div>

      </div>
    );
  }

  /* -------------------------------- */
  /* Dashboard                        */
  /* -------------------------------- */

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">

      {/* ===================================================== */}
      {/* Premium Dashboard Header */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden border-b border-yellow-500/20 bg-[#080808]">

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.05),transparent_60%)]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div>

              <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-yellow-400">

                Premium Dashboard

              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white lg:text-6xl">

                Welcome Back,

                <span className="block text-yellow-400">

                  Administrator

                </span>

              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">

                Manage premium number plates, monitor inventory,
                featured collections and business performance from
                your luxury administration dashboard.

              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-4 sm:flex-row">

              <Link
                href="/admin/add-product"
                className="flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 px-8 text-base font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(250,204,21,.35)]"
              >

                + Add New Plate

              </Link>

              <Link
                href="/admin/manage-products"
                className="flex h-14 items-center justify-center rounded-2xl border border-yellow-500/30 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500/10"

              >

                Manage Plates

              </Link>

            </div>

          </div>

          {/* Bottom Premium Line */}

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-[0.30em] text-zinc-500">

                Products

              </p>

              <h3 className="mt-2 text-3xl font-black text-white">

                {totalProducts}

              </h3>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-[0.30em] text-zinc-500">

                Featured

              </p>

              <h3 className="mt-2 text-3xl font-black text-yellow-400">

                {featuredProducts}

              </h3>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-[0.30em] text-zinc-500">

                Available

              </p>

              <h3 className="mt-2 text-3xl font-black text-green-400">

                {availableProducts}

              </h3>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-[0.30em] text-zinc-500">

                Highest Value

              </p>

              <h3 className="mt-2 text-xl font-black text-orange-400">

                {highestPricePlate
                  ? `₹ ${highestPricePlate.price.toLocaleString()}`
                  : "--"}

              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
        {/* Premium Dashboard Stats */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total Plates */}

            <div className="group relative overflow-hidden rounded-[30px] border border-yellow-500/20 bg-gradient-to-b from-[#141414] to-[#0b0b0b] p-7 shadow-[0_15px_40px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40 hover:shadow-[0_20px_60px_rgba(212,175,55,.18)]">

              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-yellow-500/10 blur-3xl" />

              <div className="relative flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.30em] text-zinc-500">
                    Total Plates
                  </p>

                  <h2 className="mt-4 text-5xl font-black text-white">
                    {totalProducts}
                  </h2>

                  <p className="mt-3 text-sm text-zinc-400">
                    Registered inventory
                  </p>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-3xl">
                  🚘
                </div>

              </div>

            </div>

            {/* Featured */}

            <div className="group relative overflow-hidden rounded-[30px] border border-yellow-500/20 bg-gradient-to-b from-[#141414] to-[#0b0b0b] p-7 shadow-[0_15px_40px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40 hover:shadow-[0_20px_60px_rgba(212,175,55,.18)]">

              <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="relative flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.30em] text-zinc-500">
                    Featured
                  </p>

                  <h2 className="mt-4 text-5xl font-black text-yellow-400">
                    {featuredProducts}
                  </h2>

                  <p className="mt-3 text-sm text-zinc-400">
                    Premium collection
                  </p>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-3xl">
                  ⭐
                </div>

              </div>

            </div>

            {/* Available */}

            <div className="group relative overflow-hidden rounded-[30px] border border-green-500/20 bg-gradient-to-b from-[#141414] to-[#0b0b0b] p-7 shadow-[0_15px_40px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_20px_60px_rgba(34,197,94,.18)]">

              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-500/10 blur-3xl" />

              <div className="relative flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.30em] text-zinc-500">
                    Available
                  </p>

                  <h2 className="mt-4 text-5xl font-black text-green-400">
                    {availableProducts}
                  </h2>

                  <p className="mt-3 text-sm text-zinc-400">
                    Ready for sale
                  </p>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-3xl">
                  ✅
                </div>

              </div>

            </div>

            {/* Highest Price */}

            <div className="group relative overflow-hidden rounded-[30px] border border-orange-500/20 bg-gradient-to-b from-[#141414] to-[#0b0b0b] p-7 shadow-[0_15px_40px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_20px_60px_rgba(249,115,22,.20)]">

              <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl" />

              <div className="relative">

                <div className="mb-6 flex items-center justify-between">

                  <p className="text-xs uppercase tracking-[0.30em] text-zinc-500">
                    Highest Value
                  </p>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-2xl">
                    💎
                  </div>

                </div>

                <h3 className="text-2xl font-black text-white">
                  {highestPricePlate?.plateNumber ?? "--"}
                </h3>

                <p className="mt-3 text-3xl font-black text-orange-400">
                  {highestPricePlate
                    ? `₹ ${highestPricePlate.price.toLocaleString()}`
                    : "--"}
                </p>

              </div>

            </div>

          </div>

        </section>

      {/* ====================================== */}
      {/* Premium Recent Number Plates */}
      {/* ====================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">

        <div className="overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-b from-[#141414] to-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,.45)]">

          {/* Header */}

          <div className="flex flex-col gap-5 border-b border-white/10 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-xs uppercase tracking-[0.30em] text-yellow-400">
                Latest Inventory
              </span>

              <h2 className="mt-4 text-3xl font-black text-white">
                Recent Number Plates
              </h2>

              <p className="mt-2 text-zinc-400">
                Recently added premium plates.
              </p>

            </div>

            <Link
              href="/admin/manage-products"
              className="flex h-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-white/5 px-6 font-semibold text-white transition hover:border-yellow-500 hover:bg-yellow-500/10"
            >
              View All
            </Link>

          </div>

          {plates.length === 0 ? (

            <div className="flex flex-col items-center justify-center px-8 py-24">

              <div className="text-6xl">📦</div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                No Plates Found
              </h3>

              <p className="mt-3 text-zinc-400">
                Add your first premium number plate.
              </p>

              <Link
                href="/admin/add-product"
                className="mt-8 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 font-bold text-black"
              >
                + Add Plate
              </Link>

            </div>

          ) : (

            <>

              {/* ================= DESKTOP TABLE ================= */}

              <div className="hidden overflow-x-auto lg:block">

                <table className="min-w-full">

                  <thead className="border-b border-white/10 bg-white/5">

                    <tr>

                      {["Plate","Category","Price","Status","Featured"].map((item)=>(
                        <th
                          key={item}
                          className="px-6 py-5 text-left text-xs uppercase tracking-[0.25em] text-zinc-400"
                        >
                          {item}
                        </th>
                      ))}

                    </tr>

                  </thead>

                  <tbody>

                    {plates.slice(0,5).map((plate)=>(

                      <tr
                        key={plate.id}
                        className="border-b border-white/5 transition hover:bg-white/5"
                      >

                        <td className="px-6 py-5">

                          <h3 className="font-bold text-white">
                            {plate.plateNumber}
                          </h3>

                          <p className="mt-1 text-sm text-zinc-500">
                            {plate.description}
                          </p>

                        </td>

                        <td className="px-6 py-5 text-zinc-300">
                          {plate.category}
                        </td>

                        <td className="px-6 py-5 font-bold text-yellow-400">
                          ₹ {plate.price.toLocaleString()}
                        </td>

                        <td className="px-6 py-5">

                          <span
                            className={`rounded-full px-4 py-2 text-xs font-semibold

                            ${
                              plate.availability==="Available"
                              ? "bg-green-500/10 text-green-400"
                              : plate.availability==="Reserved"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-red-500/10 text-red-400"
                            }`}
                          >

                            {plate.availability}

                          </span>

                        </td>

                        <td className="px-6 py-5">

                          {plate.featured ? (

                            <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-xs font-semibold text-yellow-400">
                              ⭐ Featured
                            </span>

                          ) : (

                            <span className="text-zinc-600">—</span>

                          )}

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

              {/* ================= MOBILE CARDS ================= */}

              <div className="space-y-5 p-5 lg:hidden">

                {plates.slice(0,5).map((plate)=>(

                  <div
                    key={plate.id}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <h3 className="text-xl font-black text-white">
                          {plate.plateNumber}
                        </h3>

                        <p className="mt-2 text-sm text-zinc-400">
                          {plate.category}
                        </p>

                      </div>

                      <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">

                        ₹ {plate.price.toLocaleString()}

                      </span>

                    </div>

                    <p className="mt-5 line-clamp-2 text-sm text-zinc-500">
                      {plate.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      <span
                        className={`rounded-full px-3 py-2 text-xs

                        ${
                          plate.availability==="Available"
                          ? "bg-green-500/10 text-green-400"
                          : plate.availability==="Reserved"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {plate.availability}
                      </span>

                      {plate.featured && (

                        <span className="rounded-full bg-yellow-500/10 px-3 py-2 text-xs text-yellow-400">

                          ⭐ Featured

                        </span>

                      )}

                    </div>

                  </div>

                ))}

              </div>

            </>

          )}

        </div>

      </section>

      {/* ====================================== */}
      {/* Premium Footer */}
      {/* ====================================== */}

      <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-[#080808]">

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div>

            <h3 className="text-2xl font-black uppercase tracking-[0.20em] text-white">

              F1 NUMBER PLATES

            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">

              Premium Administration Dashboard for managing luxury
              number plates, featured collections, pricing,
              inventory and customer-ready listings.

            </p>

          </div>

          {/* Center */}

          <div className="grid grid-cols-1 gap-6 text-sm">

            <div>

              <p className="mb-3 uppercase tracking-[0.25em] text-yellow-400">

                Dashboard

              </p>

              <ul className="space-y-2 text-zinc-400">

                <li>Total Products</li>
                <li>Featured Plates</li>
                <li>Availability</li>
                <li>Highest Value</li>

              </ul>

            </div>

            <div>

              <p className="mb-3 uppercase tracking-[0.25em] text-yellow-400">

                Management

              </p>

              <ul className="space-y-2 text-zinc-400">

                <li>Add Product</li>
                <li>Manage Products</li>
                <li>Settings</li>
                <li>Admin Panel</li>

              </ul>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-5 backdrop-blur-xl">

            <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-xs uppercase tracking-[0.30em] text-yellow-400">

              Premium System

            </span>

            <h4 className="mt-5 text-xl font-bold text-white">

              F1 Admin

            </h4>

            <p className="mt-3 text-sm leading-7 text-zinc-400">

              Built with Next.js, Firebase & Cloudinary for a
              premium luxury number plate management experience.

            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="relative border-t border-white/10">

          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">

            <p>

              © {new Date().getFullYear()} F1 Number Plates.
              All Rights Reserved.

            </p>

            <p className="text-yellow-400">

              Premium Luxury Admin Dashboard • Version 2.0

            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}