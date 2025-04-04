
"use client";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";

import { useAuthStore } from "@/lib/store/authStore";
import RouteProtector from "@/components/RouteProtector";




export default function ControlPanelLayout({ children }) {

  return (
   

<div className="antialiased p-8">
        <Navbar />
        <div className="flex pt-4 gap-4">
          <div className="w-[20%]">
            <Sidebar />
          </div>
          <RouteProtector>
          <div className="w-[80%] bg-[#F0F4F9] p-6 rounded-lg shadow-md">{children}</div>
          </RouteProtector>
        </div>
      </div>


        
   
   
  );
}
