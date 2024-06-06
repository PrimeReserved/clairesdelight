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
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>Trending</li>
          <li className="font-bold">ALL</li>
        </ul>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <div>
            <p>Posted by {post.author}</p>
            <p>On 5th April 2024</p>
            <p>{post.date}</p>
          </div>
          <div className="bg-[#F6FFE9] w-64 h-20">
            <p>We value you</p>
          </div>
          <div className="bg-[#F6FFE9] w-64 h-20">
            <p>
              Elevating Your Dishes wih a <br />
              Flavour Boost.
            </p>
          </div>
          <div className="bg-[#F6FFE9] w-64 h-20">
            <p>Get in Touch with Us</p>
          </div>
          <div className="bg-[#F6FFE9] w-64 h-20">
            <p>Leave a Comment</p>
          </div>
        </div>
        <div>
          <Suspense fallback={<Loading />}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={400}
              height={400}
              loading="lazy"
            />
          </Suspense>

          <h2 className="text-4xl font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      </div>
    </>
  );
}
