import React, { useRef, useState, useEffect } from 'react';
import './ServicesSection.css';

const cardWidth = 320; // card width including margin

const services = [
  {
    image: 'fotor-ai-2025040918250.jpg',
    title: 'Event Staffing',
    description: 'We provide skilled volunteers, tour managers, and coordinators to support seamless execution of events of all scales.',
  },
  {
    image: 'fotor-ai-20250409182757.jpg',
    title: 'Sports & Government Events',
    description: 'Expert management services tailored for large-scale events like Khelo India and National Games, ensuring smooth coordination and execution.',
  },
  {
    image: 'team-spirit.webp',
    title: 'Corporate & Private Events',
    description: 'Professional staffing solutions for conferences, exhibitions, brand activations, and private organizational events with a focus on efficiency and guest experience.',
  },
  {
    image: 'fotor-ai-2025040918250.jpg',
    title: 'Travel & Logistics Management',
    description: 'Comprehensive travel and accommodation handling for participants, officials, and guests, managed by experienced tour managers.',
  },
  {
    image: 'fotor-ai-2025040918250.jpg',
    title: 'On-Demand Custom Solutions',
    description: 'Flexible and customizable event solutions to match unique requirements, with quick response and specialized teams.',
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
