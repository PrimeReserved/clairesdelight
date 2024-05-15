import { Fragment } from "react";


const getPost = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/${slug}`);
    if (!res.ok) throw new Error(`Error fetching single post data`);
    return res.json();
  } catch(error){
    console.log(`Error fetching single post: ${error}`);
  }
};


export default async function Page({ params }: any) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <Fragment>
      <h1>Single blog page</h1>
      <div>
        <h2>{post.title}</h2>
        <p>{ post.description }</p>
        <p>{ post.price }</p>
        <p>{ post.date }</p>
      </div>
    </Fragment>
  )
}
