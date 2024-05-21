// import { Product } from "@/lib/model";
// import { connectDB } from "@/lib/utils";
// import { NextResponse } from "next/server";


// export const GET = async (request: any, { params }: any) => {
//     const { slug } = params;
//     try {
//         await connectDB();
//         const product = await Product.findOne({ slug });
//         return NextResponse.json(product);
//     } catch(error){
//         console.log(`Get handler Error: ${error}`)
//     }
// };

// export const DELETE = async (request: any, { params }: any) => {
//     const { slug } = params;
//     try {
//         await connectDB();
//         const product = await Product.deleteOne({ slug });
//         return NextResponse.json(`Deleted product: ${product}`);
//     } catch(error){
//         console.log(`Delete handler Error: ${error}`)
//     }
// };