import axios from "axios";
import ApiUserService from "./api_user_service";
import { OrderInfo } from "@/types/order";

export default class ApiOrderService {
  static BASE_URL = "http://localhost:8090/api/orders";

  static async getAllOrders(orderStatus: string, page = 0, size = 100) {
    let url: string = `${this.BASE_URL}/all`;

    if (orderStatus) {
      url = `${this.BASE_URL}/all?orderStatus=${orderStatus}&page=${page}&size=${size}`;
    }

    const res = await axios.get(url, {
      headers: ApiUserService.getHeader(),
    });

    return res.data;
  }

  static async getOrderById(orderId: string) {
    const res = await axios.get(`${this.BASE_URL}/${orderId}`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async getOrdersOfUser(id: number) {
    const res = await axios.get(`${this.BASE_URL}/me`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async getOrderItemById(orderItemId: number) {
    const res = await axios.get(`${this.BASE_URL}/order-item/${orderItemId}`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async placeOrder() {
    const res = await axios.post(
      `${this.BASE_URL}/checkout`,
      {},
      { headers: ApiUserService.getHeader() },
    );
    return res.data;
  }

  static async updateOrder(orderData: FormData) {
    const res = await axios.put(`${this.BASE_URL}/update`, orderData, {
      headers: ApiUserService.getHeader(),
    });

    return res.data;
  }

  static async updateOrderStatus(orderData: OrderInfo) {
    const res = await axios.put(`${this.BASE_URL}/update`, orderData, {
      headers: ApiUserService.getHeader(),
    });

    return res.data;
  }

  static async countUniqueCustomers() {
    const res = await axios.get(`${this.BASE_URL}/unique-customers`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  //   static async initialDelivery(body) {
  //     const res = await axios.post(`${this.BASE_URL}/initial-delivery`, body, {
  //         headers: ApiUserService.getHeader()
  //     });

  //     return res.data;
  //   }
}
