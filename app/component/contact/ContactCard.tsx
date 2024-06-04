import Image, { StaticImageData } from "next/image"

interface ContactCardProps {
    icon: any;
    children: React.ReactNode;
}

export default function ContactCard({ icon, children}: Readonly<ContactCardProps>) {

    return (
        <div className="card w-[16.9rem] h-20 rounded-xl shadow-xl">
            <div className="flex flex-row items-center">
              <Image
                src={icon}
                alt="icon"
                width={80}
                height={100}
                />
                <p>{children}</p>
            </div>
        </div>
    );
}