import { MenuDTO } from "./menu";

export interface CartItemDTO {
  id?: number;
  quantity: number;
  pricePerUnit: number;
  subTotal: number;
  menu: MenuDTO;
}

export interface CartDTO {
  id?: number;
  cartItems?: CartItemDTO[];
  menuId?: number;
  quantity?: number;
  totalAmount?: number;
}
