import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Navbar from "@/app/component/header/navbar/Navbar";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "@/app/component/footer/FooterMobile";
import FooterTab from "@/app/component/footer/FooterTab";
import PostDetail from "@/app/component/blog/PostDetail";

const getPost = async (slug: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API_ROUTE}/${slug}`);
  if (!res.ok) {
    throw new Error("Error getting single post api");
  }
  return res.json();
};

export const generateMetadata = async ({ params }: any) => {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post?.title,
    content: post?.content,
  };
};

export default async function Page({ params }: any) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <>
    <Navbar />
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

      <PostDetail post={post} />
    </BodyWrapper>
    <Footer />
    <FooterMobile />
    <FooterTab />
  </>
  );
}
