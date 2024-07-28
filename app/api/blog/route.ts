import { Post } from "@/lib/models/post";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";


export const dynamic = 'force-dynamic'


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