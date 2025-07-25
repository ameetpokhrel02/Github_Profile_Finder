import React from 'react';
import { GitHubFollower } from '../types/github';

// shows the followers of the user
interface FollowersProps {
  followers: GitHubFollower[];
}

const Followers: React.FC<FollowersProps> = ({ followers }) => {
  return (
    <div className="section-card">
      <div className="section-title">Followers <span style={{ color: '#b1b5bb', fontWeight: 400 }}>({followers.length})</span></div>
      <div>
        {followers.map(follower => (
          <a
            key={follower.login}
            href={follower.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee', textDecoration: 'none', color: 'inherit', transition: 'background 0.2s',
            }}
            className="follower-link"
            onMouseOver={e => (e.currentTarget.style.background = '#f6f8fa')}
            onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
          >
            <img
              src={follower.avatar_url}
              alt={follower.login}
              style={{ width: 36, height: 36, borderRadius: '50%', marginRight: 14, border: '2px solid #d0d7de', objectFit: 'cover' }}
            />
            <span style={{ fontWeight: 600 }}>{follower.login}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Followers;
