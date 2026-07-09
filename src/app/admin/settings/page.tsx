"use client";

export default function SettingsPage() {

  return (

    <main className="min-h-screen bg-[#050505]">

        {/* ====================================== */}
        {/* Premium Header */}
        {/* ====================================== */}

        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#050505] via-[#111111] to-[#050505]">

        {/* Background Glow */}

        <div className="absolute -top-32 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-400/5 blur-[120px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div>

            <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">

                ⚙ Settings Control Center

            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">

                Premium Settings

            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">

                Manage your website branding, administrator profile,
                company information, security and platform preferences
                from one luxury control panel.

            </p>

            </div>

            {/* Right Hero Card */}

            <div className="w-full max-w-sm rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,.45)]">

            <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 text-3xl shadow-xl">

                ⚙

                </div>

                <div>

                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">

                    Control Center

                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">

                    System Ready

                </h3>

                </div>

            </div>

            <div className="mt-8 space-y-5">

                <div className="flex items-center justify-between">

                <span className="text-zinc-400">

                    Website Status

                </span>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-300">

                    ● Online

                </span>

                </div>

                <div className="flex items-center justify-between">

                <span className="text-zinc-400">

                    Security

                </span>

                <span className="font-semibold text-orange-300">

                    Protected

                </span>

                </div>

                <div className="flex items-center justify-between">

                <span className="text-zinc-400">

                    Database

                </span>

                <span className="font-semibold text-white">

                    Connected

                </span>

                </div>

            </div>

            </div>

        </div>

        </section>

        {/* ====================================== */}
        {/* Profile + Security */}
        {/* ====================================== */}

        <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 lg:grid-cols-2">

            {/* ===================== */}
            {/* Profile Card */}
            {/* ===================== */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">

            <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 text-3xl">

                👤

                </div>

                <div>

                <h2 className="text-2xl font-bold text-white">

                    Admin Profile

                </h2>

                <p className="text-zinc-400">

                    Manage administrator information

                </p>

                </div>

            </div>

            <div className="mt-8 space-y-5">

                <div>

                <label className="mb-2 block text-sm font-medium text-zinc-400">

                    Admin Name

                </label>

                <input
                    type="text"
                    placeholder="F1 Admin"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition focus:border-orange-500"
                />

                </div>

                <div>

                <label className="mb-2 block text-sm font-medium text-zinc-400">

                    Email Address

                </label>

                <input
                    type="email"
                    placeholder="admin@f1plates.com"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition focus:border-orange-500"
                />

                </div>

                <div>

                <label className="mb-2 block text-sm font-medium text-zinc-400">

                    Phone Number

                </label>

                <input
                    type="text"
                    placeholder="+971 XX XXX XXXX"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition focus:border-orange-500"
                />

                </div>

            </div>

            </div>

            {/* ===================== */}
            {/* Security Card */}
            {/* ===================== */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">

            <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-3xl">

                🔒

                </div>

                <div>

                <h2 className="text-2xl font-bold text-white">

                    Security

                </h2>

                <p className="text-zinc-400">

                    Update your login credentials

                </p>

                </div>

            </div>

            <div className="mt-8 space-y-5">

                <div>

                <label className="mb-2 block text-sm font-medium text-zinc-400">

                    Current Password

                </label>

                <input
                    type="password"
                    placeholder="••••••••"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition focus:border-orange-500"
                />

                </div>

                <div>

                <label className="mb-2 block text-sm font-medium text-zinc-400">

                    New Password

                </label>

                <input
                    type="password"
                    placeholder="••••••••"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition focus:border-orange-500"
                />

                </div>

                <div>

                <label className="mb-2 block text-sm font-medium text-zinc-400">

                    Confirm Password

                </label>

                <input
                    type="password"
                    placeholder="••••••••"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition focus:border-orange-500"
                />

                </div>

                <button
                className="mt-4 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 py-4 font-bold text-white transition duration-300 hover:scale-[1.02]"
                >
                Update Password
                </button>

            </div>

            </div>

        </div>

        </section>

        {/* ====================================== */}
        {/* Website + Branding */}
        {/* ====================================== */}

        <section className="mx-auto max-w-7xl px-6 pb-10">

        <div className="grid gap-8 lg:grid-cols-2">

            {/* ================================= */}
            {/* Website Settings */}
            {/* ================================= */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,.45)]">

            <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 text-3xl">

                🌐

                </div>

                <div>

                <h2 className="text-2xl font-bold text-white">

                    Website Settings

                </h2>

                <p className="text-zinc-400">

                    Update company information

                </p>

                </div>

            </div>

            <div className="mt-8 space-y-5">

                <div>

                <label className="mb-2 block text-sm text-zinc-400">

                    Company Name

                </label>

                <input
                    type="text"
                    placeholder="F1 Number Plates"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-500"
                />

                </div>

                <div>

                <label className="mb-2 block text-sm text-zinc-400">

                    Contact Number

                </label>

                <input
                    type="text"
                    placeholder="+971 XX XXX XXXX"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-500"
                />

                </div>

                <div>

                <label className="mb-2 block text-sm text-zinc-400">

                    Email Address

                </label>

                <input
                    type="email"
                    placeholder="info@f1plates.com"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-500"
                />

                </div>

                <div>

                <label className="mb-2 block text-sm text-zinc-400">

                    Company Address

                </label>

                <textarea
                    rows={4}
                    placeholder="Dubai, United Arab Emirates"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 p-5 text-white outline-none focus:border-orange-500"
                />

                </div>

            </div>

            </div>

            {/* ================================= */}
            {/* Branding */}
            {/* ================================= */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,.45)]">

            <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 text-3xl">

                🎨

                </div>

                <div>

                <h2 className="text-2xl font-bold text-white">

                    Branding

                </h2>

                <p className="text-zinc-400">

                    Logo & visual identity

                </p>

                </div>

            </div>

            <div className="mt-8 space-y-6">

                {/* Logo Upload */}

                <div className="rounded-3xl border-2 border-dashed border-orange-500/30 p-8 text-center transition hover:border-orange-400">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10 text-4xl">

                    🖼️

                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">

                    Upload Company Logo

                </h3>

                <p className="mt-2 text-sm text-zinc-400">

                    PNG, JPG or SVG (Maximum 5MB)

                </p>

                <input
                    type="file"
                    className="mt-6 block w-full cursor-pointer rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-white"
                />

                </div>

                {/* Theme */}

                <div>

                <label className="mb-2 block text-sm text-zinc-400">

                    Theme

                </label>

                <select
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none"
                >

                    <option>Premium Black & Gold</option>

                    <option>Black & Orange</option>

                    <option>Dark Gray</option>

                </select>

                </div>

                {/* Accent Color */}

                <div>

                <label className="mb-4 block text-sm text-zinc-400">

                    Accent Color

                </label>

                <div className="flex gap-4">

                    <button className="h-12 w-12 rounded-full bg-yellow-500 ring-4 ring-yellow-500/30" />

                    <button className="h-12 w-12 rounded-full bg-orange-500" />

                    <button className="h-12 w-12 rounded-full bg-red-500" />

                    <button className="h-12 w-12 rounded-full bg-blue-500" />

                    <button className="h-12 w-12 rounded-full bg-green-500" />

                </div>

                </div>

            </div>

            </div>

        </div>

        </section>

        {/* ====================================== */}
        {/* Social Media + System */}
        {/* ====================================== */}

        <section className="mx-auto max-w-7xl px-6 pb-14">

        <div className="grid gap-8 lg:grid-cols-2">

            {/* ================================= */}
            {/* Social Media */}
            {/* ================================= */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 shadow-[0_25px_70px_rgba(0,0,0,.45)]">

            <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 text-3xl">

                📱

                </div>

                <div>

                <h2 className="text-2xl font-bold text-white">

                    Social Media

                </h2>

                <p className="text-zinc-400">

                    Connect your business profiles

                </p>

                </div>

            </div>

            <div className="mt-8 space-y-5">

                <input
                type="text"
                placeholder="Facebook URL"
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-500"
                />

                <input
                type="text"
                placeholder="Instagram URL"
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-500"
                />

                <input
                type="text"
                placeholder="WhatsApp Number"
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-500"
                />

                <input
                type="text"
                placeholder="YouTube Channel"
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-500"
                />

                <input
                type="text"
                placeholder="LinkedIn URL"
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none focus:border-orange-500"
                />

            </div>

            </div>

            {/* ================================= */}
            {/* System */}
            {/* ================================= */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 shadow-[0_25px_70px_rgba(0,0,0,.45)]">

            <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 text-3xl">

                ⚙️

                </div>

                <div>

                <h2 className="text-2xl font-bold text-white">

                    System Controls

                </h2>

                <p className="text-zinc-400">

                    Platform management tools

                </p>

                </div>

            </div>

            <div className="mt-8 grid gap-4">

                <button className="rounded-2xl border border-green-500/20 bg-green-500/10 py-4 font-semibold text-green-300 transition hover:scale-[1.02]">

                💾 Backup Database

                </button>

                <button className="rounded-2xl border border-blue-500/20 bg-blue-500/10 py-4 font-semibold text-blue-300 transition hover:scale-[1.02]">

                📤 Export Products

                </button>

                <button className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 py-4 font-semibold text-yellow-300 transition hover:scale-[1.02]">

                🧹 Clear Cache

                </button>

                <button className="rounded-2xl border border-red-500/20 bg-red-500/10 py-4 font-semibold text-red-300 transition hover:scale-[1.02]">

                🗑 Reset Settings

                </button>

            </div>

            {/* Status */}

            <div className="mt-8 rounded-2xl border border-orange-500/20 bg-black/20 p-5">

                <div className="flex items-center justify-between">

                <span className="text-zinc-400">

                    System Status

                </span>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-300">

                    ● Online

                </span>

                </div>

                <div className="mt-4 flex items-center justify-between">

                <span className="text-zinc-400">

                    Version

                </span>

                <span className="font-semibold text-white">

                    v2.0 Premium

                </span>

                </div>

            </div>

            </div>

        </div>

        </section>

        {/* ====================================== */}
        {/* Save Changes */}
        {/* ====================================== */}

        <section className="sticky bottom-0 z-40 border-t border-white/10 bg-black/70 backdrop-blur-2xl">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row">

            <div>

            <h3 className="text-lg font-bold text-white">

                Save Configuration

            </h3>

            <p className="text-sm text-zinc-400">

                Changes will be applied across the website.

            </p>

            </div>

            <button className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 px-10 py-4 font-bold text-white shadow-[0_10px_35px_rgba(249,115,22,.45)] transition duration-300 hover:scale-[1.03] md:w-auto">

            💾 Save Changes

            </button>

        </div>

        </section>

    </main>
    );

}