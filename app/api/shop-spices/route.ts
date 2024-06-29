import { Product } from "@/lib/models/product";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export const GET = async (request: Request) => {
    try {
        await connectDB();
        const products = await Product.find();
        return NextResponse.json(products);
    } catch(error){
        console.log(`Get handler Error: ${error}`)
    }
};