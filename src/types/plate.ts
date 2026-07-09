export type PlateAvailability =
  | "Available"
  | "Reserved"
  | "Sold";

export interface Plate {
  id: string;

  plateNumber: string;
  category: string;
  price: number;
  description: string;

  availability: PlateAvailability;

  featured: boolean;
  images: string[];

  createdAt?: unknown;
}