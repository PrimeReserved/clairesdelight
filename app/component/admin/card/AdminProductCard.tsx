import { Product } from "@/typings";
import { FaPepperHot } from "react-icons/fa";

export default async function AdminProductCard({ products }: Readonly<{ products: Product[]}>) {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="card mt-10 border-2 w-72 h-[10rem] p-5">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="stat-title">Total Spices</div>
          <div className="stat-value">{products.length}</div>
        </div>
        <div className="stat-actions">
        <FaPepperHot className="h-20 w-20" />
        </div>
      </div>
    </div>
  );
}
