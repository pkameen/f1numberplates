"use client";

import { useEffect, useRef, useState } from "react";

import GalleryCard from "./GalleryCard";
import type { Plate } from "@/types/plate";
import { getAllPlates } from "@/services/plateService"; 

const Gallery = () => {
  const [plates, setPlates] = useState<Plate[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  /* -------------------------------- */

  useEffect(() => {
  let isMounted = true;

  const fetchGallery = async () => {
        try {
        const data = await getAllPlates();

        console.log("Firestore Data:", data);

        if (isMounted) {
            setPlates(data);
            setLoading(false);
        }
        } catch (error) {
        console.error("Gallery Load Error:", error);

        if (isMounted) {
            setLoading(false);
        }
        }
    };

    fetchGallery();

    return () => {
        isMounted = false;
    };
    }, []);

  /* -------------------------------- */
  /* Auto Scroll                      */
  /* -------------------------------- */

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: 360,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [plates]);

  /* -------------------------------- */

  if (loading) {
    return (
      <section
        id="gallery"
        className="py-24 bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-white">
            Premium Gallery
          </h2>

          <p className="mt-4 text-zinc-400">
            Loading Gallery...
          </p>

        </div>
      </section>
    );
  }

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#050505] py-24"
    >

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <span
              className="
                rounded-full
                border
                border-yellow-500/30
                bg-yellow-500/10
                px-5
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-yellow-400
              "
            >
              Gallery
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-extrabold
                text-white
                md:text-5xl
              "
            >
              Premium Number Plates
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
              Every number plate displayed here is uploaded directly
              from the admin dashboard and updates automatically.
            </p>

          </div>

            <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={() =>
                scrollRef.current?.scrollBy({
                  left: -400,
                  behavior: "smooth",
                })
              }
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-yellow-500/30
                bg-white/5
                text-white
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
                hover:scale-110
              "
            >
              ←
            </button>

            <button
              type="button"
              onClick={() =>
                scrollRef.current?.scrollBy({
                  left: 400,
                  behavior: "smooth",
                })
              }
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-yellow-500/30
                bg-white/5
                text-white
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
                hover:scale-110
              "
            >
              →
            </button>

          </div>

        </div>

        {/* Empty State */}

        {plates.length === 0 ? (

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-[#101010]
              py-24
              text-center
            "
          >

            <h3 className="text-2xl font-bold text-white">
              No Products Found
            </h3>

            <p className="mt-3 text-zinc-400">
              Products uploaded from the admin dashboard
              will automatically appear here.
            </p>

          </div>

        ) : (

          <div
            ref={scrollRef}
            className="
              flex
              gap-8
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              pb-6

              [&::-webkit-scrollbar]:h-2
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-yellow-500/30
              [&::-webkit-scrollbar-thumb]:rounded-full
            "
          >

            {plates.map((plate) => (

              <div
                key={plate.id}
                className="
                  shrink-0
                  snap-start
                "
              >

                <GalleryCard
                  id={plate.id}
                  plateNumber={plate.plateNumber}
                  category={plate.category}
                  price={plate.price}
                  availability={plate.availability}
                  featured={plate.featured}
                  images={plate.images}
                />

              </div>

            ))}

          </div>

        )}

        {/* Bottom Text */}

        <div className="mt-12 flex flex-col items-center justify-center">

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

          <p className="mt-6 text-center text-sm tracking-[0.25em] text-zinc-500 uppercase">
            Premium F1 Number Plate Collections
          </p>

        </div>

      </div>

      {/* Decorative Background Blur */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-yellow-500/5
          blur-[180px]
        "
      />

      {/* Top Left Glow */}

      <div
        className="
          pointer-events-none
          absolute
          top-20
          left-0
          h-64
          w-64
          rounded-full
          bg-yellow-500/10
          blur-[140px]
        "
      />

      {/* Top Right Glow */}

      <div
        className="
          pointer-events-none
          absolute
          top-10
          right-0
          h-64
          w-64
          rounded-full
          bg-white/5
          blur-[150px]
        "
      />

    </section>
  );
};

export default Gallery;