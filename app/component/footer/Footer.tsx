"use client";

import React, { useState } from "react";
import FooterLogo from "./FooterDetail/FooterLogo";
import FooterContact from "./FooterDetail/FooterContact";
import WebsiteLinks from "./FooterDetail/WebsiteLinks";
import Location from "./FooterDetail/Location";

export default function Footer() {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="flex justify-between py-[4rem] px-[4rem] bg-white"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? 'lightGreen' : 'white'
      }}
    >
      <FooterLogo hover={hover} /> 
      <FooterContact hover={hover} />
      <WebsiteLinks />
      <Location />
    </div>
  );
}