"use client";

import Logout from "@/app/(admin)/dashboard/Logout";
import AdminLinks from "./AdminLinks";
import { LuMenu } from "react-icons/lu";

export default function SideMenu({ isCollapsed, toggleSidebar }: any) {
  return (
    <div className={`fixed top-0 left-0 h-screen bg-primaryGrey text-customBlack transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      <button onClick={toggleSidebar} className={`bg-lightGreen p-2 rounded m-4 hover:bg-green`}>
        <LuMenu className={`text-customBlack`} />
      </button>
      <AdminLinks isCollapsed={isCollapsed} />
      <Logout isCollapsed={isCollapsed} />
    </div>
  );
}