"use client";

import Link from "next/link";

import { HiOutlineAtSymbol } from "react-icons/hi";
import { FaArrowRight, FaHouseUser, FaKey } from "react-icons/fa6";
import { AiTwotoneDashboard } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
      email: "",
      password: "",
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SIGN_IN_API_ROUTE}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        if (!response.ok) {
          throw new Error("Login failed");
        }
        router.push("/dashboard");
        
    } catch (error:any) {
        console.log("Login failed", error.message);
        
    }finally {
        setLoading(false);
    }
}

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>{loading ? "Processing" : "Login"}</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter your email address"
                required
              />
              <HiOutlineAtSymbol className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Enter password"
                required
                minLength={6}
              />
              <FaKey className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <button className="w-full text-orange" type="submit">Sign In</button>
        {/* <LoginButton pending={pending} onClick={onLogin} /> */}
        <div className="flex items-center bg-primary justify-around">
            <div>
                <Link href={`/`}>
                    <FaHouseUser className="ml-auto h-5 w-5 text-gray-50"  /> HOME
                </Link>
            </div>
            
            <div>
            <Link href={`/dashboard`}>
                <AiTwotoneDashboard className="ml-auto h-5 w-5 text-gray-50"  /> DASHBOARD
            </Link>
            </div>
        </div>
        {/* <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <FaExclamationCircle className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div> */}
      </div>
    </form>
  );
}

function LoginButton({ pending, onClick }: any) {
  return (
    <button className="btn mt-4 w-full" aria-disabled={pending} onClick={onClick}>
      Log in <FaArrowRight className="ml-auto h-5 w-5 text-gray-50" />
    </button>
  );
}
