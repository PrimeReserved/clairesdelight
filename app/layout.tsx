import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/context/Providers";

import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template:  "%s | Claire's Delight",
    default:  "Claire's Delight",
  },
  openGraph: {
    description: "Claire's Delight Spices",
    url: 'https://clairesdelight.com/',
    siteName: 'clairesdelight.com',
    images: [
      {
        url: 'https://res.cloudinary.com/dzd51q99i/image/upload/v1716690156/houvincity/services/HCL_Logo_1_k5l61c.png',
        width: 40,
        height: 40,
      },
      {
        url: 'https://res.cloudinary.com/dzd51q99i/image/upload/v1716690096/houvincity/landing-page/Union_chih6l.png',
        width: 40,
        height: 40,
        alt: 'Houvincity Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  keywords:["Claire's Delight Spices", "Clairesdelight", "Claire's delight", "Clairesdelight Shop spices", "Clairesdelight blog", "Clairesdelight spice recipes"],
  description: "Spice up your life",
  metadataBase: new URL(`${process.env.BASE_URL}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="mt-[6rem]">{children}</div>
        </Providers>
      </body>
      <GoogleAnalytics gaId={`${process.env.GOOGLE_ANALYTICS}`} />
    </html>
  );
}
