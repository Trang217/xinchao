import axios from "axios";
import ApiUserService from "./api_user_service";
import { ReviewDTO } from "@/types/review";

export default class ApiReviewService {
  static BASE_URL = "http://localhost:8090/api/reviews";

  static async createReview(reviewData: ReviewDTO) {
    const res = await axios.post(`${this.BASE_URL}`, reviewData, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async getReviewsForMenu(menuId: number) {
    const res = await axios.get(`${this.BASE_URL}/menu-item/${menuId}`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async getAverageRating(menuId: number) {
    const res = await axios.get(`${this.BASE_URL}/menu-item/avg/${menuId}`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }
}
