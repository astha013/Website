import React from 'react';
import './OfferSection.css';

const offers = [
  {
    title: 'Managing Large Groups',
    description:
      'We are a team of experienced tour managers who can handle a family of 2 to a MICE movement of 2000+ passengers',
    bg: 'linear-gradient(135deg, #007cf0, #00dfd8)',
  },
  {
    title: 'Holistic Services',
    description:
      'Our tour managers can provide end to end services and stand shoulder to shoulder with our partners in any kind of situations',
    bg: 'linear-gradient(135deg, #2b86c5, #753a88)',
  },
  {
    title: 'Covering Locations',
    description:
      'We cover locations in India and abroad ranging from popular cities to unexplored destinations',
    bg: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
  },
  
  {
    title: 'Booking Reconfirmation',
    description:
      'We ensure & reconfirm that all travel related services are in sync and properly coordinated with respective vendors',
    bg: 'linear-gradient(135deg, #1fa2ff, #12d8fa)',
  },
  {
    title: 'Handling Conferences',
    description:
      'Handling industry bodies & inter-corporate conferences, Medical Congress, Annual Meets, Goal Setting and more',
    bg: 'linear-gradient(135deg,rgb(115, 160, 227), #2948ff)',
  },
  {
    title: 'Personalized Planning',
    description:
      'We craft personalized itineraries based on your group preferences and travel goals for a smooth experience',
    bg: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
  },
  {
    title: '24x7 Support',
    description:
      'Our managers are always just a call away to ensure timely help during your journey — anytime, anywhere',
    bg: 'linear-gradient(135deg, #00c6ff, #0072ff)',
  },
  {
    title: 'Budget Optimization',
    description:
      'We deliver value-for-money tour packages, optimizing logistics without compromising quality or comfort',
    bg: 'linear-gradient(135deg, #007cf0, #00dfd8)',
  },
{
  title: 'Government Projects',
  description:
    'We managed government events—like Khelo India,National Games, Swachh Bharat Abhiyan,and the National Youth Festival—with logistics,manpower or planning.',
  bg: 'linear-gradient(135deg, #2b86c5, #753a88)',
},

];

const OfferSection = () => {
  return (
    <section className="our-offers">
      <h2>Our Offers</h2>
      <p>Services we provide</p>
      <div className="offers-grid">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="offers-card"
            style={{ background: offer.bg }}
          >
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
