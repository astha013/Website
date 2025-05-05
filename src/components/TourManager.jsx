import React from 'react';
import './TourManager.css';

const TourManager = () => {
  return (
    <div className="tour-manager-page">
      <section className="hero">
        <div className="overlay">
          <h1>Book Tour Manager</h1>
          <div className="form-container">
            <input type="text" placeholder="Select City, State or Country" />
            <input type="date"  />
            <input type="date" />
            <input type="number" placeholder="Tour Manager Required" />
            <button>Proceed</button>
          </div>
        </div>
      </section>

      <section className="squad">
  <h2>sTaggers Squad</h2>
  <div className="squad-grid">
    <div className="member-card">
      <span className="rating">★ 4.9/5</span>
      <img src="/profileicon.jpg" alt="lorem" className="member-image" />
      <h3 className="member-name">lorem</h3>
      <p className="member-role">Tour Manager</p>
      <p className="experience"><i className="fa-regular fa-clock"></i> 7+ Years of Experience</p>
      <div className="tags">
        <span className="tag">Adventurous Explorer</span>
        <span className="tag">Cultural Enthusiast</span>
      </div>
      <p className="description">Experienced leader adept at managing travel logistics for unforgettable adventures.</p>
    </div>

    <div className="member-card">
      <span className="rating">★ 4.9/5</span>
      <img src="/profileicon.jpg" alt="lorem" className="member-image" />
      <h3 className="member-name">lorem</h3>
      <p className="member-role">Tour Manager</p>
      <p className="experience"><i className="fa-regular fa-clock"></i> 7+ Years of Experience</p>
      <div className="tags">
        <span className="tag">Adventurous Explorer</span>
        <span className="tag">Adventurous Explorer</span>
      </div>
      <p className="description">Experienced leader adept at managing travel logistics for unforgettable adventures.</p>
    </div>

    <div className="member-card">
      <span className="rating">★ 4.9/5</span>
      <img src="/profileicon.jpg" alt="lorem" className="member-image" />
      <h3 className="member-name">lorem</h3>
      <p className="member-role">Tour Manager</p>
      <p className="experience"><i className="fa-regular fa-clock"></i> 7+ Years of Experience</p>
      <div className="tags">
        <span className="tag">Adventurous Explorer</span>
        <span className="tag">Adventurous Explorer</span>
      </div>
      <p className="description">Experienced leader adept at managing travel logistics for unforgettable adventures.</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default TourManager;
