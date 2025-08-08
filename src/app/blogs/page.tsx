// src/app/blogs/page.tsx
import dbConnect from "../../utils/dbConnect";
import BlogModel from "../models/Blog";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function BlogsPage() {
  await dbConnect();
  const blogs = await BlogModel.find()
    .select("title createdAt")
    .sort({ createdAt: -1 })
    .lean();

  return (
    <main style={{ padding: 40 }}>
      <h1>All Blogs</h1>
      {!Array.isArray(blogs) || blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        <ul>
          {blogs.map((b: any) => (
            <li key={String(b._id)}>
              <Link href={`/blogs/${String(b._id)}`}>{b.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
