import React from 'react';
import RepoView from './RepoView';
import '../../styles/projects.css';

const Projects = () => {
  const repos = [
    {
      repo: 'https://github.com/UTNProgramacion3/tp-winform-equipo-16A',
      description: 'Sistema de gestión',
    },
  ];

  return (
    <div className="projects-container">
      <h2>Proyectos</h2>
      <div className="projects">
        {repos.map((repo, index) => (
          <RepoView key={index} repoUrl={repo.repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
