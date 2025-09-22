import React, { useState } from 'react';
import './Resources.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Roadmaps = [
  {
    icon: <FaHtml5 size={40} color="#e34c26" />,
    title: "HTML",
    description: "Used for foundation of web structure and content.",
    tags: ["All"]
  },
  {
    icon: <FaCss3Alt size={40} color="#264de4" />,
    title: "CSS",
    description: "Used for styling and layout for web pages.",
    tags: ["All"]
  },
  {
    icon: <FaBootstrap size={40} color="#563d7c" />,
    title: "Bootstrap",
    description: "Popular CSS framework for responsive design.",
    tags: ["Css framework"]
  },
  {
    icon: <SiTailwindcss size={40} color="#38bdf8" />,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    tags: ["Css framework"]
  },
  {
    icon: <FaJsSquare size={40} color="#f0db4f" />,
    title: "JavaScript",
    description: "Programming language for dynamic web behavior.",
    tags: ["All"]
  },
  {
    icon: <FaReact size={40} color="#61dafb" />,
    title: "React",
    description: "JavaScript library for building user interfaces.",
    tags: ["Js Framework"]
  }
];

const mentorResources = [
  {
    image: "https://m.media-amazon.com/images/I/91asIC1fRwL.jpg", 
    title: "Eloquent JavaScript",
    description: "A deep dive into modern JavaScript programming.",
    tags: ["Books"]
  },
  {
    image: "https://m.media-amazon.com/images/I/41+eK8zBwQL.jpg", 
    title: "HTML & CSS by Jon Duckett",
    description: "Visual guide to building beautiful websites.",
    tags: ["Books"]
  },
  {
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL.jpg", 
    title: "The Road to React",
    description: "Pragmatic guide to mastering React.js.",
    tags: ["Books"]
  }
];
const filters = ["All", "Css framework", "Js Framework", "Books"];
const ResourceCard = ({ icon, title, description, tags }) => (
  <div className="resource-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    {tags && (
      <div className="tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    )}
  </div>
);
const MentorCard = ({ image, title, description }) => (
  <div className="mentor-card">
    <img src={image} alt={title} className="book-cover" />
    <div className="mentor-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);
const FilterBar = ({ filters, activeFilter, onFilterChange }) => (
  <div className="filter-bar">
    {filters.map(filter => (
      <button
        key={filter}
        onClick={() => onFilterChange(filter)}
        className={filter === activeFilter ? 'active' : ''}
      >
        {filter}
      </button>
    ))}
  </div>
);
const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    className="search-bar"
    placeholder="Search resources..."
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);
const Section = ({ title, resources, isMentor = false }) => (
  <section>
    <h2>{title}</h2>
    <div className="resource-grid">
      {resources.length > 0 ? (
        resources.map((res, idx) =>
          isMentor ? <MentorCard key={idx} {...res} /> : <ResourceCard key={idx} {...res} />
        )
      ) : (
        <p className="no-results">No resources found.</p>
      )}
    </div>
  </section>
);

const Resources1 = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filterResources = (list) =>
    list.filter(res =>
      res.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || (res.tags && res.tags.includes(filter)))
    );

  return (
    <div className="resources-container">
      <header>
        <h1>IS Hub Frontend</h1>
        <SearchBar value={search} onChange={setSearch} />
      </header>
      <FilterBar
        filters={filters}
        activeFilter={filter}
        onFilterChange={setFilter}
      />
      <Section title="Roadmap" resources={filterResources(Roadmaps)} />
      <Section title="Books Recommended by Mentors" resources={filterResources(mentorResources)} isMentor />
    </div>
  );
};

export default Resources1;
