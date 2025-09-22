import React from 'react';
import './Mentors.css';
import feti from '../assets/feti.jpg';
import nafi from '../assets/nafi.jpg';
import dandi from '../assets/dandi.jpg';
const mentors = [
  {
    name: "Nafargi Damena",
    role: "Fullstack developer | web Ml |Visual Artists",
    description: "Expertise in teaching web fundamentals",
    location: "Adiss Ababa",
    sessions: "10.3 sessions",
    image: nafi  
  },
  {
    name: "Dandy Herko",
    role: "Fullstack developer",
    description: "Helping Students See the Web Differently",
    location: "Adiss Ababa",
    sessions: "9.7 sessions",
    image: dandi
  },
  {
    name: "Fethia Abdurehim",
    role: "Fullstack developer",
    description: "Simplifying the Complex in Frontend Education",
    location: "Harar",
    sessions: "11.5 sessions",
    image: feti
  }
];

const MentorCard = ({ mentor }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '12px' }}>
    <img src={mentor.image} alt={mentor.name} style={{ borderRadius: '15%', width: '80px', height: '80px' }} />
    <h3>{mentor.name}</h3>
    <p><strong>Role:</strong> {mentor.role}</p>
    <p><strong>Expertise:</strong> {mentor.description}</p>
    <p><strong>Location:</strong> {mentor.location}</p>
    <p><strong>Sessions:</strong> {mentor.sessions}</p>
  </div>
);

const MentorsSection = () => (
  <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px' }}>
    <h2>Mentors</h2>
    <input type="text" placeholder="Search mentors..." style={{ width: '100%', padding: '8px', marginBottom: '16px' }} />
    <button style={{ marginBottom: '24px' }}>Search</button>
    {mentors.map((mentor, index) => (
      <MentorCard key={index} mentor={mentor} />
    ))}
  </div>
);

export default MentorsSection;