import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutSection from '../components/AboutSection';
import StaggersSquad from '../components/about/StaggersSquad';
import ServicesSection from '../components/ServicesSection';  
import Footer from '../components/Footer';
const About = () => {
  return (
    <div>
        <AboutHero />
        <AboutSection />
        <StaggersSquad />
        <ServicesSection />
        <Footer />
    </div>
  );
};

export default About;
