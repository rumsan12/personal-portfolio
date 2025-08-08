import dbConnect from "../../../utils/dbConnect";
import Blog from "../../../app/models/Blog";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json(blogs);
  }

  if (req.method === "POST") {
    const { title, content } = req.body || {};
    const slug = (title || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const created = await Blog.create({ title, content, slug });
    return res.status(201).json(created);
  }

  return res.status(405).end();
}
