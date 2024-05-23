import { CustomerReview } from "./models/customerReview";
import { Post } from "./models/post";
import { User } from "./models/user";
import { connectDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// Get Posts
export const getPosts = async () => {
    try {
        await connectDB();
        const posts = await Post.find();
        console.log(`Get posts: ${posts}`);
        return posts;
    } catch(error){
        console.log(`Error getting post: ${error}`);
        throw new Error("Failed to fetch get post")
    }
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
        const user = await Post.findById(id);
        return user;
    } catch (error) {
        console.log(`Error getting single user: ${error}`);
        throw new Error('Failed to get single user')
    }
};

