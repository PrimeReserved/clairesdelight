"use client";

import Logout from "@/app/(admin)/dashboard/Logout";
import AdminLinks from "./AdminLinks";
import { LuMenu } from "react-icons/lu";

export default function SideMenu({ isCollapsed, toggleSidebar }: any) {
  return (
    <div className={`fixed top-0 left-0 h-screen bg-customBlack text-white transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      <button onClick={toggleSidebar} className="bg-gray-700 p-2 rounded m-4">
        <LuMenu />
      </button>
      <AdminLinks isCollapsed={isCollapsed} />
      <Logout isCollapsed={isCollapsed} />
    </div>
  );
}
