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
          href="/controlPanel/user/newSignup"
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
          href="/controlPanel/user/incompleteSignup"
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
          href="/controlPanel/user/deletedUsers"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname.includes("deletedUsers")
              ? "border-b-8 border-[#1982FE]"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("Deleted Accounts")}
        >
          Deleted Accounts
        </Link>
        <Link
          href="/controlPanel/user/activeAccounts"
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
          href="/controlPanel/user/totalUser"
          className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
            pathname.includes("totalUser")
              ? "border-b-8 border-[#1982FE]"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedTab("Total Users")}
        >
          Total Users
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
