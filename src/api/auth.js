


import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
      isMaster: true,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};
