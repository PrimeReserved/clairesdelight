// lib/utils

import mongoose from "mongoose"

const connection: any = {}

export const connectDB = async () => {
    try {
        if(connection.isConnected) {
            console.log(`Using existing connection`)
            return;
        }
        const db = await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URL}`);
        connection.isConnected = db.connections[0].readyState === 1;
        if (connection.isConnected) {
            console.log('Database connected successfully');
          } else {
            console.log('Database connection failed');
          }
        console.log(`Database connection status: ${connection.isConnected}`);
    } catch (error) {
        console.log(`Database connect error: ${error}`)
        throw new Error(`An error occured`);
    }
};