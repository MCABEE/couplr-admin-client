import api from "./axiosInstance";

export const fetchImagePosts = async (pageNumber = 1, pageSize = 1) => {
  try {
    const response = await api.get("/posts", {
      params: {
        pageSize,
        pageNumber,
        contentType: "image",
      },
    });
    console.log(response);
    return response.data.data;
    // adjust if needed
  } catch (error) {
    console.error("Error fetching image posts:", error);
    throw error;
  }
};

export const fetchUserPostsById = async (
  userId,
  pageNumber = 1,
  pageSize = 10
) => {
  try {
    const response = await api.get(`/admin/users/${userId}/posts`, {
      params: {
        pageNumber,
        pageSize,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    throw error;
  }
};
