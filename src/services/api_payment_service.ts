import axios from "axios";
import ApiUserService from "./api_user_service";
import { headers } from "next/headers";
import { InitializePaymentInfo, UpdatePaymentInfo } from "@/types/payment";

export default class ApiPaymentService {
  static BASE_URL = "http://localhost:8090/api/payment";

  static async proceedPayment(initalizePaymentData: InitializePaymentInfo) {
    const res = await axios.post(`${this.BASE_URL}/pay`, initalizePaymentData, {
      headers: ApiUserService.getHeader(),
    });

    return res.data;
  }

  static async updatePaymentForOrder(updatePaymentData: UpdatePaymentInfo) {
    const res = await axios.put(`${this.BASE_URL}/update`, updatePaymentData, {
      headers: ApiUserService.getHeader(),
    });

    return res.data;
  }

  static async getAllPayments() {
    const res = await axios.get(`${this.BASE_URL}/all`, {
      headers: ApiUserService.getHeader(),
    });

    return res.data;
  }

  static async getPaymentById(paymentId: number) {
    const res = await axios.get(`${this.BASE_URL}/${paymentId}`, {
      headers: ApiUserService.getHeader(),
    });

    return res.data;
  }
}
