import { CustomerReview } from "./models/customerReview";
import { Post } from "./models/post";
import { User } from "./models/user";
import { connectDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

import jwt from 'jsonwebtoken'
import { NextRequest } from "next/server"


export const getProduct = async() => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_ROUTE}`, { next: { revalidate: 30 }});
      if (!res.ok) throw new Error(`Error fetching products.`)
      const data = await res.json();
      return data;
    } catch(error){
      console.log(`Error getting product data: ${error}`);
    }
  };

export const getSpice = async (slug: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PRODUCT_API_ROUTE}/${slug}`
      );
      if (!res.ok) {
        throw new Error(
          `Error getting single spice API data: ${res.status} ${res.statusText}`
        );
      }
      const spice = await res.json();
      return spice;
    } catch (error) {
      console.error("Failed to fetch spice data:", error);
      return null;
    }
  };

  export const getPosts = async() => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API_ROUTE}`, { next: { revalidate: 30 }});
      if (!res.ok) throw new Error(`Error fetching products.`)
      const data = await res.json();
      return data;
    } catch(error){
      console.log(`Error getting product data: ${error}`);
    }
  };

export const getRecipes = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPE_API_ROUTE}`, { next: { revalidate: 30 }});
    if (!res.ok) {
      throw new Error("Something happened while getting recipes!");
    }
    const data = await res.json();
    return data;
  };


export const getRecipe = async (slug: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPE_API_ROUTE}/${slug}`, { next: { revalidate: 30 }});
    if (!res.ok) {
      throw new Error("Error getting single recipe api data");
    }
    return res.json();
  };


export const getCustomerReview = async () => {
    try {
        await connectDB();
        const customerReview = await CustomerReview.find();
        console.log(`Get customerReview: ${customerReview}`);
        return customerReview;
    } catch(error){
        console.log(`Error getting post: ${error}`);
        throw new Error("Failed to fetch get post")
    }
};

// Get a Single Post
export const getPost = async (slug: any) => {
    try {
        await connectDB();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.log(`Error getting single post: ${error}`);
        throw new Error('Failed to get single post')
    }
};

// Get Users
export const getUsers = async () => {
    try {
        await connectDB();
        const users = await User.find();
        return users;
    } catch(error){
        console.log(`Error getting users: ${error}`);
        throw new Error("Failed to fetch get users")
    }
};

// Get a Single User
export const getUser = async (id: any) => {
    noStore();
    try {
        await connectDB();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(`Error getting single user: ${error}`);
        throw new Error('Failed to get single user')
    }
};

export const getUserByEmail = async (email: string) => {
  noStore();
  try {
      await connectDB();
      const user = await User.findOne({ email });
      return user;
  } catch (error) {
      console.log(`Error getting single user: ${error}`);
      throw new Error('Failed to get single user')
  }
};


// Auth helper 

export const getDataFromToken = (request: NextRequest) => {

  try {
      // Retrieve the token from the cookies
      const token = request.cookies.get("token")?.value ?? '';

      // Verify and decode the token using the secret key
      const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);

      // Return the user ID from the decoded token
      return decodedToken.id;

  } catch (error: any) {
      throw new Error(error.message)
      
  }
}

export const logout = async() => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOGOUT_API_ROUTE}`);
    if (!res.ok) throw new Error(`Error fetching products.`)
    const data = await res.json();
    return data;
  } catch(error){
    console.log(`Error getting product data: ${error}`);
  }
};