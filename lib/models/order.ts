import mongoose from "mongoose";


const orderItemSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity cannot be less than 1'],
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      }
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
        type: [{
          display_name: String,
          variable_name: String,
          value: String
        }],
        required: true
      },
      paymentMethod: {
        type: String,
        required: true,
      },
      paymentStatus: {
        type: String,
        required: true,
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