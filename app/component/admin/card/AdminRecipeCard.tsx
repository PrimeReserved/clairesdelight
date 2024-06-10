import { VscLayoutMenubar } from "react-icons/vsc";
import { Recipe } from "@/typings";

export default function AdminRecipeCard({ recipes }: Readonly<{ recipes: Recipe[] }>) {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div>No recipes available</div>;
  }
    
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
