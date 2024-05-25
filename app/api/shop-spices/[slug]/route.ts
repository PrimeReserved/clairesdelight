import { Product } from "@/lib/models/product";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'


export const GET = async (request: any, { params }: any) => {
    const { id } = params;
    try {
        await connectDB();
        const product = await Product.findOne({ id });
        return NextResponse.json(product);
    } catch(error){
        console.log(`Get handler Error: ${error}`)
    }
};

export const DELETE = async (request: any, { params }: any) => {
    const { id } = params;
    try {
        await connectDB();
        const product = await Product.deleteOne({ id });
        return NextResponse.json(`Deleted product: ${product}`);
    } catch(error){
        console.log(`Delete handler Error: ${error}`)
    }
};