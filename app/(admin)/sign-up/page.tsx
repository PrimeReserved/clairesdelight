import Logo from '@/public/image/Logo.svg';
import Image from 'next/image';
import SignupForm from '@/app/ui/signup-form';


export default function Page() {
    return (
      <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white text-center md:w-36">
            <Image src={Logo} alt="logo" width={45} height={45} />
          </div>
        </div>
        <SignupForm />
      </div>
    </main>
    )
  }