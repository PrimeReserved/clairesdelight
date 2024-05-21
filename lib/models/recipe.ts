import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    method: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);


export const Recipe = mongoose.models?.Recipe || mongoose.model("Recipe", recipeSchema);