"use client"

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/component/header/logo/Logo'
import { FaPowerOff } from "react-icons/fa";
import { useRouter } from 'next/navigation';


 
export default function SideNav() {

  const router = useRouter();

  const logout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SIGN_IN_API_ROUT}`);
        router.push('/sign-in')
    } catch (error: any) {
        console.log(error.message)
        
    }
  }
  
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
        <NavLinks />
        <form
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-lightOrange  md:flex-none md:justify-start md:p-2 md:px-3"
          onClick={logout}>
            <FaPowerOff className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
    </nav>
  );
}