import { User } from "@/lib/model";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";


export const GET = async (request: any) => {
    try {
        await connectDB();
        const users = await User.find();
        return NextResponse.json(users);
    } catch(error){
        console.log(`Get handler Error: ${error}`)
    }
};