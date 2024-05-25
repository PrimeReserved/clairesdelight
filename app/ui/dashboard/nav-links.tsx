import { SiHomeassistantcommunitystore, SiWelcometothejungle } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { ImBlogger } from "react-icons/im";
import { VscSettings } from "react-icons/vsc";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
   
  const links = [
    {
      title: "Welcome",
      path: "/",
      icon: <SiWelcometothejungle />
    },
    {
      title: "Overview",
      path: "/dashboard",
      icon: <SiHomeassistantcommunitystore />
    },
    {
      title: "Products",
      path: "/products",
      icon: <BsShopWindow />
    },
    {
      title: "Orders",
      path: "/orders",
      icon: <TbTruckDelivery />
    },
    {
      title: "Blog",
      path: "/blog",
      icon: <ImBlogger />
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <VscSettings />
      },
  ];
   
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.title}
              href={`{${link.path}`}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <FaLink className="w-6" />
              <p className="hidden md:block">{link.title}</p>
            </Link>
          );
        })}
      </>
    );
  }