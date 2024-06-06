import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const getPost = async (slug: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API_ROUTE}/${slug}`);
  if (!res.ok) {
    throw new Error("Error getting single post api");
  }
  return res.json();
};

export const generateMetadata = async ({ params }: any) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    content: post.content,
  };
};

export default async function Page({ params }: any) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <BodyWrapper>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>Trending</li>
          <li className="font-bold">ALL</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 justify-items-center content-center pt-10">
        <div className="flex flex-col gap-2">
          <div className="font-bold pb-5">
            <p>Posted by Admin | {post.author}</p>
            <p>On 5th April 2024</p>
            <p>{post.date}</p>
          </div>
          <div className="bg-[#F6FFE9] w-96 h-auto p-1">
            <p className="text-2xl pl-8 pt-2">Introduction</p>
          </div>
          <div className="bg-[#F6FFE9] w-96 h-auto p-1">
            <p className="text-2xl pl-8 pt-2">We value you</p>
          </div>
          <div className="bg-[#F6FFE9] w-96 h-auto p-1">
            <p className="text-2xl pl-8 pt-2">
              Elevating Your Dishes wih a <br />
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
        <div className="mr-10 pb-[10rem]">
          <Suspense fallback={<Loading />}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={300}
              height={300}
              loading="lazy"
              style={{ width: "100%", height: "60%" }}
            />
          </Suspense>

          <h2 className="text-4xl font-semibold py-3">{post.title}</h2>
          <p className="pb-10">{post.content}</p>
          <div className="">
            <h3 className="text-2xl font-bold py-1">Get In Touch With Us</h3>
            <p>If you’re looking to add some flavour to your menu, 
              We can help you on your journey. For more information <br />
              about our services and what we can offer you, please contact us at <span className="text-orange">jebeyin4real@gmail.com</span>, or feel free to<br />
               call our team on <span className="text-orange">08070664809 0r 08038353986,</span> We look forward to hearing from you.</p>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}
