import Image, { StaticImageData } from "next/image"

interface ContactCardProps {
    icon: StaticImageData;
    children: React.ReactNode;
}

export default function ContactCard({ icon, children}: Readonly<ContactCardProps>) {

    return (
        <div className="card w-40 rounded-xl shadow-xl">
            <div className="flex gap-2">
              <Image
                src={icon}
                alt="icon"
                width={40}
                height={40}
                />
                <p>{children}</p>
            </div>
        </div>
    );
}