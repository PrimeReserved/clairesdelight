import mongoose from "mongoose";

const customerReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    // slug: {
    //     type: String,
    //     required: true,
    // },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    // rating: {
    //   type: Number,
    //   required: true,
    //   min: 1,
    //   max: 5,
    // },
    // date: {
    //   type: Date,
    //   required: true,
    //   default: Date.now,
    // },
    // productId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Product",
    //   required: true,
    // },
  },
  { timestamps: true }
);

export const CustomerReview =
  mongoose.models?.CustomerReview ||
  mongoose.model("CustomerReview", customerReviewSchema);
