import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogSection.css';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  // Delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id)); // UI se bhi hatao
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="blog-section">
      <h2>Latest Posts</h2>
      <div className="blog-cards">
        {/* Static Blog Card 1 */}
        <div className="blog-card">
          <h3>Blog Title 1</h3>
          <img
            src="http://localhost:5000/uploads/default1.jpg"
            alt="blog"
            className="blog-card-img"
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        {/* Static Blog Card 2 */}
        <div className="blog-card">
          <h3>Blog Title 2</h3>
          <img
            src="http://localhost:5000/uploads/default2.jpg"
            alt="blog"
            className="blog-card-img"
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        {/* Static Blog Card 3 */}
        <div className="blog-card">
          <h3>Blog Title 3</h3>
          <img
            src="http://localhost:5000/uploads/default3.jpg"
            alt="blog"
            className="blog-card-img"
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        {/* Dynamically Rendered Blog Cards */}
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <h3>{blog.title}</h3>
            <img
              src={`http://localhost:5000/uploads/${blog.image}`}
              alt={blog.title}
              className="blog-card-img"
            />
            <p>{blog.content}</p>
            <button
              className="delete-btn"
              onClick={() => handleDelete(blog._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
