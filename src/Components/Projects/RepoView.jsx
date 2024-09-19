import React from 'react';

const RepoView = ({ repoData }) => {
  const { url, img, description, lenguajes, creado, name, techs } = repoData;

  return (
    <div className="repo-details repo-card">
      <div className="repo-header">
        <img src={img} alt={'imagen'} className="owner-avatar" />
        <h1>{name}</h1>
      </div>
      <p>{description}</p>
      <p>
        <strong>Lenguaje: </strong>
        {techs.map((t) => t).join(' - ')}
      </p>
      <p>
        <strong>Creado:</strong> {new Date(creado).toLocaleDateString('es-ES')}
      </p>
      <a
        href={`https://github.com/${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en GitHub
      </a>
    </div>
  );
};

export default RepoView;
