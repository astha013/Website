
import React, { useEffect, useState } from 'react';
import './HeroSlider.css';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
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
      <img src={images[currentImage]} alt="Hero Slide" className="slider-image" />
      <div className="slider-overlay">
        <button className="book-now-btn">Book Now</button>
      </div>
    </section>
  );
};

export default HeroSlider;
