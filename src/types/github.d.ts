export interface GitHubUser {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    location?: string;
    html_url: string;
    blog?: string;
    email?: string;
    twitter_username?: string;
    company?: string;
    created_at?: string;
    updated_at?: string;
}
  
export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string;
}
  
export interface GitHubFollower {
    login: string;
    avatar_url: string;
    html_url: string;
}
  