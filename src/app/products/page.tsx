"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsGallery from "./ProductsGallery";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <ProductsGallery />

      <Footer />
    </>
  );
}