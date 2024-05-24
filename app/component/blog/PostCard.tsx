import Loading from "@/app/loading";
import { Fragment, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }: any) {
  return (
    <Fragment>
      <h2>{post.title}</h2>
      <Suspense fallback={<Loading />}>
        <Image
          src={post.featuredImage}
          alt={post.title}
          width={400}
          height={400}
          loading="lazy"
        />
      </Suspense>
      <p>{post.content}</p>
      <p>{post.category}</p>
      <p>{post.createdAt}</p>
      <Link href={`/blog/${post.slug}`}>
        <button className="btn">Read more</button>
      </Link>
    </Fragment>
  );
}
