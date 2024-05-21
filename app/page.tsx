import PostCard from "./component/blog/PostCard";
import CustomerReview from "./component/LandingPage/CustomerReview";
import RecipeVisuals from "./component/LandingPage/RecipeVisuals";
import SiteUnderConstruction from "./component/maintenance/SiteUnderConstruction";

export default function Page() {

  return (
    <div>
    {/* <SiteUnderConstruction /> */}
    <CustomerReview />

    <RecipeVisuals />

    </div>
  );
}