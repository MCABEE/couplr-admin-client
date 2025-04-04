// 'use client';

// import React, { useState, useRef } from 'react';
// import { IoIosArrowDown } from 'react-icons/io';
// import { Toaster } from 'react-hot-toast';

// const Navbar = ({ authenticated, doLogout }) => {
//   const [showLogout, setShowLogout] = useState(false); // for toggling the logout menu
//   const profileRef = useRef(null); // ref for profile menu

//   return (
//     <div>
//       <Toaster position="top-center" />
//       <div className="w-full bg-white h-[80px] flex justify-between items-center px-20 rounded-[15px] border-[#8888884d] border-[1px]">
//         <img src="/Couplr.png" alt="Logo" />
//         <div className="flex gap-x-5 items-center relative" ref={profileRef}>
//           {/* <img src="/profile.svg" alt="Profile" /> */}
//           <p className="text-[16px] text-[#444444]">Admin</p>
//           <IoIosArrowDown
//             className="cursor-pointer"
//             onClick={() => setShowLogout((prev) => !prev)} // Toggle logout menu
//           />
//           {showLogout && authenticated && (
//             <div className="absolute top-full right-0 mt-2 border border-slate-200 bg-slate-300 p-2 font-medium rounded-md shadow-lg">
//               <button
//                 onClick={doLogout}
//                 className="w-full text-center p-2 bg-red-500 text-white rounded-md"
//               >
//                 Logout
//               </button>
//               <button
//                 onClick={() => setShowLogout(false)}
//                 className="w-full text-center p-2 mt-2 bg-gray-500 text-white rounded-md"
//               >
//                 Cancel
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation"; // Import Next.js router

const Navbar = () => {
  const { isAuthenticated, logout, loadToken } = useAuthStore();
  const [showLogout, setShowLogout] = useState(false);
  const profileRef = useRef(null);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    loadToken();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setShowLogout(false);
    router.push("/"); // Redirect to home
  };

  return (
    <div>
      <Toaster position="top-center" />
      <div className="w-full bg-white h-[80px] flex justify-between items-center px-20 rounded-[15px] border-[#8888884d] border-[1px]">
        <img src="/Couplr.png" alt="Logo" />
        {isAuthenticated && (
          <div className="flex gap-x-5 items-center relative" ref={profileRef}>
            <p className="text-[16px] text-[#444444]">Admin</p>
            <IoIosArrowDown
              className="cursor-pointer text-black"
              onClick={() => setShowLogout((prev) => !prev)}
            />
            {showLogout && (
              <div className="absolute top-full right-0 mt-2 border border-gray-300 bg-white p-2 font-medium rounded-md shadow-lg">
                <button
                  onClick={handleLogout}
                  className="w-full text-center p-2 bg-red-500 text-white rounded-md"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
