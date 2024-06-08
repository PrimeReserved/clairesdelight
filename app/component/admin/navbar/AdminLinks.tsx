"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
  MdOutlineStorefront,
  MdOutlineShoppingBag,
  MdOutlinePeople,
  MdOutlineBlock,
  MdOutlineInsertChart,
  MdOutlineSettings,
  MdOutlineSecurity,
  MdOutlineCheck,
  MdOutlineGrain,
} from "react-icons/md";


interface LinkProps {
  title: string;
  icon: React.ReactNode;
  path: string;
}

export default function AdminLinks({ isCollapsed }: Readonly<{ isCollapsed: boolean }>) {
  const pathname = usePathname();

  const links: LinkProps[] = [
    {
      title: "Overview",
      icon: <MdOutlineStorefront className="h-5 w-5" />,
      path: "/dashboard",
    },
    {
      title: "Products",
      icon: <MdOutlineShoppingBag className="h-5 w-5" />,
      path: "/products",
    },
    {
      title: "Customers",
      icon: <MdOutlinePeople className="h-5 w-5" />,
      path: "/customers",
    },
    {
      title: "Blog",
      icon: <MdOutlineBlock className="h-5 w-5" />,
      path: "/blog",
    },
    {
      title: "Reports",
      icon: <MdOutlineInsertChart className="h-5 w-5" />,
      path: "/reports",
    },
    {
      title: "User Roles",
      icon: <MdOutlineSettings className="h-5 w-5" />,
      path: "/user-roles",
    },
    {
      title: "Settings",
      icon: <MdOutlineSecurity className="h-5 w-5" />,
      path: "/settings",
    },
    {
      title: "Security Features",
      icon: <MdOutlineSecurity className="h-5 w-5" />,
      path: "/security-features",
    },
    {
      title: "Checkout",
      icon: <MdOutlineCheck className="h-5 w-5" />,
      path: "/checkout",
    },
    {
      title: "Integration",
      icon: <MdOutlineGrain className="h-5 w-5" />,
      path: "/integration",
    },
  ];

  return (
    <div>
      <nav className="flex flex-col gap-5 items-start mt-10">
        {links.map((link) => (
          <Link href={link.path} key={link.title}
              className={clsx(
                "flex items-center transition-all w-full duration-200 rounded",
                {
                  "bg-gray-700 p-2": pathname === link.path && isCollapsed,
                  "bg-gray-700 px-4 py-2": pathname === link.path && !isCollapsed,
                  "hover:px-4 hover:py-2 hover:bg-gray-700": pathname !== link.path,
                }
              )}
            >
              {link.icon}
              {!isCollapsed && <span className="ml-4">{link.title}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}
