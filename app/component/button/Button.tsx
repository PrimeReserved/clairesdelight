interface ButtonProps {
    className: string;
    text: string;
    icon?: React.ReactNode
    onSubmit?: () => void;
}


export default function Button ({ className, text, icon, onSubmit }: Readonly<ButtonProps>){
    return (
        <button onSubmit={onSubmit} className={`${className}`}>
            { text }
        </button>
    );
}