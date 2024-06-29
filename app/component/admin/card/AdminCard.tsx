
export default function AdminCard({title, content, icon }: any) {
  return (
    <div className="card mt-10 border-2 w-72 h-[10rem] p-5">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="stat-title">{title}</div>
          <div className="stat-value">{content}</div>
        </div>
        <div className="stat-actions">
        {icon}
        </div>
      </div>
    </div>
  );
}
