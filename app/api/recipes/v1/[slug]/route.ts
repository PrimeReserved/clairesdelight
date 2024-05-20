// import { Recipe } from "@/lib/model";
// import { connectDB } from "@/lib/utils";
// import { NextResponse } from "next/server";


// export const GET = async (request: any, { params }: any) => {
//     const { slug } = params;
//     try {
//         await connectDB();
//         const recipe = await Recipe.findOne({ slug });
//         return NextResponse.json(recipe);
//     } catch(error){
//         console.log(`Get handler Error: ${error}`)
//     }
// };

// export const DELETE = async (request: any, { params }: any) => {
//     const { slug } = params;
//     try {
//         await connectDB();
//         const recipe = await Recipe.deleteOne({ slug });
//         return NextResponse.json(`Deleted recipe: ${recipe}`);
//     } catch(error){
//         console.log(`Delete handler Error: ${error}`)
//     }
// };