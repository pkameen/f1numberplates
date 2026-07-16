"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  PlusSquare,
  Package2,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/admin/add-product",
      label: "Add Product",
      icon: PlusSquare,
    },
    {
      href: "/admin/manage-products",
      label: "Manage Products",
      icon: Package2,
    },
    {
      href: "/admin/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.replace("/admin/login");
  };

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}

      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 border-b border-yellow-500/20 bg-[#080808]/95 backdrop-blur-2xl">

        <div className="flex h-full items-center justify-between px-5">

          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3"
          >

            <div className="relative h-11 w-11 rounded-xl border border-yellow-500/30 bg-white/5">

              <Image
                src="/assets/logo/company-logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain p-2" 
              />

            </div>

            <div>

              <h2 className="text-sm font-bold tracking-[0.18em] text-white uppercase">

                F1 Number Plates

              </h2>

              <p className="text-[10px] uppercase tracking-[0.30em] text-yellow-400">

                Premium Admin

              </p>

            </div>

          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5"
          >

            <Menu className="h-6 w-6 text-white" />

          </button>

        </div>

      </header>

      {/* ================= DESKTOP SIDEBAR ================= */}

      <aside className="hidden lg:flex w-72 min-h-screen flex-col border-r border-yellow-500/20 bg-gradient-to-b from-[#050505] via-[#0d0d0d] to-black">

        <div className="relative overflow-hidden border-b border-yellow-500/20 p-8">

          <div className="absolute -top-20 -left-16 h-52 w-52 rounded-full bg-yellow-500/10 blur-[80px]" />

          <Link
            href="/admin/dashboard"
            className="relative flex items-center gap-4"
          >

            <div className="relative h-16 w-16 rounded-2xl border border-yellow-500/30 bg-white/5 backdrop-blur-xl">

              <Image
                src="/assets/logo/company-logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain p-3"
              />

            </div>

            <div>

              <h1 className="text-xl font-black uppercase tracking-[0.18em] text-white">

                F1 Number Plates

              </h1>

              <p className="mt-1 text-xs uppercase tracking-[0.35em] text-yellow-400">

                Premium Admin

              </p>

            </div>

          </Link>

        </div>

                {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="flex-1 px-5 py-6">

          <ul className="space-y-3">

            {navItems.map((item) => {

              const Icon = item.icon;
              const active = pathname === item.href;

              return (

                <li key={item.href}>

                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 transition-all duration-300

                    ${
                      active
                        ? "border border-yellow-500/30 bg-gradient-to-r from-yellow-500/20 via-yellow-400/10 to-transparent text-yellow-400 shadow-[0_0_35px_rgba(250,204,21,.15)]"
                        : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    }`}
                  >

                    {active && (
                      <span className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-yellow-400" />
                    )}

                    <Icon
                      className={`h-6 w-6 transition-all duration-300 ${
                        active
                          ? "text-yellow-400"
                          : "text-zinc-500 group-hover:text-yellow-400"
                      }`}
                    />

                    <span className="font-medium tracking-wide">
                      {item.label}
                    </span>

                  </Link>

                </li>

              );

            })}

          </ul>

        </nav>

        {/* ================= BOTTOM ACTIONS ================= */}

        <div className="border-t border-yellow-500/20 p-5">

          <Link
            href="/"
            className="group mb-3 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-yellow-400"
          >

            <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />

            Back to Website

          </Link>

          <button
            onClick={logout}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-5 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/30"
          >

            <LogOut className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />

            Logout

          </button>

        </div>

      </aside>

      {/* ================= MOBILE OVERLAY ================= */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* ================= MOBILE DRAWER START ================= */}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-80 border-r border-yellow-500/20 bg-[#090909]/95 backdrop-blur-3xl transition-transform duration-300 lg:hidden

        ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between border-b border-yellow-500/20 p-6">

          <div className="flex items-center gap-3">

            <div className="relative h-14 w-14 rounded-2xl border border-yellow-500/30 bg-white/5">

              <Image
                src="/assets/logo/company-logo.png"
                alt="Logo"
                fill
                className="object-contain p-3"
              />

            </div>

            <div>

              <h2 className="font-bold uppercase tracking-[0.15em] text-white">
                F1 Number Plates
              </h2>

              <p className="text-xs uppercase tracking-[0.30em] text-yellow-400">
                Premium Admin
              </p>

            </div>

          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-xl border border-white/10 bg-white/5 p-2"
          >

            <X className="h-6 w-6 text-white" />

          </button>

        </div>

                {/* ================= MOBILE NAVIGATION ================= */}

        <nav className="flex flex-1 flex-col justify-between p-5">

          <ul className="space-y-3">

            {navItems.map((item) => {

              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <li key={item.href}>

                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300

                    ${
                      active
                        ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black shadow-[0_10px_35px_rgba(250,204,21,.35)]"
                        : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >

                    <Icon
                      className={`h-6 w-6 ${
                        active
                          ? "text-black"
                          : "text-yellow-400"
                      }`}
                    />

                    <span className="font-semibold tracking-wide">
                      {item.label}
                    </span>

                  </Link>

                </li>
              );

            })}

          </ul>

          {/* Bottom */}

          <div className="space-y-3 border-t border-white/10 pt-6">

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 text-white transition-all duration-300 hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-yellow-400"
            >

              <ChevronLeft className="h-5 w-5" />

              Back to Website

            </Link>

            <button
              onClick={logout}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(220,38,38,.35)]"
            >

              <LogOut className="h-5 w-5" />

              Logout

            </button>

          </div>

        </nav>

      </aside>

    </>

  );

}