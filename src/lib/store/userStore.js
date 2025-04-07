import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  fetchNewUsers,
  fetchIncompleteUsers,
  fetchDeletedUsers,
  fetchActiveUsers,
  fetchTotalUsers,
  fetchUserById,
  verifyIdProof,
  fetchImagePosts,
} from "@/api/userApi";

const useUserStore = create(
  persist(
    (set, get) => ({
      newUsers: [],
      incompleteUsers: [],
      deletedUsers: [],
      activeUsers: [],
      totalUsersList: [],
      isLoading: false,
      currentPage: 1,
      totalPages: 0,
      selectedUserId: null, // This value will be persisted in local storage
      selectedUser: null,
      loadingUser: false,
      imagePosts: [],

      imagePostsPage: 1,
      imagePostsTotalPages: 1,

      // Set the selected user ID and log it
      setSelectedUserId: (userId) => {
        console.log("Setting selectedUserId:", userId);
        set({ selectedUserId: userId });
      },

      fetchNewUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchNewUsers(page);
          set({
            newUsers: data.users || [],
            totalPages: data.totalPages || 0,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching new users:", error);
        }
      },

      fetchIncompleteUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchIncompleteUsers(page);
          set({
            incompleteUsers: data.users || [],
            totalPages: data.totalPages || 0,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching incomplete users:", error);
        }
      },

      fetchDeletedUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchDeletedUsers(page);
          set({
            deletedUsers: data.users || [],
            totalPages: data.totalPages || 0,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching deleted users:", error);
        }
      },

      fetchActiveUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchActiveUsers(page);
          set({
            activeUsers: data.users || [],
            totalPages: data.totalPages || 0,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching active users:", error);
        }
      },

      fetchTotalUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchTotalUsers(page);
          set({
            totalUsersList: data.users || [],
            totalPages: data.totalPages || 0,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching total users:", error);
        }
      },

      fetchUserById: async () => {
        set({ loadingUser: true });
        try {
          const { selectedUserId } = get();
          console.log("Fetching user with id:", selectedUserId);
          if (!selectedUserId) {
            console.warn("No user selected.");
            set({ loadingUser: false });
            return;
          }
          const response = await fetchUserById(selectedUserId);
          set({ selectedUser: response.data, loadingUser: false });
        } catch (error) {
          console.error("Error fetching user details:", error);
          set({ loadingUser: false });
        }
      },
      verifyIdProof: async (status) => {
        const { selectedUserId } = get();
        if (!selectedUserId) {
          alert("User ID is missing.");
          return;
        }

        try {
          await verifyIdProof(selectedUserId, status);
          alert(`ID proof has been ${status.toLowerCase()}.`);
        } catch (error) {
          alert("Failed to update ID proof status.");
        }
      },

      // fetchImagePosts: async (page = 1, size = 10) => {
      //   set({ isLoading: true });
      //   try {
      //     const data = await fetchImagePosts(page, size);
      //     set({
      //       imagePosts: data.users || [],
      //       imagePostsPage: page,
      //       imagePostsTotalPages: data.totalPages || 1,
      //       isLoading: false,
      //     });
      //   } catch (error) {
      //     set({ isLoading: false });
      //     console.error("Error fetching image posts:", error);
      //   }
      // },
    }),
    {
      name: "user-store", // name of the item in local storage
      partialize: (state) => ({ selectedUserId: state.selectedUserId }),
    }
  )
);

export default useUserStore;
