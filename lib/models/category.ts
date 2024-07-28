import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
}, { timestamps: true })

export const Category =
  mongoose.models.Product || mongoose.model("Category", categorySchema);