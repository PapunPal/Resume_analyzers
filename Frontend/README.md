# Resume Analyzer Frontend

This frontend is the React + TypeScript + Vite application for the Resume Analyzer project. It provides user authentication, resume upload, resume list view, and detailed resume analysis from the backend API.

## Features

- User registration and login
- Protected dashboard for user resumes
- Resume PDF upload and analysis
- Resume detail page with AI analysis output
- Logout support
- Responsive layout with Tailwind CSS

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hook Form

## Getting Started

### Install dependencies

```bash
cd Frontend
npm install
```

### Environment variables

The frontend uses `VITE_BASE_URL` to connect to the backend API. Update the `.env` file in `Frontend` as needed:

```env
VITE_BASE_URL=http://localhost:5000/api
```

If you deploy the backend, set it to the deployed backend base URL, for example:

```env
VITE_BASE_URL=https://your-backend-url.com/api
```

### Run the app

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, typically `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

- `src/App.tsx` - main layout and route outlet
- `src/main.tsx` - React app bootstrap
- `src/api/axios.ts` - Axios instance configured with `VITE_BASE_URL`
- `src/pages/` - application pages for landing, login, register, dashboard, resume upload, and details
- `src/components/` - shared UI components like header, footer, and loading screen
- `src/context/AuthContext.tsx` - authentication state provider
- `src/hooks/useAuth.ts` - hook for accessing auth context
- `src/routes/ProtectedRoute.tsx` - route guard for authenticated pages
- `src/types/` - TypeScript types for users and resume data

## Available scripts

- `npm run dev` - start the Vite development server
- `npm run build` - compile TypeScript and build the app for production
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Notes

- The app sends credentials using `axios` with `withCredentials: true`.
- The backend must support cookies and CORS for auth routes.
- Ensure the backend is running before uploading resumes or signing in.

## Deployment

For deployment, build the app with `npm run build` and host the generated `dist/` folder with any static site host.

Update `VITE_BASE_URL` to point to your deployed backend URL when deploying.
