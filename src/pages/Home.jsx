import React from 'react'
import HeroSlider from '../components/HeroSlider'
import ServicesSection from '../components/ServicesSection'
import OfferSection from '../components/OfferSection'
import AboutSection from '../components/AboutSection'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <OfferSection />
      <AboutSection />
      <BlogSection />
      <Footer />
    </>
  )
}

export default Home
