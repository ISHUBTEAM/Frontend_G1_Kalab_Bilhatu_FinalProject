import React, { useState } from 'react';
import './Mentors.css';
import feti from '../assets/feti.jpg';
import nafi from '../assets/nafi.jpg';
import dandi from '../assets/dandi.jpg';
const mentorsData = [
  {
    name: "Nafargi Damena",
    role: "Fullstack developer | Web ML | Visual Artist",
    description: "Expertise in teaching web fundamentals",
    location: "Addis Ababa",
    sessions: "10.3 sessions",
    image: nafi
  },
  {
    name: "Dandy Herko",
    role: "Fullstack developer",
    description: "Helping Students See the Web Differently",
    location: "Addis Ababa",
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
  <div className="mentor-card">
    <img src={mentor.image} alt={mentor.name} />
    <div className="mentor-details">
      <h3>{mentor.name}</h3>
      <p><strong>Role:</strong> {mentor.role}</p>
      <p><strong>Expertise:</strong> {mentor.description}</p>
      <p><strong>Location:</strong> {mentor.location}</p>
      <p><strong>Sessions:</strong> {mentor.sessions}</p>
    </div>
  </div>
);

const MentorsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMentors = mentorsData.filter(mentor =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="mentors-section">
      <h2>Meet Our Mentors</h2>
      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mentor-grid">
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))
        ) : (
          <p className="no-results">No mentors found.</p>
        )}
      </div>
    </div>
  );
};

export default MentorsSection;
