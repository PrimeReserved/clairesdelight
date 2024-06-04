interface ButtonProps {
    className: string;
    text: string;
    icon?: React.ReactNode
    onClick?: () => void;
}


export default function Button ({ className, text, icon, onClick }: Readonly<ButtonProps>){
    return (
        <button onClick={onClick} className={`${className}`}>
            { text }
        </button>
    );
}