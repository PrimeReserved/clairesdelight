// import { Product } from "@/lib/model";
// import { connectDB } from "@/lib/utils";
// import { NextResponse } from "next/server";


// export const GET = async (request: any) => {
//     try {
//         await connectDB();
//         const products = await Product.find();
//         return NextResponse.json(products);
//     } catch(error){
//         console.log(`Get handler Error: ${error}`)
//     }
// };