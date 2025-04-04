"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
// import FilterPopup from "./FilterPopup";
// import GenderFilterPopup from "./GenderFilterPopup";

const UserNavLink = () => {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const handlePopupOpen = (filterType) => {
    setSelectedFilter(filterType);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedFilter(null);
    router.push("/users/newSignup"); // Redirect to New Signup’s page
  };

  const handleClearFilters = () => {
    setSelectedFilter(null);
    setShowPopup(false);
  };

  const renderSecondDivContent = () => {
    if (selectedTab === "New Signup’s" || pathname.includes("newSignup")) {
      return (
        <>
          <div className="flex gap-x-16">
            <p
              className="text-base text-black cursor-pointer"
              onClick={() => handlePopupOpen("country")}
            >
              Country/Region
            </p>
            <p
              className="text-base text-black cursor-pointer"
              onClick={() => handlePopupOpen("gender")}
            >
              Gender
            </p>
            <p className="text-base text-black">Goal</p>
            <p className="text-base text-black">Religion</p>
            <p className="text-base text-black">Native</p>
            <p className="text-base text-black">Marital Status</p>
            <p className="text-base text-black">Login</p>
          </div>
          <div>
            <p
              className="text-base text-black cursor-pointer"
              onClick={handleClearFilters}
            >
              Clear
            </p>
          </div>
        </>
      );
    } else if (
      selectedTab === "Incomplete Signup’s" ||
      pathname.includes("incompleteSignup")
    ) {
      return (
        <>
          <div className="flex gap-x-16">
            <p className="text-base text-black">Login-Region</p>
            <p className="text-base text-black">Gender</p>
            <p className="text-base text-black">Marital Status</p>
          </div>
          <div>
            <p
              className="text-base text-black cursor-pointer"
              onClick={handleClearFilters}
            >
              Clear
            </p>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <>
      {/* First Div */}
      <div className="w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 relative">
        <Link
          href="/controlPanel/newSignup"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname.includes("newSignup")
              ? "border-b-8 border-[#1982FE]"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("New Signup’s")}
        >
          New Signup's
        </Link>
        <Link
          href="/controlPanel/incompleteSignup"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname.includes("incompleteSignup")
              ? "border-b-8 border-[#1982FE]"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("Incomplete Signup’s")}
        >
          Incomplete Signup’s
        </Link>
        <Link
          href="/controlPanel/deletedUsers"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            selectedTab === "Deleted Account’s"
              ? "border-b-8 border-[#1982FE]"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("Deleted Account’s")}
        >
          Deleted Account’s
        </Link>
        <Link
          href="/controlPanel/activeAccounts"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname.includes("activeAccounts")
              ? "border-b-8 border-[#1982FE]"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("Active Account’s")}
        >
          Active Account’s
        </Link>
        <Link
          href="/controlPanel/totalUser"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname.includes("totalUsers")
              ? "border-b-8 border-[#1982FE]"
              : "border-b-2 border-transparent"
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
      {showSecondDiv && (
        <div className="w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2 transition-all duration-300 ease-in-out">
          {renderSecondDivContent()}
        </div>
      )}

      {/* Third Div */}
      <div className="w-full h-[80px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2">
        <h1 className="text-[32px] text-black font-semibold">Australia</h1>
        <h1 className="text-[32px] text-black font-semibold">614</h1>
      </div>

      {/* Popup */}
      {/* {showPopup && selectedFilter === "country" && (
        <FilterPopup onClose={handlePopupClose} />
      )}
      {showPopup && selectedFilter === "gender" && (
        <GenderFilterPopup onClose={handlePopupClose} />
      )} */}
    </>
  );
};

export default UserNavLink;



// "use client";

// import { useState } from "react";
// import span from "next/span";
// import { useRouter, usePathname } from "next/navigation";
// // import FilterPopup from "./FilterPopup";
// // import GenderFilterPopup from "./GenderFilterPopup";

// const UserNavspan = () => {

 
//   return (
//     <>
//       {/* First Div */}
//       <div className="w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 relative">
//         <span
//           href="/users/newSignup"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             pathname.includes("newSignup")
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
         
//         >
//           New Signup's
//         </span>
//         <span
//           href="/users/incompleteSignup"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             pathname.includes("incompleteSignup")
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
       
//         >
//           Incomplete Signup’s
//         </span>
//         <span
//           href="#"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             selectedTab === "Deleted Account’s"
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
        
//         >
//           Deleted Account’s
//         </span>
//         <span
//           href="/users/activeAccounts"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             pathname.includes("activeAccounts")
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
         
//         >
//           Active Account’s
//         </span>
//         <span
//           href="/users/totalUsers"
//           className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
//             pathname.includes("totalUsers")
//               ? "border-b-8 border-[#1982FE]"
//               : "border-b-2 border-transparent"
//           }`}
       
//         >
//           Total User’s
//         </span>
//         <button>
//           <img src="/userButton.png" alt="Toggle Content" />
//         </button>
//       </div>

//     </>
//   );
// };

// export default UserNavspan;



// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import useUserStore from "@/lib/store/userStore";

// const UserNavLink = () => {
//   const { setStatus, status } = useUserStore();
//   const pathname = usePathname();

//   return (
//     <div className="w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 text-black">
//       <span
//         className={`cursor-pointer px-2 ${
//           status === "NEW" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
//         }`}
//         onClick={() => setStatus("NEW")}
//       >
//         New Signup's
//       </span>
//       <span
//         className={`cursor-pointer px-2 ${
//           status === "INCOMPLETE" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
//         }`}
//         onClick={() => setStatus("INCOMPLETE")}
//       >
//         Incomplete Signup’s
//       </span>
//       <span
//         className={`cursor-pointer px-2 ${
//           status === "DEACTIVE" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
//         }`}
//         onClick={() => setStatus("DEACTIVE")}
//       >
//         Deleted Account’s
//       </span>
//       <span
//         className={`cursor-pointer px-2 ${
//           status === "ACTIVE" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
//         }`}
//         onClick={() => setStatus("ACTIVE")}
//       >
//         Active Account’s
//       </span>
//       <span
//         className={`cursor-pointer px-2 ${
//           status === "ALL" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"
//         }`}
//         onClick={() => setStatus("ALL")}
//       >
//         Total Users
//       </span>
//     </div>
//   );
// };

// export default UserNavLink;












// "use client";

// import { useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import useUserStore from "@/lib/store/userStore";

// const UserNavLink = () => {
//   const { setStatus, status } = useUserStore();
//   const [showSecondDiv, setShowSecondDiv] = useState(false);
//   const pathname = usePathname();

//   const handleClearFilters = () => {
//     setStatus(null);
//     setShowSecondDiv(false);
//   };

//   const renderSecondDivContent = () => {
//     if (status === "NEW" || pathname.includes("newSignup")) {
//       return (
//         <>
//           <div className="flex gap-x-16">
//             <p className="text-base text-black cursor-pointer">Country/Region</p>
//             <p className="text-base text-black cursor-pointer">Gender</p>
//             <p className="text-base text-black">Goal</p>
//             <p className="text-base text-black">Religion</p>
//             <p className="text-base text-black">Native</p>
//             <p className="text-base text-black">Marital Status</p>
//             <p className="text-base text-black">Login</p>
//           </div>
//           <div>
//             <p className="text-base text-black cursor-pointer" onClick={handleClearFilters}>Clear</p>
//           </div>
//         </>
//       );
//     } else if (status === "INCOMPLETE" || pathname.includes("incompleteSignup")) {
//       return (
//         <>
//           <div className="flex gap-x-16">
//             <p className="text-base text-black">Login-Region</p>
//             <p className="text-base text-black">Gender</p>
//             <p className="text-base text-black">Marital Status</p>
//           </div>
//           <div>
//             <p className="text-base text-black cursor-pointer" onClick={handleClearFilters}>Clear</p>
//           </div>
//         </>
//       );
//     }
//     return null;
//   };

//   return (
//     <>
//       {/* First Div */}
//       <div className="w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 text-black relative">
//         <span
//           className={`cursor-pointer px-2 ${status === "NEW" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           onClick={() => setStatus("NEW")}
//         >
//           New Signup's
//         </span>
//         <span
//           className={`cursor-pointer px-2 ${status === "INCOMPLETE" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           onClick={() => setStatus("INCOMPLETE")}
//         >
//           Incomplete Signup’s
//         </span>
//         <span
//           className={`cursor-pointer px-2 ${status === "DEACTIVE" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           onClick={() => setStatus("DEACTIVE")}
//         >
//           Deleted Account’s
//         </span>
//         <span
//           className={`cursor-pointer px-2 ${status === "ACTIVE" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           onClick={() => setStatus("ACTIVE")}
//         >
//           Active Account’s
//         </span>
//         <span
//           className={`cursor-pointer px-2 ${status === "ALL" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           onClick={() => setStatus("ALL")}
//         >
//           Total Users
//         </span>
//         <button onClick={() => setShowSecondDiv(!showSecondDiv)}>
//           <img src="/userButton.png" alt="Toggle Content" />
//         </button>
//       </div>

//       {/* Second Div */}
//       {showSecondDiv && (
//         <div className="w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2 transition-all duration-300 ease-in-out">
//           {renderSecondDivContent()}
//         </div>
//       )}

//       {/* Third Div */}
//       <div className="w-full h-[80px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2">
//         <h1 className="text-[32px] text-black font-semibold">Australia</h1>
//         <h1 className="text-[32px] text-black font-semibold">614</h1>
//       </div>
//     </>
//   );
// };

// export default UserNavLink;












// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import useUserStore from "@/lib/store/userStore";
// import Link from "next/link";

// const UserNavLink = () => {
//   const { setStatus, status } = useUserStore();
//   const [showSecondDiv, setShowSecondDiv] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     if (pathname.includes("newSignup")) {
//       setStatus("NEW");
//     } else if (pathname.includes("incompleteSignup")) {
//       setStatus("INCOMPLETE");
//     } else if (pathname.includes("activeAccounts")) {
//       setStatus("ACTIVE");
//     } else if (pathname.includes("totalUser")) {
//       setStatus("ALL");
//     }
//   }, [pathname, setStatus]);

//   const handleClearFilters = () => {
//     setStatus(null);
//     setShowSecondDiv(false);
//   };

//   const renderSecondDivContent = () => {
//     if (status === "NEW" || pathname.includes("newSignup")) {
//       return (
//         <>
//           <div className="flex gap-x-16">
//             <p className="text-base text-black cursor-pointer">Country/Region</p>
//             <p className="text-base text-black cursor-pointer">Gender</p>
//             <p className="text-base text-black">Goal</p>
//             <p className="text-base text-black">Religion</p>
//             <p className="text-base text-black">Native</p>
//             <p className="text-base text-black">Marital Status</p>
//             <p className="text-base text-black">Login</p>
//           </div>
//           <div>
//             <p className="text-base text-black cursor-pointer" onClick={handleClearFilters}>Clear</p>
//           </div>
//         </>
//       );
//     } else if (status === "INCOMPLETE" || pathname.includes("incompleteSignup")) {
//       return (
//         <>
//           <div className="flex gap-x-16">
//             <p className="text-base text-black">Login-Region</p>
//             <p className="text-base text-black">Gender</p>
//             <p className="text-base text-black">Marital Status</p>
//           </div>
//           <div>
//             <p className="text-base text-black cursor-pointer" onClick={handleClearFilters}>Clear</p>
//           </div>
//         </>
//       );
//     }
//     return null;
//   };

//   return (
//     <>
//       {/* First Div */}
//       <div className="w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 text-black relative">
//         <span
//           className={`cursor-pointer px-2 ${status === "NEW" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           onClick={() => setStatus("NEW")}
//         >
//           New Signup's
//         </span>
//         <span
//           className={`cursor-pointer px-2 ${status === "INCOMPLETE" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           onClick={() => setStatus("INCOMPLETE")}
//         >
//           Incomplete Signup’s
//         </span>
//        <Link href={"controlPanel/deletedUsers"}>
//        <span
//           className={`cursor-pointer px-2 ${status === "DEACTIVE" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           // onClick={() => setStatus("DEACTIVE")}
//         >
//           Deleted Account’s
//         </span>
//        </Link>
//         <span
//           className={`cursor-pointer px-2 ${status === "ACTIVE" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           onClick={() => setStatus("ACTIVE")}
//         >
//           Active Account’s
//         </span>
//         <span
//           className={`cursor-pointer px-2 ${status === "ALL" ? "border-b-8 border-[#1982FE]" : "border-b-2 border-transparent"}`}
//           onClick={() => setStatus("ALL")}
//         >
//           Total Users
//         </span>
//         <button onClick={() => setShowSecondDiv(!showSecondDiv)}>
//           <img src="/userButton.png" alt="Toggle Content" />
//         </button>
//       </div>

//       {/* Second Div */}
//       {showSecondDiv && (
//         <div className="w-full h-[72px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2 transition-all duration-300 ease-in-out">
//           {renderSecondDivContent()}
//         </div>
//       )}

//       {/* Third Div */}
//       <div className="w-full h-[80px] bg-white rounded-[15px] border border-[#8888884d] flex justify-between items-center px-10 mt-2">
//         <h1 className="text-[32px] text-black font-semibold">Australia</h1>
//         <h1 className="text-[32px] text-black font-semibold">614</h1>
//       </div>
//     </>
//   );
// };

// export default UserNavLink;

