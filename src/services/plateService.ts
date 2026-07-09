import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

/* --------------------------------------- */
/* Collection Name                         */
/* --------------------------------------- */

const COLLECTION_NAME = "number-plates";

/* --------------------------------------- */
/* Plate Interface                         */
/* --------------------------------------- */

import type { Plate } from "@/types/plate";

/* --------------------------------------- */
/* Add Product                             */
/* --------------------------------------- */

export const addPlate = async (
  plate: Omit<Plate, "id" | "createdAt">
) => {
  const docRef = await addDoc(
    collection(db, COLLECTION_NAME),
    {
      ...plate,
      createdAt: serverTimestamp(),
    }
  );

  return docRef.id;
};
/* --------------------------------------- */
/* Get All Products                        */
/* --------------------------------------- */

export const getAllPlates = async (): Promise<Plate[]> => {
  const q = query(
    collection(db, COLLECTION_NAME),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...(document.data() as Omit<Plate, "id">),
  }));
};

/* --------------------------------------- */
/* Get Single Product                      */
/* --------------------------------------- */

export const getPlateById = async (
  id: string
): Promise<Plate | null> => {
  const snapshot = await getDocs(
    query(collection(db, COLLECTION_NAME))
  );

  const plate = snapshot.docs.find(
    (document) => document.id === id
  );

  if (!plate) {
    return null;
  }

  return {
    id: plate.id,
    ...(plate.data() as Omit<Plate, "id">),
  };
};
import { 
  getDoc,
} from "firebase/firestore";

/* --------------------------------------- */
/* Get Single Product (Optimized)          */
/* --------------------------------------- */

export const getPlate = async (
  id: string
): Promise<Plate | null> => {
  const docRef = doc(db, COLLECTION_NAME, id);

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Plate, "id">),
  };
};

/* --------------------------------------- */
/* Update Product                          */
/* --------------------------------------- */

export const updatePlate = async (
  id: string,
  data: Partial<Omit<Plate, "id" | "createdAt">>
): Promise<void> => {
  const docRef = doc(db, COLLECTION_NAME, id);

  await updateDoc(docRef, {
    ...data,
  });
};

/* --------------------------------------- */
/* Delete Product                          */
/* --------------------------------------- */

export const deletePlate = async (
  id: string
): Promise<void> => {
  const docRef = doc(db, COLLECTION_NAME, id);

  await deleteDoc(docRef);
};