const API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY!;

/* ==========================================
   IMGBB Upload Response
========================================== */

interface ImgBBResponse {
  success: boolean;
  status: number;
  data: {
    id: string;
    title: string;
    url: string;
    display_url: string;
    delete_url: string;
  };
  error?: {
    message: string;
  };
}

/* ==========================================
   Upload Single Image
========================================== */

export async function uploadImage(
  file: File
): Promise<string> {

  if (!API_KEY) {
    throw new Error("IMGBB API Key is missing.");
  }

  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result: ImgBBResponse =
    await response.json();

  console.log("IMGBB Response:", result);
  console.log("URL:", result.data.url);
  console.log("DISPLAY URL:", result.data.display_url);
  console.log("FULL RESPONSE:", result.data);

  if (!response.ok || !result.success) {
    throw new Error(
      result.error?.message ??
      "Image upload failed."
    );

  }

  return result.data.url;
}

/* ==========================================
   Upload Multiple Images
========================================== */

export async function uploadMultipleImages(
  files: File[]
): Promise<string[]> {

  if (files.length === 0) {
    throw new Error("Please select images.");
  }

  const imageUrls = await Promise.all(

    files.map(async (file) => {

      console.log("Uploading:", file.name);

      const url = await uploadImage(file);

      console.log("Uploaded:", url);

      return url;

    })

  );

  return imageUrls;
}

/* ==========================================
   Image Validation
========================================== */

export function isValidImage(
  file: File
): boolean {

  const allowed = [

    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/avif",

  ];

  return allowed.includes(file.type);

}

/* ==========================================
   Size Validation
========================================== */

export function isValidImageSize(
  file: File
): boolean {

  const MAX_SIZE =
    10 * 1024 * 1024;

  return file.size <= MAX_SIZE;

}

/* ==========================================
   Validate Multiple Images
========================================== */

export function validateImages(
  files: File[]
): {
  valid: boolean;
  message?: string;
} {

  if (files.length === 0) {

    return {
      valid: false,
      message:
        "Please select at least one image.",
    };

  }

  for (const file of files) {

    if (!isValidImage(file)) {

      return {
        valid: false,
        message:
          `${file.name} is not a supported image.`,
      };

    }

    if (!isValidImageSize(file)) {

      return {
        valid: false,
        message:
          `${file.name} exceeds the 10MB limit.`,
      };

    }

  }

  return {
    valid: true,
  };

}

/* ==========================================
   Delete Image
========================================== */

export async function deleteImage() {

  console.warn(
    "IMG.BB does not support client-side delete."
  );

}