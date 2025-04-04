// 'use client'
// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
// const NavLink = () => {
//   const [showSecondDiv, setShowSecondDiv] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   return (
//     <>
//       {/* First Div */}
//       <div className="w-full h-[72px] bg-white rounded-[15px]  border border-[#8888884d] flex justify-between items-center px-10 relative">
//       <Link
//           href="/controlPanel/newSignup"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             pathname.includes("newSignup")
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
//           onClick={() => setSelectedTab("New Signup’s")}
//         >
//           New Signup's
//         </Link>
//         <Link
//           href="/controlPanel/incompleteSignup"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             pathname.includes("incompleteSignup")
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
//           onClick={() => setSelectedTab("Incomplete Signup’s")}
//         >
//           Incomplete Signup’s
//         </Link>
//         <Link
//           href="/controlPanel/deletedUsers"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             selectedTab === "Deleted Account’s"
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
//           onClick={() => setSelectedTab("Deleted Account’s")}
//         >
//           Deleted Account’s
//         </Link>
//         <Link
//           href="/controlPanel/activeAccounts"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             pathname.includes("activeAccounts")
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
//           onClick={() => setSelectedTab("Active Account’s")}
//         >
//           Active Account’s
//         </Link>
//         <Link
//           href="/controlPanel/totalUsers"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             pathname.includes("totalUsers")
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
//           onClick={() => setSelectedTab("Total User’s")}
//         >
//           Total User’s
//         </Link>
//         <button onClick={() => setShowSecondDiv(!showSecondDiv)}>
//           <img src="/userButton.png" alt="Toggle Content" />
//         </button>
//       </div>

//       {/* Second Div */}
//       <div
//         className={`w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2 transition-all duration-300 ease-in-out ${
//           showSecondDiv
//             ? "opacity-100 translate-y-0 visible"
//             : "opacity-0 -translate-y-3 invisible"
//         }`}
//       >
//         <p className="text-base text-black">Login-Region</p>
//         <p className="text-base text-black">Gender</p>
//         <p className="text-base text-black">Marital Status</p>
        
//         <p className="text-base text-black">Clear</p>
//       </div>
//       <div className="w-full h-[80px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2 ">
//         <h1 className="text-[32px] text-black font-semibold">Australia</h1>
//         <h1 className="text-[32px] text-black font-semibold">614</h1>
//       </div>
//     </>
//   );
// };

// export default NavLink;





"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Import usePathname

const NavLink = () => {
  const pathname = usePathname(); // ✅ Define pathname
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <>
      {/* First Div */}
      <div className="w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 relative">
        <Link
          href="/controlPanel/newSignup"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname?.includes("newSignup") ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("New Signup’s")}
        >
          New Signup's
        </Link>
        <Link
          href="/controlPanel/incompleteSignup"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname?.includes("incompleteSignup") ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("Incomplete Signup’s")}
        >
          Incomplete Signup’s
        </Link>
        <Link
          href="/controlPanel/deletedUsers"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            selectedTab === "Deleted Account’s" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("Deleted Account’s")}
        >
          Deleted Account’s
        </Link>
        <Link
          href="/controlPanel/activeAccounts"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname?.includes("activeAccounts") ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("Active Account’s")}
        >
          Active Account’s
        </Link>
        <Link
          href="/controlPanel/totalUser"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname?.includes("totalUsers") ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("Total User’s")}
        >
          Total User’s
        </Link>
        <button onClick={() => setShowSecondDiv(!showSecondDiv)}>
          <img src="/userButton.png" alt="Toggle Content" />
        </button>
      </div>

      {/* Second Div */}
      <div
        className={`w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2 transition-all duration-300 ease-in-out ${
          showSecondDiv ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible"
        }`}
      >
        <p className="text-base text-black">Login-Region</p>
        <p className="text-base text-black">Gender</p>
        <p className="text-base text-black">Marital Status</p>
        <p className="text-base text-black">Clear</p>
      </div>

      <div className="w-full h-[80px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2">
        <h1 className="text-[32px] text-black font-semibold">Australia</h1>
        <h1 className="text-[32px] text-black font-semibold">614</h1>
      </div>
    </>
  );
};

export default NavLink;
