import React, { useRef, useState, useEffect } from 'react';
import './ServicesSection.css';

const cardWidth = 320; // card width including margin

const services = [
  {
    image: 'fotor-ai-2025040918250.jpg',
    title: 'MICE',
    description: 'Discover the perfect blend of business and pleasure...',
  },
  {
    image: 'fotor-ai-20250409182757.jpg',
    title: 'Medical Conference & Convention',
    description: 'Experience world-class healthcare conferences...',
  },
  {
    image: 'team-spirit.webp',
    title: 'Sporting Event',
    description: 'Fuel your passion for sports with exhilarating...',
  },
  {
    image: 'fotor-ai-2025040918250.jpg',
    title: 'MICE',
    description: 'Discover the perfect blend of business and pleasure...',
  },
  {
    image: 'fotor-ai-2025040918250.jpg',
    title: 'MICE',
    description: 'Discover the perfect blend of business and pleasure...',
  },
];

const ServicesSection = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    const maxIndex = services.length - 3;
    const newIndex =
      direction === 'left'
        ? Math.max(currentIndex - 1, 0)
        : Math.min(currentIndex + 1, maxIndex);

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    carouselRef.current.scrollTo({
      left: currentIndex * cardWidth,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  return (
    <section className="offer-section">
      <div className="offer-header">
        <h2>What We Offer</h2>
        <p>Services we provide</p>
      </div>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>&lt;</button>
        <div className="offer-carousel" ref={carouselRef}>
          {services.map((service, index) => (
            <div className="offer-card" key={index}>
              <img src={service.image} alt={service.title} className="content-fit" />
              <h3>{service.title.toUpperCase()}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </section>
  );
};

export default ServicesSection;
