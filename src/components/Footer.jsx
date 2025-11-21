import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h2 className="footer-logo">sTaggers</h2>
          <p><FaMapMarkerAlt className="icon" /> Bhopal,Madhya Pradesh</p>
          <p><FaPhoneAlt className="icon" /> +91 xxxxxxxxxxx</p>
          <p><FaEnvelope className="icon" /> np643541@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
         
            <li><a href="/recommendation">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* <div className="footer-column">
          <h3>Policy</h3>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/cancellation">Cancellation Policy</a></li>
          </ul>
        </div> */}

        <div className="footer-column">
          <h3>Social Links</h3>
          <ul className="social-links">
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="https://www.instagram.com/stag_gers" target="_blank" ><FaInstagram /></a></li>
            <li><a href="#"><FaLinkedinIn /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2025@sTaggers.All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
