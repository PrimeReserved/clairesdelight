"use server"

import bcryptjs from 'bcryptjs';
import { User } from "@/lib/models/user";
import { revalidatePath } from "next/cache";
import { Post } from "@/lib/models/post";
import { connectDB } from "./utils";


// Post
export const addPost = async(formData: any) => {
    const { author, slug, title, content, category, tags, featuredImage } = Object.fromEntries(formData);

    try {
        await connectDB();
        const newPost = new Post({ title, slug, author, content, category, tags, featuredImage });
        await newPost.save();
        console.log("Created Post:", newPost);
        revalidatePath("/blog");
        return { success: true }
    } catch(error){
        console.log(`Error creating post: ${error}`);
        return { error: "An Error occurred creating post"}
    }
};

export const updatePost = async (formData: any) => {
    const { id, author, slug, title, content, category, tags, featuredImage } = Object.fromEntries(formData);
  
    if (!id) {
      return { error: "Post ID is required" };
    }
  
    try {
      await connectDB();
      const existingPost = await Post.findById(id);
      if (!existingPost) {
        return { error: "Post not found" };
      }
      if (!existingPost.id) {
        return { error: "Post ID is required" };
      }
  
      const updatedData = {
        author: author || existingPost.author,
        slug: slug || existingPost.slug,
        title: title || existingPost.title,
        content: content || existingPost.content,
        tags: tags || existingPost.tags,
        category: category || existingPost.category,
        featuredImage: featuredImage || existingPost.featuredImage,
      };
  
      const updatedPost = await Post.findByIdAndUpdate(id, updatedData, { new: true });
      console.log("Post updated in database:", updatedPost);
      revalidatePath("/blog");
      return { success: true };
    } catch (error) {
      console.log(`Error updating post: ${error}`);
      return { error: "An Error occurred updating post" };
    }
  };

export const deletePost = async(formData: any) => {
    const { id } = Object.fromEntries(formData);
    if (!id) {
        return { error: "Post ID is required" };
      }

    try {
        await connectDB();
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return { error: "Post not found" };
          }
          console.log("Post deleted from database:", deletedPost);
          revalidatePath("/blog");
          return { success: true };
    } catch (error) {
        console.log(`Error deleting post: ${error}`);
        return { error: "An error occurred while deleting the post" };
    }
};
// End 

// Authentication

export const createUser = async (req: any, res: any) => {
  try {
      const { username, email, password, isAdmin } = req.body;

      // Hash the password
      const hashedPassword = await bcryptjs.hash(password, 10);

      const newUser = new User({
          username,
          email,
          password: hashedPassword,
          isAdmin,
      });

      await newUser.save();

      res.status(201).json({ message: "User created successfully" });
  } catch (error) {
      res.status(500).json({ error: error });
  }
};

export const updatePasswords = async () => {
  try {
      // Connect to the database
      await connectDB();

      // Fetch all users from the database
      const users = await User.find();

      // Iterate over each user and update their password
      for (const user of users) {
          // Hash the user's password
          const hashedPassword = await bcryptjs.hash(user.password, 10);

          // Update the user's password in the database
          await User.findByIdAndUpdate(user._id, { password: hashedPassword });
      }

      console.log("Passwords updated successfully");
  } catch (error) {
      console.error("Error updating passwords:", error);
  }
}
