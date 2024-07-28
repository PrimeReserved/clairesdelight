import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Link from "next/link";
import { getRecipe } from "@/lib/data";
import Navbar from "@/app/component/header/navbar/Navbar";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "@/app/component/footer/FooterMobile";
import FooterTab from "@/app/component/footer/FooterTab";
import RecipeDetail from "@/app/component/recipe/RecipeDetail";


export const generateMetadata = async ({ params }: any) => {
  const { id } = params;
  const recipe = await getRecipe(id);
  return {
    title: recipe?.slug,
    description: recipe?.description,
  };
};

export default async function Page({ params }: any) {
  const { slug } = params;
  const recipe = await getRecipe(slug);
  return (
    <>
        <Navbar />
      <BodyWrapper>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/recipes">Recipes</Link>
            </li>
            <li>All Recipes</li>
            <li>{recipe?.title}</li>
          </ul>
        </div>
        <RecipeDetail item={recipe} />
      </BodyWrapper>
      <Footer />
      <FooterMobile />
      <FooterTab />
    </>
  );
}
