import React from 'react';
import { Link } from 'react-router-dom';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <div className="get-in-touch-container">
      {/* Contact Form Card */}
      <div className="card contact-form-card">
        <form className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Write your notes or questions here..." rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Contact Info Card */}
      <div className="card contact-info-card">
        <h3>Contact Info</h3>
        <div className="info-box">
          <h4>Full Name</h4>
          <p>📍 Bhopal, M.P</p>
          <p>📞 +91 xxxxxxxxxx</p>
          <p>✉️ abc123@gmail.com</p>
        </div>
      </div>
      <div className="career-contact">
        <h2>Want to hire manager?</h2>
          <Link to="/tourmanager">
            <button className="book-now-btn">Book Now</button>
          </Link>
        </div>
    </div>
  );
};

export default GetInTouch;
