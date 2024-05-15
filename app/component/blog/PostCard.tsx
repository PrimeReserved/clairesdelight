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
          src={post.image}
          alt={post.title}
          width={100}
          height={100}
          loading="lazy"
        />
      </Suspense>
      <p>{post.description}</p>
      <p>{post.date}</p>
      <Link href={`/blog/${post.id}`}>
        <button className="btn">Read more</button>
      </Link>
    </Fragment>
  );
}
