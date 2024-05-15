import PostCard from "@/app/component/blog/PostCard";
import Loading from "@/app/loading";
import { BlogPost } from "@/typings";
import { Suspense } from "react";

const getPosts = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}`, { next: { revalidate: 3600 }});
  if (!res.ok) {
    throw new Error("Something happened while getting post!");
  };
  console.log(`Getting post: ${res}`);
  return res.json();
};


export default async function Page() {
  const posts: BlogPost[] = await getPosts();
  console.log(`Posts: ${posts}`);

  if(!posts){
    return (
      <p>No post</p>
    )
  }

  return (
    <>
      <h1  className="text-5xl">The blog page</h1>
      <section className="p-10">
        {
          posts.map((post: any) => (
            <Suspense key={post.slug} fallback={<Loading />}>
              <PostCard post={post} />
            </Suspense>
          ))
        }
      </section>
    </>
  )
}
