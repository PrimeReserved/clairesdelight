import React from "react";
import Logo from "../../header/logo/Logo";
import SocialLogos from "../../Socials/SocialLogo";

interface FooterLogoProps {
  hover: boolean;
}

function FooterLogo({ hover }: FooterLogoProps) {
  return (
    <div>
      <Logo />
      <p className="w-[217px] text-sm py-10 ">
        We provide high-quality, flavorful, and chemical-free products that
        inspire creativity in the kitchen & promote a healthier lifestyle.
      </p>
      <SocialLogos hover={hover} /> 
    </div>
  );
}

export default FooterLogo;