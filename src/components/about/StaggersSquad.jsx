import React from 'react';
import './StaggersSquad.css';

const squadMembers = [
  {
    name: 'Full Name',
    role: '',
    description: 'I am a committed Core Team Member at an event management company with hands-on experience in coordinating large-scale national events. I have led the deployment of trained volunteers and tour managers, ensuring efficient on-ground execution and seamless event flow. My strengths lie in managing logistics, handling high-pressure situations, and delivering smooth and professional event experiences.',
    image: '/profileicon.jpg'
  },
  {
    name: 'Full Name',
    role: '',
    description: 'I am a committed Core Team Member at an event management company with hands-on experience in coordinating large-scale national events. I have led the deployment of trained volunteers and tour managers, ensuring efficient on-ground execution and seamless event flow. My strengths lie in managing logistics, handling high-pressure situations, and delivering smooth and professional event experiences.',
    image: '/profileicon.jpg'
  },
  // {
  //   name: 'Lorem Ipsum',
  //   role: '',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed mi vitae erat.',
  //   image: '/profileicon.jpg'
  // }
];

const StaggersSquad = () => {
  return (
    <section className="staggers-squad">
      <h2 className="section-title">sTaggers Core Squad</h2>
      <div className="squad-container">
        {squadMembers.map((member, index) => (
          <div key={index} className="squad-card" style={{ animationDelay: `${index * 0.3}s` }}>
            <img src={member.image} alt={member.name} className="squad-img" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="desc">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaggersSquad;
