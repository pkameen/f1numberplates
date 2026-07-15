"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"; 

import GalleryCard from "@/components/home/GalleryCard";
import { getAllPlates } from "@/services/plateService";
import type { Plate } from "@/types/plate";

const ProductsGallery = () => {

    /* -------------------------------- */
    /* Search State                     */
    /* -------------------------------- */

    const [search, setSearch] = useState("");

    /* -------------------------------- */
    /* Category Filter                  */
    /* -------------------------------- */

    const [selectedCategory, setSelectedCategory] =
    useState("All");

    /* -------------------------------- */
    /* Categories                       */
    /* -------------------------------- */

    const categories = [

    "All",

    "Car Plates",

    "Bike Plates",

    "Taxi Plates",

    "Honey Comb Plates",

    "Electric Plates",

    "TP Number Plates",

    ];

  const [plates, setPlates] = useState<Plate[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

    /* -------------------------------- */
    /* Filter Products                  */
    /* -------------------------------- */

    const filteredPlates = useMemo(() => {

    return plates.filter((plate) => {

        const keyword = search.toLowerCase();

        const matchesSearch =

        plate.plateNumber
            .toLowerCase()
            .includes(keyword)

        ||

        plate.category
            .toLowerCase()
            .includes(keyword)

        ||

        (plate.description ?? "")
            .toLowerCase()
            .includes(keyword);

        const matchesCategory =

        selectedCategory === "All"

            ? true

            : plate.category === selectedCategory;

        return (
        matchesSearch &&
        matchesCategory
        );

    });

    }, [

    plates,

    search,

    selectedCategory,

    ]);

    useEffect(() => {

      const loadProducts = async () => {

        try {

          const data = await getAllPlates();

          setPlates(data);

        } finally {

          setLoading(false);

        }

      };

      loadProducts();

    }, []);

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

      }, 4000);

      return () => clearInterval(interval);

    }, [filteredPlates]);

      if (loading) {
        return (
          <section className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">

              <h2 className="text-4xl font-bold text-white">
                Loading Products...
              </h2>

            </div>
          </section>
        );
      }

  return (
    <section className="mt-10 bg-[#050505] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">

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
            Products
          </span>

          <h1 className="mt-6 text-5xl font-black text-white">
            Premium Number Plates
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Browse our premium collection of luxury
            number plates.
          </p>

        </div>

        <input
          type="text"
          placeholder="Search Plate Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-yellow-500/20
            bg-zinc-900
            px-6
            py-4
            text-white
            placeholder:text-zinc-500
            outline-none
            focus:border-yellow-500
          "
        />

        <div className="
        mt-8
        flex
        gap-3
        overflow-x-auto
        pb-2
        md:flex-wrap
        [&::-webkit-scrollbar]:hidden
        ">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`
                rounded-full
                px-5
                py-2
                transition-all

                ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-black"
                    : "border border-zinc-700 bg-zinc-900 text-white hover:border-yellow-500"
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>

        <p className="mt-8 text-zinc-400">

          Showing {filteredPlates.length} Products

        </p>

        {filteredPlates.length === 0 ? (

          <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 py-20 text-center">

            <h3 className="text-3xl font-bold text-white">
              No Products Found
            </h3>

            <p className="mt-4 text-zinc-400">
              Try another plate number or category.
            </p>

          </div>

        ) : (

          <div className="mt-12">

  <div className="mb-6 flex justify-end gap-3">

    <button
      type="button"
      onClick={() =>
        scrollRef.current?.scrollBy({
          left: -420,
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
        bg-zinc-900
        text-white
        transition
        hover:bg-yellow-500
        hover:text-black
      "
    >
      ←
    </button>

    <button
      type="button"
      onClick={() =>
        scrollRef.current?.scrollBy({
          left: 420,
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
        bg-zinc-900
        text-white
        transition
        hover:bg-yellow-500
        hover:text-black
      "
    >
      →
    </button>

  </div>

  <div
    ref={scrollRef}
    className="
      flex
      gap-8
      overflow-x-auto
      scroll-smooth
      snap-x
      snap-mandatory
      pb-5

      [&::-webkit-scrollbar]:hidden
    "
  >

    {filteredPlates.map((plate) => (

      <div
        key={plate.id}
        className="shrink-0 snap-start"
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

</div>

        )}

      </div>

    </section>
  );
};

export default ProductsGallery;