"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SideMenu from "../component/admin/navbar/SideMenu";
import Avatar from "@/app/component/admin/dashboard/Avatar";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };


  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-none md:w-64">
      <SideMenu isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
    </div>
    <div className="flex-grow p-4 md:overflow-y-auto">
    <div className="bg-white shadow rounded flex justify-between">
         <h1 className="text-3xl font-bold">{pathname.replace("/", "").replace(/^./, match => match.toUpperCase())}</h1>
         <Avatar />
       </div>
        {children}
      </div>
  </div>
  );
}
