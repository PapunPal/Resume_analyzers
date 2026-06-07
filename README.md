# Resume Analyzer

This repository contains the Resume Analyzer application split into two parts:

- `Backend/` - Express.js API for authentication, resume upload, PDF parsing, and AI-powered resume analysis.
- `Frontend/` - React + TypeScript + Vite application for user registration, login, resume upload, and viewing analysis results.

## Project Overview

Resume Analyzer lets users upload resume PDFs, analyzes them with AI, and stores the results for later review. The backend handles file processing, PDF text extraction, and AI requests. The frontend provides the user interface and connects to the backend API.

## Repository structure

- `Backend/`
  - `src/` - backend source code
  - `src/app.js` - Express app setup
  - `src/server.js` - server entrypoint and database connection
  - `src/routes/` - API routes
  - `src/controllers/` - route handlers
  - `src/models/` - Mongoose models
  - `src/services/` - PDF and AI services
  - `src/middleware/` - auth and file upload middleware
  - `src/config/db.js` - MongoDB connection
  - `uploads/` - temporary upload storage

- `Frontend/`
  - `src/` - frontend source code
  - `src/api/axios.ts` - Axios API client
  - `src/pages/` - app pages
  - `src/components/` - shared UI components
  - `src/context/` - auth context
  - `src/routes/ProtectedRoute.tsx` - protected route guard
  - `src/types/` - TypeScript models

## Setup

### Backend

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `Backend/` with these values:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-uri
   GEMINI_API_KEY=your-google-gemini-api-key
   FRONTEND_URL=http://localhost:5173
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the backend API URL in `Frontend/.env`:
   ```env
   VITE_BASE_URL=http://localhost:5000/api
   ```
4. Start the frontend app:
   ```bash
   npm run dev
   ```

## Running the full app

- Run the backend first.
- Then start the frontend.
- Open the local Vite URL shown in the frontend terminal, usually `http://localhost:5173`.

## Notes

- The backend uses cookie-based authentication and CORS rules, so both frontend and backend URLs must match the configured allowed origins.
- Uploaded resume files are processed and removed from the temporary upload directory after analysis.
- The frontend expects the backend API to be available at `VITE_BASE_URL`.
- The backend uses Google Gemini via `@google/genai` for resume analysis, so a valid `GEMINI_API_KEY` is required.

## Useful commands

### Backend

- `npm run dev` - run backend with `nodemon`
- `npm start` - run backend with `node`

### Frontend

- `npm run dev` - start Vite development server
- `npm run build` - build production assets
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Deployment

1. Deploy the backend to a Node-compatible host.
2. Deploy the frontend build to a static hosting provider.
3. Update `Frontend/.env` and backend CORS settings to use the deployed backend URL.

---

For more details, see `Backend/README.md` and `Frontend/README.md`.