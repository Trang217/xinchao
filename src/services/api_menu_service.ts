import axios from "axios";
import ApiUserService from "./api_user_service";

export default class ApiMenuService {
  static BASE_URL = "http://localhost:8090/api/menu";

  static async getAllmenusBySearch(search: string) {
    const res = await axios.get(`${this.BASE_URL}/all`, {
      params: {
        search: search,
      },
    });
    return res.data;
  }

  static async getAllmenusByCatId(id: number) {
    const res = await axios.get(`${this.BASE_URL}/all`, {
      params: {
        catId: id,
      },
    });
    return res.data;
  }

  static async getMenuById(id: number) {
    const res = await axios.get(`${this.BASE_URL}/${id}`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }

  static async createMenu(menuData: FormData) {
    const res = await axios.post(`${this.BASE_URL}`, menuData, {
      headers: {
        ...ApiUserService.getHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }

  static async updateMenu(menuData: FormData) {
    const res = await axios.put(`${this.BASE_URL}`, menuData, {
      headers: {
        ...ApiUserService.getHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }

  static async removeItem(menuId: number) {
    const res = await axios.delete(`${this.BASE_URL}/${menuId}`, {
      headers: ApiUserService.getHeader(),
    });
    return res.data;
  }
}
