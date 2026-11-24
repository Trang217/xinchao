import { LoginInfo, RegisterInfo } from "@/types/auth";
import axios from "axios";

export default class ApiUserService {
  static BASE_URL = "http://localhost:8090/api";

  static saveToken(token: string): void {
    localStorage.setItem("token", token);
  }

  static getToken(): string | null {
    return localStorage.getItem("token");
  }

  static saveRoles(roles: string[]): void {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  static getRoles(): string[] {
    const roles = localStorage.getItem("roles");
    return roles ? JSON.parse(roles) : [];
  }

  static hadRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  static isAdmin(): boolean {
    return this.getRoles().includes("ADMIN");
  }

  static isDeliveryPerson(): boolean {
    return this.getRoles().includes("DELIVERY");
  }

  static logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
  }

  static isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  static getHeader(): Record<string, string> {
    const token = this.getToken();

    if (token) {
      return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
    }

    return {
      "Content-Type": "application/json",
    };
  }

  // REGISTER
  static async registerUser(registerInfo: RegisterInfo) {
    const res = await axios.post(
      `${this.BASE_URL}/auth/register`,
      registerInfo,
    );
    return res.data;
  }

  // LOGIN
  static async loginUser(loginInfo: LoginInfo) {
    const res = await axios.post(`${this.BASE_URL}/auth/login`, loginInfo);
    return res.data;
  }

  // USER PROFILE MANAGERMENT

  static async getProfile() {
    const res = await axios.get(`${this.BASE_URL}/users/account`, {
      headers: this.getHeader(),
    });
    return res.data;
  }

  static async updateProfile(formData: FormData) {
    const res = await axios.put(`${this.BASE_URL}/users/update`, formData, {
      headers: {
        ...this.getHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }

  static async deactivateProfile() {
    const res = await axios.delete(`${this.BASE_URL}/users/deactivate`, {
      headers: this.getHeader(),
    });
    return res.data;
  }
}
