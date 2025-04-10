
import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-form-section">
          <form className="contact-form">
            <div className="name-fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Write your notes or questions here..." rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-address">
          <h3>Contact Info</h3>
          <div className="location">
            <h4>Saurabh Pandey</h4>
            <p>📍 Indore,M.P</p>
            <p>📞 +91 9935417773</p>
            <p>✉️ saurabhpandey1801@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};
      

export default GetInTouch;
