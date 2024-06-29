"use client"


import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import PostCard from "@/app/component/blog/PostCard";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Pagination from "@/app/component/pagination/Pagination";
import { BlogPost } from "@/typings";
import { fetchBlogs } from '@/features/blogs/blogsSlice';
import Link from "next/link";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Suspense, useState, useEffect } from "react";
import isEmptyArray from '@/helper/isEmptyArray';

const ITEMS_PER_PAGE = 10;

const PostList: any = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, loading, error } = useSelector((state: RootState) => state.blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      Loading.pulse();
    } else {
      Loading.remove();
    }
  }, [loading]);

  useEffect(() => {
    setTotalPages(Math.ceil(blogs.length / 4));
  }, [blogs]);

  isEmptyArray({
    blogs,
    currentPage,
    loading,
    error
  });


  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getPaginatedPosts = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  if (error) {
    return Report.warning('An Error Occured', error, 'close', {width: '360px',});
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

export default PostList;
