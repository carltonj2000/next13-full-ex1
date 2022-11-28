import Link from "next/link";

export default function RootLayout() {
  return (
    <nav className="flex justify-center bg-red-100 text-xl gap-3 py-3">
      <Link className="bg-red-200 px-2 rounded-md" href="/">
        Home
      </Link>
      <Link className="bg-red-200 px-2 rounded-md" href="/posts">
        Posts
      </Link>
    </nav>
  );
}
