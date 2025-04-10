import React, { useRef } from 'react';
import './ServicesSection.css';

const services = [
  {
    image: 'fotor-ai-2025040918250.jpg',
    title: 'MICE',
    description:
      'Discover the perfect blend of business and pleasure with our exceptional MICE offerings, combining productive meetings, unforgettable travel experiences, and seamless coordination.',
  },
  {
    image: 'fotor-ai-20250409182757.jpg',
    title: 'Medical Conference & Convention',
    description:
      'Experience world-class healthcare conferences and conventions in stunning, idyllic destinations, where knowledge, relaxation, and networking seamlessly come together.',
  },
  {
    image: 'team-spirit.webp',
    title: 'Sporting Event',
    description:
      'Fuel your passion for sports with exhilarating and immersive experiences at top-notch sporting events, where unforgettable moments and electrifying atmospheres await.',
  },
];

const ServicesSection = () => {
  const carouselRef = useRef();

  const scroll = (direction) => {
    if (direction === 'left') {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    } else {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="offer-section">
      <div className="offer-header">
        <h2>What We Offer</h2>
        <p>Services we provide</p>
      </div>
      <div className="carousel-container">
        <button className="arrow left" onClick={() => scroll('left')}>&lt;</button>
        <div className="offer-carousel" ref={carouselRef}>
          {services.map((service, index) => (
            <div className="offer-cardS" key={index}>
              <img src={service.image} alt={service.title} className='content-fit'/>
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
