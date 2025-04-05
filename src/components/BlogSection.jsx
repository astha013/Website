import './BlogSection.css';

const blogs = [
    { title: '', date: '', description: '', imageUrl: '' },
    { title: '', date: '', description: '', imageUrl: '' },
  ];
  
  const BlogSection = () => {
    return (
      <section className="blog">
        <div className="container">
          <h2>Our Blog</h2>
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-card">
                <img src={blog.imageUrl} alt={blog.title} />
                <h3>{blog.title}</h3>
                <p>{blog.date}</p>
                <p>{blog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogSection;
  