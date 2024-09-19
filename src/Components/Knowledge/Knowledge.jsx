import React from 'react';
import TechCard from './TechCard';

function Knowledge({ techs, onTechClick, selectedTech }) {
  return (
    <>
      {techs.map((x) => (
        <TechCard
          key={x.id}
          tech={x}
          onClick={onTechClick}
          selectedTech={selectedTech}
        />
      ))}
    </>
  );
}

export default Knowledge;
