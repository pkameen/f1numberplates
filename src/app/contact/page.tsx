"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar /> 

      {/* ================================= */}
      {/* Hero */}
      {/* ================================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />

        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-20 md:py-32 text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">

            Contact Us

          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            Let us Build Something

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

              Premium Together

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">

            Whether you are looking for premium number plates,
            wholesale orders, dealership enquiries or custom
            manufacturing, our team is always ready to assist you.

          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">

            <Link
              href="/products"
              className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-10 py-5 font-bold text-black transition hover:scale-105"
            >
              Browse Products
            </Link>

            <Link
              href="/services"
              className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 font-semibold transition hover:border-yellow-500/40 hover:bg-yellow-500/10"
            >
              Our Services
            </Link>

          </div>

        </div>

      </section>

      {/* ================================= */}
      {/* Contact Information + Contact Form */}
      {/* ================================= */}

      <section className="relative py-12 md:py-20">

        <div
        className="
        mx-auto
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8

        grid

        grid-cols-1

        lg:grid-cols-2

        gap-8
        lg:gap-16

        items-start
        "
        >

          {/* ================================= */}
          {/* Left Side */}
          {/* ================================= */}

          <div className="
          relative

          overflow-hidden

          rounded-[28px]

          lg:rounded-[40px]

          border

          border-yellow-500/15

          bg-gradient-to-b

          from-white/8

          to-white/5

          backdrop-blur-3xl

          p-6

          md:p-8

          lg:p-10

          shadow-[0_0_60px_rgba(234,179,8,.06)]
          ">

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

              Get In Touch

            </span>

            <h2 className="mt-8 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-6xl">

              We do Love To

              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                Hear From You

              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">

              Contact our premium support team for dealership
              enquiries, wholesale orders, customized number
              plates or any assistance regarding our products.

            </p>

            <div className="mt-12 space-y-6">

              {/* Card */}

              <div className="
              group

              relative

              overflow-hidden

              flex

              items-center

              gap-4

              rounded-3xl

              border

              border-white/10

              bg-black/20

              backdrop-blur-xl

              p-5

              transition-all

              duration-500

              hover:border-yellow-500/40

              hover:-translate-y-1

              hover:shadow-[0_0_40px_rgba(234,179,8,.12)]
              ">

                <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 shadow-lg items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-3xl">

                  📞

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">

                    Phone Number

                  </h3>

                  <p className="mt-2 text-zinc-400">

                    +91 904 8908 003

                  </p>

                  <p className="text-zinc-500 text-sm mt-1">

                    Mon - Sat : 9 AM - 8 PM

                  </p>

                </div>

              </div>

              {/* Card */}

              <div className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-yellow-500/40 hover:bg-yellow-500/5">

                <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 shadow-lg items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-3xl">

                  ✉️

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">

                    Email Address

                  </h3>

                  <p className="mt-2 break-all font-semibold text-zinc-400">

                    f1numberplates.2017@gmail.com
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">

                    We reply within 24 hours.

                  </p>

                </div>

              </div>

              {/* Card */}

              <div className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-yellow-500/40 hover:bg-yellow-500/5">

                <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 shadow-lg items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-3xl">

                  📍

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">

                    Office Address

                  </h3>

                  <p className="mt-2 text-zinc-400 leading-8">

                    F1 Number Plates<br />

                    Malappuram, Kerala, India

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ================================= */}
          {/* Right Side */}
          {/* ================================= */}

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-5 md:p-8 backdrop-blur-2xl">

            <h2 className="text-3xl font-black text-white">

              Send Us A Message

            </h2>

            <p className="mt-3 text-zinc-400">

              Fill out the form below and our team will
              contact you shortly.

            </p>

            <form className="mt-10 space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3 md:py-4 text-white outline-none transition focus:border-yellow-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3 md:py-4 text-white outline-none transition focus:border-yellow-500"
                />

              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-3 md:py-4 text-white outline-none transition focus:border-yellow-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-3 md:py-4 text-white outline-none transition focus:border-yellow-500"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-3 md:py-4 text-white outline-none transition focus:border-yellow-500"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 py-5 text-lg font-bold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(234,179,8,.35)]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* ================================= */}
      {/* Location + FAQ */}
      {/* ================================= */}

      <section className="relative py-10">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">

          {/* ================================= */}
          {/* Location */}
          {/* ================================= */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

              Visit Our Office  

            </span>

            <h2 className="mt-8 text-4xl font-black text-white">

              Our Location

            </h2>

            <p className="mt-6 text-lg leading-9 text-zinc-400">

              You are always welcome to visit our showroom and
              manufacturing facility. Meet our experts, explore
              premium number plates and discuss your requirements.

            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-black">

                  🏢

                </div>

                <p className="text-zinc-300">

                  F1 Number Plates, Malappuram, Kerala, India

                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-black">

                  🕘

                </div>

                <p className="text-zinc-300">

                  Monday - Saturday | 9:00 AM - 7:00 PM

                </p>

              </div>

            </div>

          </div>

          {/* ================================= */}
          {/* FAQ */}
          {/* ================================= */}

          <div>

            <h2 className="mt-8 text-4xl font-black text-white">

              Need Help?

            </h2>

            <p className="mt-6 text-lg leading-9 text-zinc-400">

              Here are some of the most common questions from
              our customers.

            </p>

            <div className="mt-12 space-y-5">

              {/* FAQ */}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

                <h3 className="text-xl font-bold text-white">

                  Do you provide custom number plates?

                </h3>

                <p className="mt-4 leading-8 text-zinc-400">

                  Yes. We manufacture premium custom number
                  plates according to your requirements while
                  following applicable standards.

                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

                <h3 className="text-xl font-bold text-white">

                  How long does delivery take?

                </h3>

                <p className="mt-4 leading-8 text-zinc-400">

                  Most orders are processed quickly and shipped
                  within a few business days, depending on the
                  customization required.

                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

                <h3 className="text-xl font-bold text-white">

                  Do you offer wholesale pricing?

                </h3>

                <p className="mt-4 leading-8 text-zinc-400">

                  Yes. We provide dealership and wholesale
                  pricing for bulk orders and long-term business
                  partnerships.

                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

                <h3 className="text-xl font-bold text-white">

                  Can I contact support anytime?

                </h3>

                <p className="mt-4 leading-8 text-zinc-400">

                  Absolutely. Our support team is always ready
                  to assist you with enquiries before and after
                  your purchase.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================= */}
      {/* Premium CTA */}
      {/* ================================= */}

      <section className="relative overflow-hidden py-16 md:py-28">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-6">

          <div className="overflow-hidden rounded-[28px] md:rounded-[40px] border border-yellow-500/20 bg-white/5 p-6 md:p-20 backdrop-blur-2xl">

            <div className="mx-auto max-w-4xl text-center">

              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

                Premium Support

              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white md:mt-8 md:text-6xl">

                Ready To Get

                <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">

                  Started?

                </span>

              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">

                Whether you are looking for a premium number plate,
                dealership opportunities or wholesale enquiries,
                our team is always available to help you.

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

                <Link
                  href="/products"
                  className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-4 font-bold text-center text-black transition hover:scale-105"
                >
                  Explore Products
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center font-semibold text-white transition hover:border-yellow-500/40 hover:bg-yellow-500/10"
                >
                  Our Services
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================= */}
      {/* Company Highlights */}
      {/* ================================= */}

      <section className="border-y border-white/10 bg-[#090909] py-16">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-2 xl:grid-cols-4">

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

              Premium Material Quality

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

              Customer Satisfaction

            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}