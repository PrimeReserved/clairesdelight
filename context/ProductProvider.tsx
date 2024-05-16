import { useContext, useMemo } from "react";
import ProductContext from "./ProductContext";



export default function ProductProvider({ children }: Readonly<{ children: React.ReactNode }>) {

    const [products, setProducts] = useContext(ProductContext);

    const values = useMemo(() => [products, setProducts], [products, setProducts])


    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    )
}
