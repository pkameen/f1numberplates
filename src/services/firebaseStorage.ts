import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import { storage } from "@/lib/firebase";

/* -------------------------------------- */
/* Upload Multiple Images                 */
/* -------------------------------------- */

export const uploadImages = async (
  files: File[]
): Promise<string[]> => {
  const imageUrls: string[] = [];

  for (const file of files) {
    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}-${file.name}`;

    const storageRef = ref(
      storage,
      `number-plates/${fileName}`
    );

    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);

    imageUrls.push(downloadURL);
  }

  return imageUrls;
};
/* -------------------------------------- */
/* Delete Image                           */
/* -------------------------------------- */

export const deleteImage = async (
  imageUrl: string
): Promise<void> => {
  try {
    const decodedUrl = decodeURIComponent(imageUrl);

    const startIndex = decodedUrl.indexOf("/o/") + 3;
    const endIndex = decodedUrl.indexOf("?");

    const filePath = decodedUrl.substring(
      startIndex,
      endIndex
    );

    const imageRef = ref(storage, filePath);

    await deleteObject(imageRef);
  } catch (error) {
    console.error("Failed to delete image:", error);
    throw error;
  }
};

/* -------------------------------------- */
/* Upload Single Image (Optional)         */
/* -------------------------------------- */

export const uploadImage = async (
  file: File
): Promise<string> => {
  const [url] = await uploadImages([file]);
  return url;
};