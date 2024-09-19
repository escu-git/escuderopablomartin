import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import '../../styles/body.css';
import Spots from '../../Commons/Spot';
import Knowledge from '../Knowledge/Knowledge';
import { techs } from '../../data/techs';
import { repos } from '../../data/repos';

const Body = () => {
  const [selectedTech, setSelectedTech] = useState('');
  const [projects, setProjects] = useState(repos);

  // Maneja el clic en una tecnología
  const handleTechClick = (techName) => {
    setSelectedTech((prevTech) => (prevTech === techName ? '' : techName));
  };

  // Filtra los proyectos según la tecnología seleccionada
  useEffect(() => {
    if (selectedTech === '') {
      setProjects(repos); // Muestra todos los proyectos si no hay tecnología seleccionada
    } else {
      const filtered = repos.filter((repo) =>
        repo.techs.includes(selectedTech)
      );
      setProjects(filtered);
    }
  }, [selectedTech]);

  return (
    <div className={'bodyContainer'}>
      <Spots />
      <section>
        <div className={'title-container'}>
          <h2 className={'titles'}>Sobre mi</h2>
        </div>
        <div id="about">
          <About />
        </div>
      </section>
      <section id="projects">
        <div className={'title-container'}>
          <h2 className={'titles'}>Proyectos</h2>
        </div>
        <div className={'techContainer'}>
          <div className="knowledge-container">
            <Knowledge
              techs={techs}
              onTechClick={handleTechClick}
              selectedTech={selectedTech}
            />
          </div>
          <div className="projects-container">
            <Projects projects={projects} />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className={'title-container'}>
          <h2 className={'titles'}>Contacto</h2>
        </div>
        <Contact />
      </section>
    </div>
  );
};

export default Body;
