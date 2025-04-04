// import api from "./axiosInstance";

// export const fetchUsers = async (status = "NEW") => {
//   try {
//     const response = await api.get(`/users`, {
//       params: {
//         pageSize: 100,
//         pageNumber: 1,
//         status: status,
//       },
      
//     });

//     console.log(response)
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// };









// import api from "./axiosInstance";

// export const fetchUsers = async (status = "NEW") => {
//   try {
//     const response = await api.get(`/users`, {
//       params: {
//         pageSize: 100,
//         pageNumber: 1,
//         status: status,
//       },
//     });

//     return response.data.data; // Extract the `data` field from the response
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// };








// import api from "./axiosInstance";
// export const fetchUsers = async (status = "NEW", pageNumber = 1, pageSize = 10) => {
//   try {
//     const response = await api.get(`/users`, {
//       params: {
//         pageSize,
//         pageNumber,
//         status,
//       },
//     });

//     return response.data.data; // Return full data object
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// };






























import api from "./axiosInstance";

export const fetchNewUsers = async (pageNumber = 1, pageSize = 10) => {
  return fetchUsersByStatus("NEW", pageNumber, pageSize);
};

export const fetchIncompleteUsers = async (pageNumber = 1, pageSize = 10) => {
  return fetchUsersByStatus("INCOMPLETE", pageNumber, pageSize);
};

export const fetchDeletedUsers = async (pageNumber = 1, pageSize = 10) => {
  return fetchUsersByStatus("DEACTIVE", pageNumber, pageSize);
};

export const fetchActiveUsers = async (pageNumber = 1, pageSize = 10) => {
  return fetchUsersByStatus("ACTIVE", pageNumber, pageSize);
};

export const fetchTotalUsers = async (pageNumber = 1, pageSize = 10) => {
  return fetchUsersByStatus("ALL", pageNumber, pageSize);
};

// Reusable function to fetch users by status
const fetchUsersByStatus = async (status, pageNumber = 1, pageSize = 10) => {
  try {
    const response = await api.get(`/users`, {
      params: {
        pageSize,
        pageNumber,
        status,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ${status} users:`, error);
    throw error;
  }
};



export const fetchUserById = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    console.log(response)
    return response.data;
     // Ensure this matches your API response format
  } 
  catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    throw error;
  }
  
};


export const verifyIdProof = async (userId, status) => {
  try {
    const response = await api.patch(`/users/${userId}/verify`, {
      verificationStatus: status,
    });

    return response.data;
  } catch (error) {
    console.error(`Error updating ID proof status:`, error);
    throw error;
  }
};


