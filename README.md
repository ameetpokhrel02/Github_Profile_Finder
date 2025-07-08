# GitHub Profile Finder
![image](https://github.com/user-attachments/assets/6bc189e2-05dc-4fef-9966-da6b9c0ee1a6)

A modern, responsive React app to search and view GitHub user profiles, repositories, and followers with dark mode and rate-limit-friendly GitHub token support.

---

## 🚀 Features
- Search for any GitHub user by username
- View profile details, repositories, and followers
- Modern, clean UI with dark mode toggle
- Responsive two-column layout
- Optional GitHub token input for higher API rate limits
- Error handling for user not found, rate limits, and API issues

---

## 📁 Project Structure
```
Github-Profile-Finder/
  github-profile-finder/
    README.md           # ← You are here
    package.json
    public/
      index.html
      ...
    src/
      App.tsx           # Main app logic and layout
      index.css         # Modern CSS styles
      components/
        Profile.tsx     # Profile card component
        Repos.tsx       # Repositories list component
        Followers.tsx   # Followers list component
      services/
        githubAPI.ts    # API functions for GitHub
      types/
        github.d.ts     # TypeScript types for GitHub data
      ...
    ...
```

---

## 🛠️ Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/Github-Profile-Finder.git
   cd Github-Profile-Finder/github-profile-finder
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000)

---

## 🔑 Using a GitHub Token (Optional)
- For higher API rate limits, generate a [GitHub Personal Access Token](https://github.com/settings/tokens) (no scopes needed).
- Paste it into the "GitHub token (optional)" field in the app.
- Leave blank for normal (lower limit) usage.

---

## 🖥️ Usage
1. Enter a GitHub username and click **Search**.
2. (Optional) Enter a GitHub token for higher rate limits.
3. View the profile, repositories, and followers in a modern, responsive layout.

---

## 📝 Example Commands
```sh
# Install dependencies
npm install

# Start the app
npm start
```

---

## 📣 Credits
- Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Uses the [GitHub REST API](https://docs.github.com/en/rest)

---

## 📄 License
MIT
