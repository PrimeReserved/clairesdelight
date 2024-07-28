import { SiHomeassistantcommunitystore, SiWelcometothejungle } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { TbTransactionDollar, TbTruckDelivery } from "react-icons/tb";
import { ImBlogger } from "react-icons/im";
import { VscSettings } from "react-icons/vsc";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import { HomeIcon, LineChartIcon, PackageIcon, SettingsIcon, ShoppingCartIcon } from "lucide-react";
import { AiFillCustomerService } from "react-icons/ai";
   
  const links = [
    {
      title: "Welcome",
      path: "/welcome",
      icon: <SiWelcometothejungle />
    },
    {
      title: "Overview",
      path: "/overview",
      icon:  <HomeIcon className="h-4 w-4" />
    },
    {
      title: "Products",
      path: "/product",
      icon: <PackageIcon className="h-4 w-4" />
    },
    {
      title: "Orders",
      path: "/order",
      icon: <ShoppingCartIcon className="h-4 w-4" />
    },
    {
      title: "customer",
      path: "/customer",
      icon: <AiFillCustomerService className="h-4 w-4" />
    },
    {
      title: "Transactions",
      path: "/transaction",
      icon: <TbTransactionDollar className="h-4 w-4" />
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: <LineChartIcon className="h-4 w-4" />
    },
    {
      title: "Blog",
      path: "/blog",
      icon: <ImBlogger />
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <SettingsIcon className="h-4 w-4" />
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
            href={link.path}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            prefetch={false}
          >
            {link.icon}
            {link.title}
          </Link>
          );
        })}
      </>
    );
  }