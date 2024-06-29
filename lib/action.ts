"use server"

import bcryptjs from 'bcryptjs';
import { User } from "@/lib/models/user";
import { revalidatePath } from "next/cache";
import { Post } from "@/lib/models/post";
import { Product } from "@/lib/models/product";
import  { Order } from "@/lib/models/order"
import { connectDB } from "./utils";


// Post
export const addPost = async(formData: FormData) => {
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

export const updatePost = async (formData: FormData) => {
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

export const deletePost = async(formData: FormData) => {
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


/** PRODUCT CRUD OPERATION */
export const addProduct = async (formData: FormData)  => {
  const { name, slug, description, category, origin, healthBenefit, culinaryUses, price, stock, images } = Object.fromEntries(formData);

  try {
      await connectDB();
      // Covert file to base64 
      const imagesFile = formData.get('images') as File;
      let imagesBase64 = "";
      if (imagesFile) {
        const reader = new FileReader();
        reader.readAsDataURL(imagesFile);
        reader.onloadend = () => {
          imagesBase64 = reader.result as string;
        };
        await new Promise((resolve) => {
          reader.onload = resolve;
        });
      }
      const newProduct = new Product({
        name,
        slug,
        description,
        category: JSON.parse(category as string),
        origin,
        healthBenefit: JSON.parse(healthBenefit as string),
        culinaryUses: JSON.parse(culinaryUses as string), 
        price,
        stock,
        images: imagesBase64
      });
      await newProduct.save();
      console.log("Created Product:", newProduct);
      revalidatePath("/product");
      return { success: true }
  } catch(error){
      console.log(`Error add new product: ${error}`);
      return { error: "An Error occurred adding a new product"}
  }
};

export async function addOrder(orderData: any) {
  try {
    console.trace();
    await connectDB();

    // Check for duplicate order using trackingNumber
    const existingOrder = await Order.findOne({ trackingNumber: orderData.trackingNumber });
    if (existingOrder) {
      throw new Error("Duplicate order detected");
    }

    // Create a new order
    const newOrder = new Order({
      items: orderData.items,
      totalAmount: orderData.totalAmount,
      shippingAddress: orderData.shippingAddress,
      paymentMethod: orderData.paymentMethod,
      paymentStatus: orderData.paymentStatus,
      orderStatus: orderData.orderStatus,
      trackingNumber: orderData.trackingNumber
    });

    // Save the new order to the database
    const savedOrder = await newOrder.save();

    if(savedOrder.trackingNumber){
      console.log("Order created:", savedOrder.trackingNumber);
    }

    // Revalidate the orders page or any other relevant pages
    revalidatePath('/orders')

    return { success: true, message: "Order created successfully", order: savedOrder };
  } catch (error: any) {
    console.error('Error adding order:', error);
    return { success: false, message: error.message };
  }
}