export interface ReviewDTO {
  id?: number;
  orderId?: number;
  menuId?: number;
  userName?: string;
  rating: number;
  comment?: string;
  menuName?: string;
  createdAt?: string;
}
