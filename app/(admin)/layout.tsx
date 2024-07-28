"use client"

import { usePathname } from "next/navigation";
import Providers from "@/context/Providers";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button";
import { ArrowUpRight, AtSignIcon, HeartIcon, MountainIcon } from "lucide-react";
import Image from "next/image";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname();
  return (
    <Providers>
      <div className="flex min-h-[100dvh] w-full">
        {/* Side Menu Block  */}
        <div className="hidden h-full border-r bg-muted/40 lg:block">
          <div className="flex flex-col gap-2">
            <div className="flex h-[60px] items-center px-6">
              <Link
                href="#"
                className="flex items-center gap-2 font-semibold"
                prefetch={false}
              >
                {/* <MountainIcon className="h-6 w-6" />
              <span className=""></span> */}
                <Image src="/Logo.png" alt="logo" width={50} height={50} />
              </Link>
            </div>
            <div className="flex-1">
              <SideNav />
            </div>
          </div>
        </div>
        {/* Side Menu Block  */}
        <div className="flex-1">
          <div className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
            <Link href="#" className="lg:hidden" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only"> {pathname
                .replace("/", "")
                .replace(/^./, (match) => match.toUpperCase())}</span>
            </Link>
            <div className="flex-1">
              <h1 className="font-semibold text-lg"> {pathname
                .replace("/", "")
                .replace(/^./, (match) => match.toUpperCase())}</h1>
            </div>
            <div className="flex justify-between items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              {/* <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
              </div>
            </form> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Image
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      className="rounded-full"
                      alt="Avatar"
                    />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            {children}
            <div className="flex justify-center gap-2 border-t-2 pt-5">
              <AtSignIcon /> {new Date().getFullYear()} Copyrights. Built with by {''}
              <HeartIcon className="h-5 w-5 text-red" /> 
              <code className="flex">PrimeReserved <ArrowUpRight /></code>
            </div>
          </main>
        </div>
      </div>
      <Toaster richColors position="bottom-right" />
    </Providers>
  );
}
