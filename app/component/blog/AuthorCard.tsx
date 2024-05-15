import { Fragment } from "react";


const getUser = async (userId: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/${userId}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`Error fetching single post data`);
      console.log(res.json())
      return res.json();
    } catch(error){
      console.log(`Error fetching single post: ${error}`);
    }
  };

export default async function AuthorCard({ userId }: any) {

    const user = await getUser(userId)

  return (
    <Fragment>
        <h2>AuthorCard</h2>
        {/* <h3>{user.username}</h3> */}
    </Fragment>
  )
}
