"use client"

import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Login() {
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
      router.push("/overview");

    } catch (error: any) {
      console.log("Login failed", error);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center bg-repeat px-4  sm:px-6 lg:px-8">
      <div className="mcomponents/login.tsxx-auto bg-lighterGreen w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-3">
          <Image src="/Logo.png" alt="logo" width={100} height={50} />
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{loading ? "Processing" : "Claire's Delight"}</h1>
        </div>
        <div className="p-8 shadow sm:rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email address"
                required
                autoComplete="email"
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter password"
                autoComplete="paswword"
                required
                minLength={6}
                className="mt-1 block w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember-me" name="remember-me" />
                <Label htmlFor="remember-me" className="ml-2">
                  Remember me
                </Label>
              </div>
              <div className="text-sm">
                <Link href="/" className="font-medium text-primary hover:text-primary/90" prefetch={false}>
                  Go Home
                </Link>
              </div>
            </div>
            <Button type="submit" className="w-full bg-orange hover:bg-green">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}