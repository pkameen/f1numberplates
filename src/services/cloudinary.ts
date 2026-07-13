// const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
// const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;
const CLOUD_NAME = "pk9yh86f";
const UPLOAD_PRESET = "f1-number-plates"; 

console.log("Cloud Name:", CLOUD_NAME);
console.log("Upload Preset:", UPLOAD_PRESET);

export interface CloudinaryUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder?: string;
  original_filename: string;
}
/* -------------------------------- */
/* Upload Single Image */
/* -------------------------------- */

export async function uploadImage(
  file: File
): Promise<string> {
  try {
    const formData = new FormData(); 

    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed.");
    }

    const data: CloudinaryUploadResponse =
      await response.json();

    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);

    throw new Error(
      "Failed to upload image to Cloudinary."
    );
  }
}

/* -------------------------------- */
/* Upload Multiple Images */
/* -------------------------------- */

export async function uploadMultipleImages(
  files: File[]
): Promise<string[]> {
  try {
    const uploads = files.map((file) =>
      uploadImage(file)
    );

    const imageUrls = await Promise.all(uploads);

    return imageUrls;
  } catch (error) {
    console.error(
      "Multiple Upload Error:",
      error
    );

    throw new Error(
      "Failed to upload one or more images."
    );
  }
}
/* -------------------------------- */
/* Delete Image (Future Use) */
/* -------------------------------- */

export async function deleteImage(publicId: string): Promise<void> {
  console.log(publicId);

  console.warn(
    "deleteImage() requires a secure backend API. Skipped."
  );
}

/* -------------------------------- */
/* Validate Image Type */
/* -------------------------------- */

export function isValidImage(file: File): boolean {
  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/avif",
  ];

  return allowedTypes.includes(file.type);
}

/* -------------------------------- */
/* Validate Image Size */
/* Max: 10 MB */
/* -------------------------------- */

export function isValidImageSize(
  file: File
): boolean {
  const maxSize = 10 * 1024 * 1024;

  return file.size <= maxSize;
}

/* -------------------------------- */
/* Validate Multiple Images */
/* -------------------------------- */

export function validateImages(
  files: File[]
): {
  valid: boolean;
  message?: string;
} {
  if (files.length === 0) {
    return {
      valid: false,
      message: "Please select at least one image.",
    };
  }

  for (const file of files) {
    if (!isValidImage(file)) {
      return {
        valid: false,
        message: `${file.name} is not a supported image format.`,
      };
    }

    if (!isValidImageSize(file)) {
      return {
        valid: false,
        message: `${file.name} exceeds the 10 MB limit.`,
      };
    }
  }

  return {
    valid: true,
  };
}

/* -------------------------------- */
/* Get Public ID From URL */
/* -------------------------------- */

export function getPublicIdFromUrl(
  imageUrl: string
): string {
  const parts = imageUrl.split("/");

  const filename = parts[parts.length - 1];

  return filename.substring(
    0,
    filename.lastIndexOf(".")
  );
}