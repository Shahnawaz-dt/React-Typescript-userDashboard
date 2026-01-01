**React User Directory App**

A clean, modern React + TypeScript application that fetches and displays user data from the JSONPlaceholder API.

Features

User List View
Displays all users with name, company, city and email .
Search & Filter
Real-time, case-insensitive search across fields.
Dropdown filter: All Fields / Company Name / City  / Email.

Expandable Details
Click "View Details" on any user to reveal full information:
Username, email, phone, website
Full address
Company

Responsive & Modern UI
Clean card-based design with smooth expand/collapse animations and hover effects.
Powered by
React + TypeScript
TanStack Query (React Query) for efficient data fetching and caching
Axios for API requests
CSS Modules for scoped, maintainable styling


Tech Stack

React 18
TypeScript
TanStack Query (@tanstack/react-query)
Axios
Vite (or Create React App)

Getting Started
Prerequisites

Node.js (v16 or higher)
npm or yarn

Installation
Bashgit clone https://github.com/Shahnawaz-dt/React-Typescript-userDashboard.git
cd your-repo-name
npm install
Run Locally
Bashnpm run dev
 or
npm start
Open http://localhost:5173 (or relevant port) to view the app.

Project Structure
React-Typescript-userDashboard/

├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── User.tsx
│   │   ├── UserList.tsx
│   │   ├── UserList.module.css
│   │   └── User.module.css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   ├── queryClient.ts
│   └── vite-env.d.ts
├── .gitignore
├── package.json            ← Fixed name!
├── package-lock.json
├── tsconfig.json
├── vite.config.ts          ← If using Vite
└── README.md               ← With your awesome content!

Made with ❤️ by Ayon
