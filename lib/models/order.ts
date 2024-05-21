import mongoose from "mongoose";


const orderItemSchema = new mongoose.Schema(
    {
      productId: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      total: {
        type: Number,
        required: true,
        min: 0,
      },
    },
    { _id: false } // Disable automatic _id generation for subdocuments
  );
  
  const addressSchema = new mongoose.Schema(
    {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    { _id: false } // Disable automatic _id generation for subdocuments
  );
  
  const orderSchema = new mongoose.Schema(
    {
      _id: {
        type: String,
        required: true,
      },
      // user: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "User",
      //   required: true,
      // },
      items: {
        type: [orderItemSchema],
        required: true,
      },
      totalAmount: {
        type: Number,
        required: true,
        min: 0,
      },
      shippingAddress: {
        type: addressSchema,
        required: true,
      },
      paymentMethod: {
        type: String,
        required: true,
        enum: ["Credit Card", "PayPal", "Bank Transfer", "Other"],
      },
      paymentStatus: {
        type: String,
        required: true,
        enum: ["Pending", "Completed", "Failed", "Refunded"],
      },
      orderStatus: {
        type: String,
        required: true,
        enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      },
      trackingNumber: {
        type: String,
      },
    },
    { timestamps: true }
  );

export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);