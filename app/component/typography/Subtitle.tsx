import Image, { StaticImageData } from "next/image";

interface SubtitleProps {
    icon: StaticImageData;
    title: string;
}


export default function Subtitle({ icon, title }: Readonly<SubtitleProps>){

    return (
        <div className="flex gap-2">
            <Image
              src={icon}
              alt='icon'
              width={40}
              height={40}
            />
            <div className=" text-[17px] md:text-2xl font-semibold">{title}</div>
        </div>
    );
}