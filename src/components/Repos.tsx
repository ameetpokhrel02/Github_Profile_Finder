import React from 'react';
import { GitHubRepo } from '../types/github';

interface ReposProps {
  repos: GitHubRepo[];
}

const githubLogo = (
  <svg className="" style={{ width: 20, height: 20, marginRight: 8, verticalAlign: 'middle' }} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.813 1.096.813 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Repos: React.FC<ReposProps> = ({ repos }) => {
  return (
    <div className="section-card">
      <div className="section-title">Repositories <span style={{ color: '#b1b5bb', fontWeight: 400 }}>({repos.length})</span></div>
      <div>
        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #eee', textDecoration: 'none', color: 'inherit', transition: 'background 0.2s',
            }}
            className="repo-link"
            onMouseOver={e => (e.currentTarget.style.background = '#f6f8fa')}
            onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
          >
            {githubLogo}
            <span style={{ fontWeight: 600 }}>{repo.name}</span>
            {repo.description && (
              <span style={{ marginLeft: 12, color: '#888', fontSize: 14 }}>{repo.description}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Repos;
