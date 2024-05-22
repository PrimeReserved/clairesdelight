//app/api/customer-reviews

import { CustomerReview } from "@/lib/models/customerReview";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";


export const GET = async (request: Request) => {
    try {
      await connectDB();
      console.log('Database connected successfully.');
  
      const customerReviews = await CustomerReview.find();
  
      if (customerReviews.length === 0) {
        console.log('No customer reviews found.');
      }
  
      return NextResponse.json(customerReviews);
    } catch (error) {
      console.log(`Get handler Error: ${error}`);
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  };