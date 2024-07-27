import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { addRecipe } from "@/lib/action";

export default function RecipeForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Add A New Recipe</CardTitle>
                <CardDescription>Fill out the form to add a new recipe</CardDescription>
            </CardHeader>
            <form className="px-5" action={addRecipe}>
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
                        <input
                            type="file"
                            id="blog-cover"
                            placeholder="Upload Cover Image"
                            className="bg-orange rounded p-2"
                        />
                        <div />
                    </div>
                </div>
                <button className="bg-green rounded w-full p-2 font-bold" type="submit">
                    Submit
                </button>
            </form>
        </Card>
    );
}
