
// import { create } from 'zustand';
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.104:8000/api/admin/auth',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: true, // Required for sending cookies with requests
// });

// export const useAuthStore = create((set) => ({
//   isAuthenticated: false,
//   accessToken: null,
//   user: null,

//   setAuth: (token, user) => {
//     set({
//       accessToken: token,
//       user,
//       isAuthenticated: true,
//     });
//   },

//   logout: async () => {
//     try {
//       await axiosInstance.post('/logout'); // Call backend logout endpoint
//     } catch (error) {
//       console.error('Logout error:', error);
//     } finally {
//       set({ isAuthenticated: false, accessToken: null, user: null });
//     }
//   },

//   login: async (email, password) => {
//     try {
//       const response = await axiosInstance.post('/login', { email, password, isMaster: true });
//       const { accessToken } = response.data; // Only destructure accessToken

//       if (accessToken) {
//         set({
//           accessToken,
//           user: { email }, // Store user information
//           isAuthenticated: true,
//         });
//         return { success: true }; // Indicate successful login
//       }

//       return { success: false, message: 'Invalid response from server.' };
//     } catch (error) {
//       console.error('Login error:', error);
//       return { success: false, message: error.response?.data?.message || 'Login failed' };
//     }
//   },
// }));

// import { create } from "zustand";

// export const useAuthStore = create((set) => ({
//   accessToken: null,
//   isAuthenticated: false,

//   login: (token) => {
//     localStorage.setItem("accessToken", token);
//     set({ accessToken: token, isAuthenticated: true });
//   },

//   logout: () => {
//     localStorage.removeItem("accessToken");
//     set({ accessToken: null, isAuthenticated: false });
//   },

//   loadToken: () => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       set({ accessToken: token, isAuthenticated: true });
//     }
//   },
// }));



import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: null,
  isAuthenticated: false,

  login: (token) => {
    localStorage.setItem("accessToken", token);
    set({ accessToken: token, isAuthenticated: true });
  },

  logout: () => {
    localStorage.clear(); // Clear all local storage data
    set({ accessToken: null, isAuthenticated: false });
  },

  loadToken: () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      set({ accessToken: token, isAuthenticated: true });
    }
  },
}));
