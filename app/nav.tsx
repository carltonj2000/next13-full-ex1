import Link from "next/link";

export default function RootLayout() {
  return (
    <nav className="flex justify-center bg-red-100 text-xl gap-3 py-3">
      <Link className="bg-red-200 px-2 rounded-md" href="/">
        Todo's
      </Link>
      <Link className="bg-red-200 px-2 rounded-md" href="/posts">
        Posts
      </Link>
      <Link className="bg-red-200 px-2 rounded-md" href="/dashboard">
        Dashboard
      </Link>
      <Link className="bg-red-200 px-2 rounded-md" href="/auth">
        Auth
      </Link>
    </nav>
  );
}
