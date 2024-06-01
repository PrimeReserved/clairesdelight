import Loading from "@/app/loading";
import { Fragment, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";

export default function PostCard({ post }: any) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5">
      <h2>{post.title}</h2>
      <Suspense fallback={<Loading />}>
        <figure>
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={400}
            height={400}
            loading="lazy"
          />
        </figure>
      </Suspense>

      <p>{post.content}</p>
      <Link href={`/blog/${post.slug}`}>
        <button className="btn">Read more</button>
      </Link>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <FaUser />
          <p>by admin </p>
          <BiSolidLike />
          {0}
        </div>
        <div>
          <span className="font-bolder text-4xl">5</span>
          <p>APRIL 2024</p>
        </div>
      </div>
    </div>
  );
}
