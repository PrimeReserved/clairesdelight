import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/component/header/logo/Logo'
import { FaPowerOff } from "react-icons/fa";
import { useRouter } from 'next/navigation';


 
export default function SideNav() {

  const router = useRouter();

  const logout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SIGN_IN_API_ROUT}`);
        router.push('/sign-in')
    } catch (error: any) {
        console.log(error.message)
        
    }
  }
  
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
        {/* <Logo /> */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          onClick={logout}>
            <FaPowerOff className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}