import { Post } from "@/lib/model";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";


export const GET = async (request: any) => {
    try {
        await connectDB();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch(error){
        console.log(`Get handler Error: ${error}`)
    }
};