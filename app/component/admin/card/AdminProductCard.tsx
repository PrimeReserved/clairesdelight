import { Product } from "@/typings";
import { FaPepperHot } from "react-icons/fa";

export default async function AdminProductCard({ products }: Readonly<{ products: Product[]}>) {
  if (!Array.isArray(products) || products.length === 0) {
    return <div className={`text-customBlack`}>No products available</div>;
  }

  return (
    <div className={`card mt-10 border-2 border-primaryGrey w-72 h-[10rem] p-5 bg-lighterGreen`}>
      <div className="flex justify-between items-center">
        <div className="">
          <div className={`stat-title text-customBlack`}>Total Spices</div>
          <div className={`stat-value text-customBlack`}>{products.length}</div>
        </div>
        <div className="stat-actions">
          <FaPepperHot className="h-20 w-20 text-orange" />
        </div>
      </div>
    </div>
  );
}