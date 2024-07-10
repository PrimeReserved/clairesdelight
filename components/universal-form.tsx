"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { addPost, addProduct } from "@/lib/action"

export function UniversalForm() {
  const [contentType, setContentType] = useState("product")
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Create New Content</CardTitle>
        <CardDescription>Fill out the form to create a new product, blog post, or recipe.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
              <ToggleGroupItem value="product">Product</ToggleGroupItem>
              <ToggleGroupItem value="blog">Blog</ToggleGroupItem>
              <ToggleGroupItem value="recipe">Recipe</ToggleGroupItem>
            </ToggleGroup>
          </div>
          {contentType === "product" && (
            <form action={addProduct}>
              <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="product-name">Product Name</Label>
                <Input id="product-name" placeholder="Enter product name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="product-description">Product Description</Label>
                <Textarea id="product-description" placeholder="Enter product description" className="min-h-[100px]" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="product-price">Product Price</Label>
                <Input id="product-price" type="number" placeholder="Enter product price" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="product-image">Product Image</Label>
                <div />
              </div>
            </div>
            </form>
          )}
          {contentType === "blog" && (
            <form action={addPost}>
              <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="blog-title">Blog Title</Label>
                <Input id="blog-title" placeholder="Enter blog title" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="blog-author">Blog Author</Label>
                <Input id="blog-author" placeholder="Enter blog author" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="blog-content">Blog Content</Label>
                <Textarea id="blog-content" placeholder="Enter blog content" className="min-h-[200px]" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="blog-cover">Blog Cover Image</Label>
                <div />
              </div>
            </div>
            </form>
          )}
          {contentType === "recipe" && (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="recipe-name">Recipe Name</Label>
                <Input id="recipe-name" placeholder="Enter recipe name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="recipe-ingredients">Recipe Ingredients</Label>
                <Textarea id="recipe-ingredients" placeholder="Enter recipe ingredients" className="min-h-[100px]" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="recipe-instructions">Recipe Instructions</Label>
                <Textarea id="recipe-instructions" placeholder="Enter recipe instructions" className="min-h-[200px]" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="recipe-image">Recipe Image</Label>
                <div />
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}
