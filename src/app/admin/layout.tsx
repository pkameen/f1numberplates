"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar"; 

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Login page-ൽ Sidebar കാണിക്കരുത്
  if (pathname === "/admin/login") {
    return (
      <main className="min-h-screen bg-gray-100">
        {children}
      </main>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 pt-16 lg:pt-0 p-5 lg:p-8">
        {children}
      </main>
    </div>
  );
}