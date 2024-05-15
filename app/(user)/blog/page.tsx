import PostCard from "@/app/component/blog/PostCard";
import Loading from "@/app/loading";
import { BlogPost } from "@/typings";
import { Suspense } from "react";


const getData = async() => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_URL}`);
    if (!res.ok) throw new Error(`Error fetching blog posts.`)
    return res.json();
  } catch(error){
    console.log(`Error getting product data: ${error}`);
  }
};


export default async function Page() {
  const posts: BlogPost[] = await getData();

  return (
    <>
      <h1  className="text-5xl">The blog page</h1>
      <section className="p-10">
        {
          posts.map((post: any) => (
            <Suspense key={post._id} fallback={<Loading />}>
              <PostCard post={post} />
            </Suspense>
          ))
        }
      </section>
    </>
  )
}
