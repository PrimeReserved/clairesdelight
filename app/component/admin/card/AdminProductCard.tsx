import { FaPepperHot } from "react-icons/fa";
import { getProduct } from "@/lib/data";

export default async function AdminProductCard() {

  const spices = await getProduct();
  return (
    <div className="card mt-10 border-2 w-72 h-[10rem] p-5">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="stat-title">Total Spices</div>
          <div className="stat-value">{spices.length}</div>
        </div>
        <div className="stat-actions">
        <FaPepperHot className="h-20 w-20" />
        </div>
      </div>
    </div>
  );
}
