"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  plateNumber: string;
  alt?: string;
}

const ImageSlider = ({
  images,
  plateNumber,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* -------------------------- */
  /* Next Image                 */
  /* -------------------------- */

  const nextImage = useCallback(() => {
    if (images.length <= 1) return;

    setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
    );
    }, [images.length]);

  /* -------------------------- */
  /* Previous Image             */
  /* -------------------------- */

  const previousImage = useCallback(() => {
    if (images.length <= 1) return;

    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  /* -------------------------- */
  /* Auto Slide                 */
  /* -------------------------- */

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextImage, images.length]);

  if (!images.length) {
    return (
      <div className="flex h-72 items-center justify-center rounded-2xl bg-zinc-900 text-zinc-400">
        No Image Available
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-black group">

      {/* Current Image */}

      <Image
        src={images[currentIndex]}
        alt={plateNumber}
        width={700}
        height={500}
        priority={currentIndex === 0}
        unoptimized
        className="
          h-72
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-105
        "
      />

      {/* Dark Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Image Counter */}

      <div className="
        absolute
        top-4
        right-4
        rounded-full
        bg-black/60
        px-3
        py-1
        text-xs
        font-semibold
        text-white
        backdrop-blur-md
      ">
        {currentIndex + 1} / {images.length}
      </div>

            {/* Left Arrow */}

      {images.length > 1 && (
        <button
          type="button"
          onClick={previousImage}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            h-11
            w-11
            rounded-full
            bg-black/60
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            opacity-0
            group-hover:opacity-100
            hover:bg-yellow-500
            hover:text-black
            hover:scale-110
          "
        >
          ❮
        </button>
      )}

      {/* Right Arrow */}

      {images.length > 1 && (
        <button
          type="button"
          onClick={nextImage}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            h-11
            w-11
            rounded-full
            bg-black/60
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            opacity-0
            group-hover:opacity-100
            hover:bg-yellow-500
            hover:text-black
            hover:scale-110
          "
        >
          ❯
        </button>
      )}

      {/* Bottom Dots */}

      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">

          {images.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`
                h-2.5
                rounded-full
                transition-all
                duration-300

                ${
                  currentIndex === index
                    ? "w-8 bg-yellow-400"
                    : "w-2.5 bg-white/50 hover:bg-white"
                }
              `}
            />

          ))}

        </div>
      )}

    </div>
  );
};

export default ImageSlider;