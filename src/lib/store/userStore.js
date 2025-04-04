// // import { create } from "zustand";
// // import { fetchUsers } from "@/api/userApi";

// // const useUserStore = create((set) => ({
// //   users: [],
// //   status: "NEW",
// //   isLoading: false,

// //   setStatus: async (status) => {
// //     set({ isLoading: true });
// //     try {
// //       const data = await fetchUsers(status);
// //       set({ users: data.users, status, isLoading: false });
// //     } catch (error) {
// //       set({ isLoading: false });
// //     }
// //   },
// // }));

// // export default useUserStore;

// // import { create } from "zustand";
// // import { fetchUsers } from "@/api/userApi";

// // const useUserStore = create((set) => ({
// //   users: [],
// //   totalUsers: 0,
// //   totalPages: 0,
// //   isLoading: false,
// //   status: "NEW",

// //   setStatus: async (status) => {
// //     set({ isLoading: true });
// //     try {
// //       const data = await fetchUsers(status);
// //       set({
// //         users: data.users || [],
// //         totalUsers: data.totalUsers || 0,
// //         totalPages: data.totalPages || 0,
// //         status,
// //         isLoading: false,
// //       });
// //     } catch (error) {
// //       set({ isLoading: false });
// //     }
// //   },
// // }));

// // export default useUserStore;




// // import { create } from "zustand";
// // import { fetchUsers } from "@/api/userApi";

// // const useUserStore = create((set) => ({
// //   users: [],
// //   totalUsers: 0,
// //   totalPages: 0,
// //   isLoading: false,
// //   status: "NEW",
// //   currentPage: 1,
// //   pageSize: 10,

// //   setStatus: async (status) => {
// //     set({ isLoading: true, currentPage: 1 }); // Reset to first page when status changes
// //     try {
// //       const data = await fetchUsers(status, 1, 10);
// //       set({
// //         users: data.users || [],
// //         totalUsers: data.totalUsers || 0,
// //         totalPages: data.totalPages || 0,
// //         status,
// //         isLoading: false,
// //       });
// //     } catch (error) {
// //       set({ isLoading: false });
// //     }
// //   },

// //   setPage: async (page) => {
// //     set({ isLoading: true });
// //     try {
// //       const data = await fetchUsers(useUserStore.getState().status, page, 10);
// //       set({
// //         users: data.users || [],
// //         currentPage: page,
// //         isLoading: false,
// //       });
// //     } catch (error) {
// //       set({ isLoading: false });
// //     }
// //   },
// // }));

// // export default useUserStore;














// import { create } from "zustand";
// import { fetchNewUsers, fetchIncompleteUsers, fetchDeletedUsers, fetchActiveUsers, fetchTotalUsers,fetchUserById } from "@/api/userApi";

// const useUserStore = create((set) => ({
//   newUsers: [],
//   incompleteUsers: [],
//   deletedUsers: [],
//   activeUsers: [],
//   totalUsersList: [],
//   isLoading: false,
//   currentPage: 1,
//   totalPages: 0,
//   selectedUser: null,
//   loadingUser: false,

//   fetchNewUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchNewUsers(page);
//       set({ newUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//     }
//   },

//   fetchIncompleteUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchIncompleteUsers(page);
//       set({ incompleteUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//     }
//   },

//   fetchDeletedUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchDeletedUsers(page);
//       set({ deletedUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//     }
//   },

//   fetchActiveUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchActiveUsers(page);
//       set({ activeUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//     }
//   },

//   fetchTotalUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchTotalUsers(page);
//       set({ totalUsersList: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//     }
//   },

//     fetchUserById: async (userId) => {
//       set({ loadingUser: true });
//       try {
//         const response = await fetchUserById(userId)
//         set({ selectedUser: response.data.data.user, loadingUser: false });
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         set({ loadingUser: false });
//       }
//     },
//   }));




// export default useUserStore;













// import { create } from "zustand";
// import { 
//   fetchNewUsers, 
//   fetchIncompleteUsers, 
//   fetchDeletedUsers, 
//   fetchActiveUsers, 
//   fetchTotalUsers, 
//   fetchUserById 
// } from "@/api/userApi";

// const useUserStore = create((set) => ({
//   newUsers: [],
//   incompleteUsers: [],
//   deletedUsers: [],
//   activeUsers: [],
//   totalUsersList: [],
//   isLoading: false,
//   currentPage: 1,
//   totalPages: 0,
//   selectedUser: null,
//   loadingUser: false,

//   fetchNewUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchNewUsers(page);
//       set({ newUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching new users:", error);
//     }
//   },

//   fetchIncompleteUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchIncompleteUsers(page);
//       set({ incompleteUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching incomplete users:", error);
//     }
//   },

//   fetchDeletedUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchDeletedUsers(page);
//       set({ deletedUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching deleted users:", error);
//     }
//   },

//   fetchActiveUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchActiveUsers(page);
//       set({ activeUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching active users:", error);
//     }
//   },

//   fetchTotalUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchTotalUsers(page);
//       set({ totalUsersList: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching total users:", error);
//     }
//   },

//   fetchUserById: async (userId) => {
//     set({ loadingUser: true });
//     try {
//       const response = await fetchUserById(userId);
//       set({ selectedUser: response.data.user, loadingUser: false });
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//       set({ loadingUser: false });
//     }
//   },
// }));

// export default useUserStore;




















// import { create } from "zustand";
// import { 
//   fetchNewUsers, 
//   fetchIncompleteUsers, 
//   fetchDeletedUsers, 
//   fetchActiveUsers, 
//   fetchTotalUsers, 
//   fetchUserById 
// } from "@/api/userApi";

// const useUserStore = create((set) => ({
//   newUsers: [],
//   incompleteUsers: [],
//   deletedUsers: [],
//   activeUsers: [],
//   totalUsersList: [],
//   isLoading: false,
//   currentPage: 1,
//   totalPages: 0,
//   selectedUserId: null, // Store selected user ID
//   selectedUser: null,
//   loadingUser: false,

//   setSelectedUserId: (userId) => set({ selectedUserId: userId }),

//   fetchNewUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchNewUsers(page);
//       set({ newUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching new users:", error);
//     }
//   },

//   fetchIncompleteUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchIncompleteUsers(page);
//       set({ incompleteUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching incomplete users:", error);
//     }
//   },

//   fetchDeletedUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchDeletedUsers(page);
//       set({ deletedUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching deleted users:", error);
//     }
//   },

//   fetchActiveUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchActiveUsers(page);
//       set({ activeUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching active users:", error);
//     }
//   },

//   fetchTotalUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchTotalUsers(page);
//       set({ totalUsersList: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching total users:", error);
//     }
//   },

//   fetchUserById: async () => {
//     set((state) => ({ loadingUser: true }));
//     try {
//       const state = useUserStore.getState();
//       if (!state.selectedUserId) {
//         console.warn("No user selected.");
//         set({ loadingUser: false });
//         return;
//       }

//       const response = await fetchUserById(state.selectedUserId);
//       set({ selectedUser: response.data.user, loadingUser: false });
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//       set({ loadingUser: false });
//     }
//   },
// }));

// export default useUserStore;














// import { create } from "zustand";
// import { 
//   fetchNewUsers, 
//   fetchIncompleteUsers, 
//   fetchDeletedUsers, 
//   fetchActiveUsers, 
//   fetchTotalUsers, 
//   fetchUserById 
// } from "@/api/userApi";

// const useUserStore = create((set, get) => ({
//   newUsers: [],
//   incompleteUsers: [],
//   deletedUsers: [],
//   activeUsers: [],
//   totalUsersList: [],
//   isLoading: false,
//   currentPage: 1,
//   totalPages: 0,
//   selectedUserId: null, // Store selected user ID
//   selectedUser: null,
//   loadingUser: false,

//   // Set the selected user ID and log it
//   setSelectedUserId: (userId) => {
//     console.log("Setting selectedUserId:", userId);
//     set({ selectedUserId: userId });
//   },

//   fetchNewUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchNewUsers(page);
//       set({ newUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching new users:", error);
//     }
//   },

//   fetchIncompleteUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchIncompleteUsers(page);
//       set({ incompleteUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching incomplete users:", error);
//     }
//   },

//   fetchDeletedUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchDeletedUsers(page);
//       set({ deletedUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching deleted users:", error);
//     }
//   },

//   fetchActiveUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchActiveUsers(page);
//       set({ activeUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching active users:", error);
//     }
//   },

//   fetchTotalUsers: async (page = 1) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchTotalUsers(page);
//       set({ totalUsersList: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching total users:", error);
//     }
//   },

//   fetchUserById: async () => {
//     set({ loadingUser: true });
//     try {
//       const { selectedUserId } = get();
//       console.log("Fetching user with id:", selectedUserId);
//       if (!selectedUserId) {
//         console.warn("No user selected.");
//         set({ loadingUser: false });
//         return;
//       }
//       const response = await fetchUserById(selectedUserId);
//       set({ selectedUser: response.data, loadingUser: false });
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//       set({ loadingUser: false });
//     }
//   },
// }));

// export default useUserStore;














import { create } from "zustand";
import { persist } from "zustand/middleware";
import { 
  fetchNewUsers, 
  fetchIncompleteUsers, 
  fetchDeletedUsers, 
  fetchActiveUsers, 
  fetchTotalUsers, 
  fetchUserById ,
  verifyIdProof 
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

      // Set the selected user ID and log it
      setSelectedUserId: (userId) => {
        console.log("Setting selectedUserId:", userId);
        set({ selectedUserId: userId });
      },

      fetchNewUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchNewUsers(page);
          set({ newUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching new users:", error);
        }
      },

      fetchIncompleteUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchIncompleteUsers(page);
          set({ incompleteUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching incomplete users:", error);
        }
      },

      fetchDeletedUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchDeletedUsers(page);
          set({ deletedUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching deleted users:", error);
        }
      },

      fetchActiveUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchActiveUsers(page);
          set({ activeUsers: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching active users:", error);
        }
      },

      fetchTotalUsers: async (page = 1) => {
        set({ isLoading: true });
        try {
          const data = await fetchTotalUsers(page);
          set({ totalUsersList: data.users || [], totalPages: data.totalPages || 0, isLoading: false });
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
    }),
    {
      name: "user-store", // name of the item in local storage
      partialize: (state) => ({ selectedUserId: state.selectedUserId }),
    }
    
  )
);

export default useUserStore;

