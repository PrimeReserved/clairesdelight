import Paragraph from "../../typography/Paragraph";
import Image from "next/image";

interface ServiceContentProps {
    iconImage: any;
    description: string;
}

export default function ServiceContent({ iconImage, description }: Readonly<ServiceContentProps>){

    return (
        <div className="m-5">
            <div className="flex gap-5 justify-evenly">
                <Image
                  src={iconImage}
                  alt='icon'
                  height={50}
                  width={50}
                  className="rounded-md"
                />
            </div>
            <Paragraph><span className="font-bold">{ description }</span></Paragraph>
        </div>
    );
}