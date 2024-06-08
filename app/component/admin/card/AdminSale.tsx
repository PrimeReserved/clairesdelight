import { TbCurrencyNaira } from "react-icons/tb";

export default function AdminSaleCard() {
  return (
    <div className="card mt-10 border-2 w-72 h-[10rem] p-5">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="stat-title">Total Sales</div>
          <div className="stat-value">₦89,400</div>
        </div>
        <div className="stat-actions">
        <TbCurrencyNaira className="h-20 w-20" />
        </div>
      </div>
    </div>
  );
}
