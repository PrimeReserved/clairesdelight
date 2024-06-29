import { MetadataRoute } from 'next';
import { getPosts, getRecipes, getProduct } from '@/lib/data';
import { BlogPost, Product, Recipe } from '@/typings';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.BASE_URL ?? 'http://localhost:3000';

  let blogPosts: any[] = [];
  let recipes: any[] = [];
  let products: any[] = [];

  // Fetch blog posts
  try {
    const postResponse = await getPosts();
    if (Array.isArray(postResponse)) {
      blogPosts = postResponse.map((post: any) => ({
        url: `${baseURL}/blog/${post?.slug}`,
        lastModified: post?.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString(),
      }));
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  // Fetch recipes
  try {
    const recipeResponse = await getRecipes();
    if (Array.isArray(recipeResponse)) {
      recipes = recipeResponse.map((recipe: any) => ({
        url: `${baseURL}/recipes/${recipe?.slug}`,
        lastModified: recipe?.createdAt ? new Date(recipe.createdAt).toISOString() : new Date().toISOString(),
      }));
    }
  } catch (error) {
    console.error('Error fetching sitemap recipes:', error);
  }

  // Fetch products
  try {
    const productResponse = await getProduct();
    if (Array.isArray(productResponse)) {
      products = productResponse.map((product: any) => ({
        url: `${baseURL}/shop-spices/${product?.slug}`,
        lastModified: product?.createdAt ? new Date(product.createdAt).toISOString() : new Date().toISOString(),
      }));
    }
  } catch (error) {
    console.error('Error fetching spice products:', error);
  }

  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...blogPosts,
    ...recipes,
    ...products,
  ];
}
