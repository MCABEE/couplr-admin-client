// import React from "react";

// const Table = () => {
//   return (
//     <div>
//       <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
//         <thead className="bg-[#C0D8F6] ">
//           <tr className=" p-2 bg-[#C0D8F6] ">
//             <th className="text-base   border-[#F0F4F9] rounded-l-2xl  p-2">No</th>
//             <th className="text-base border-l-4 border-[#F0F4F9]  p-2">
//               Firstlook_ID
//             </th>
//             <th className="text-base border-l-4 border-[#F0F4F9]  p-2">
//               Current Location
//             </th>
//             <th className="text-base border-l-4 border-[#F0F4F9]   p-2">Gender</th>

//             <th className="text-base border-l-4 border-[#F0F4F9]   p-2">Photos</th>
//             <th className="text-base border-l-4 border-[#F0F4F9]   p-2 rounded-r-2xl">
//             View
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
//             <td className="  p-2">View</td>
//           </tr>
//           <tr className="bg-white">
//             <td className=" p-2">1</td>
//             <td className=" border-l-4 border-[#C0D8F6] p-2">ABC123</td>
//             <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>
//             <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>

//             <td className=" border-x-4 border-[#C0D8F6] p-2">Yes</td>
//             <td className=" p-2">View</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

// "use client";

// import React, { useEffect } from "react";
// import useUserStore from "@/lib/store/userStore";

// const Table = () => {
//   const { imagePosts, fetchImagePosts } = useUserStore();

//   useEffect(() => {
//     fetchImagePosts(); // Fetch on mount
//   }, [fetchImagePosts]);

//   return (
//     <div>
//       <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
//         <thead className="bg-[#C0D8F6]">
//           <tr className="p-2 bg-[#C0D8F6]">
//             <th className="text-base border-[#F0F4F9] rounded-l-2xl p-2">No</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">
//               Firstlook_ID
//             </th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">
//               Current Location
//             </th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">
//               Gender
//             </th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">
//               Photos
//             </th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">
//               View
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="rounded-t-2xl p-2 bg-[#C0D8F6]" colSpan="6">
//               2024 September 01, Sunday
//             </td>
//           </tr>

//           {imagePosts?.map((user, index) => (
//             <tr key={user._id} className="bg-white">
//               <td className="p-2">{index + 1}</td>
//               <td className="border-l-4 border-[#C0D8F6] p-2">{user._id}</td>
//               <td className="border-l-4 border-[#C0D8F6] p-2">
//                 {user.currentLocation?.city}, {user.currentLocation?.country}
//               </td>
//               <td className="border-l-4 border-[#C0D8F6] p-2">{user.gender}</td>
//               <td className="border-x-4 border-[#C0D8F6] p-2">
//                 {user.totalPosts > 0 ? "Yes" : "No"}
//               </td>
//               <td className="p-2">View</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;




// "use client";

// import React, { useEffect } from "react";
// import postsStore from "@/lib/store/postsStore";

// const Table = () => {
//   const {
//     imagePosts,
//     fetchImagePosts,
//     imagePostsPage,
//     imagePostsTotalPages,
//   } = postsStore();

//   useEffect(() => {
//     fetchImagePosts(imagePostsPage);
//   }, [fetchImagePosts, imagePostsPage]);

//   const handlePrev = () => {
//     if (imagePostsPage > 1) {
//       fetchImagePosts(imagePostsPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (imagePostsPage < imagePostsTotalPages) {
//       fetchImagePosts(imagePostsPage + 1);
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
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2">Photos</th>
//             <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">View</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="rounded-t-2xl p-2 bg-[#C0D8F6]" colSpan="6">
//               2024 September 01, Sunday
//             </td>
//           </tr>

//           {imagePosts?.map((user, index) => (
//             <tr key={user._id} className="bg-white">
//               <td className="p-2">{index + 1 + (imagePostsPage - 1)}</td>
//               <td className="border-l-4 border-[#C0D8F6] p-2">{user._id}</td>
//               <td className="border-l-4 border-[#C0D8F6] p-2">
//                 {user.currentLocation?.city}, {user.currentLocation?.country}
//               </td>
//               <td className="border-l-4 border-[#C0D8F6] p-2">{user.gender}</td>
//               <td className="border-x-4 border-[#C0D8F6] p-2">
//                 {user.totalPosts}
//               </td>
//               <td className="p-2">View</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="mt-4 flex justify-center items-center gap-4">
//         <button
//           onClick={handlePrev}
//           disabled={imagePostsPage === 1}
//           className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//         >
//           Prev
//         </button>
//         <span>
//           Page {imagePostsPage} of {imagePostsTotalPages}
//         </span>
//         <button
//           onClick={handleNext}
//           disabled={imagePostsPage === imagePostsTotalPages}
//           className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Table;





"use client";

import React, { useEffect } from "react";
import postsStore from "@/lib/store/postsStore";
import { useRouter } from "next/navigation";

const Table = () => {
  const router = useRouter();

  const {
    imagePosts,
    fetchImagePosts,
    imagePostsPage,
    imagePostsTotalPages,
    setSelectedUserId,
  } = postsStore();

  useEffect(() => {
    fetchImagePosts(imagePostsPage);
  }, [fetchImagePosts, imagePostsPage]);

  const handlePrev = () => {
    if (imagePostsPage > 1) {
      fetchImagePosts(imagePostsPage - 1);
    }
  };

  const handleNext = () => {
    if (imagePostsPage < imagePostsTotalPages) {
      fetchImagePosts(imagePostsPage + 1);
    }
  };

  const handleViewClick = (userId) => {
    setSelectedUserId(userId); // store in Zustand + localStorage
    router.push("/controlPanel/posts/postPhotos");
  };

  return (
    <div>
      <table className="w-full border-spacing-y-2 border-separate mt-10 text-black">
        <thead className="bg-[#C0D8F6]">
          <tr className="p-2 bg-[#C0D8F6]">
            <th className="text-base border-[#F0F4F9] rounded-l-2xl p-2">No</th>
            <th className="text-base border-l-4 border-[#F0F4F9] p-2">Firstlook_ID</th>
            <th className="text-base border-l-4 border-[#F0F4F9] p-2">Current Location</th>
            <th className="text-base border-l-4 border-[#F0F4F9] p-2">Gender</th>
            <th className="text-base border-l-4 border-[#F0F4F9] p-2">Photos</th>
            <th className="text-base border-l-4 border-[#F0F4F9] p-2 rounded-r-2xl">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="rounded-t-2xl p-2 bg-[#C0D8F6]" colSpan="6">
              2024 September 01, Sunday
            </td>
          </tr>

          {imagePosts?.map((user, index) => (
            <tr key={user._id} className="bg-white">
              <td className="p-2">{index + 1 + (imagePostsPage - 1)}</td>
              <td className="border-l-4 border-[#C0D8F6] p-2">{user._id}</td>
              <td className="border-l-4 border-[#C0D8F6] p-2">
                {user.currentLocation?.city}, {user.currentLocation?.country}
              </td>
              <td className="border-l-4 border-[#C0D8F6] p-2">{user.gender}</td>
              <td className="border-x-4 border-[#C0D8F6] p-2">
                {user.totalPosts}
              </td>
              <td className="p-2">
                <button
                  onClick={() => handleViewClick(user._id)}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={imagePostsPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {imagePostsPage} of {imagePostsTotalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={imagePostsPage === imagePostsTotalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
