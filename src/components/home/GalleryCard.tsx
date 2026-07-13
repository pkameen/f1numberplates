"use client";

import ImageSlider from "./ImageSlider";

interface GalleryCardProps {
  id?: string;

  plateNumber: string;

  category: string;

  price: number;

  availability: string;

  featured: boolean;

  images: string[];
}

const GalleryCard = ({
  plateNumber,
  category,
  price,
  availability,
  featured,
  images,
}: GalleryCardProps) => {

  return (

    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0d0d0d]
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-yellow-500/60
        hover:shadow-yellow-500/20
        min-w-[310px]
        max-w-[310px]
      "
    >

      {/* Image Slider */}

      <ImageSlider
        images={images}
        plateNumber={plateNumber}
      />

      {/* Featured Badge */}

      {featured && (

        <div
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-yellow-500
            px-4
            py-1
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-black
            shadow-lg
          "
        >
          Featured
        </div>

      )}

      {/* Card Body */}

      <div className="space-y-5 p-6">

        {/* Category */}

        <span
          className="
            inline-flex
            rounded-full
            border
            border-yellow-500/30
            bg-yellow-500/10
            px-3
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-yellow-400
          "
        >
          {category}
        </span>

        {/* Plate Number */}

        <h3
          className="
            text-2xl
            font-bold
            tracking-wide
            text-white
            transition-colors
            duration-300
            group-hover:text-yellow-400
          "
        >
          {plateNumber}
        </h3>

        {/* Price */}

        <div>

          <p className="text-sm text-zinc-400">
            Price
          </p>

          <h2
            className="
              mt-1
              text-3xl
              font-extrabold
              text-yellow-400
            "
          >
            £ {price.toLocaleString()}
          </h2>

        </div>

        {/* Availability */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span
              className={`h-3 w-3 rounded-full ${
                availability === "Available"
                  ? "bg-green-500"
                  : availability === "Reserved"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            />

            <span
              className={`text-sm font-medium ${
                availability === "Available"
                  ? "text-green-400"
                  : availability === "Reserved"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {availability}
            </span>

          </div>

          <span className="text-xs text-zinc-500 uppercase tracking-widest">
            Premium
          </span>

        </div>

        {/* Buy Now Button */}

        <a
          href={`https://wa.me/919048908003?text=${encodeURIComponent(
        `Hi,

        I would like to purchase this premium number plate.

        Plate Number: ${plateNumber}
        Category: ${category}
        Price: ₹${price.toLocaleString()}

        Please share more details.`
          )}`}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-yellow-900 transition-colors duration-300"
        >
          Buy Now →
        </a>

      </div>

      {/* Premium Bottom Glow */}

      <div
        className="
          absolute
          -bottom-20
          left-1/2
          h-40
          w-40
          -translate-x-1/2
          rounded-full
          bg-yellow-500/20
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

    </div>

  );
};

export default GalleryCard;