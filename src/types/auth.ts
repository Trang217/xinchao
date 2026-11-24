export interface RegisterInfo {
  name: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  roles?: string[];
}

export interface LoginInfo {
  email: string;
  password: string;
}
