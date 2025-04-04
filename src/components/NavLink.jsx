"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NavLink = () => {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const pathname = usePathname();

  const isActive = (path) => pathname.includes(path);

  return (
    <>
      {/* First Div */}
      <div className="w-full h-[72px] bg-white rounded-[15px] border border-gray-300 flex justify-between items-center px-10 relative">
        <div className="flex gap-x-16 h-[72px]">
          <Link
            href="/photos"
            className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
              isActive("/photos") || selectedItem === "photos"
                ? "border-b-8 border-[#1982FE]"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setSelectedItem("photos")}
          >
            Photos
          </Link>
          <Link
            href="/videos"
            className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
              isActive("/videos") || selectedItem === "videos"
                ? "border-b-8 border-[#1982FE]"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setSelectedItem("videos")}
          >
            Videos
          </Link>
          <p
            role="button"
            tabIndex={0}
            className={`h-full flex justify-center items-center text-base text-black cursor-pointer px-2 ${
              selectedItem === "stories"
                ? "border-b-8 border-[#1982FE]"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setSelectedItem("stories")}
          >
            Stories
          </p>
        </div>
        <button onClick={() => setShowSecondDiv(!showSecondDiv)}>
          <Image src="/userButton.png" alt="User Menu" width={32} height={32} />
        </button>
      </div>

      {/* Second Div */}
      <div
        className={`w-full h-[72px] bg-white rounded-[15px] border border-gray-300 flex justify-between items-center px-10 mt-2 transition-all duration-300 ease-in-out ${
          showSecondDiv
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-3 invisible"
        }`}
      >
        <div className="flex gap-x-16">
          <p className="text-base text-black">Country/Region</p>
          <p className="text-base text-black">Gender</p>
        </div>
        <p className="text-base text-black cursor-pointer">Clear</p>
      </div>

      {/* Gender Count Display */}
      <div className="w-full h-[80px] bg-white rounded-[15px] border border-gray-300 flex justify-between items-center px-10 mt-2">
        <h1 className="text-[32px] text-black font-semibold">Female</h1>
        <h1 className="text-[32px] text-black font-semibold">112</h1>
      </div>
    </>
  );
};

export default NavLink;
