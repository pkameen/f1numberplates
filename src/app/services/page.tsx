"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Navbar />

      {/* =================================== */}
      {/* Hero Section */}
      {/* =================================== */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">

            Premium Services

          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            Premium Number Plate

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              Solutions

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">

            We specialize in manufacturing premium quality
            number plates with luxury finishing, superior
            durability and modern designs for every type
            of vehicle.

          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">

            <Link
              href="/products"
              className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-10 py-5 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(234,179,8,.35)]"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 font-semibold backdrop-blur-xl transition hover:border-yellow-500/40 hover:bg-yellow-500/10"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

            {/* =================================== */}
      {/* Premium Services */}
      {/* =================================== */}

      <section className="relative py-28">

        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

              Our Services

            </span>

            <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">

              Crafted For Every

              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                Vehicle Owner

              </span>

            </h2>

            <p className="mt-6 text-lg leading-9 text-zinc-400">

              From premium luxury number plates to custom vehicle
              branding, we deliver exceptional quality backed by
              modern manufacturing technology.

            </p>

          </div>

          {/* Services Grid */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Card */}

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,.15)]">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-5xl">

                🚘

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                Premium Car Plates

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                High-quality premium number plates with elegant
                finishing, reflective coating and superior durability.

              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,.15)]">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-5xl">

                🏍️

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                Premium Bike Plates

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                Stylish and durable bike number plates designed
                with premium materials and long-lasting quality.

              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,.15)]">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-5xl">

                ✨

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                Custom Designs

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                Personalized premium number plates crafted
                according to your vehicle style and preference.

              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,.15)]">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-5xl">

                ⚡

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                Fast Production

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                Advanced manufacturing process ensuring
                quick turnaround without compromising quality.

              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,.15)]">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-5xl">

                🛡️

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                Premium Materials

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                Manufactured using weather-resistant materials
                for maximum strength and long-term performance.

              </p>

            </div>

            {/* Card */}

            <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,.15)]">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-5xl">

                🤝

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                Customer Support

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                Dedicated after-sales support with professional
                assistance for every customer requirement.

              </p>

            </div>

          </div>

        </div>

      </section>

            {/* =================================== */}
      {/* Why Choose Us + Working Process */}
      {/* =================================== */}

      <section className="relative py-28">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}

          <div>

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

              Why Choose Us

            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">

              Luxury Craftsmanship

              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                Trusted By Customers

              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">

              Every premium number plate is manufactured with
              precision engineering, premium materials and modern
              technology to deliver a luxurious appearance and
              exceptional durability.

            </p>

            <div className="mt-12 space-y-6">

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-xl font-bold text-black">

                  ✓

                </div>

                <div>

                  <h4 className="text-xl font-bold text-white">

                    Premium Quality Materials

                  </h4>

                  <p className="mt-2 text-zinc-400">

                    Manufactured using high-grade reflective
                    aluminium and premium acrylic finishes.

                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-xl font-bold text-black">

                  ✓

                </div>

                <div>

                  <h4 className="text-xl font-bold text-white">

                    Modern Manufacturing

                  </h4>

                  <p className="mt-2 text-zinc-400">

                    Precision laser cutting and advanced printing
                    technology for outstanding finishing.

                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-xl font-bold text-black">

                  ✓

                </div>

                <div>

                  <h4 className="text-xl font-bold text-white">

                    Fast Delivery

                  </h4>

                  <p className="mt-2 text-zinc-400">

                    Efficient production workflow ensures quick
                    processing and timely delivery.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">

              Working Process

            </span>

            <div className="mt-10 space-y-8">

              {/* Step */}

              <div className="flex gap-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-2xl font-bold text-black">

                  01

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">

                    Choose Your Plate

                  </h3>

                  <p className="mt-2 text-zinc-400 leading-8">

                    Browse our premium collection and select
                    the perfect number plate.

                  </p>

                </div>

              </div>

              {/* Step */}

              <div className="flex gap-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-2xl font-bold text-black">

                  02

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">

                    Manufacturing

                  </h3>

                  <p className="mt-2 text-zinc-400 leading-8">

                    Our experts manufacture your plate using
                    premium materials and precision equipment.

                  </p>

                </div>

              </div>

              {/* Step */}

              <div className="flex gap-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-2xl font-bold text-black">

                  03

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">

                    Quality Inspection

                  </h3>

                  <p className="mt-2 text-zinc-400 leading-8">

                    Every number plate undergoes strict quality
                    checks before dispatch.

                  </p>

                </div>

              </div>

              {/* Step */}

              <div className="flex gap-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-2xl font-bold text-black">

                  04

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">

                    Fast Delivery

                  </h3>

                  <p className="mt-2 text-zinc-400 leading-8">

                    Secure packaging and fast delivery to your
                    doorstep.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* =================================== */}
      {/* Premium CTA */}
      {/* =================================== */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10" />

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="overflow-hidden rounded-[40px] border border-yellow-500/20 bg-white/5 p-10 backdrop-blur-2xl md:p-20">

            <div className="mx-auto max-w-4xl text-center">

              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

                Let us Work Together

              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">

                Ready To Upgrade

                <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                  Your Vehicle?

                </span>

              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">

                Experience premium craftsmanship with high-quality
                number plates manufactured using advanced technology,
                luxury materials and precision finishing.

              </p>

              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

                <Link
                  href="/products"
                  className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-10 py-5 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(234,179,8,.35)]"
                >
                  Browse Products
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-yellow-500/40 hover:bg-yellow-500/10"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================== */}
      {/* Service Highlights */}
      {/* =================================== */}

      <section className="border-y border-white/10 bg-[#090909] py-16">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-2 xl:grid-cols-4">

          <div>

            <h3 className="text-5xl font-black text-yellow-400">

              5000+

            </h3>

            <p className="mt-3 text-zinc-400">

              Premium Plates Delivered

            </p>

          </div>

          <div>

            <h3 className="text-5xl font-black text-yellow-400">

              100%

            </h3>

            <p className="mt-3 text-zinc-400">

              Premium Quality Materials

            </p>

          </div>

          <div>

            <h3 className="text-5xl font-black text-yellow-400">

              24/7

            </h3>

            <p className="mt-3 text-zinc-400">

              Customer Support

            </p>

          </div>

          <div>

            <h3 className="text-5xl font-black text-yellow-400">

              ★★★★★

            </h3>

            <p className="mt-3 text-zinc-400">

              Trusted Customer Reviews

            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}