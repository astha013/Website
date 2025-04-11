
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './HeroSlider.css';

const images = [
  '/slide4.jpg',
  '/slide5.jpg',
]; 

const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <img src= {images[currentImage]} alt="Hero Slide" className="slider-image" />
      <div className="slider-overlay">
        <Link to="/tourmanager">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSlider;
