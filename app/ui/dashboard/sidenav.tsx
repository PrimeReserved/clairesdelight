"use client"

import NavLinks from '@/app/ui/dashboard/nav-links';
import { FaPowerOff } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

 
export default function SideNav() {

  const router = useRouter();

  const logout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SIGN_OUT_API_ROUTE}`, {
        method: 'POST', // Ensure correct HTTP method
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      // Clear cookies
      deleteCookie('token'); 

      // Redirect to admin-panel
      router.push('/admin-panel');
    } catch (error: any) {
      console.log('Logout error:', error.message);
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