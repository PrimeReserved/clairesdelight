import { Post } from "@/lib/models/post";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";


export const GET = async (request: any, { params }: any) => {
    const { slug } = params;
    try {
        await connectDB();
        const post = await Post.findOne({ slug });
        return NextResponse.json(post);
    } catch(error){
        console.log(`Get handler Error: ${error}`)
    }
};

export const DELETE = async (request: any, { params }: any) => {
    const { slug } = params;
    try {
        await connectDB();
        const post = await Post.deleteOne({ slug });
        return NextResponse.json(`Deleted post: ${post}`);
    } catch(error){
        console.log(`Delete handler Error: ${error}`)
    }
};