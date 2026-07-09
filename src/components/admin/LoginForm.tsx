"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, Star } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("adminLoggedIn");

    if (logged === "true") {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    await new Promise((r) => setTimeout(r, 900));

    const ADMIN_ID = "F1ADMIN";
    const ADMIN_PASSWORD = "F1@2026";

    if (
      adminId === ADMIN_ID &&
      password === ADMIN_PASSWORD
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid Admin ID or Password");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff08,transparent_55%)]" />

      </div>

      <div className="relative z-10 flex min-h-screen">

        {/* Left Branding */}

        <div className="hidden lg:flex w-1/2 items-center justify-center px-16">

          <div className="max-w-xl">

            <div className="mb-8 flex items-center gap-5">

              <div className="relative h-20 w-20 rounded-3xl border border-yellow-500/30 bg-white/5 backdrop-blur-xl">

                <Image
                  src="/assets/logo/company-logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-4"
                  priority
                />

              </div>

              <div>

                <h1 className="text-4xl font-black tracking-wider text-white">
                  F1 NUMBER PLATES
                </h1>

              </div>

            </div>

            <h2 className="text-5xl font-black leading-tight text-white">

              Premium <span className="text-yellow-400">Admin</span>

              <br />

              Control Panel

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">

              Securely manage premium number plate listings,
              featured collections, pricing, images and inventory
              from one powerful dashboard.

            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-yellow-500/10 p-4">

                  <ShieldCheck className="h-7 w-7 text-yellow-400" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Enterprise Security
                  </h3>

                  <p className="text-gray-400">
                    Protected admin authentication.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-yellow-500/10 p-4">

                  <Lock className="h-7 w-7 text-yellow-400" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Private Access
                  </h3>

                  <p className="text-gray-400">
                    Only authorized administrators can login.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-yellow-500/10 p-4">

                  <Star className="h-7 w-7 text-yellow-400" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Premium Experience
                  </h3>

                  <p className="text-gray-400">
                    Designed for luxury vehicle plate management.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

                {/* ================= MOBILE + LOGIN SECTION ================= */}

        <div className="flex w-full items-center justify-center px-5 py-8 sm:px-8 lg:w-1/2">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}

            <div className="mb-10 flex flex-col items-center lg:hidden">

              <div className="relative mb-5 h-24 w-24 rounded-3xl border border-yellow-500/30 bg-white/5 backdrop-blur-xl">

                <Image
                  src="/assets/logo/company-logo.png"
                  alt="Logo"
                  fill
                  priority
                  className="object-contain p-4"
                />

              </div>

              <h2 className="text-2xl font-black tracking-wide text-white">
                F1 NUMBER PLATES
              </h2>

              <p className="mt-2 uppercase tracking-[0.35em] text-yellow-400 text-xs">
                Premium Admin Panel
              </p>

            </div>

            {/* Login Card */}

            <div className="
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-3xl
            shadow-[0_25px_80px_rgba(0,0,0,.45)]
            transition-all
            duration-500
            hover:scale-[1.02]
            hover:border-yellow-500/30
            hover:shadow-[0_35px_90px_rgba(255,193,7,.15)]
            ">

              <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                Secure Login
              </span>

              <h2 className="mt-6 text-4xl font-black text-white">
                Admin Login
              </h2>

              <p className="mt-3 text-gray-400">
                Login to access the Premium Number Plate Dashboard.
              </p>

              {error && (
                <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >

                {/* Admin ID */}

                <div>

                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Admin ID
                  </label>

                  <input
                    type="text"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    placeholder="Enter Admin ID"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                  />

                </div>

                {/* Password */}

                <div>

                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Password
                  </label>

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                  />

                </div>

                <div className="flex items-center justify-between text-sm">

                  <label className="flex items-center gap-2 text-gray-400">

                    <input
                      type="checkbox"
                      className="accent-yellow-500"
                    />

                    Remember Me

                  </label>

                  <span className="text-yellow-400">
                    Secure Access
                  </span>

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                  group
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-yellow-400
                  via-yellow-500
                  to-orange-500
                  text-lg
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(255,193,7,.35)]
                  active:scale-95
                  disabled:opacity-60
                  "
                >
                  {loading ? "Signing In..." : "Login"}
                </button>

              </form>
            </div>

                        {/* Footer */}

            <div className="mt-8 border-t border-white/10 pt-6">

              <p className="text-center text-sm leading-7 text-gray-500">

                © 2026 F1 Number Plates.

                <span className="block text-yellow-500">

                  Premium Administration System

                </span>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}