'use client'

import Image from "next/image";
import { fetchBlogs } from "@/features/blogs/blogsSlice";
import { RootState, AppDispatch } from "@/store";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import { BlogPost } from "@/typings";
import BodyWrapper from "../layout/BodyWrapper";

interface PostDetailProps {
    post: BlogPost;
}

export default function PostDetail({ post }: Readonly<PostDetailProps>) {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error } = useSelector(
        (state: RootState) => state.blogs
    );

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    useEffect(() => {
        if (loading) {
            Loading.pulse();
        } else {
            Loading.remove();
        }
    }, [loading]);

    if (error) {
        Report.warning("An Error Occured", error, "close", {
            width: "360px",
        });
        return null;
    }

    if (!post) {
        return null;
    }

    return (
        <BodyWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-2">
                <div className="font-bold pb-5">
                    <p>Posted by Admin | {post?.author}</p>
                    <p>On 5th April 2024</p>
                    <p>{post?._createdAt}</p>
                </div>
                <div className="bg-[#F6FFE9] w-96 h-auto p-1">
                    <p className="text-2xl pl-8 pt-2">Introduction</p>
                </div>
                <div className="bg-[#F6FFE9] w-96 h-auto p-1">
                    <p className="text-2xl pl-8 pt-2">We value you</p>
                </div>
                <div className="bg-[#F6FFE9] w-96 h-auto p-1">
                    <p className="text-2xl pl-8 pt-2">
                        Elevating Your Dishes with a <br />
                        Flavour Boost.
                    </p>
                </div>
                <div className="bg-[#F6FFE9] w-96 h-auto p-1">
                    <p className="text-2xl pl-8 pt-2">Get in Touch with Us</p>
                </div>
                <div className="bg-[#F6FFE9] w-96 h-auto p-1">
                    <p className="text-2xl pl-8 pt-2">Leave a Comment</p>
                </div>
            </div>
            <div className="col-span-2 pb-[10rem]">
                <Suspense>
                    <Image
                        src={post?.featuredImage}
                        alt={post?.title}
                        width={1000}
                        height={500}
                        loading="lazy"
                        // style={{ width: "100%", height: "60%" }}
                    />
                </Suspense>

                <h2 className="text-4xl font-semibold py-10">{post?.title}</h2>
                <p className="pb-10 break-normal md:break-words whitespace-pre-line">{post?.content}</p>
                <div className="">
                    <h3 className="text-2xl font-bold py-1">Get In Touch With Us</h3>
                    <p>
                        If you’re looking to add some flavour to your menu, We can help you
                        on your journey. For more information <br />
                        about our services and what we can offer you, please contact us at 
                        <span className="text-orange"> jebeyin4real@gmail.com</span>, or feel
                        free to <br />
                        call our team on 
                        <span className="text-orange"> 08070664809 or 08038353986,</span> We
                        look forward to hearing from you.
                    </p>
                </div>
            </div>
        </div>
        </BodyWrapper>
    );
}
