import Image from "next/image";
import Paragraph from "../../typography/Paragraph";

interface FutureServiceProps {
    imageIcon: any,
    text: string;
    className: string;
}


export default function FutureService({ imageIcon, text, className }: Readonly<FutureServiceProps>){

    return (
        <div className={`${className}`}>
            <Image
              src={imageIcon}
              alt="icon"
              width={50}
              height={50}
              />
              <Paragraph>{text}</Paragraph>                         
        </div>
    );
}