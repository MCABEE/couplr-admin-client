// 'use client'
// import React from "react";
// import { useState } from "react";

// const newUserProfile = () => {
//     const [selectedValue, setSelectedValue] = useState(2); // Default selected value

//   return (
//     <div className="w-full bg-[#263238] py-5 relative px-4">
//       <button className="absolute -top-3  -right-2 bg-white rounded-full p-1">
//         {" "}
//         <img src="/closeButton.png" />
//       </button>
//       <div className="w-full h-[48px] bg-white rounded-2xl flex items-center  px-14 ">
//         <h1 className="h-full w-[25%] text-base text-black font-bold border-r-4 border-[#C0D8F6] flex justify-start items-center ">aaradhya_97</h1>
//         <h1 className="h-full w-[28%] text-base text-black font-bold border-r-4 border-[#C0D8F6] flex justify-start items-center ps-4"> Sydney, Australia</h1>

//         <h1 className="h-full w-[10%] text-base text-black font-bold border-r-4 border-[#C0D8F6] flex justify-start items-center ps-4">F</h1>

//         <h1 className="h-full w-[21%] text-base text-black font-bold border-r-4 border-[#C0D8F6] flex justify-start items-center ps-4">IND</h1>
//         <h1 className="h-full w-[16%] text-base text-black font-bold flex justify-start items-center ps-4">Active</h1>
//       </div>
//       <div className=" w-full py-4 flex gap-x-4 ">
//         <div className="bg-white w-[48%] py-10 pl-10 pr-20 rounded-2xl ">
//           <h1 className="text-2xl text-black font-semibold">Account Info</h1>
//           <p className="text-xs text-[#777777] pb-4 pt-2">
//             2024 Jan 30, Thursday, 05:25 PM
//           </p>
//           <div className="flex items-center py-2  border-b-[1px] border-[#444444]">
//             <p className=" w-[200px] text-sm text-black">Account ID</p>
//             <p className="text-sm text-black">aaradhya_97</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className="w-[200px] text-sm text-black">Login type</p>
//             <p className="text-sm text-black">Phone</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className=" w-[200px] text-sm text-black">Gender</p>
//             <p className="text-sm text-black">Female</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className="w-[200px] text-sm text-black">Age</p>
//             <p className="text-sm text-black">27</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className="w-[200px] text-sm text-black">Marital Status</p>
//             <p className="text-sm text-black">Single</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className="w-[200px] text-sm text-black">Orientation</p>
//             <p className="text-sm text-black">Straight</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className="w-[200px] text-sm text-black">Relationship Goal</p>
//             <p className="text-sm text-black">Marriage</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className=" w-[200px] text-sm text-black">Academic Level</p>
//             <p className="text-sm text-black">Graduate</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className="w-[200px] text-sm text-black">Field of Study</p>
//             <p className="text-sm text-black">Engineering</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className="w-[200px] text-sm text-black">Employment Status</p>
//             <p className="text-sm text-black">Private Job</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className=" w-[200px] text-sm text-black">Job Title</p>
//             <p className="text-sm text-black">Developer</p>
//           </div>
//           <div className="flex items-center py-2 pt-4 border-b-[1px] border-[#444444]">
//             <p className=" w-[200px] text-sm text-black">Current Location</p>
//             <p className="text-sm text-black">Mumbai, IND</p>
//           </div>
//         </div>

//         <div className=" w-[52%] flex flex-col gap-y-4">
//           <div className="w-full bg-white p-10 py-14 rounded-2xl">
//             <h1 className="text-base text-black font-semibold">
//               Profile Photo
//             </h1>
//             <div className="flex gap-5 py-6">
//               <img src="/profile1.png" />
//               <img src="/profile1.png" />

//               <img src="/profile1.png" />
//             </div>
//             <div className="flex gap-5">
//               <p className="text-sm text-[#202020]">03</p>
//               <p className="text-sm text-[#202020]">Photos added</p>
//             </div>
//           </div>

//           <div className="w-full bg-white p-10 py-14 rounded-2xl">
//             <h1 className="text-base text-black font-semibold">ID Proof</h1>
//             <div className="flex gap-5 py-6">
//               <img src="/profile1.png" />
//               <img src="/profile1.png" />

//               <img src="/profile1.png" />
//             </div>

//             <p className="text-sm text-[#202020]">Driving License </p>
//           </div>

// <div className="w-full bg-white rounded-2xl p-8 shadow-md">
//       <div className="flex items-center justify-around">
//         <p className="text-sm text-black">Additional Data Status</p>
//         <div className="relative flex items-center w-[40%]">
//           <div className="flex w-full">
//             {Array.from({ length: 6 }, (_, index) => (
//               <div
//                 key={index}
//                 className={`w-full h-2 ${
//                   index < selectedValue ? "bg-[#09B438]" : "bg-[#D9D9D9]"
//                 }`}
//               ></div>
//             ))}
//           </div>
//           <div className="absolute -top-5 flex justify-between text-xs text-gray-500 w-full">
//             {Array.from({ length: 6 }, (_, index) => (
//               <span
//                 key={index}
//                 className={`cursor-pointer ${
//                   index + 1 === selectedValue ? "text-black font-bold text-[8px]" : " text-[8px] text-[#202020]"
//                 }`}
//                 onClick={() => setSelectedValue(index + 1)} // Update state on click
//               >
//                 {index + 1}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       </div>
//         </div>
//       </div>
//       <div className="w-full flex justify-between items-center py-3">

//         <button>
//             <img src="/prev.png"/>
//         </button>
//         <button>
//             <img src="/next.png"/>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default newUserProfile;






"use client";

import { useEffect,useState } from "react";
import useUserStore from "@/lib/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NewUserProfile = () => {
  const { selectedUserId, selectedUser, fetchUserById, loadingUser,verifyIdProof } = useUserStore();
    const [selectedValue, setSelectedValue] = useState(2); // Default selected value
    const router = useRouter();
    const handleVerify = async (status) => {
      if (!selectedUserId) {
        alert("User ID is missing.");
        return;
      }
  
      const confirmAction = window.confirm(`Are you sure you want to ${status.toLowerCase()} this ID proof?`);
      if (!confirmAction) return;
  
      await verifyIdProof(status);
      router.push("/controlPanel/newSignup");
      console.log("kjhgfgjkjghvjy");
      
    };


  useEffect(() => {
    if (selectedUserId) {
      fetchUserById();
    }
  }, [selectedUserId, fetchUserById]);

  console.log("Selected User ID:", selectedUserId);
  console.log(selectedUser);

  if (loadingUser) return <p>Loading...</p>;
  if (!selectedUser) return <p>No user data available.</p>;

  return (
    <div className="w-full bg-[#263238] py-5 relative px-4">
      <button className="absolute -top-3 -right-2 bg-white rounded-full p-1">
        <Link href={"/controlPanel/newSignup"}>
          <img
            src="/closeButton.png"
            alt="Close"
            className=" hover:scale-110"
          />
        </Link>
      </button>

      {/* Header */}
      <div className="w-full h-[48px] bg-white rounded-2xl flex items-center px-14">
        <h1 className="h-full w-[25%] text-base text-black font-bold border-r-4 border-[#C0D8F6] flex justify-start items-center ">
          {" "}
          {selectedUser.user?.displayName}
        </h1>
        <h1 className="h-full w-[28%] text-base text-black  border-r-4 border-[#C0D8F6] flex justify-start items-center ps-4">
          {" "}
          {selectedUser.user?.currentLocation?.city},{" "}
          {selectedUser.user?.currentLocation?.country}
        </h1>
        <h1 className="h-full w-[10%] text-base text-black  border-r-4 border-[#C0D8F6] flex justify-start items-center ps-4">
          {" "}
          {selectedUser.user?.gender}
        </h1>
        <h1 className="h-full w-[21%] text-base text-black  border-r-4 border-[#C0D8F6] flex justify-start items-center ps-4">
          {" "}
          {/* {selectedUser.age} */}
          {selectedUser.user?.currentLocation?.country}
        </h1>
        <h1 className="h-full w-[16%] text-base  flex justify-start items-center ps-4 text-[#09B438]">
          Active
        </h1>
      </div>

      {/* User Details */}
      <div className="w-full py-4 flex gap-x-4">
        <div className="bg-white w-[48%] py-10 pl-10 pr-20 rounded-2xl">
          <h1 className="text-2xl text-black font-semibold pb-8">
            Account Info
          </h1>
          {/* <p className="text-xs text-[#777777] pb-4 pt-2">Joined: 2024 Jan 30, 05:25 PM</p> */}

          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Account ID</p>
            <p className="text-sm text-black">{selectedUser.user?._id}</p>
          </div>

          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Gender</p>
            <p className="text-sm text-black">{selectedUser.user?.gender}</p>
          </div>
          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Age</p>
            <p className="text-sm text-black">{selectedUser.user?.age}</p>
          </div>
          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Marital Status</p>
            <p className="text-sm text-black">
              {selectedUser.user?.personalInfo?.maritalStatus}
            </p>
          </div>

          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Orientation</p>
            <p className="text-sm text-black">
              {selectedUser.user?.personalInfo?.sexualOrientation}
            </p>
          </div>

          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Relationship Goal</p>
            <p className="text-sm text-black">
              {selectedUser.user?.personalInfo?.relationshipGoal}
            </p>
          </div>

          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Academic Level</p>
            <p className="text-sm text-black">
              {selectedUser.user?.academic?.academicLevel}
            </p>
          </div>

          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Field of Study</p>
            <p className="text-sm text-black">
              {selectedUser.user?.academic?.academicField}
            </p>
          </div>

          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Employment Status</p>
            <p className="text-sm text-black">
              {selectedUser.user?.occupation?.employmentStatus}
            </p>
          </div>

          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Job Title</p>
            <p className="text-sm text-black">
              {selectedUser.user?.occupation?.designation}
            </p>
          </div>

          <div className="flex items-center py-3 border-b-[1px] border-[#44444459]">
            <p className="w-[200px] text-sm text-black">Current Location</p>
            <p className="text-sm text-black">
              {selectedUser.user?.currentLocation?.city},{" "}
              {selectedUser.user?.currentLocation?.country}
            </p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-[52%] flex flex-col gap-y-4">
          <div className="w-full bg-white p-10 py-14 rounded-2xl">
            <h1 className="text-base text-black font-semibold">
              Profile Photo
            </h1>
            <div className="flex gap-5 py-6">
              <img
                src={selectedUser.user?.profileImage?.url}
                alt="Profile"
                className="w-[60px] h-[80px] rounded-[10px] object-cover"
              />
            </div>
          </div>
          {/* ID Proof */}
          <div className="w-full bg-white p-10 py-14 rounded-2xl">
            <h1 className="text-base text-black font-semibold">ID Proof</h1>
            <div className="flex gap-5 py-6">
              {selectedUser.user?.idImage.map((img, index) => (
                <img
                  key={index}
                  src={img.sideOne.url}
                  alt="ID Proof"
                  className="w-24 h-24"
                />
                
              ))}
              {selectedUser.user?.idImage.map((img, index) => (
                <img
                  key={index}
                  src={img.sideTwo.url}
                  alt="ID Proof"
                  className="w-24 h-24"
                />
                
              ))}
            </div>
          </div>
          {/* progress bar */}
          {/* progress bar{selectedUser?.profileCompletion?.progressPercentage} */}

       
        </div>
      </div>

      {/* Navigation Buttons */}

      <div className="w-full flex justify-between items-center py-3">
        <button onClick={() => handleVerify("Rejected")}>
          <img src="/prev.png" alt="reject" />
        </button>
        <button onClick={() => handleVerify("Verified")}>
          <img src="/next.png" alt="approve" />
        </button>
      </div>



      {/* <div className="w-full flex justify-between items-center py-3">
        <button>
          <img src="/prev.png" alt="reject" />
        </button>
        <button>
          <img src="/next.png" alt="approve" />
        </button>
      </div> */}
    </div>
  );
};

export default NewUserProfile;
