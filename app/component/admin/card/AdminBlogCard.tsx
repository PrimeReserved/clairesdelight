import { FaBlog } from "react-icons/fa";

export default function AdminBlogCard() {
  return (
    <div className="card mt-10 border border-1 w-72 h-[10rem] p-5">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="stat-title">Total Sales</div>
          <div className="stat-value">$89,400</div>
        </div>
        <div className="stat-actions">
        <FaBlog className="h-20 w-20" />
        </div>
      </div>
    </div>
  );
}
