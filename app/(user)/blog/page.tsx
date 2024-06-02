"use client"

import PostCard from "@/app/component/blog/PostCard";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Pagination from "@/app/component/pagination/Pagination";
import { getPosts } from "@/lib/data";
import { Post } from "@/lib/models/post";
import { BlogPost } from "@/typings";
import Link from "next/link";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Suspense, useState, useEffect } from "react";

const ITEMS_PER_PAGE = 10;

export default  function Page() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      Loading.change('Loading %20');
      Loading.hourglass();

      try {
        const postsData = await getPosts();
      if (Array.isArray(postsData) && postsData.length > 0) {
        setPosts(postsData);
        setTotalPages(Math.ceil(postsData.length / ITEMS_PER_PAGE));
      }
      } catch (error) {
        console.log(`Error fetching posts...${error}`)
        console.error(`Error fetching posts: ${error}`)
      }finally {
        Loading.remove();
      }
      
    };
    fetchPosts();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getPaginatedPosts = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  if (!posts.length) {
    return <p>No posts available</p>;
  }

  return (
      <BodyWrapper>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>Trending</li>
          <li className="font-bold">ALL</li>
        </ul>
      </div>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {getPaginatedPosts().map((post: BlogPost) => (
            <Suspense key={post._id}>
              <PostCard post={post} />
            </Suspense>
          ))}
        </section>
        <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onNextPage={handleNextPage} 
        onPreviousPage={handlePreviousPage} 
      />
      </BodyWrapper>
  );
}
