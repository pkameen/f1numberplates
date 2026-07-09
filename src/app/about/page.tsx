"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      <Navbar />

      {/* =============================== */}
      {/* Premium Hero Section */}
      {/* =============================== */}

      <section className="relative isolate overflow-hidden">

        {/* Background Effects */}

        <div className="absolute inset-0">

          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[150px]" />

          <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-yellow-400/5 blur-[120px]" />

          <div className="absolute right-0 top-20 h-[220px] w-[220px] rounded-full bg-white/5 blur-[100px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,.08),transparent_55%)]" />

        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center lg:py-36">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">

            About F1 Number Plates

          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight md:text-6xl xl:text-7xl">

            Luxury Number Plates

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              Crafted for Perfection

            </span>

          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            F1 Number Plates is a premium destination for luxury,
            custom and high-quality number plates. We combine
            precision craftsmanship, premium materials and elegant
            design to create number plates that stand out on every
            vehicle.

          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/products"
              className="rounded-2xl bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
            >
              Explore Collection
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-yellow-500/30 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-400 hover:bg-white/10"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      {/* =============================== */}
      {/* Company Story */}
      {/* =============================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">

              Our Story

            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight">

              Driven by Quality.

              <br />

              Inspired by Excellence.

            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">

              Since our beginning, our vision has been to redefine
              premium number plates through exceptional quality,
              elegant craftsmanship and attention to detail.

            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">

              Every plate is produced using premium-grade materials,
              modern manufacturing technology and rigorous quality
              inspection to ensure durability, precision and a
              luxurious appearance.

            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">

              Today, F1 Number Plates proudly serves customers
              looking for stylish, reliable and premium vehicle
              identification solutions across multiple categories.

            </p>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-yellow-500/20 to-transparent blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-white/5 backdrop-blur-xl p-10">

              <div className="grid gap-8 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

                  <h3 className="text-5xl font-black text-yellow-400">
                    10+
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    Years of Industry Experience
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

                  <h3 className="text-5xl font-black text-yellow-400">
                    5K+
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    Premium Plates Delivered
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

                  <h3 className="text-5xl font-black text-yellow-400">
                    100%
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    Quality Checked Products
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

                  <h3 className="text-5xl font-black text-yellow-400">
                    24/7
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    Customer Assistance
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section> 

            {/* =============================== */}
      {/* Why Choose F1 Number Plates */}
      {/* =============================== */}

      <section className="relative py-24">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/[0.03] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Section Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">

              Why Choose Us

            </span>

            <h2 className="mt-8 text-4xl font-black md:text-5xl">

              Premium Quality.

              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                Trusted by Thousands.

              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">

              Every number plate is carefully designed using premium
              materials, precision engineering and luxury finishing
              to deliver unmatched quality and elegance.

            </p>

          </div>

          {/* Feature Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Card 1 */}

            <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl">
                🏆
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Premium Quality
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Manufactured with premium-grade acrylic,
                reflective materials and luxury finishing
                for long-lasting durability.
              </p>

            </div>

            {/* Card 2 */}

            <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl">
                ⚡
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Fast Delivery
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Quick manufacturing and secure delivery
                ensure your premium number plates arrive
                safely and on time.
              </p>

            </div>

            {/* Card 3 */}

            <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl">
                💎
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Luxury Finish
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Elegant black, chrome and premium gold
                finishing options to complement every
                luxury vehicle.
              </p>

            </div>

            {/* Card 4 */}

            <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl">
                🛡️
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Durable Materials
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Built to withstand harsh weather,
                scratches and fading while maintaining
                a premium appearance.
              </p>

            </div>

            {/* Card 5 */}

            <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl">
                🎨
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Custom Designs
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Personalized number plates designed
                according to your style while maintaining
                premium standards.
              </p>

            </div>

            {/* Card 6 */}

            <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl">
                🤝
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Trusted Support
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Our dedicated support team is always
                ready to assist before and after every
                purchase.
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* =============================== */}
      {/* Mission • Vision • Values */}
      {/* =============================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Our Foundation
          </span>

          <h2 className="mt-8 text-4xl font-black md:text-5xl">

            Building Trust Through

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              Excellence & Innovation

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">

            Everything we create is guided by quality,
            innovation and customer satisfaction.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Mission */}

          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-yellow-500/40">

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500/10 text-5xl">
                🚀
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">

                To provide premium-quality number plates
                with outstanding craftsmanship, innovative
                manufacturing and exceptional customer
                service while maintaining international
                quality standards.

              </p>

            </div>

          </div>

          {/* Vision */}

          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-yellow-500/40">

            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500/10 text-5xl">
                👑
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">

                To become India is most trusted premium
                number plate brand by delivering innovative
                products that combine luxury aesthetics,
                durability and superior performance.

              </p>

            </div>

          </div>

          {/* Values */}

          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-yellow-500/40">

            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500/10 text-5xl">
                ⭐
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                Our Values
              </h3>

              <ul className="mt-6 space-y-4 text-zinc-400">

                <li>✓ Premium Quality Products</li>

                <li>✓ Honest & Transparent Service</li>

                <li>✓ Customer Satisfaction First</li>

                <li>✓ Continuous Innovation</li>

                <li>✓ Reliable After-Sales Support</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* =============================== */}
      {/* Premium Achievements */}
      {/* =============================== */}

      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-10 text-center backdrop-blur-xl">

              <h3 className="text-6xl font-black text-yellow-400">
                5K+
              </h3>

              <p className="mt-4 text-lg text-zinc-400">
                Happy Customers
              </p>

            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-10 text-center backdrop-blur-xl">

              <h3 className="text-6xl font-black text-yellow-400">
                98%
              </h3>

              <p className="mt-4 text-lg text-zinc-400">
                Customer Satisfaction
              </p>

            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-10 text-center backdrop-blur-xl">

              <h3 className="text-6xl font-black text-yellow-400">
                24/7
              </h3>

              <p className="mt-4 text-lg text-zinc-400">
                Customer Support
              </p>

            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-10 text-center backdrop-blur-xl">

              <h3 className="text-6xl font-black text-yellow-400">
                100%
              </h3>

              <p className="mt-4 text-lg text-zinc-400">
                Premium Finish
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* =============================== */}
      {/* Premium Call To Action */}
      {/* =============================== */}

      <section className="relative overflow-hidden py-28">

        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10" />

        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="overflow-hidden rounded-[40px] border border-yellow-500/20 bg-white/5 p-12 text-center backdrop-blur-2xl shadow-[0_0_80px_rgba(234,179,8,0.08)] md:p-20">

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">

              Ready To Upgrade?

            </span>

            <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">

              Drive With

              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                Premium Number Plates

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">

              Experience premium craftsmanship, elegant designs,
              long-lasting durability and luxury finishing for
              every vehicle. Choose F1 Number Plates and make
              your vehicle stand out.

            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <Link
                href="/products"
                className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-10 py-5 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(234,179,8,.35)]"
              >
                Browse Collection
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-10 py-5 font-semibold text-white backdrop-blur-xl transition hover:border-yellow-500/40 hover:bg-yellow-500/10"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />
 
    </main>
  );
}
