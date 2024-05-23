interface ButtonProps {
    className: string;
    text: string;
    icon?: React.ReactNode
}


export default function Button ({ className, text, icon }: Readonly<ButtonProps>){
    return (
        <button className={`${className}`}>
            { text }
        </button>
    );
}