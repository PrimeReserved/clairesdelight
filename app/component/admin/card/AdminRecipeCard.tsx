import { VscLayoutMenubar } from "react-icons/vsc";
import { getRecipes } from "@/lib/data";

export default async function AdminRecipeCard() {

    const recipes = await getRecipes();

    
  return (
    <div className="card mt-10 border-2 w-72 h-[10rem] p-5">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="stat-title">Total Recipes</div>
          <div className="stat-value">{recipes.length}</div>
        </div>
        <div className="stat-actions">
        <VscLayoutMenubar className="h-20 w-20" />
        </div>
      </div>
    </div>
  );
}
