import { use } from "react";
import LikeButton from "./like-button";

async function getPost(id) {
  let posts = await fetch(`https://dummyjson.com/posts/${id}`);
  return posts.json();
}

export default function Page({ params: { id } }) {
  const post = use(getPost(id));
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold mt-4 mb-2">{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton />
    </div>
  );
}
