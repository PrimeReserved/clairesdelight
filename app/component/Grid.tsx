import React from "react";


interface GridProps {
    children: React.ReactNode;
    numCols: number;
    gap: number;
}

export default function Grid({ children, numCols, gap }: Readonly<GridProps>) {

    return (
        <div className={`grid grid-cols-${numCols} gap-${gap} py-5`}>
            { children }
        </div>
    );
}