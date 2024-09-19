import React, { useEffect, useState } from 'react';
import RepoView from './RepoView';
import '../../styles/projects.css';
import Spinner from '../../Commons/Spinner';

const Projects = ({ projects }) => {
  const [delayed, setDelayed] = useState(true);

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
        {projects.map((repo, index) => (
          <RepoView key={index} repoData={repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
