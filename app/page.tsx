import Choose from "./component/LandingPage/Choose";
import CustomerReview from "./component/LandingPage/CustomerReview";
import Hero from "./component/LandingPage/Hero";
import Ourservices from "./component/LandingPage/OurService";
import RecipeVisuals from "./component/LandingPage/RecipeVisuals";
import Spice from "./component/LandingPage/Spice";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Claire's Delight | Welcome Admin",
};

export default function Page() {

  return (
    <div>
      <Hero />
      <Choose />
      <Spice />
      <Ourservices />
      <CustomerReview />
      <RecipeVisuals />
    </div>
  );
}