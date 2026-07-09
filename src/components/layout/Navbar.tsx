"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { MenuIcon } from "@/components/icons/MenuIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/products",
      label: "Products",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500

          ${
            isScrolled
              ? "border-b border-[#d4af37]/10 bg-[#050505]/90 backdrop-blur-3xl shadow-[0_12px_40px_rgba(0,0,0,.45)]"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[74px]
            max-w-7xl
            items-center
            justify-between

            px-5

            sm:px-8

            lg:h-[90px]
          "
        >
          {/* ===========================
               Premium Brand Logo
          ============================ */}

          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div
              className="
                relative

                h-12
                w-12

                overflow-hidden

                rounded-2xl

                border

                border-[#d4af37]/25

                bg-gradient-to-br
                from-[#1b1b1b]
                to-[#090909]

                shadow-[0_0_35px_rgba(212,175,55,.12)]

                transition-all
                duration-300

                group-hover:border-[#d4af37]

                group-hover:shadow-[0_0_45px_rgba(212,175,55,.30)]
              "
            >
              <Image
                src="/assets/logo/company-logo.png"
                alt="F1 Number Plates"
                fill
                priority
                className="object-contain p-2"
              />
            </div>

            <div className="leading-none">
              <h1
                className="
                  text-[15px]

                  font-black

                  uppercase

                  tracking-[0.20em]

                  text-white

                  sm:text-[18px]
                "
              >
                F1 NUMBER
              </h1>

              <h2
                className="
                  mt-1

                  text-[15px]

                  font-black

                  uppercase

                  tracking-[0.20em]

                  text-white

                  sm:text-[18px]
                "
              >
                PLATES
              </h2>

              <p
                className="
                  mt-1.5

                  text-[9px]

                  uppercase

                  tracking-[0.38em]

                  text-[#d4af37]

                  sm:text-[10px]
                "
              >
                Premium Collection
              </p>
            </div>
          </Link>

                    {/* ===========================
              Desktop Navigation
          ============================ */}

          <div className="hidden lg:flex items-center gap-12">

            <nav className="flex items-center gap-8">

              {navLinks.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    relative

                    text-[14px]

                    font-medium

                    uppercase

                    tracking-[0.15em]

                    text-white/80

                    transition-all
                    duration-300

                    hover:text-[#d4af37]

                    after:absolute
                    after:left-0
                    after:-bottom-2

                    after:h-[2px]
                    after:w-0

                    after:rounded-full

                    after:bg-[#d4af37]

                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  {link.label}
                </Link>

              ))}

            </nav>

            {/* Premium Admin Button */}

            <Link
              href="/admin/login"
              className="
                group

                relative

                overflow-hidden

                rounded-xl

                border

                border-[#d4af37]/40

                bg-gradient-to-r

                from-[#151515]
                to-[#0b0b0b]

                px-7
                py-3

                text-[13px]

                font-semibold

                uppercase

                tracking-[0.18em]

                text-[#d4af37]

                transition-all
                duration-300

                hover:border-[#d4af37]

                hover:text-black

                hover:shadow-[0_0_35px_rgba(212,175,55,.30)]
              "
            >

              <span
                className="
                  absolute

                  inset-0

                  -translate-x-full

                  bg-gradient-to-r

                  from-[#d4af37]
                  via-[#f4d26d]
                  to-[#d4af37]

                  transition-transform

                  duration-500

                  group-hover:translate-x-0
                "
              />

              <span className="relative z-10">
                Admin Login
              </span>

            </Link>

          </div>

          {/* ===========================
              Mobile Menu Button
          ============================ */}

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              border

              border-[#d4af37]/20

              bg-white/5

              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-[#d4af37]

              hover:bg-[#d4af37]/10

              lg:hidden
            "
          >

            <MenuIcon
              className="
                h-7
                w-7

                text-white
              "
            />

          </button>

        </div>

      </header>

            {/* ==========================================
          Premium Mobile Drawer
      =========================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[60]
          lg:hidden

          transition-all
          duration-500

          ${
            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >

        {/* Background */}

        <div
          onClick={() => setIsMenuOpen(false)}
          className={`
            absolute
            inset-0

            bg-black/80

            backdrop-blur-xl

            transition-opacity
            duration-500

            ${
              isMenuOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* Drawer */}

        <div
          className={`
            absolute

            right-0
            top-0

            flex
            h-full
            w-[88%]
            max-w-[390px]

            flex-col

            bg-[#050505]

            border-l
            border-[#d4af37]/15

            shadow-[-20px_0_60px_rgba(0,0,0,.65)]

            transition-transform
            duration-500

            ${
              isMenuOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >

          {/* Glow */}

          <div className="absolute -top-28 right-0 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-[120px]" />

          {/* Header */}

          <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-6">

            <div className="flex items-center gap-3">

              <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-[#d4af37]/30 bg-black">

                <Image
                  src="/assets/logo/company-logo.png"
                  alt="F1"
                  fill
                  className="object-contain p-2"
                />

              </div>

              <div>

                <h3 className="text-base font-bold tracking-[0.18em] text-white uppercase">
                  F1 PLATES
                </h3>

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]">
                  Premium
                </p>

              </div>

            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-xl

                border
                border-white/10

                bg-white/5

                transition-all

                hover:border-[#d4af37]
              "
            >

              <CloseIcon className="h-6 w-6 text-white" />

            </button>

          </div>

          {/* Navigation */}

          <nav className="relative flex-1 px-6 py-8">

            <div className="space-y-3">

              {navLinks.map((link, index) => (

                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    group

                    flex

                    items-center
                    justify-between

                    rounded-2xl

                    border

                    border-white/5

                    bg-white/[0.03]

                    px-5
                    py-5

                    transition-all
                    duration-300

                    hover:border-[#d4af37]/30

                    hover:bg-[#d4af37]/5
                  "
                >

                  <span className="text-lg font-medium tracking-wide text-white group-hover:text-[#d4af37]">
                    {link.label}
                  </span>

                  <span className="text-xs font-bold text-[#d4af37]/60">
                    0{index + 1}
                  </span>

                </Link>

              ))}

            </div>

            {/* Admin */}

            <Link
              href="/admin/login"
              onClick={() => setIsMenuOpen(false)}
              className="
                mt-8

                flex

                justify-center

                rounded-2xl

                bg-gradient-to-r

                from-[#d4af37]
                to-[#f4cf62]

                px-6
                py-4

                text-sm

                font-bold

                uppercase

                tracking-[0.18em]

                text-black

                shadow-[0_10px_35px_rgba(212,175,55,.30)]
              "
            >
              Admin Login
            </Link>

          </nav>

                    {/* Bottom Brand */}

          <div className="border-t border-white/10 px-6 py-6">

            <div className="rounded-2xl border border-[#d4af37]/15 bg-gradient-to-br from-[#141414] to-[#090909] p-5">

              <div className="flex items-center gap-3">

                <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-[#d4af37]/25">

                  <Image
                    src="/assets/logo/company-logo.png"
                    alt="F1 Number Plates"
                    fill
                    className="object-contain p-2"
                  />

                </div>

                <div>

                  <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                    F1 NUMBER PLATES
                  </h4>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[#d4af37]">
                    Premium Collection
                  </p>

                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Luxury Number Plates Marketplace with verified premium
                collections and trusted customer support.
              </p>

            </div>

            {/* Copyright */}

            <div className="mt-6 text-center">

              <p className="text-xs tracking-[0.15em] text-gray-500">
                © {new Date().getFullYear()} F1 NUMBER PLATES
              </p>

            </div>

          </div>

        </div>

      </div>

    </>
  );
};

export default Navbar;