// import React from "react";

// const Table = () => {
//   return (
//     <div>
//       <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
//         <thead className="bg-[#C0D8F6] ">
//           <tr className=" p-2 bg-[#C0D8F6]">
//             <th className="text-base   border-[#F0F4F9] rounded-l-2xl  p-2">No</th>
//             <th className="text-base border-l-4 border-[#F0F4F9]  p-2">
//               Firstlook_ID
//             </th>
//             <th className="text-base border-l-4 border-[#F0F4F9]  p-2">
//               Current Location
//             </th>
//             <th className="text-base border-l-4 border-[#F0F4F9]   p-2">Gender</th>

//             <th className="text-base border-l-4 border-[#F0F4F9]   p-2">Login</th>
//             <th className="text-base border-l-4 border-[#F0F4F9]   p-2 rounded-r-2xl">
//               Status
//             </th>
//           </tr>
//         </thead>
//         <tbody className="">
//           <tr>
//             <td className="rounded-t-2xl p-2 bg-[#C0D8F6]" colSpan="6">
//               2024 September 01, Sunday{" "}
//             </td>
//           </tr>
//           <tr className="bg-white border-">
//             <td className="p-2">1</td>
//             <td className="border-l-4 border-[#C0D8F6] p-2">ABC123</td>
//             <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>
//             <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>

//             <td className=" border-x-4 border-[#C0D8F6] p-2">Yes</td>
//             <td className="  p-2">Active</td>
//           </tr>
//           <tr className="bg-white">
//             <td className=" p-2">1</td>
//             <td className=" border-l-4 border-[#C0D8F6] p-2">ABC123</td>
//             <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>
//             <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>

//             <td className=" border-x-4 border-[#C0D8F6] p-2">Yes</td>
//             <td className=" p-2">Active</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

// "use client"
// import useUserStore from "@/lib/store/userStore";

// const Table = () => {
//   const { users, isLoading, totalUsers } = useUserStore();

//   return (
//     <div>
//       <h2 className="text-lg font-bold mb-4">Total Users: {totalUsers}</h2>

//       {isLoading ? (
//         <p className="text-center text-black">Loading...</p>
//       ) : (
//         <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
//           <thead className="bg-[#C0D8F6]">
//             <tr>
//               <th className="p-2">No</th>
//               <th className="p-2">User ID</th>
//               <th className="p-2">Display Name</th>
//               <th className="p-2">Gender</th>
//               <th className="p-2">Marital Status</th>
//               <th className="p-2">Country Code</th>
//               <th className="p-2">Current Location</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Signup Status</th>
//               <th className="p-2">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={user._id} className="bg-white">
//                   <td className="p-2">{index + 1}</td>
//                   <td className="p-2">{user._id}</td>
//                   <td className="p-2">{user.displayName || "N/A"}</td>
//                   <td className="p-2">{user.gender || "N/A"}</td>
//                   <td className="p-2">
//                     {user.personalInfo?.maritalStatus || "N/A"}
//                   </td>
//                   <td className="p-2">
//                     {user.registrationInformation?.countryCode || "N/A"}
//                   </td>
//                   <td className="p-2">
//                     {user.currentLocation
//                       ? `${user.currentLocation.city}, ${user.currentLocation.country}`
//                       : "N/A"}
//                   </td>
//                   <td className="p-2">{user.status}</td>
//                   <td className="p-2">{user.signupStatus}</td>
//                   <td className="p-2">
//                     {new Date(user.createdAt).toLocaleDateString()}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="10" className="p-2 text-center">
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Table;

// "use client";
// import { useEffect } from "react";
// import useUserStore from "@/lib/store/userStore";

// const Table = () => {
//   const { users, isLoading, totalUsers, totalPages, currentPage, setPage } = useUserStore();

//   useEffect(() => {
//     setPage(1); // Load first page initially
//   }, [setPage]);

//   return (
//     <div>
//       <h2 className="text-lg font-bold mb-4">Total Users: {totalUsers}</h2>

//       {isLoading ? (
//         <p className="text-center text-black">Loading...</p>
//       ) : (
//         <>
//           <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
//             <thead className="bg-[#C0D8F6]">
//               <tr>
//                 <th className="p-2">No</th>
//                 <th className="p-2">User ID</th>
//                 <th className="p-2">Display Name</th>
//                 <th className="p-2">Gender</th>
//                 <th className="p-2">Marital Status</th>
//                 <th className="p-2">Country Code</th>
//                 <th className="p-2">Current Location</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Signup Status</th>
//                 <th className="p-2">Created At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.length > 0 ? (
//                 users.map((user, index) => (
//                   <tr key={user._id} className="bg-white">
//                     <td className="p-2">{index + 1 + (currentPage - 1) * 10}</td>
//                     <td className="p-2">{user._id}</td>
//                     <td className="p-2">{user.displayName || "N/A"}</td>
//                     <td className="p-2">{user.gender || "N/A"}</td>
//                     <td className="p-2">{user.personalInfo?.maritalStatus || "N/A"}</td>
//                     <td className="p-2">{user.registrationInformation?.countryCode || "N/A"}</td>
//                     <td className="p-2">
//                       {user.currentLocation
//                         ? `${user.currentLocation.city}, ${user.currentLocation.country}`
//                         : "N/A"}
//                     </td>
//                     <td className="p-2">{user.status}</td>
//                     <td className="p-2">{user.signupStatus}</td>
//                     <td className="p-2">{new Date(user.createdAt).toLocaleDateString()}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="10" className="p-2 text-center">
//                     No users found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="flex justify-center items-center mt-4">
//             <button
//               className="px-4 py-2 border rounded bg-gray-300 text-black mx-2"
//               onClick={() => setPage(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span className="px-4">{currentPage} / {totalPages}</span>
//             <button
//               className="px-4 py-2 border rounded bg-gray-300 text-black mx-2"
//               onClick={() => setPage(currentPage + 1)}
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

// "use client";
// import { useEffect, useState } from "react";
// import useUserStore from "@/lib/store/userStore";

// const Table = () => {
//   const { newUsers, isLoading, fetchNewUsers, totalPages } = useUserStore();
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetchNewUsers(currentPage);
//   }, [fetchNewUsers, currentPage]);

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div>
//       <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
//         <thead className="bg-[#C0D8F6]">
//           <tr className="p-2 bg-[#C0D8F6]">
//             <th className="text-base border-[#F0F4F9] rounded-l-2xl p-2">No</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Firstlook_ID</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Current Location</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Gender</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Marital Status</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Country Code</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {isLoading ? (
//             <tr>
//               <td colSpan="7" className="text-center p-4">Loading...</td>
//             </tr>
//           ) : newUsers.length > 0 ? (
//             newUsers.map((user, index) => (
//               <tr key={user._id} className="bg-white">
//                 <td className="p-2">{index + 1 + (currentPage - 1) * 10}</td>
//                 <td className="border-l-4 border-[#C0D8F6] p-2">{user._id}</td>
//                 <td className="border-l-4 border-[#C0D8F6] p-2">
//                   {user.currentLocation?.city || "N/A"}, {user.currentLocation?.country || "N/A"}
//                 </td>
//                 <td className="border-l-4 border-[#C0D8F6] p-2">{user.gender || "N/A"}</td>
//                 <td className="border-l-4 border-[#C0D8F6] p-2">
//                   {user.personalInfo?.maritalStatus || "N/A"}
//                 </td>
//                 <td className="border-l-4 border-[#C0D8F6] p-2">
//                   {user.registrationInformation?.countryCode || "N/A"}
//                 </td>
//                 <td className="border-l-4 border-[#C0D8F6] p-2">{user.status || "N/A"}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center p-4">No users found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-4 space-x-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Table;

// "use client";
// import { useEffect, useState } from "react";
// import useUserStore from "@/lib/store/userStore";
// import dayjs from "dayjs"; // For formatting dates
// import weekday from "dayjs/plugin/weekday";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(weekday);
// dayjs.extend(utc);
// dayjs.extend(timezone);

// const Table = () => {
//   const { newUsers, isLoading, fetchNewUsers, totalPages } = useUserStore();
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetchNewUsers(currentPage);
//   }, [fetchNewUsers, currentPage]);

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   // Group users by createdAt (Date Only)
//   const groupedUsers = newUsers.reduce((acc, user) => {
//     const date = dayjs(user.createdAt).format("YYYY MMMM DD, dddd"); // Example: "2025 March 22, Saturday"
//     if (!acc[date]) acc[date] = [];
//     acc[date].push(user);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
//         <thead className="bg-[#C0D8F6]">
//           <tr className="p-2 bg-[#C0D8F6]">
//             <th className="text-base border-[#F0F4F9] rounded-l-2xl p-2">No</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Firstlook_ID</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Current Location</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Gender</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Marital Status</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Country Code</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {isLoading ? (
//             <tr>
//               <td colSpan="7" className="text-center p-4">Loading...</td>
//             </tr>
//           ) : Object.keys(groupedUsers).length > 0 ? (
//             Object.entries(groupedUsers).map(([date, users]) => (
//               <tbody key={date}>
//                 {/* Date Header Row */}
//                 <tr>
//                   <td className="rounded-t-2xl p-2 bg-[#C0D8F6] text-center font-bold" colSpan="7">
//                     {date}
//                   </td>
//                 </tr>
//                 {/* User Rows */}
//                 {users.map((user, index) => (
//                   <tr key={user._id} className="bg-white">
//                     <td className="p-2">{index + 1}</td>
//                     <td className="border-l-4 border-[#C0D8F6] p-2">{user._id}</td>
//                     <td className="border-l-4 border-[#C0D8F6] p-2">
//                       {user.currentLocation?.city || "N/A"}, {user.currentLocation?.country || "N/A"}
//                     </td>
//                     <td className="border-l-4 border-[#C0D8F6] p-2">{user.gender || "N/A"}</td>
//                     <td className="border-l-4 border-[#C0D8F6] p-2">
//                       {user.personalInfo?.maritalStatus || "N/A"}
//                     </td>
//                     <td className="border-l-4 border-[#C0D8F6] p-2">
//                       {user.registrationInformation?.countryCode || "N/A"}
//                     </td>
//                     <td className="border-l-4 border-[#C0D8F6] p-2">{user.status || "N/A"}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center p-4">No users found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-4 space-x-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Table;

// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import useUserStore from "@/lib/store/userStore";
// import dayjs from "dayjs"; // Formatting dates
// import weekday from "dayjs/plugin/weekday";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(weekday);
// dayjs.extend(utc);
// dayjs.extend(timezone);

// const Table = () => {
//   const { newUsers, isLoading, fetchNewUsers } = useUserStore();
//   const [groupedUsers, setGroupedUsers] = useState({});

//   useEffect(() => {
//     fetchNewUsers(1);
//   }, [fetchNewUsers]);

//   useEffect(() => {
//     if (newUsers.length > 0) {
//       // Group users by formatted date
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

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
//           <thead className="bg-[#C0D8F6]">
//             <tr className="p-2 bg-[#C0D8F6]">
//               <th className="text-base border-[#F0F4F9] rounded-l-2xl p-2">No</th>
//               <th className="text-base border-l-4 border-[#F0F4F9] p-2">Firstlook_ID</th>
//               <th className="text-base border-l-4 border-[#F0F4F9] p-2">Current Location</th>
//               <th className="text-base border-l-4 border-[#F0F4F9] p-2">Gender</th>
//               <th className="text-base border-l-4 border-[#F0F4F9] p-2">Login</th>
//               <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedUsers).map(([date, users], dateIndex) => (
//               <React.Fragment key={date}>
//                 {/* Date Header Row */}
//                 <tr>
//                   <td className="rounded-t-2xl p-2 bg-[#C0D8F6]" colSpan="6">
//                     {date}
//                   </td>
//                 </tr>
//                 {/* User Rows */}
//                 {users.map((user, index) => (
//                   <tr key={user._id} className="bg-white">
//                     <td className="p-2">{index + 1}</td>
//                     <td className="border-l-4 border-[#C0D8F6] p-2">{user._id}</td>
//                     <td className="border-l-4 border-[#C0D8F6] p-2">
//                       {user.currentLocation?.city || "N/A"}, {user.currentLocation?.country || "N/A"}
//                     </td>
//                     <td className="border-l-4 border-[#C0D8F6] p-2">{user.gender || "N/A"}</td>
//                     <td className="border-x-4 border-[#C0D8F6] p-2">
//                       {user.isVerified ? "Yes" : "No"}
//                     </td>
//                     <td className="p-2">{user.status}</td>
//                   </tr>
//                 ))}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Table;

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
//   const { newUsers, isLoading, fetchNewUsers, totalPages } = useUserStore();
//   const [groupedUsers, setGroupedUsers] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetchNewUsers(currentPage);
//   }, [currentPage]);

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
//                       <td className="p-2">{user.status}</td>
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





// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import useUserStore from "@/lib/store/userStore";
// import dayjs from "dayjs";
// import weekday from "dayjs/plugin/weekday";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(weekday);
// dayjs.extend(utc);
// dayjs.extend(timezone);

// const Table = () => {
//   const { newUsers, isLoading, fetchNewUsers, totalPages, fetchUserById } =
//     useUserStore();
//   const [groupedUsers, setGroupedUsers] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const router = useRouter(); // Use Next.js router for navigation

//   useEffect(() => {
//     fetchNewUsers(currentPage);
//   }, [currentPage]);

//   useEffect(() => {
//     if (newUsers.length > 0) {
//       const grouped = newUsers.reduce((acc, user) => {
//         const formattedDate = dayjs(user.createdAt).format(
//           "YYYY MMMM DD, dddd"
//         );
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

//   // Handle user click and navigate
//   // const handleUserClick = (userId) => {
//   //   fetchUserById(userId); // Fetch user details when clicked
//   // };

//   const handleUserClick = (userId) => {
//     useUserStore.getState().setSelectedUserId(userId);
//     router.push("newUserDetails");
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
//                 <th className="text-base border-[#F0F4F9] rounded-l-2xl p-2">
//                   No
//                 </th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2">
//                   Firstlook_ID
//                 </th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2">
//                   Current Location
//                 </th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2">
//                   Gender
//                 </th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2">
//                   Login
//                 </th>
//                 <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">
//                   Status
//                 </th>
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
//                       <td
//                         className="border-l-4 border-[#C0D8F6] p-2 text-blue-500 cursor-pointer underline"
//                         onClick={() => handleUserClick(user._id)}
//                       >
//                         {user._id}
//                       </td>
//                       <td className="border-l-4 border-[#C0D8F6] p-2">
//                         {user.currentLocation?.city || "N/A"},{" "}
//                         {user.currentLocation?.country || "N/A"}
//                       </td>
//                       <td className="border-l-4 border-[#C0D8F6] p-2">
//                         {user.gender || "N/A"}
//                       </td>
//                       <td className="border-x-4 border-[#C0D8F6] p-2">
//                         {user.isVerified ? "Yes" : "No"}
//                       </td>
//                       <td className="p-2">{user.status}</td>
//                     </tr>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="flex justify-between items-center mt-4 gap-4">
//             <button
//               className={`px-4 py-2 border rounded ${
//                 currentPage === 1 ? "bg-gray-300" : "bg-[#72acf2] text-white"
//               }`}
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span className="text-lg text-black">{`Page ${currentPage} of ${totalPages}`}</span>
//             <button
//               className={`px-4 py-2 border rounded ${
//                 currentPage === totalPages
//                   ? "bg-gray-300"
//                   : "bg-[#72acf2] text-white"
//               }`}
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
import { useRouter } from "next/navigation";
import useUserStore from "@/lib/store/userStore";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);

const Table = () => {
  const { newUsers, isLoading, fetchNewUsers, totalPages } = useUserStore();
  const [groupedUsers, setGroupedUsers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    fetchNewUsers(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (newUsers.length > 0) {
      const grouped = newUsers.reduce((acc, user) => {
        const formattedDate = dayjs(user.createdAt).format("YYYY MMMM DD, dddd");
        if (!acc[formattedDate]) {
          acc[formattedDate] = [];
        }
        acc[formattedDate].push(user);
        return acc;
      }, {});
      setGroupedUsers(grouped);
    }
  }, [newUsers]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // On click, set the selected user ID and route to /controlpanel/newusersignup
  const handleUserClick = (userId) => {
    useUserStore.getState().setSelectedUserId(userId);
    router.push("/controlPanel/newUserDetails");
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
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">Current Location</th>
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">Gender</th>
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">Login</th>
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
                      <td
                        className="border-l-4 border-[#C0D8F6] p-2 text-blue-500 cursor-pointer underline"
                        onClick={() => handleUserClick(user._id)}
                      >
                        {user.displayName}
                      </td>
                      <td className="border-l-4 border-[#C0D8F6] p-2">
                        {user.currentLocation?.city || "N/A"},{" "}
                        {user.currentLocation?.country || "N/A"}
                      </td>
                      <td className="border-l-4 border-[#C0D8F6] p-2">
                        {user.gender || "N/A"}
                      </td>
                      <td className="border-x-4 border-[#C0D8F6] p-2">
                        {user.isVerified ? "Yes" : "No"}
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
