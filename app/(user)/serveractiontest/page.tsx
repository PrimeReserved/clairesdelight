import { addPost, deletePost, updatePost } from "@/lib/action";

export default function ServerActionTestPage() {
  return (
    <div className="grid grid-cols-2 gap-10 items-center">
      <div className="p-5 m-5">
        <h1>Create a Post</h1>
        <form action={addPost}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Title"
              name="title"
              required
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Slug"
              name="slug"
              required
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Author"
              name="author"
              required
            />
          </label>

          <div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Content"
              name="content"
              required
            ></textarea>
          </div>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Category"
            name="category"
            required
          ></textarea>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              name="image"
              required
            />
          </label>

          <div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Tags"
              name="tags"
              required
            ></textarea>
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>

      <div className="m-5 p-5">
        <h1>Delete a Post</h1>
        <form action={deletePost}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="id"
              name="id"
              required
            />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>

      <div className="p-5 m-5">
        <h1>Update a Post</h1>
        <form action={updatePost}>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Post ID" name="id" />
        </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Title"
              name="title"

            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Slug"
              name="slug"

            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Author"
              name="author"

            />
          </label>

          <div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Content"
              name="content"

            ></textarea>
          </div>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Category"
            name="category"
          ></textarea>

          <label className="input input-bordered flex items-center gap-2">
          <input
              type="text"
              className="grow"
              placeholder="Image CDN link"
              name="featuredImage"
            />
          </label>

          <div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Tags"
              name="tags"

            ></textarea>
          </div>
          <button type="submit">Update Post</button>
        </form>
      </div>
    </div>
  );
}
