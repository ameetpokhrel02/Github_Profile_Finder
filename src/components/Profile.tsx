import React from 'react';
import { GitHubUser } from '../types/github';

interface ProfileProps {
  user: GitHubUser;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="profile-card">
      <img
        src={user.avatar_url}
        alt={user.name || user.login}
        className="profile-avatar"
        onError={e => (e.currentTarget.style.display = 'none')}
      />
      <div className="profile-title">{user.name || user.login}</div>
      <div className="profile-username">@{user.login}</div>
      <div className="profile-badges">
        <span className="badge badge-repo">Repos {user.public_repos}</span>
        <span className="badge badge-follower">Followers {user.followers}</span>
        <span className="badge badge-following">Following {user.following}</span>
      </div>
      <div className="profile-info">
        {user.bio && <div>{user.bio}</div>}
        {user.company && <div>🏢 {user.company}</div>}
        {user.location && <div>📍 {user.location}</div>}
        {user.email && <div>✉️ {user.email}</div>}
        {user.blog && (
          <div>
            🔗 <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer" className="profile-link">{user.blog}</a>
          </div>
        )}
        {user.twitter_username && (
          <div>
            🐦 <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer" className="profile-link">@{user.twitter_username}</a>
          </div>
        )}
      </div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-link"
        style={{ marginTop: 8 }}
      >
        View GitHub Profile
      </a>
      <div className="profile-dates">
        {user.created_at && <span>Joined: {new Date(user.created_at).toLocaleDateString()}</span>}
        {user.updated_at && <span style={{ marginLeft: 8 }}>Last updated: {new Date(user.updated_at).toLocaleDateString()}</span>}
      </div>
    </div>
  );
};

export default Profile;
