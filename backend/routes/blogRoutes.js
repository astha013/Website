import express from "express";
import Blog from "../models/Blog.js"; // Make sure you add `.js` extension
import upload from '../middleware/upload.js';

const router = express.Router();


router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ date: -1 });
  res.json(blogs);
});

// router.post("/", async (req, res) => {
//   const {  title, content } = req.body;
//   const blog = new Blog({ image, title, content, author: [] });
//   await blog.save();
//   res.status(201).json(blog);
// });


router.post('/', upload.single('image'), async (req, res) => {
    try {
      const { title, content, author } = req.body;
      const imageUrl = req.file ? req.file.filename : null;
  
      const newBlog = new Blog({
        title,
        content,
        author,
        image: imageUrl
      });
  
      await newBlog.save();
      res.status(201).json(newBlog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // DELETE a blog
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});


export default router; // ✅ ES Module export
