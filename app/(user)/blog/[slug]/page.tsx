import Loading from "@/app/loading";
import { Fragment, Suspense } from "react";

const getPost = async (slug: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API_ROUTE}/${slug}`);
  if(!res.ok){
    throw new Error("Error getting single post api")
  }
  console.log(`Get single post api: ${res}`)
  return res.json();
};


export const generateMetadata = async ({ params }: any) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    content: post.content
  };
};


export default async function Page({ params }: any) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <Fragment>
      <h1>Single blog page</h1>
      <div>
        <h2>{post.title}</h2>
        <div>
          <h3>Author</h3>
          <p>{post.author}</p>
        </div>
        <p>{ post.content }</p>
        <p>{ post.price }</p>
        <p>{ post.date }</p>
      </div>
    </Fragment>
  )
}
