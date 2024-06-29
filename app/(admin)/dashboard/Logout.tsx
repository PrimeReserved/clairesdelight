"use client"

import { useRouter } from 'next/navigation';
import { RiLogoutCircleFill } from "react-icons/ri";

interface LogoutButtonProps {
  isCollapsed: boolean;
}

export default function Logout({ isCollapsed }: Readonly<LogoutButtonProps>) {
    const router = useRouter();



async function handleLogout() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOGOUT_API_ROUTE}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      // Perform any additional client-side logout actions
      // For example, clear the user state and redirect to the login page
    //   clearUserState();
      router.push('/sign-in');
    } else {
      console.error('Error logging out');
    }
  } catch (error) {
    console.error('Error logging out:', error);
  }
}

    return (
         <button onClick={handleLogout} className='pt-10 flex gap-2 items-center'>
          <RiLogoutCircleFill className="w-5 h-5"/>
          {!isCollapsed && <span>Logout</span>}
        </button>
    );
}