import React, { useState } from 'react';
import { fetchUser, fetchRepos, fetchFollowers } from './services/githubAPI';
import { GitHubUser, GitHubRepo, GitHubFollower } from './types/github';
import Profile from './components/Profile';
import Repos from './components/Repos';
import Followers from './components/Followers';
import './index.css';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [followers, setFollowers] = useState<GitHubFollower[]>([]);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [token, setToken] = useState('');

  const handleSearch = async () => {
    try {
      setError('');
      const userRes = await fetchUser(username, token);
      const reposRes = await fetchRepos(username, token);
      const followersRes = await fetchFollowers(username, token);

      setUser(userRes.data);
      setRepos(reposRes.data);
      setFollowers(followersRes.data);
    } catch (err: any) {
      let message = 'User not found or API error.';
      if (err.response) {
        if (err.response.status === 404) {
          message = 'User not found.';
        } else if (err.response.status === 403) {
          message = 'API rate limit exceeded. Please try again later or use a GitHub token.';
        } else if (err.response.data && err.response.data.message) {
          message = err.response.data.message;
        }
      } else if (err.message) {
        message = err.message;
      }
      setError(message);
      setUser(null);
      setRepos([]);
      setFollowers([]);
    }
  };

  return (
    <div className={darkMode ? 'app-dark' : ''}>
      <div className="main-container">
        <div className="header">
          <h1 className="title">My GitHub Profile</h1>
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="toggle-btn"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <form
          className="search-bar"
          onSubmit={e => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="search-input"
            placeholder="Enter GitHub username"
          />
          <button
            type="submit"
            className="search-btn"
          >
            Search
          </button>
        </form>
        <input
          type="password"
          value={token}
          onChange={e => setToken(e.target.value)}
          className="search-input"
          placeholder="GitHub token (optional)"
          style={{ marginTop: 8, width: '100%', maxWidth: 400 }}
        />
        <div style={{ color: '#888', fontSize: 13, marginBottom: 12, maxWidth: 400 }}>
          (Optional) Enter a GitHub token for higher rate limits. Leave blank for normal search.
        </div>

        {error && <p style={{ color: '#e255a1', fontWeight: 600, marginBottom: 16 }}>{error}</p>}
        <div className="main-sections">
          <div className="left-col">
            {user && <Profile user={user} />}
          </div>
          <div className="right-col">
            {repos.length > 0 && <Repos repos={repos} />}
            {followers.length > 0 && <Followers followers={followers} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
