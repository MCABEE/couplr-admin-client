// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://192.168.1.104:8000/api/admin/auth', // Adjust your backend URL
//   headers: {
//     'Content-Type': 'application/json',
//   },  
// });

// export const login = async (email, password) => {
//   const response = await axiosInstance.post('/login', { email, password ,  isMaster: true});
//   console.log(response)
//   return response.data;
// };

// export const refreshToken = async (refreshToken) => {
//   const response = await axiosInstance.post('/refreshToken', {}, {
//     headers: { Authorization: `Bearer ${refreshToken}` },
//   });
//   return response.data;
// };


import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/admin/auth";

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
