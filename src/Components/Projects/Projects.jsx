import React from 'react';
import RepoView from './RepoView';
import '../../styles/projects.css';

const Projects = () => {
  const repos = [
    'UTNProgramacion3/tp-winform-equipo-16A',
    'escu-git/escuderopablomartin',
    'escu-git/notitas-api',
    'escu-git/notitas_ui',
    'escu-git/irwins_revenge_game',
    // 'escu-git/wallet-dashboard',
  ];

  return (
    <div className="projects-container">
      <h2 className={'projects-title'}>Proyectos</h2>
      <div className="projects">
        {repos.map((repo, index) => (
          <RepoView key={index} repoUrl={repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
