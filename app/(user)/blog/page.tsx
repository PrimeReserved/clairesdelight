import PostCard from "@/app/component/blog/PostCard";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Loading from "@/app/loading";
import { getPosts } from "@/lib/data";
import { BlogPost } from "@/typings";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const posts = await getPosts();

  if (!Array.isArray(posts) || posts.length === 0) {
    return <p>No posts available</p>;
  }

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
      <BodyWrapper>
        <section className="grid grid-col-1 md:grid-cols-3 xl:grid-cols-3">
          {posts.map((post: BlogPost) => (
            <Suspense key={post._id} fallback={<Loading />}>
              <PostCard post={post} />
            </Suspense>
          ))}
        </section>
      </BodyWrapper>
    </>
  );
}
