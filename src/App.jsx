import React from 'react'
import ApiComponent from "./api";
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import TourManagerPage from './pages/TourManager';
import Career from './pages/Career';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={
          <>
            <ApiComponent />
            <Home />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/tourmanager" element={<TourManagerPage />} />
      </Routes>
    </>
  )
}

export default App
