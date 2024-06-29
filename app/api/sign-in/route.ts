import { User } from "@/lib/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/utils";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log({ email, password });

        // check user exists
        const user = await User.findOne({ email });
        console.log(`User: ${user}`);

        if (!user) return NextResponse.json({ error: "User does not exist" }, { status: 400 });

        // check password
        const validPassword = await bcryptjs.compare(password, user.password);
        console.log(`Password: ${password}\nUser password: ${user.password}`);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        // Create a token with expiration of 1 day
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

        // Create a JSON response indicating successful login
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });
        console.log(`Success Response: ${response}`);

        // Set the token as an HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}