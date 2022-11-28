import { use, useState } from "react";
import Link from "next/link";

async function getPosts() {
  let posts = await fetch("https://dummyjson.com/posts?limit=3");
  return posts.json();
}

export default function Layout({ children }) {
  const { posts } = use(getPosts());
  return (
    <div className="mx-2 max-w-[1024px]">
      <h1>Posts</h1>
      {posts.map(({ id, title }) => (
        <div key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
        </div>
      ))}
      <div>{children}</div>
    </div>
  );
}
