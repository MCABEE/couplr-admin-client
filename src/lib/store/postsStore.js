// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { fetchImagePosts } from "@/api/postsApi";
// const postsStore = create(
//     persist(
//       (set, get) => ({
//  imagePosts: [],

// imagePostsPage: 1,
// imagePostsTotalPages: 1,

//   fetchImagePosts: async (page = 1, size = 10) => {
//     set({ isLoading: true });
//     try {
//       const data = await fetchImagePosts(page, size);
//       set({
//         imagePosts: data.users || [],
//         imagePostsPage: page,
//         imagePostsTotalPages: data.totalPages || 1,
//         isLoading: false,
//       });
//     } catch (error) {
//       set({ isLoading: false });
//       console.error("Error fetching image posts:", error);
//     }
//   },
//             }),
//             {
//               name: "user-store", // name of the item in local storage
//               partialize: (state) => ({ selectedUserId: state.selectedUserId }),
//             }
//           )
//         );

//         export default postsStore;


import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchImagePosts,fetchUserPostsById  } from "@/api/postsApi";

const postsStore = create(
  persist(
    (set, get) => ({
      selectedUserId: null,
      imagePosts: [],
      imagePostsPage: 1,
      imagePostsTotalPages: 1,
      isLoading: false,
      userPosts: [],
userPostsPage: 1,
userPostsTotalPages: 1,

      setSelectedUserId: (id) => {
        localStorage.setItem("selectedUserId", id);
        set({ selectedUserId: id });
      },

      fetchImagePosts: async (page = 1, size = 10) => {
        set({ isLoading: true });

        try {
          const data = await fetchImagePosts(page, size);
          set({
            imagePosts: data.users || [], // or data.users depending on your API
            imagePostsPage: page,
            imagePostsTotalPages: data.totalPages || 1,
            isLoading: false,
          });
        } catch (error) {
          console.error("Error fetching image posts:", error);
          set({ isLoading: false });
        }
      },
      fetchUserPostsById: async (userId, page = 1, size = 10) => {
        set({ isLoading: true });
        try {
          const data = await fetchUserPostsById(userId, page, size);
          set({
            userPosts: data.posts || [],
            userPostsPage: page,
            userPostsTotalPages: data.totalPages || 1,
            isLoading: false,
          });
        } catch (error) {
          console.error("Error fetching user posts:", error);
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "posts-store",
      partialize: (state) => ({
        selectedUserId: state.selectedUserId,
      }),
    }
  )
);

export default postsStore;
