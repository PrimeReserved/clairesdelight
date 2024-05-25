import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/component/header/navbar/Navbar";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "./component/footer/FooterMobile";
import FooterTab from "./component/footer/FooterTab";
import { CartProvider } from "@/context/CartProvider";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template:  "%s | Claire's Delight",
    default:  "Claire's Delight",
  },
  description: "Spice up your life",
  metadataBase: new URL("https://www.houvincity.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-0">
          <CartProvider>
            <Navbar />
            <div className="mt-[6rem] ">{children}</div>
            <Footer />
            <FooterMobile />
            <FooterTab />
          </CartProvider>
        </div>
      </body>
      <GoogleAnalytics gaId={`${process.env.GOOGLE_ANALYTICS}`} />
    </html>
  );
}
