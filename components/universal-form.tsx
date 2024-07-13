"use client"

import { useState } from "react"
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { addPost, addProduct } from "@/lib/action"
import Script from "next/script";

export function UniversalForm() {
  const [contentType, setContentType] = useState("product");
  

  const handleProductSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await addProduct(formData);
    if (result) {
      alert("Product added successfully!");
    } else {
      alert("Error adding product: " + result);
    }
  };

  return (
    <Card className="w-full">
    <CardHeader>
      {/* <CardTitle>Create New Content</CardTitle> */}
      <CardDescription>Fill out the form to create a new product, blog post, or recipe.</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="content-type" className="font-medium">
            Content Type
          </Label>
          <ToggleGroup
            type="single"
            value={contentType}
            onValueChange={setContentType}
            className="flex items-center gap-2"
          >
            <ToggleGroupItem value="product"><button className="py-1 px-2 rounded bg-lightGreen">Product</button></ToggleGroupItem>
            <ToggleGroupItem value="blog"><button className="py-1 px-2 rounded bg-orange">Blog</button></ToggleGroupItem>
            <ToggleGroupItem value="recipe"><button className="py-1 px-2 rounded bg-lightRed">Recipe</button></ToggleGroupItem>
          </ToggleGroup>
        </div>
        {contentType === "product" && (
          <form onSubmit={handleProductSubmit}>
            <div className="grid">
            <div className="flex gap-2">
              <div>
              <Label htmlFor="name">Product Name</Label>
              <Input type="text" name="name" id="name" placeholder="Green pea" />
              </div>
              <div>
              <Label htmlFor="slug">Slug</Label>
              <Input type="text" name="slug" id="slug" placeholder="green-pea" />
              </div>
            </div>
            <div className="flex gap-2">
              <div>
              <Label htmlFor="origin">Origin</Label>
              <Input type="text" name="origin" id="origin" placeholder="Nigeria" />
              </div>
              <div>
              <Label htmlFor="price">Price</Label>
              <Input type="number" name="price" id="price" placeholder="10,000" />
              </div>
              <div>
              <Label htmlFor="stock">Stock</Label>
              <Input type="number" name="stock" id="stock" placeholder="Enter stocks" />
              </div>
            </div>
            <div className="flex gap-2">
              <div>
              <Label htmlFor="healthBenefit">Health Benefits</Label>
              <Input type="text" name="health-benefit" id="health-benefit" placeholder="Enter Health Benefits" />
              </div>
              <div>
                <Label htmlFor="culinaryUses">Culinary Uses</Label>
                <Input type="text" name="culinary-uses" id="culinary-uses" placeholder="Used for salad" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Product Description</Label>
              <Textarea name="description" id="description" placeholder="Enter product description"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Product Category</Label>
              <Input name="category" id="category" type="text" placeholder="Enter product category" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="images">Product Image</Label>
              <Input type="file" id="images" name="images" placeholder="Upload product image" className="bg-lightGreen"/>
            <div />
            </div>
          </div>
      <button className="bg-green rounded w-full p-2 font-bold" type="submit">Submit</button>
          </form>
        )}
        {contentType === "blog" && (
          <form action={addPost}>
            <div className="grid">
           <div className="flex gap-2">
             <div className="grid gap-2">
              <Label htmlFor="blog-title">Blog Title</Label>
              <Input id="blog-title" placeholder="Enter blog title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="blog-author">Blog Slug</Label>
              <Input id="blog-author" placeholder="Enter blog author" />
            </div>
           </div>
           <div className="flex gap-2">
             <div className="grid gap-2">
              <Label htmlFor="blog-title">Blog Author</Label>
              <Input id="blog-title" placeholder="Enter blog title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="blog-author">Blog Tags</Label>
              <Input id="blog-author" placeholder="Enter blog author" />
            </div>
           </div>
            <div className="grid gap-2">
              <Label htmlFor="blog-content">Blog Content</Label>
              <Textarea id="blog-content" placeholder="Enter blog content" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="blog-author">Blog Category</Label>
              <Input id="blog-author" placeholder="Enter blog Category" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="blog-cover">Blog Cover Image</Label>
              <input type="file" id="blog-cover" placeholder="Upload Cover Image" className="bg-orange rounded p-2" />
              <div />
            </div>
          </div>
      <button className="bg-green rounded w-full p-2 font-bold" type="submit">Submit</button>
          </form>
        )}
        {contentType === "recipe" && (
          <div className="grid">
            <div className="flex gap-2">
            <div className="grid gap-2">
              <Label htmlFor="recipe-name">Recipe Title</Label>
              <Input id="recipe-name" placeholder="Enter recipe name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipe-name">Recipe Slug</Label>
              <Input id="recipe-name" placeholder="Enter recipe name" />
            </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipe-ingredients">Recipe Ingredients</Label>
              <Textarea id="recipe-ingredients" placeholder="Enter recipe ingredients"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipe-instructions">Recipe Instructions</Label>
              <Textarea id="recipe-instructions" placeholder="Enter recipe instructions"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipe-instructions">Recipe Method</Label>
              <Textarea id="recipe-instructions" placeholder="Enter recipe instructions"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="product-image">Product Image</Label>
              <Input type="file" id="product-image" placeholder="Upload product image" className="bg-lightGreen"/>
            <div />
            </div>
          </div>
        )}
      </div>
    </CardContent>
    <CardFooter className="justify-end">
    </CardFooter>
  </Card>
  )
}
