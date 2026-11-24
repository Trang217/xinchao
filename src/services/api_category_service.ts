import axios from "axios";
import ApiUserService from "./api_user_service";
import { CategoryDto } from "@/types/category";

export default class ApiCategoryService {
  static BASE_URL = "http://localhost:8090/api/categories";

  static async getAllCategories() {
    const res = await axios.get(`${this.BASE_URL}/all`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async getCategoryById(catId: number) {
    const res = await axios.get(`${this.BASE_URL}/${catId}`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async updateCategories(catDto: CategoryDto) {
    const res = await axios.put(`${this.BASE_URL}`, catDto, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async addCategory(catDto: CategoryDto) {
    const res = await axios.post(`${this.BASE_URL}`, catDto, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async deleteCategory(catId: number) {
    const res = await axios.delete(`${this.BASE_URL}/${catId}`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }
}
