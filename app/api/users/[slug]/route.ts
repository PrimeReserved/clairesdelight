import { getDataFromToken } from "@/lib/data";
import { User } from "@/lib/models/user";
import { connectDB } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(request:NextRequest){
    try {

        // Extract user ID from the authentication token
        const userId = await getDataFromToken(request);

        // Find the user in the database based on the user ID
        const user = await User.findOne({_id: userId}).
        select("-password");
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}

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