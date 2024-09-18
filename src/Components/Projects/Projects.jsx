import React, { useEffect, useState } from 'react';
import RepoView from './RepoView';
import '../../styles/projects.css';
import gitTeam from '../../assets/team.png';
import person from '../../assets/person.png';
import Spinner from '../../Commons/Spinner';

const Projects = () => {
  const [delayed, setDelayed] = useState(true);

  //Dado que no tengo backend, no puedo hacer llamados a la api, ya que requiere token después de x cantidad de
  const repos = [
    {
      url: 'UTNProgramacion3/tp-winform-equipo-16A',
      name: 'tp-winform-equipo-16A',
      img: gitTeam,
      description: 'Aplicación para gestión de artículos de comercio',
      lenguajes: 'C#',
      creado: '9/4/2024',
    },
    {
      url: 'escu-git/escuderopablomartin',
      name: 'escuderopablomartin',
      img: person,
      description: 'Portfolio realizado para la materia programación 3, UTN.',
      lenguajes: 'HTML',
      creado: '9/17/2024',
    },
    {
      url: 'escu-git/notitas-api',
      name: 'notitas-api',
      img: person,
      description: 'Api Notitas App',
      lenguajes: 'JavaScript',
      creado: '1/18/2024',
    },
    {
      url: 'escu-git/notitas_ui',
      name: 'notitas_ui',
      img: person,
      description: 'Front Notitas App',
      lenguajes: 'TypeScript',
      creado: '1/20/2024',
    },
    {
      url: 'escu-git/irwins_revenge_game',
      name: 'irwins_revenge_game',
      img: person,
      description:
        "Juego de consola Irwin's Revenge. Segundo parcial de la carrera Tecnicatura Universitaria en Programación, UTN.",
      lenguajes: 'C++',
      creado: '6/3/2023',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (delayed) return <Spinner />;
  return (
    <div className="projects-container">
      <div className="projects">
        {repos.map((repo, index) => (
          <RepoView key={index} repoData={repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
