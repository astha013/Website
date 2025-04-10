import React, { useState } from 'react';
import axios from 'axios';
import './BlogForm.css';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('title', formData.title);
  data.append('content', formData.content);
  data.append('author', formData.author);
  data.append('image', formData.image);

  try {
    await axios.post('http://localhost:5000/api/blogs', data);
    alert('Blog post added with image!');
    setFormData({ title: '', content: '', author: '', image: null });
  } catch (error) {
    alert('Error adding blog post');
    console.error(error);
  }
};

  

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>Add a Blog Post</h2>
      <input type="file" name="image" accept="image/*" onChange={handleChange} required />
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      <button type="submit">Post</button>
    </form>
  );
};

export default BlogForm;
