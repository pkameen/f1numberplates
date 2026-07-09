"use client";

import { useState } from "react";
import Image from "next/image";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { PlateAvailability } from "@/types/plate";
import { addPlate } from "@/services/plateService";
import {
  uploadMultipleImages,
  validateImages,
} from "@/services/cloudinary";

const categories = [
  "Bike Plates",
  "Car Plates",
  "Honey Comb Plates",
  "Taxi Plates",
  "Electric Plates",
  "TP Number Plates",
];

const ProductForm = () => {

  /* ----------------------------- */
  /* States                        */
  /* ----------------------------- */

  const [plateNumber, setPlateNumber] = useState("");

  const [category, setCategory] = useState("");

  const [price, setPrice] = useState("");

  const [description, setDescription] = useState("");

  const [availability, setAvailability] =
  useState<PlateAvailability>("Available");

  const [featured, setFeatured] =
    useState(false);

  const [images, setImages] =
    useState<File[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* ----------------------------- */
  /* Image Upload                  */
  /* ----------------------------- */

  const handleImagesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    const validation = validateImages(files);

    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    setImages((prev) => [...prev, ...files]);
  };

  /* ----------------------------- */

  const removeImage = (index: number) => {

    setImages((prev) =>
      prev.filter((_, i) => i !== index)
    );

  };

  /* ----------------------------- */
  /* Submit                        */
  /* ----------------------------- */

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setLoading(true);
    setError("");
    setSuccess("");

    /* ----------------------------- */
    /* Form Validation */
    /* ----------------------------- */

    if (!plateNumber.trim()) {
      throw new Error("Plate Number is required.");
    }

    if (!category.trim()) {
      throw new Error("Please select a category.");
    }

    if (!price.trim()) {
      throw new Error("Please enter price.");
    }

    if (images.length === 0) {
      throw new Error("Please select at least one image.");
    }

    /* ----------------------------- */
    /* Upload Images to Cloudinary */
    /* ----------------------------- */

    const imageUrls = await uploadMultipleImages(images);

    /* ----------------------------- */
    /* Save Product to Firestore */
    /* ----------------------------- */

    await addPlate({
      plateNumber,
      category,
      price: Number(price),
      description,
      availability,
      featured,
      images: imageUrls,
    });

    /* ----------------------------- */
    /* Success */
    /* ----------------------------- */

    setSuccess("Product added successfully.");

    setPlateNumber("");
    setCategory("");
    setPrice("");
    setDescription("");
    setAvailability("Available");
    setFeatured(false);
    setImages([]);
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Something went wrong.");
    }

    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (

    <form
      onSubmit={handleSubmit}
      className="
      mx-auto
      max-w-6xl

      rounded-3xl

      border
      border-yellow-500/20

      bg-gradient-to-br
      from-[#0e0e0e]
      via-[#171717]
      to-[#090909]

      p-5

      md:p-8

      lg:p-10

      shadow-2xl
      shadow-yellow-500/10
    "
    >

      {/* Header */}

      <div className="mb-10">

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
          Admin Dashboard
        </span>

        <h2
          className="
          mt-5

          text-3xl

          font-black

          text-white

          md:text-5xl
        "
        >
          Add Premium Number Plate
        </h2>

        {error && (
          <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-5 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
            {success}
          </div>
        )}

        <p
          className="
          mt-4

          max-w-2xl

          leading-8

          text-zinc-400
        "
        >
          Upload premium number plates,
          multiple images,
          pricing,
          category
          and availability.
        </p>

      </div>
            {/* ===================================== */}
      {/* Product Information */}
      {/* ===================================== */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Plate Number */}

        <div>
          <label className="mb-3 block text-sm font-semibold tracking-wide text-yellow-400">
            Plate Number
          </label>

          <Input
            value={plateNumber}
            onChange={(e) =>
              setPlateNumber(e.target.value)
            }
            placeholder="KL 07 AB 0001"
            className="
              h-14
              rounded-2xl
              border-zinc-700
              bg-zinc-900
              text-white
              placeholder:text-zinc-500
              focus:border-yellow-500
            "
          />
        </div>

        {/* Category */}

        <div>
          <label className="mb-3 block text-sm font-semibold tracking-wide text-yellow-400">
            Category
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-zinc-700
              bg-zinc-900
              px-4
              text-white
              transition
              focus:border-yellow-500
              outline-none
            "
          >
            <option value="">
              Select Category
            </option>

            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}

        <div>
          <label className="mb-3 block text-sm font-semibold tracking-wide text-yellow-400">
            Price (AED)
          </label>

          <Input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            placeholder="1500"
            className="
              h-14
              rounded-2xl
              border-zinc-700
              bg-zinc-900
              text-white
              placeholder:text-zinc-500
              focus:border-yellow-500
            "
          />
        </div>

        {/* Availability */}

        <div>
          <label className="mb-3 block text-sm font-semibold tracking-wide text-yellow-400">
            Availability
          </label>

          <select
            value={availability}
            onChange={(e) =>
              setAvailability(e.target.value as PlateAvailability)
            }
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-zinc-700
              bg-zinc-900
              px-4
              text-white
              transition
              focus:border-yellow-500
              outline-none
            "
          >
            <option>Available</option>
            <option>Reserved</option>
            <option>Sold</option>
          </select>
        </div>

      </div>

      {/* ===================================== */}
      {/* Description */}
      {/* ===================================== */}

      <div className="mt-8">

        <label className="mb-3 block text-sm font-semibold tracking-wide text-yellow-400">
          Product Description
        </label>

        <textarea
          rows={6}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Write premium product description..."
          className="
            w-full
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-900
            p-5
            text-white
            placeholder:text-zinc-500
            outline-none
            transition
            focus:border-yellow-500
          "
        />

      </div>

      {/* ===================================== */}
      {/* Image Upload */}
      {/* ===================================== */}

      <div className="mt-10">

        <label className="mb-4 block text-sm font-semibold tracking-wide text-yellow-400">
          Product Images
        </label>

        <label
          htmlFor="images"
          className="
            flex
            cursor-pointer
            flex-col
            items-center
            justify-center

            rounded-3xl

            border-2
            border-dashed
            border-yellow-500/30

            bg-gradient-to-br
            from-zinc-900
            to-zinc-800

            p-12

            text-center

            transition-all

            duration-300

            hover:border-yellow-400
            hover:scale-[1.01]
            hover:shadow-2xl
            hover:shadow-yellow-500/20
          "
        >

          <div className="text-6xl">
            📷
          </div>

          <h3 className="mt-5 text-2xl font-bold text-white">
            Upload Premium Images
          </h3>

          <p className="mt-3 max-w-md text-zinc-400">
            Drag & Drop your product images
            or click to browse multiple files.
          </p>

          <Input
            id="images"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleImagesChange}
          />

        </label>

      </div>

      {/* ===================================== */}
      {/* Image Preview */}
      {/* ===================================== */}

      {images.length > 0 && (

        <div className="mt-10">

          <h3 className="mb-5 text-xl font-bold text-white">
            Image Preview
          </h3>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-5">

            {images.map((image, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-zinc-700
                  bg-zinc-900
                "
              >

                <Image
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  width={300}
                  height={300}
                  className="
                    h-48
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    removeImage(index)
                  }
                  className="
                    absolute
                    right-3
                    top-3

                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-full

                    bg-red-600

                    text-lg
                    font-bold
                    text-white

                    opacity-0

                    transition

                    group-hover:opacity-100
                  "
                >
                  ✕
                </button>

              </div>

            ))}

          </div>

        </div>

      )}
            {/* ===================================== */}
      {/* Featured Product */}
      {/* ===================================== */}

      <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-zinc-900 to-zinc-900 p-6">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-xl font-bold text-white">
              Featured Collection
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Enable this option to display this number plate in the
              Featured Collection section on the homepage.
            </p>

          </div>

          <label className="relative inline-flex cursor-pointer items-center">

            <input
              type="checkbox"
              checked={featured}
              onChange={(e) =>
                setFeatured(e.target.checked)
              }
              className="peer sr-only"
            />

            <div
              className="
                peer
                h-8
                w-16
                rounded-full
                bg-zinc-700
                transition-all
                peer-checked:bg-yellow-500
              "
            ></div>

            <div
              className="
                absolute
                left-1
                h-6
                w-6
                rounded-full
                bg-white
                shadow-lg
                transition-all
                peer-checked:left-9
              "
            ></div>

          </label>

        </div>

      </div>

      {/* ===================================== */}
      {/* Submit Button */}
      {/* ===================================== */}

      <div className="mt-12 flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">

        <Button
          type="button"
          onClick={() => {

            setPlateNumber("");
            setCategory("");
            setPrice("");
            setDescription("");
            setAvailability("Available");
            setFeatured(false);
            setImages([]);

          }}
          className="
            h-14
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-900
            px-8
            text-white
            transition-all
            duration-300
            hover:border-red-500
            hover:bg-red-600
          "
        >
          Reset Form
        </Button>

        <Button
          type="submit"
          disabled={loading}
          className="
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-yellow-400
            via-yellow-500
            to-amber-500

            px-10

            font-bold
            text-black

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-2xl
            hover:shadow-yellow-500/40

            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? (
            <div className="flex items-center gap-3">

              <div
                className="
                  h-5
                  w-5
                  animate-spin
                  rounded-full
                  border-2
                  border-black
                  border-t-transparent
                "
              />

              Uploading...

            </div>
          ) : (
            "Add Premium Product"
          )}
        </Button>

      </div>

    </form>

  );

};

export default ProductForm; 