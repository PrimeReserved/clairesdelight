// import { Recipe } from "@/lib/model";
// import { connectDB } from "@/lib/utils";
// import { NextResponse } from "next/server";


// export const GET = async (request: any) => {
//     try {
//         await connectDB();
//         const recipes = await Recipe.find();
//         return NextResponse.json(recipes);
//     } catch(error){
//         console.log(`Get handler Error: ${error}`)
//     }
// };