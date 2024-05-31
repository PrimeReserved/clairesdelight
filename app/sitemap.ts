import { MetadataRoute } from 'next'
import { getPosts, getRecipes } from '@/lib/data';


export default async function sitemap()  {

  const baseURL = `${process.env.BASE_URL}`;

  const response = await getPosts();

  const blogPost = response?.map((post: any) => {
    return {
      url: `${baseURL}/blog/${post?.slug}`,
      lastModified: post?.createdAt
    }
  })
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...blogPost,
  ];
}
