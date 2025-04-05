import React from 'react';
import './StaggersSquad.css';

const squadMembers = [
  {
    name: 'Lorem Ipsum',
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel risus id nisi.',
    image: '/images/squad1.jpg'
  },
  {
    name: 'Lorem Ipsum',
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim lacus.',
    image: '/images/squad2.jpg'
  },
  {
    name: 'Lorem Ipsum',
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed mi vitae erat.',
    image: '/images/squad3.jpg'
  }
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
