import axios from "axios";
import ApiUserService from "./api_user_service";
import { CartDTO } from "@/types/cart";

export default class ApiCartService {
  static BASE_URL = "http://localhost:8090/api";

  static async getShoppingCart() {
    const res = await axios.get(`${this.BASE_URL}/cart`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async addItemToCart(cartDto: CartDTO) {
    const res = await axios.post(`${this.BASE_URL}/cart/items`, cartDto, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async incrementItem(menuId: number) {
    const res = await axios.put(
      `${this.BASE_URL}/cart/items/increment/${menuId}`,
      null,
      { headers: ApiUserService.getHeader() },
    );
    return res.data;
  }

  static async decrementItem(menuId: number) {
    const res = await axios.put(
      `${this.BASE_URL}/cart/items/decrement/${menuId}`,
      null,
      { headers: ApiUserService.getHeader() },
    );
    return res.data;
  }

  static async removeItem(cartItemId: number) {
    const res = await axios.delete(
      `${this.BASE_URL}/cart/items/${cartItemId}`,
      {
        headers: ApiUserService.getHeader(),
      },
    );
    return res.data;
  }

  static async clearShoppingCart() {
    const res = await axios.delete(`${this.BASE_URL}/cart`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }
}
