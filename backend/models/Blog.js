import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    image: String,
    createdAt: { type: Date, default: Date.now }
  });
  

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
