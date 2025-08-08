import dbConnect from "../../../utils/dbConnect";
import Blog from "../../../app/models/Blog";


export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "DELETE") {
    await Blog.findByIdAndDelete(id);
    return res.status(204).end();
  }

  if (req.method === "GET") {
    const blog = await Blog.findById(id).lean();
    if (!blog) return res.status(404).json({ message: "Not found" });
    return res.status(200).json(blog);
  }

  if (req.method === "PUT") {
    const updated = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updated);
  }

  return res.status(405).end();
}
