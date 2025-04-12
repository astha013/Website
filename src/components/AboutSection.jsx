import React from 'react';
import './AboutSection.css';
import { useNavigate } from 'react-router-dom';


const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-img">
        <img src= "/ChatGPT Image Apr 12, 2025, 02_42_29 PM.png" alt="Image" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We are a professional tour manager/man power provider company. We have curated the best of the talents in this field. We at TP keep our clients & associates as our top priority. We have created a platform wherein we understand our partner’s requirements first & then allot favourable man power with utmost care. We aim to service only B2B clientele.
        </p>
        <ul>
          <li>✔ Customer Satisfaction</li>
          <li>✔ Quality Service</li>
          <li>✔ Skilled Workforce</li>
        </ul>
        <button onClick={() => navigate('/about')}>Know More</button>
      </div>
    </section>
  );
};

export default AboutSection;
