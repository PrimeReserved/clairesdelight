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
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";
import { useState } from "react";


interface LinkProps {
  title: string;
  icon: React.ReactNode;
  path: string;
  submenu?: LinkProps[];
}

export default function AdminLinks({ isCollapsed }: Readonly<{ isCollapsed: boolean }>) {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const handleToggle = (title: string) => {
    setExpandedMenus((prev) =>
      prev.includes(title)
        ? prev.filter((menu) => menu !== title)
        : [...prev, title]
    );
  };

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
      submenu: [
        {
          title: "All Products",
          icon: <MdOutlineShoppingBag className="h-5 w-5" />,
          path: "/products/all",
        },
      ]
    },
    {
      title: "Orders",
      icon: <MdOutlinePeople className="h-5 w-5" />,
      path: "/orders",
      submenu: [
        {
          title: "Customers",
          icon: <MdOutlineSettings className="h-5 w-5" />,
          path: "/orders/customers",
        },
        {
          title: "History",
          icon: <MdOutlineSecurity className="h-5 w-5" />,
          path: "/orders/history",
        },
      ],

    },
    {
      title: "Blog",
      icon: <MdOutlineBlock className="h-5 w-5" />,
      path: "/blog-admin",
    },
    {
      title: "Reports",
      icon: <MdOutlineInsertChart className="h-5 w-5" />,
      path: "/reports",
    },
    {
      title: "Settings",
      icon: <MdOutlineSettings className="h-5 w-5" />,
      path: "/settings",
      submenu: [
        {
          title: "User Roles",
          icon: <MdOutlineSettings className="h-5 w-5" />,
          path: "/settings/user-roles",
        },
        {
          title: "Security Features",
          icon: <MdOutlineSecurity className="h-5 w-5" />,
          path: "/settings/security-features",
        },
      ],
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
      <nav className="flex flex-col gap-4 items-start p-3">
        {links.map((link) => (
         <div key={link.title} className="w-full">
         <div className="flex items-center w-full">
           <Link href={link.path} key={link.title}
             className={clsx(
               "flex items-center transition-all w-full duration-200 rounded p-2",
               {
                 "bg-lightGreen": pathname === link.path && isCollapsed,
                 "bg-lightGreen py-2": pathname === link.path && !isCollapsed,
                 "hover:bg-lightOrange": pathname !== link.path,
               }
             )}
           >
             <span className={clsx("h-5 w-5", {
               "text-customBlack": pathname === link.path && isCollapsed,
             })}>{link.icon}</span>
             {!isCollapsed && (
               <span className="ml-3 text-customBlack">{link.title}</span>
             )}
             {link.submenu && !isCollapsed && (
             <button
               onClick={() => handleToggle(link.title)}
               className="ml-auto focus:outline-none"
             >
               {expandedMenus.includes(link.title) ? (
                 <MdExpandLess className="h-5 w-5" />
               ) : (
                 <MdExpandMore className="h-5 w-5" />
               )}
             </button>
           )}
           </Link>
           
         </div>
         {link.submenu && (
           <div className={clsx("pl-6 transition-all duration-300 ease-in-out", { "max-h-0 overflow-hidden": !expandedMenus.includes(link.title), "max-h-96": expandedMenus.includes(link.title) })}>
             {link.submenu.map((subLink) => (
               <Link href={subLink.path} key={subLink.title}
                 className={clsx(
                   "flex items-center transition-all w-full duration-200 rounded p-2",
                   {
                     "bg-lightGreen": pathname === subLink.path && isCollapsed,
                     "bg-lightGreen py-2": pathname === subLink.path && !isCollapsed,
                     "hover:bg-lightOrange": pathname !== subLink.path,
                   }
                 )}
               >
                 <span className={clsx("h-5 w-5", {
                   "text-customBlack": pathname === subLink.path && isCollapsed,
                 })}>{subLink.icon}</span>
                 {!isCollapsed && <span className="ml-3 text-customBlack">{subLink.title}</span>}
               </Link>
             ))}
           </div>
         )}
       </div>       
        ))}
      </nav>
    </div>
  );
}