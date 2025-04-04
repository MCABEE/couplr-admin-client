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
  const { incompleteUsers, isLoading, fetchIncompleteUsers, totalPages } =
    useUserStore();
  const [groupedUsers, setGroupedUsers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch only incomplete users
  useEffect(() => {
    fetchIncompleteUsers(currentPage);
  }, [currentPage]);

  // Debugging: Check API response
  useEffect(() => {
    if (incompleteUsers.length > 0) {
      // ✅ Use deletedUsers
      const grouped = incompleteUsers.reduce((acc, user) => {
        const formattedDate = dayjs(user.createdAt).format(
          "YYYY MMMM DD, dddd"
        );
        if (!acc[formattedDate]) {
          acc[formattedDate] = [];
        }
        acc[formattedDate].push(user);
        return acc;
      }, {});
      setGroupedUsers(grouped);
    }
  }, [incompleteUsers]); // ✅ Update based on deletedUsers

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
              <tr className="p-2 bg-[#C0D8F6] font-light">
                <th className="text-base border-[#F0F4F9] rounded-l-2xl p-2">
                  No
                </th>
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">
                  Login
                </th>
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">
                  Mobile Verification
                </th>
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">
                  Gender
                </th>
                <th className="text-base border-l-4 border-[#F0F4F9] p-2">
                  Marital Status
                </th>
                <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">
                  Level
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedUsers).length > 0 ? (
                Object.entries(groupedUsers).map(([date, users]) => (
                  <React.Fragment key={date}>
                    {/* Date Header */}
                    <tr>
                      <td
                        className="rounded-t-2xl p-2 bg-[#C0D8F6]"
                        colSpan="6"
                      >
                        {date}
                      </td>
                    </tr>
                    {/* User Rows */}
                    {users.map((user, index) => (
                      <tr key={user._id} className="bg-white">
                        <td className="p-2">{index + 1}</td>

                        <td className="border-l-4 border-[#C0D8F6] p-2">
                          {user.currentLocation?.country || "N/A"}
                        </td>
                        <td className="border-l-4 border-[#C0D8F6] p-2">
                          {"Verified"}
                        </td>
                        <td className="border-l-4 border-[#C0D8F6] p-2">
                          {user.gender || "N/A"}
                        </td>

                        <td className="border-x-4 border-[#C0D8F6] p-2">
                          {user.personalInfo?.maritalStatus || "N/A"}
                        </td>
                        <td className="p-2">{user.level || "N/A"}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-2 text-center">
                    No incomplete users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4 gap-4">
            <button
              className={`px-4 py-2 border rounded ${
                currentPage === 1 ? "bg-gray-300" : "bg-[#72acf2] text-white"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-lg text-black">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              className={`px-4 py-2 border rounded ${
                currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-[#72acf2] text-white"
              }`}
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
