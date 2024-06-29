# Application Routes Documentation

This documentation outlines the routes available in the application, divided into user and admin sections. The application uses hidden routes for the user and admin directories, allowing for better separation and management of different sections.

## User Routes

### Overview

The user routes are designed for general users of the application. These routes include pages like About, Blog, Cart, Contact, Recipes, and Shop Spices. Some of these routes have both a list item component and a single item component.

### Routes

1. **About**
   - **Path:** `/about`
   - **Description:** Provides information about the application or company.

2. **Blog**
   - **Path:** `/blog`
   - **Description:** Displays a list of blog posts.
   - **Components:**
     - **List Component:** Displays all blog posts.
     - **Single Component:** Displays a single blog post by slug.
     - **Path (Single):** `/blog/[slug]`

3. **Cart**
   - **Path:** `/cart`
   - **Description:** Displays the user's shopping cart.

4. **Contact**
   - **Path:** `/contact`
   - **Description:** Provides a form for users to contact the application support or team.

5. **Recipes**
   - **Path:** `/recipes`
   - **Description:** Displays a list of recipes.
   - **Components:**
     - **List Component:** Displays all recipes.
     - **Single Component:** Displays a single recipe by slug.
     - **Path (Single):** `/recipes/[slug]`

6. **Shop Spices**
   - **Path:** `/shop-spices`
   - **Description:** Displays a list of available spices for purchase.
   - **Components:**
     - **List Component:** Displays all spices.
     - **Single Component:** Displays a single spice by slug.
     - **Path (Single):** `/shop-spices/[slug]`

### Example Route Structures

#### Blog

- **List Component:**

  ```jsx
  import PostCard from "@/app/components/blog/PostCard";
  import Loading from "@/app/loading";
  import { Suspense } from "react";

  const getPosts = async () => {
    const res = await fetch(`https://example.com/api/blog`);
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  };

  export default async function BlogPage() {
    const posts = await getPosts();

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <Suspense key={post.slug} fallback={<Loading />}>
            <PostCard post={post} />
          </Suspense>
        ))}
      </div>
    );
  }
  ```

- **Single Component:**

  ```jsx
  import Loading from "@/app/loading";
  import { Suspense } from "react";


  const getPost = async (slug) => {
    const res = await fetch(`https://example.com/api/blog/${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }
    return res.json();
  };

  export default async function BlogPostPage({ params }: any) {
   const { slug } = params;
  const post = await getPost(slug);

    return (
      <Suspense fallback={<Loading />}>
        <PostDetail post={post} />
      </Suspense>
    );
  }
  ```

#### Recipes

- **List Component:**

  ```jsx
  import RecipeCard from "@/app/components/recipes/RecipeCard";
  import Loading from "@/app/loading";
  import { Suspense } from "react";

  const getRecipes = async () => {
    const res = await fetch(`https://example.com/api/recipes`);
    if (!res.ok) {
      throw new Error("Failed to fetch recipes");
    }
    return res.json();
  };

  export default async function RecipesPage() {
    const recipes = await getRecipes();

    return (
      <div>
        <h1>Recipes</h1>
        {recipes.map((recipe) => (
          <Suspense key={recipe.slug} fallback={<Loading />}>
            <RecipeCard recipe={recipe} />
          </Suspense>
        ))}
      </div>
    );
  }
  ```

- **Single Component:**

  ```jsx
  import Loading from "@/app/loading";
  import { Suspense } from "react";
  import { useRouter } from "next/router";
  import RecipeDetail from "@/app/components/recipes/RecipeDetail";

  const getRecipe = async (slug) => {
    const res = await fetch(`https://example.com/api/recipes/${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch recipe");
    }
    return res.json();
  };

  export default function RecipePage({ params }:any) {
    const { id } = params;
  const recipe = await getRecipe(id)

    return (
      <Suspense fallback={<Loading />}>
        <RecipeDetail recipe={recipe} />
      </Suspense>
    );
  }
  ```

#### Shop Spices

- **List Component:**

  ```jsx
  import SpiceCard from "@/app/components/shop-spices/SpiceCard";
  import Loading from "@/app/loading";
  import { Suspense } from "react";

  const getSpices = async () => {
    const res = await fetch(`https://example.com/api/spices`);
    if (!res.ok) {
      throw new Error("Failed to fetch spices");
    }
    return res.json();
  };

  export default async function ShopSpicesPage() {
    const spices = await getSpices();

    return (
      <div>
        <h1>Shop Spices</h1>
        {spices.map((spice) => (
          <Suspense key={spice.slug} fallback={<Loading />}>
            <SpiceCard spice={spice} />
          </Suspense>
        ))}
      </div>
    );
  }
  ```

- **Single Component:**

  ```jsx
  import Loading from "@/app/loading";
  import { Suspense } from "react";

  const getSpice = async (slug) => {
    const res = await fetch(`https://example.com/api/spices/${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch spice");
    }
    return res.json();
  };

  export default function SpicePage({ params }:any)  {
    const router = useRouter();
    const { slug } = params;
    const spice = await getSpice(slug);

    return (
      <Suspense fallback={<Loading />}>
        <SpiceDetail spice={spice} />
      </Suspense>
    );
  }
  ```

## Admin Routes

Admin routes are hidden and designed for administrative tasks such as managing users, products, orders, etc. The structure and implementation of admin routes are similar to user routes but include additional authentication and authorization checks.
