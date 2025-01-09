import { Link, useLoaderData } from "@remix-run/react";
import { postsLoader } from "~/loaders/postsLoader";


export const loader = postsLoader;

type Post = {
  slug: string;
  title: string;
};

export default function Posts() {
  const { posts } = useLoaderData<{ posts: Post[] }>();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="border-b pb-2 last:border-none">
              <Link
                to={post.slug}
                className="text-lg text-blue-600 hover:text-blue-800 font-medium"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}