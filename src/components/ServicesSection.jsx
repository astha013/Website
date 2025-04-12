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
    image: '/fotor-ai-20250409182757.jpg',
    title: 'Business Conferences',
    description: 'Expert management services tailored for high-profile business summits and medical conferences, ensuring seamless coordination and impactful experiences.'
  },
  {
    image: 'team-spirit.webp',
    title: 'Corporate & Private Events',
    description: 'Professional staffing solutions for conferences, exhibitions, brand activations, and private organizational events with a focus on efficiency and guest experience.',
  },
  {
    image: '/travel.jpg',
    title: 'Travel & Logistics Management',
    description: 'Comprehensive travel and accommodation handling for participants, officials, and guests, managed by experienced tour managers.',
  },
  {
    image: '/Solution.jpg',
    title: 'On-Demand Custom Solutions',
    description: 'Flexible and customizable event solutions to match unique requirements, with quick response and specialized teams.',
  },
];

const ServicesSection = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = services.length - 3;

  // Function to handle manual scrolling
  const scroll = (direction) => {
    const newIndex =
      direction === 'left'
        ? Math.max(currentIndex - 1, 0)
        : Math.min(currentIndex + 1, maxIndex);
    
    setCurrentIndex(newIndex);
  };

  // Effect to handle scrolling based on currentIndex
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Loop back to start
        }
        return prevIndex + 1;
      });
    }, 5000); // Auto-scroll every 5 seconds
    
    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  return (
    <section className="offer-section">
      <div className="offer-header">
        <h2>Services We Provide</h2>
        <div className="carousel-indicator">
          {Array.from({ length: services.length - 2 }).map((_, index) => (
            <span 
              key={index} 
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      
      <div className="carousel-wrapper"
           onMouseEnter={() => setIsPaused(true)}
           onMouseLeave={() => setIsPaused(false)}>
        <button 
          className="arrow left" 
          onClick={() => scroll('left')}
          aria-label="Previous slide"
        >
          &lt;
        </button>
        
        <div className="offer-carousel" ref={carouselRef}>
          {services.map((service, index) => (
            <div 
              className="offer-card" 
              key={index}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                loading="lazy"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <button 
          className="arrow right" 
          onClick={() => scroll('right')}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;