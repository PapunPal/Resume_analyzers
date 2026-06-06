import api from "./axios.ts";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async (
  data: RegisterData
) => {
  const response = await api.post(
    `${import.meta.env.VITE_BASE_URL}/auth/register`,
    data
  );

  return response.data;
};

export const loginUser = async (
  data: LoginData
) => {
 
  const response = await api.post(
    `${import.meta.env.VITE_BASE_URL}/auth/login`,
    data
  );

  return response.data;
};

export const logoutUser =
  async () => {
    const response = await api.post(
      `${import.meta.env.VITE_BASE_URL}/auth/logout`
    );

    return response.data;
  };

export const getMe = async () => {
  const response = await api.get(
    `${import.meta.env.VITE_BASE_URL}/auth/me`
  );

  return response.data;
};