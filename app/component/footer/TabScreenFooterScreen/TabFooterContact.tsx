import React from "react";
import Image from "next/image";
import PhoneIcon from "@/public/image/socials/phone.svg";
import Mail from "@/public/image/socials/mail.svg"
import PhoneRed from "@/public/image/socials/phoneRed.svg";
import MailRed from "@/public/image/socials/mailRed.svg";
import Location from "../DestopScreenFooterDetail/Location";


interface TabMobileFooterContactProps {
  hover: boolean;
}

function TabMobileFooterContact({ hover }: TabMobileFooterContactProps) {
  return (
    <div>
      <h3 className="font-bold xl:text-xl text-lg">Contact Us</h3>
      <div className="flex items-start gap-2 py-4">
        <Image 
          src={hover ? PhoneRed : PhoneIcon} 
          alt="Phone Icon" 
          width={25} 
          height={25} 
        />
        <div className="xl:text-sm text-xs">
          <p className="mb-2">08070664809</p>
          <p>08038353986</p>
        </div>
      </div>

      <div className="flex gap-2 mb-[4rem]">
        <Image 
          src={hover ? MailRed : Mail} 
          alt="Mail" width={25} height={25} />
        <p className="xl:text-sm text-xs">jebeyin4real@gmail.com</p>
      </div>
      <Location />

    </div>
  );
}

export default TabMobileFooterContact;