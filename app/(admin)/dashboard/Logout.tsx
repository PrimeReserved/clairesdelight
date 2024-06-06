"use client"

import { useRouter } from 'next/navigation';


export default function Logout() {
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
         <button onClick={handleLogout} className="btn btn-outline-primary">logout</button>
    );
}