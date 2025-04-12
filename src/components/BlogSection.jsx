import React from 'react';
import './BlogSection.css';

// Static blog data to use without backend
const staticBlogs = [
  {
    id: 1,
    title: "Event Planning Trends for 2025",
    image: "/images/event-planning.jpg", // Replace with your actual image paths
    content: "Discover the latest innovations in corporate event planning including AI-driven personalization and sustainable event practices.",
    date: "April 5, 2025"
  },
  {
    id: 2,
    title: "How to Choose the Perfect Venue",
    image: "/images/venue-selection.jpg",
    content: "Essential factors to consider when selecting a venue for your next corporate conference or business meeting.",
    date: "March 28, 2025"
  },
  {
    id: 3,
    title: "Maximizing ROI at Business Conferences",
    image: "/images/business-conference.jpg",
    content: "Strategic approaches to ensure your business gets the most value from conference participation and sponsorships.",
    date: "March 15, 2025"
  },
  {
    id: 4,
    title: "Virtual vs. Hybrid Events: Pros and Cons",
    image: "/images/virtual-events.jpg",
    content: "An in-depth analysis of the benefits and challenges of virtual, hybrid, and in-person event formats.",
    date: "March 2, 2025"
  }
];

// Fallback images in case your images don't load
const fallbackImages = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">
              Explore our collection of event management articles and resources
            </p>
          </div>
        </div>
        
        <div className="blog-cards">
          {staticBlogs.map((blog, index) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-card-image-container">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-card-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = fallbackImages[index];
                  }}
                />
                <div className="blog-date">{blog.date}</div>
              </div>
              
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                
                <div className="blog-footer">
                  <a href={`/blog/${blog.id}`} className="read-more">
                    Read More
                  </a>
                  <button className="delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;