"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginState = {
  error: string;
};

type RegisterState = {
  error: string;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");
  let token: string;

  try {
    const response = await axios.post(
      "http://localhost:8090/api/auth/login",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "Application/json" } },
    );

    token = response.data.data.token;

    if (!token) {
      return { error: "Token not found" };
    }

    console.log("login successful: ", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        error: error.response?.data?.message || error.message,
      };
    }

    return { error: "Something went wrong" };
  }

  const cookieStore = await cookies();
  cookieStore.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect("/");
}

export async function registerAction(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const address = formData.get("address");
  const phoneNumber = formData.get("phoneNumber");

  

  try {
    const response = await axios.post(
      "http://localhost:8090/api/auth/register",
      { name, email, password, address, phoneNumber },
      {
        headers: { "Content-Type": "Application/json" },
      },
    );

    console.log("register success", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        error: error.response?.data?.message || "Register failed!",
      };
    }

    return { error: "Something went wrong!" };
  }

  redirect("/login");
}

function checkField(fieldName: string, value: FormDataEntryValue | null): void | { error: string } {
  if (typeof value !== "string" || !value.trim()) {
    return { error: `${fieldName} is required!` };
  }
}
