

interface SpiceTitleProps {
    title: string;
}

export default function SpiceTitle({ title }: SpiceTitleProps){
    
    return (
        <h2 className="card-title text-customBlack font-bold text-[20px] py-3">
            {title}
        </h2>
    );
}