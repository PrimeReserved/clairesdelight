import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/utils";
import { Order } from "@/lib/models/order";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

export async function GET(request: NextRequest) {
    try {
        // await runMiddleware(request, response, cors);
        await connectDB();

        const { searchParams } = new URL(request.url);
        const trackingNumber = searchParams.get('trackingNumber');
        const email = searchParams.get('email');

        let query = {};

        if (trackingNumber) {
            query = { trackingNumber };
        } else if (email) {
            query = { "shippingAddress.email": email };
        }

        const orders = await Order.find(query);

        if (orders.length === 0) {
            return NextResponse.json({ message: "No orders found" }, { status: 404 });
        }

        return NextResponse.json(orders, { status: 200, headers: corsHeaders });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

/**
 * Example Usage
 * Fetch orders by tracking number:
 * url:
 *  GET /api/orders?trackingNumber=1234567890
 * 
 * Fetch orders by email:
 *  GET /api/orders?email=user@example.com
*/

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const reqBody = await request.json();

        // Extract order details from request body
        const {
            items,
            totalAmount,
            shippingAddress,
            paymentMethod,
            paymentStatus,
            orderStatus,
            trackingNumber
        } = reqBody;

        // Validate the order data
        if (!items || items.length === 0) {
            return NextResponse.json({ error: "No items in the order" }, { status: 400 });
        }

        // Check for duplicate order using trackingNumber
        const existingOrder = await Order.findOne({ trackingNumber });
        if (existingOrder) {
            return NextResponse.json({ error: "Duplicate order detected" }, { status: 400 });
        }

        // Create a new order
        const newOrder = new Order({
            items,
            totalAmount,
            shippingAddress,
            paymentMethod,
            paymentStatus,
            orderStatus,
            trackingNumber
        });

        // Save the new order to the database
        const savedOrder = await newOrder.save();

        // Define CORS headers if needed
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*', // Adjust as necessary for your CORS policy
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        };

        return NextResponse.json(
            {
                message: "Order created successfully",
                success: true,
                savedOrder
            },
            {
                status: 200,
                headers: corsHeaders,
            }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
