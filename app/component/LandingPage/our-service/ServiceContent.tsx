import Paragraph from "../../typography/Paragraph";
import Image from "next/image";

interface ServiceContentProps {
    iconImage: any;
    description: string;
}

export default function ServiceContent({ iconImage, description }: Readonly<ServiceContentProps>){

    return (
        <div className="flex">
            <div className="">
                <Image
                  src={iconImage}
                  alt='icon'
                  height={40}
                  width={40}
                  className="rounded-md border border-1"
                />
                <div>
            <Paragraph><span className="font-bold">{ description }</span></Paragraph>
                </div>
            </div>
        </div>
    );
}