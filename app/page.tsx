import Choose from "./component/LandingPage/Choose";
import CustomerReview from "./component/LandingPage/CustomerReview";
import Hero from "./component/LandingPage/Hero";
import RecipeVisuals from "./component/LandingPage/RecipeVisuals";
import Spice from "./component/LandingPage/Spice";

export default function Page() {

  return (
    <div>
      <Hero />
      <Choose />
      <Spice />
    <CustomerReview />

    <RecipeVisuals />

    </div>
  );
}