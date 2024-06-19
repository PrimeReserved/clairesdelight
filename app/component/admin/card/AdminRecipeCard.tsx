import { VscLayoutMenubar } from "react-icons/vsc";
import { Recipe } from "@/typings";

export default function AdminRecipeCard({ recipes }: Readonly<{ recipes: Recipe[] }>) {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div className={`text-customBlack`}>No recipes available</div>;
  }
    
  return (
    <div className={`card mt-10 border-2 border-primaryGrey w-72 h-[10rem] p-5 bg-lighterGreen`}>
      <div className="flex justify-between items-center">
        <div className="">
          <div className={`stat-title text-customBlack`}>Total Recipes</div>
          <div className={`stat-value text-customBlack`}>{recipes.length}</div>
        </div>
        <div className="stat-actions">
          <VscLayoutMenubar className="h-20 w-20 text-orange" />
        </div>
      </div>
    </div>
  );
}