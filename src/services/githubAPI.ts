import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUser = (username: string, token?: string) =>
  axios.get(`${BASE_URL}/${username}`, token ? { headers: { Authorization: `token ${token}` } } : undefined);

export const fetchRepos = (username: string, token?: string) =>
  axios.get(`${BASE_URL}/${username}/repos`, token ? { headers: { Authorization: `token ${token}` } } : undefined);

export const fetchFollowers = (username: string, token?: string) =>
  axios.get(`${BASE_URL}/${username}/followers`, token ? { headers: { Authorization: `token ${token}` } } : undefined);
