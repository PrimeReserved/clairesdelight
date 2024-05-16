import { Post } from "@/lib/model";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";


export const GET = async (request: Request) => {
    try {
        await connectDB();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch(error){
        console.error(`Get handler Error: ${error}`)
        throw NextResponse.error();
    }
};