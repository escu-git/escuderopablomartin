import React from 'react';
import '../../styles/projects.css';

function TechCard({ tech, onClick, selectedTech }) {
  const selectedStyle = 'selectedTech';

  return (
    <div
      className={`tech-card ${selectedTech === tech.name ? selectedStyle : ''}`}
      onClick={() => onClick(tech.name)}
    >
      <img src={tech.img} alt={tech.name} className="tech-icon" />
      <span className="tech-name">{tech.name}</span>
    </div>
  );
}

export default TechCard;
