import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description}</p>
      <p>
        <span className="badge bg-primary">Stars: {repo.stargazers_count}</span>
        <span className="badge bg-secondary">Watchers: {repo.watchers_count}</span>
        <span className="badge bg-info">Forks: {repo.forks_count}</span>
      </p>
    </div>
  );
};

export default RepoItem;