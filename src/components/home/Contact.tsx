"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030303] py-24"
    >
      {/* ======================================= */}
      {/* Premium Background */}
      {/* ======================================= */} 

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-yellow-500/10 blur-[170px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#090909] to-[#020202]" />

      </div>

      {/* ======================================= */}
      {/* Container */}
      {/* ======================================= */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8"> 

        {/* ======================================= */}
        {/* Hero */}
        {/* ======================================= */} 

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-10 md:py-32 text-center">

          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-orange-300 backdrop-blur-xl">

            CONTACT US

          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">

            Let&apos;s Build Your

            <span className="mt-2 block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">

              Premium Number Plate

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">

            Connect with our premium support team for luxury
            registration numbers, exclusive VIP plates and
            personalised assistance.

          </p>

        </div>

        {/* ======================================= */}
        {/* Premium Support Card */}
        {/* ======================================= */}

        <div className="mt-8">

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-8 lg:p-14">

            {/* Decorative Glow */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

            <div className="relative z-10">

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                <span className="inline-flex rounded-full bg-orange-500/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-300">

                  Premium Support

                </span>

                <h3 className="mt-6 text-3xl font-black text-white sm:text-4xl">

                  We Are Ready To Help You

                </h3>

                <p className="mt-5 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">

                  Our premium customer support team is always
                  available to help you find the perfect number
                  plate, answer your questions and guide you
                  through every step.

                </p>

              </div>

              {/* Cards */}

              <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                {/* Phone */}
                <a
                  href="tel:+919048908003"
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_25px_70px_rgba(249,115,22,0.25)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500/25">
                    <Phone size={30} />
                  </div>

                  <h4 className="mt-6 text-2xl font-bold text-white">
                    Call Us
                  </h4> 

                  <p className="mt-3 leading-7 text-gray-400">
                    Speak directly with our premium support team.
                  </p>

                  <div className="mt-6 font-semibold text-orange-300">
                    +91 9048 908003
                  </div>
                </a>

                {/* WhatsApp */}

                <a
                  href="https://wa.me/919048908003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_25px_70px_rgba(34,197,94,0.25)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/15 text-green-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500/25">
                    <MessageCircle size={30} />
                  </div>

                  <h4 className="mt-6 text-2xl font-bold text-white">
                    WhatsApp
                  </h4>

                  <p className="mt-3 leading-7 text-gray-400">
                    Chat instantly with our team and receive quick
                    assistance.
                  </p>

                  <div className="mt-6 font-semibold text-green-300">
                    Start Chat →
                  </div>
                </a>

                {/* Email */}

                <a
                  href="mailto:info@f1numberplates.2017@gmail.com"
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_25px_70px_rgba(59,130,246,0.25)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/25">
                    <Mail size={30} />
                  </div>

                  <h4 className="mt-6 text-2xl font-bold text-white">
                    Email
                  </h4>

                  <p className="mt-3 leading-7 text-gray-400">
                    Send your enquiry and we will respond as soon as
                    possible.
                  </p>

                  <div className="mt-6 break-all font-semibold text-blue-300">
                    f1numberplates.2017@gmail.com
                  </div>
                </a>

                {/* Office */}

                <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_25px_70px_rgba(249,115,22,0.25)]">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500/25">
                    <MapPin size={30} />
                  </div>

                  <h4 className="mt-6 text-2xl font-bold text-white">
                    Office
                  </h4>

                  <p className="mt-3 leading-8 text-gray-300">
                    F1 Number Plates
                    <br />
                    Malappuram, Kerala
                    <br />
                    India
                  </p>

                </div>

                {/* Working Hours */}

                <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40 hover:shadow-[0_25px_70px_rgba(234,179,8,0.25)]">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/15 text-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-500/25">
                    <Clock size={30} />
                  </div>

                  <h4 className="mt-6 text-2xl font-bold text-white">
                    Working Hours
                  </h4>

                  <p className="mt-3 leading-8 text-gray-300">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>

                </div>

                {/* Premium Service */}

                <div className="group rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/15 to-yellow-500/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400 hover:shadow-[0_25px_70px_rgba(249,115,22,0.35)]">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20 text-3xl transition-all duration-300 group-hover:scale-110">
                    ✨
                  </div>

                  <h4 className="mt-6 text-2xl font-bold text-white">
                    Premium Service
                  </h4>

                  <p className="mt-3 leading-8 text-gray-300">
                    Exclusive luxury number plates, verified listings,
                    secure transactions and dedicated premium customer
                    support.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ======================================= */}
        {/* Premium CTA */}
        {/* ======================================= */}

        <div className="relative mt-14 overflow-hidden rounded-[40px] border border-orange-500/20 bg-gradient-to-br from-[#090909] via-[#111111] to-[#050505] p-8 shadow-[0_35px_120px_rgba(0,0,0,0.55)] lg:p-16">

          {/* Glow */}

          <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[150px]" />

          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[150px]" />
 
          <div className="relative z-10 mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-300">
              Luxury Collection
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">

              Ready To Own

              <span className="mt-3 block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">

                Your Dream Number Plate?

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

              Discover premium VIP registration numbers with
              verified listings, transparent pricing and a luxury
              buying experience from start to finish.

            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              <a
                href="https://wa.me/919048908003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 px-10 py-5 text-lg font-bold text-white shadow-[0_20px_60px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
              >
                <MessageCircle className="mr-3" size={22} />
                Chat On WhatsApp
              </a>

              <a
                href="tel:+919048908003"
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/10"
              >
                <Phone className="mr-3" size={22} />
                Call Now
              </a>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl">
                ✓ Premium Collection
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl">
                ✓ Verified Number Plates
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl">
                ✓ Premium Support
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}