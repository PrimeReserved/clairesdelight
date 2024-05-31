import PostCard from "@/app/component/blog/PostCard";
import Loading from "@/app/loading";
import { getPosts } from "@/lib/data";
import { BlogPost } from "@/typings";
import { Suspense } from "react";



export default async function Page() {  
  const posts = await getPosts();

  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <p>No posts available</p>
    );
  }

  return (
    <>
      <h1 className="text-5xl">The blog page</h1>
      <section className="p-10">
        {
          posts.map((post: BlogPost) => (
            <Suspense key={post._id} fallback={<Loading />}>
              <PostCard post={post} />
            </Suspense>
          ))
        }
      </section>
    </>
  );
}
