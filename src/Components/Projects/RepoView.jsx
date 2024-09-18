import React, { useEffect, useState } from 'react';

const RepoView = ({ repoUrl }) => {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repoUrl}`,
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setRepoData(data);
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchRepoData();
  }, [repoUrl]);

  if (!repoData) return <p>Loading...</p>;

  return (
    <div className="repo-details">
      <div className="repo-header">
        <img
          src={repoData.owner.avatar_url}
          alt={`${repoData.owner.login} avatar`}
          className="owner-avatar"
        />
        <h1>{repoData.name}</h1>
      </div>
      <p>{repoData.description}</p>
      <p>
        <strong>Lenguaje:</strong> {repoData.language}
      </p>
      <p>
        <strong>Creado:</strong>{' '}
        {new Date(repoData.created_at).toLocaleDateString()}
      </p>
      <p>
        <strong>Última actualización:</strong>{' '}
        {new Date(repoData.updated_at).toLocaleDateString()}
      </p>
      <a href={repoData.html_url} target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  );
};

export default RepoView;
