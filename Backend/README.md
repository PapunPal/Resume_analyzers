# Resume Analyzer Backend

This backend is the Express.js API for the Resume Analyzer project. It handles user authentication, resume uploads, PDF parsing, AI-powered resume analysis, and resume persistence in MongoDB.

## Features

- User registration and login with JWT cookie authentication
- Protected resume upload endpoint
- PDF resume text extraction with `pdf-parse`
- AI-based resume analysis using Google Gemini via `@google/genai`
- Resume storage in MongoDB with analysis metadata
- Resume list, detail, and delete operations

## Tech stack

- Node.js
- Express
- MongoDB / Mongoose
- Google GenAI (`@google/genai`)
- Multer for file uploads
- bcryptjs for password hashing
- JSON Web Tokens for auth
- dotenv for configuration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB instance or MongoDB Atlas URI
- Google Gemini API key

### Install dependencies

```bash
cd Backend
npm install
```

### Environment variables

Create a `.env` file in the `Backend` folder with the following values:

```env
PORT=5000
MONGO_URI=your-mongodb-uri
GEMINI_API_KEY=your-google-gemini-api-key
FRONTEND_URL=http://localhost:5173
```

- `PORT` - the port the backend listens on
- `MONGO_URI` - MongoDB connection URI
- `GEMINI_API_KEY` - API key for Google Gemini
- `FRONTEND_URL` - allowed frontend origin for CORS

### Run the server

Start the server in development mode:

```bash
npm run dev
```

Start in production mode:

```bash
npm start
```

## API Routes

### Auth

- `POST /api/auth/register`
  - Register a new user
  - Body: `{ name, email, password }`

- `POST /api/auth/login`
  - Login and set auth cookie
  - Body: `{ email, password }`

- `POST /api/auth/logout`
  - Clear auth cookie

- `GET /api/auth/me`
  - Get current authenticated user
  - Protected route

### Resumes

- `POST /api/resumes/upload`
  - Upload a resume PDF and analyze it
  - Protected route
  - Form field: `file` (PDF)

- `GET /api/resumes`
  - Get all resumes for the current user
  - Protected route

- `GET /api/resumes/:id`
  - Get a specific resume by ID
  - Protected route

- `DELETE /api/resumes/:id`
  - Delete a resume by ID
  - Protected route

## Notes

- Uploaded files are temporarily stored and removed after processing.
- CORS is configured to allow requests from the frontend URL and a Render deployment origin.
- The AI analysis returns structured JSON with ATS score, summary, strengths, weaknesses, suggestions, and missing keywords.

## Project structure

- `src/app.js` - Express app configuration
- `src/server.js` - server entrypoint and DB connection
- `src/routes/` - route definitions
- `src/controllers/` - request handlers
- `src/models/` - Mongoose models
- `src/services/` - PDF parsing and AI analysis
- `src/middleware/` - auth and upload middleware
- `src/config/db.js` - MongoDB connection setup
- `uploads/` - temporary resume upload storage
