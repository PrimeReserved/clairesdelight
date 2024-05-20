import PostCard from "@/app/component/blog/PostCard";
import Loading from "@/app/loading";
import { BlogPost } from "@/typings";
import { Suspense } from "react";
import { getPosts } from "@/lib/data";

// const getPosts = async () => {
//   const res = await fetch(`http://localhost:3000/api/blog`, { next: { revalidate: 3600 }});
//   if (!res.ok) {
//     throw new Error("Something happened while getting post!");
//   };
//   const posts = await res.json();
//   console.log(`Getting post: ${posts}`);
//   return posts;
// };


export default async function Page() {
  const posts = await getPosts();
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
