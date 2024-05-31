


export default function BodyWrapper({ children }: Readonly<{ children: React.ReactNode }>){
    return (
        <div className="p-10 md:pt-[7rem] ">
        { children }
        </div>
    );
}