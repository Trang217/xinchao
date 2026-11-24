import type { ReviewDTO } from "./review";

export interface MenuDTO {
  id?: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  categoryId: number;
  imageFile?: File;
  reviews?: ReviewDTO[];
}
