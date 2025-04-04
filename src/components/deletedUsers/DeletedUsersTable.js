// // "use client";
// // import { useEffect, useState } from "react";
// // import useUserStore from "@/lib/store/userStore";

// // const DeletedAccountsTable = () => {
// //   const { deletedUsers, isLoading, fetchDeletedUsers, totalPages } =
// //     useUserStore();
// //   const [currentPage, setCurrentPage] = useState(2);

// //   useEffect(() => {
// //     fetchDeletedUsers(currentPage);
// //   }, [fetchDeletedUsers, currentPage]);

// //   const handlePageChange = (newPage) => {
// //     if (newPage >= 1 && newPage <= totalPages) {
// //       setCurrentPage(newPage);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-lg font-bold mb-4">Deleted Accounts</h2>
// //       {isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <>
// //           <table className="w-full border-collapse border border-gray-300">
// //             <thead className="bg-gray-200 text-black">
// //               <tr>
// //                 <th className="border border-gray-300 p-2">No</th>
// //                 <th className="border border-gray-300 p-2">User ID</th>
// //                 <th className="border border-gray-300 p-2">Display Name</th>
// //                 <th className="border border-gray-300 p-2">Status</th>
// //                 <th className="border border-gray-300 p-2">Created At</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {deletedUsers.length > 0 ? (
// //                 deletedUsers.map((user, index) => (
// //                   <tr key={user._id} className="bg-white">
// //                     <td className="border border-gray-300 p-2">{index + 1}</td>
// //                     <td className="border border-gray-300 p-2">{user._id}</td>
// //                     <td className="border border-gray-300 p-2">
// //                       {user.displayName || "N/A"}
// //                     </td>
// //                     <td className="border border-gray-300 p-2">
// //                       {user.status}
// //                     </td>
// //                     <td className="border border-gray-300 p-2">
// //                       {new Date(user.createdAt).toLocaleDateString()}
// //                     </td>
// //                   </tr>
// //                 ))
// //               ) : (
// //                 <tr>
// //                   <td colSpan="5" className="p-2 text-center">
// //                     No deleted users found.
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>

// //           {/* Pagination */}
// //           <div className="flex justify-center mt-4 space-x-4">
// //             <button
// //               onClick={() => handlePageChange(currentPage - 1)}
// //               disabled={currentPage === 1}
// //               className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
// //             >
// //               Previous
// //             </button>
// //             <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
// //             <button
// //               onClick={() => handlePageChange(currentPage + 1)}
// //               disabled={currentPage === totalPages}
// //               className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
// //             >
// //               Next
// //             </button>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default DeletedAccountsTable;






// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import useUserStore from "@/lib/store/userStore";
// import dayjs from "dayjs";
// import weekday from "dayjs/plugin/weekday";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(weekday);
// dayjs.extend(utc);
// dayjs.extend(timezone);

// const Table = () => {
//   const { newUsers, isLoading, fetchDeletedUsers, totalPages } = useUserStore();
//   const [groupedUsers, setGroupedUsers] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetchDeletedUsers(currentPage);
//   }, [currentPage]);
  
//   console.log(groupedUsers);
  

//   useEffect(() => {
//     if (newUsers.length > 0) {
//       const grouped = newUsers.reduce((acc, user) => {
//         const formattedDate = dayjs(user.createdAt).format("YYYY MMMM DD, dddd");
//         if (!acc[formattedDate]) {
//           acc[formattedDate] = [];
//         }
//         acc[formattedDate].push(user);
//         return acc;
//       }, {});
//       setGroupedUsers(grouped);
//     }
//   }, [newUsers]);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
//             <thead className="bg-[#C0D8F6]">
//               <tr className="p-2 bg-[#C0D8F6]">
//                 <th className="text-base border-[#F0F4F9] rounded-l-2xl p-2">No</th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2">Firstlook_ID</th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2">Current Location</th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2">Gender</th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2">Login</th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(groupedUsers).map(([date, users]) => (
//                 <React.Fragment key={date}>
//                   {/* Date Header */}
//                   <tr>
//                     <td className="rounded-t-2xl p-2 bg-[#C0D8F6]" colSpan="6">
//                       {date}
//                     </td>
//                   </tr>
//                   {/* User Rows */}
//                   {users.map((user, index) => (
//                     <tr key={user._id} className="bg-white">
//                       <td className="p-2">{index + 1}</td>
//                       <td className="border-l-4 border-[#C0D8F6] p-2">{user._id}</td>
//                       <td className="border-l-4 border-[#C0D8F6] p-2">
//                         {user.currentLocation?.city || "N/A"}, {user.currentLocation?.country || "N/A"}
//                       </td>
//                       <td className="border-l-4 border-[#C0D8F6] p-2">{user.gender || "N/A"}</td>
//                       <td className="border-x-4 border-[#C0D8F6] p-2">
//                         {user.isVerified ? "Yes" : "No"}
//                       </td>
//                       {/* <td className="p-2">{user.status}</td> */}
//                       <td className="p-2">{user.signupStatus}</td>

//                     </tr>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="flex justify-between items-center mt-4 gap-4">
//             <button
//               className={`px-4 py-2 border rounded ${currentPage === 1 ? "bg-gray-300" : "bg-[#72acf2] text-white"}`}
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span className="text-lg text-black">{`Page ${currentPage} of ${totalPages}`}</span>
//             <button
//               className={`px-4 py-2 border rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-[#72acf2] text-white"}`}
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Table;




"use client";
import React, { useEffect, useState } from "react";
import useUserStore from "@/lib/store/userStore";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);

const Table = () => {
  const { deletedUsers, isLoading, fetchDeletedUsers, totalPages } = useUserStore(); // ✅ Use deletedUsers instead of newUsers
  const [groupedUsers, setGroupedUsers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchDeletedUsers(currentPage); // ✅ Fetch deleted users
  }, [currentPage]);

  useEffect(() => {
    if (deletedUsers.length > 0) { // ✅ Use deletedUsers
      const grouped = deletedUsers.reduce((acc, user) => {
        const formattedDate = dayjs(user.createdAt).format("YYYY MMMM DD, dddd");
        if (!acc[formattedDate]) {
          acc[formattedDate] = [];
        }
        acc[formattedDate].push(user);
        return acc;
      }, {});
      setGroupedUsers(grouped);
    }
  }, [deletedUsers]); // ✅ Update based on deletedUsers

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
            <thead className="bg-[#C0D8F6]">
              <tr className="p-2 bg-[#C0D8F6]">
                <th className="text-base border-[#F0F4F9] rounded-l-2xl p-2">No</th>
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">Firstlook_ID</th>
                {/* <th className="text-base border-l-4 border-[#F0F4F9] p-2">Display Name</th> */}
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">Gender</th>
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">Created At</th>

                <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">Status</th>

              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedUsers).map(([date, users]) => (
                <React.Fragment key={date}>
                  {/* Date Header */}
                  <tr>
                    <td className="rounded-t-2xl p-2 bg-[#C0D8F6]" colSpan="6">
                      {date}
                    </td>
                  </tr>
                  {/* User Rows */}
                  {users.map((user, index) => (
                    <tr key={user._id} className="bg-white">
                      <td className="p-2">{index + 1}</td>
                      {/* <td className="border-l-4 border-[#C0D8F6] p-2">{user._id}</td> */}
                      <td className="border-l-4 border-[#C0D8F6] p-2">{user.displayName || "N/A"}</td>

                      {/* <td className="border-l-4 border-[#C0D8F6] p-2">
                        {user.currentLocation?.city || "N/A"}, {user.currentLocation?.country || "N/A"}
                      </td> */}
                      <td className="border-l-4 border-[#C0D8F6] p-2">{user.gender || "N/A"}</td>
                      <td className="border-x-4 border-[#C0D8F6] p-2">
                      {dayjs(user.createdAt).format("YYYY-MM-DD")}
                      </td>
                      <td className="p-2">{user.status}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4 gap-4">
            <button
              className={`px-4 py-2 border rounded ${currentPage === 1 ? "bg-gray-300" : "bg-[#72acf2] text-white"}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-lg text-black">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              className={`px-4 py-2 border rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-[#72acf2] text-white"}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
