import { FaBlog } from "react-icons/fa";

export default function AdminBlogCard() {
  return (
    <div className={`card mt-10 border border-primaryGrey w-72 h-[10rem] p-5 bg-lighterGreen`}>
      <div className="flex justify-between items-center">
        <div className="">
          <div className={`stat-title text-customBlack`}>Total Sales</div>
          <div className={`stat-value text-customBlack`}>$89,400</div>
        </div>
        <div className="stat-actions">
          <FaBlog className="h-20 w-20 text-orange" />
        </div>
      </div>
    </div>
  );
}