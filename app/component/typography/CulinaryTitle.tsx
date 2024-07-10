import Image from "next/image";
import Line1 from "@/public/image/recipe-visuals/Line 1.png";
import Line2 from "@/public/image/recipe-visuals/Line 2.png";

export default function CulinaryTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <div className="flex justify-center items-center gap-3 lg:gap-6 pt-10">
        <Image
          src={Line1}
          alt="Line1"
          width={200}
          height={0}
        />
        <div className=" text-[17px] md:text-2xl font-semibold">{children}</div>
        <Image
          src={Line2}
          alt="Line2"
          width={200}
          height={0}
        />
      </div>
  );
}
