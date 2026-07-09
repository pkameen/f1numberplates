"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020202]">

      {/* ===================================== */}
      {/* Premium Background */}
      {/* ===================================== */}

      <div className="absolute inset-0">

        {/* Left Orange Glow */}

        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[170px]" />

        {/* Right Gold Glow */}

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[170px]" />

        {/* Center Glow */}

        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/5 blur-[130px]" />

      </div>

      {/* ===================================== */}
      {/* Container */}
      {/* ===================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* ===================================== */}
          {/* Company */}
          {/* ===================================== */}

          <div className="lg:col-span-2">

            <Link
              href="/"
              className="inline-flex items-center gap-4"
            >

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">

                <Image
                  src="/assets/logo/company-logo.png"
                  alt="F1 Number Plates"
                  width={72}
                  height={72}
                  priority
                  className="h-auto w-auto"
                />

              </div>

              <div>

                <h2 className="text-3xl font-black tracking-wide text-white">

                  F1 Number Plates

                </h2>

                <p className="mt-1 text-sm uppercase tracking-[0.35em] text-orange-400">

                  Premium Collection

                </p>

              </div>

            </Link>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400">

              Discover premium VIP number plates, luxury registration
              collections and exclusive listings crafted for automobile
              enthusiasts who appreciate rarity, elegance and prestige.

            </p>

            {/* Premium Badge */}

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-6 py-3 backdrop-blur-xl">

              <div className="h-3 w-3 rounded-full bg-orange-400 animate-pulse" />

              <span className="text-sm font-semibold tracking-wide text-orange-300">

                Trusted Premium Number Plate Marketplace

              </span>

            </div>

          </div>

          {/* ===================================== */}
          {/* Quick Links */}
          {/* ===================================== */}

          <div>

            <h3 className="text-xl font-bold text-white">

              Quick Links

            </h3>

            <div className="mt-8 flex flex-col gap-5">

                            <Link
                href="/"
                className="group flex items-center justify-between text-gray-400 transition-all duration-300 hover:text-orange-400"
              >
                <span>Home</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/#gallery"
                className="group flex items-center justify-between text-gray-400 transition-all duration-300 hover:text-orange-400"
              >
                <span>Gallery</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/#categories"
                className="group flex items-center justify-between text-gray-400 transition-all duration-300 hover:text-orange-400"
              >
                <span>Categories</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/#about"
                className="group flex items-center justify-between text-gray-400 transition-all duration-300 hover:text-orange-400"
              >
                <span>About Us</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/#contact"
                className="group flex items-center justify-between text-gray-400 transition-all duration-300 hover:text-orange-400"
              >
                <span>Contact</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>

          </div>

          {/* ===================================== */}
          {/* Premium Categories */}
          {/* ===================================== */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Premium Categories
            </h3>

            <div className="mt-8 flex flex-col gap-5">

              <Link
                href="/#gallery"
                className="group flex items-center justify-between text-gray-400 transition hover:text-orange-400"
              >
                <span>VIP Number Plates</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/#gallery"
                className="group flex items-center justify-between text-gray-400 transition hover:text-orange-400"
              >
                <span>Car Number Plates</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/#gallery"
                className="group flex items-center justify-between text-gray-400 transition hover:text-orange-400"
              >
                <span>Bike Number Plates</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/#gallery"
                className="group flex items-center justify-between text-gray-400 transition hover:text-orange-400"
              >
                <span>Honey Comb Plates</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/#gallery"
                className="group flex items-center justify-between text-gray-400 transition hover:text-orange-400"
              >
                <span>Luxury Collections</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>

          </div>

        </div>

        {/* ===================================== */}
        {/* Bottom Footer */}
        {/* ===================================== */}

        <div className="mt-16 border-t border-white/10 pt-8">
        
                  <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            {/* Copyright */}

            <div>

              <h4 className="text-lg font-semibold text-white">
                © {new Date().getFullYear()} F1 Number Plates
              </h4>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                All Rights Reserved. Crafted with precision for luxury
                automobile enthusiasts.
              </p>

            </div>

            {/* Footer Links */}

            <div className="flex flex-wrap items-center justify-center gap-6">

              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 transition hover:text-orange-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-gray-400 transition hover:text-orange-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="text-sm text-gray-400 transition hover:text-orange-400"
              >
                Contact
              </Link>

            </div>

            {/* Back To Top */}

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500 to-yellow-500 shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-2 hover:scale-110"
            >

              <ArrowUpRight
                size={24}
                className="-rotate-45 text-white transition-transform duration-300 group-hover:-translate-y-1"
              />

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}