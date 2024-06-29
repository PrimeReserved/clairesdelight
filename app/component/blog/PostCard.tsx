import Loading from "@/app/loading";
import { Fragment, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import SpiceTitle from "../Spice/SpiceTitle";

export default function PostCard({ post }: any) {
  return (
    <div className="card w-100 bg-base-100 shadow-xl rounded-b-3xl m-5">
      <Suspense fallback={<Loading />}>
        <figure>
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={500}
            height={500}
            loading="lazy"
            className="rounded-t-3xl"
          />
        </figure>
      </Suspense>
      <div className="p-5">
        <SpiceTitle title={post.title} />
        <p className="line-clamp-4">{post.content}</p>
        <p className="text-orange py-2">
          <Link href={`/blog/${post.slug}`}>Read more</Link>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-row justify-center items-center gap-1 text-teritaryGrey font-bold">
            <FaUser />
            <p>by admin</p>
            <button>
              <BiSolidLike />
            </button>
            <p>{0}</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span className="font-bolder text-3xl">5</span>
            <p className="text-teritaryGrey">APRIL 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
