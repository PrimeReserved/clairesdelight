"use server"

import { revalidatePath } from "next/cache";
import { Post } from "./model";
import { connectDB } from "./utils";

export const addPost = async(formData: any) => {
    const { userId, slug, title, content, featuredImage } = Object.fromEntries(formData);

    try {
        await connectDB();
        const newPost = new Post({ title, content, slug, userId, featuredImage });
        await newPost.save();
        console.log("Saved to Database");
        revalidatePath("/blog");
    } catch(error){
        console.log(`Error adding post: ${error}`);
        return { error: "An Error occurred adding post"}
    }
};

export const deletePost = async(formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connectDB();
        await Post.findByIdAndDelete(id);
        console.log("Deleted from Database");
        revalidatePath("/blog");
    } catch (error) {
        console.log(`Error deleting post: ${error}`);
        return { error: "An Error occurred deleting post"}
    }
};