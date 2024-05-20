import { User } from "@/lib/product";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";


export const GET = async (request: any, { params }: any) => {
    const { slug } = params;
    try {
        await connectDB();
        const user = await User.findOne({ slug });
        return NextResponse.json(user);
    } catch(error){
        console.log(`Get handler Error: ${error}`)
    }
};

export const DELETE = async (request: any, { params }: any) => {
    const { slug } = params;
    try {
        await connectDB();
        const user = await User.deleteOne({ slug });
        return NextResponse.json(`Deleted user: ${user}`);
    } catch(error){
        console.log(`Delete handler Error: ${error}`)
    }
};