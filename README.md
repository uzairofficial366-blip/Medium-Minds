# MediumMinds Full-Stack Project

MediumMinds is a React/Vite frontend with a Node.js/Express backend. The chatbot UI lives in the frontend, but all Groq and Neon access happens in the backend only.

## Project Structure

```text
frontend/
  package.json
  vite.config.js
  src/
  public/

backend/
  package.json
  api/
  src/
    app.js
    server.js

db/
  schema.sql

package.json
README.md
.gitignore
```

## Environment Files

Create `backend/.env` from `backend/.env.example` for local backend secrets:

```env
PORT=5000
DATABASE_URL=your_neon_database_url_here
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.1-8b-instant
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Create `frontend/.env` from `frontend/.env.example`:

```env
VITE_API_URL=http://localhost:5000
```

Do not put `GROQ_API_KEY` or `DATABASE_URL` in the frontend. The frontend should only use `VITE_API_URL`.

## Local Testing

Install all dependencies:

```bash
npm run install:all
```

Run frontend and backend together:

```bash
npm run dev
```

Test locally:

```text
Backend health: http://localhost:5000/api/health
Frontend app:   http://localhost:5173
```

Test chat from a terminal:

```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d "{\"message\":\"What divisions does MediumMinds have?\"}"
```

## Vercel Deployment Guide

1. Push this repository to GitHub.

2. Create the backend project on Vercel:
   - Import the same GitHub repo.
   - Root Directory: `backend`
   - Framework Preset: `Other`
   - Install Command: `npm install`
   - Build Command: leave empty
   - Output Directory: leave empty
   - Add backend environment variables:
     - `DATABASE_URL`
     - `GROQ_API_KEY`
     - `GROQ_MODEL`
     - `FRONTEND_URL`

3. Deploy the backend.

4. Test the backend health route:

```text
https://your-backend.vercel.app/api/health
```

It should return:

```json
{
  "status": "ok",
  "message": "MediumMinds backend is running"
}
```

5. Create the frontend project on Vercel:
   - Import the same GitHub repo.
   - Root Directory: `frontend`
   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Add frontend environment variable:
     - `VITE_API_URL=https://your-backend.vercel.app`

6. Deploy the frontend.

7. Update the backend project environment variable:

```env
FRONTEND_URL=https://your-frontend.vercel.app
```

8. Redeploy the backend so CORS allows the deployed frontend.

9. Open the deployed frontend and test the chatbot.

## API Routes

`GET /api/health`

Returns backend status.

`POST /api/chat`

Request body:

```json
{
  "message": "Tell me about MediumMinds"
}
```

Response body:

```json
{
  "reply": "..."
}
```

## Database

Create a Neon database and run the schema in:

```text
db/schema.sql
```

Use the Neon connection string as `DATABASE_URL` in the backend only.

## Deployment Safety Checklist

- No real `.env` files are committed.
- `GROQ_API_KEY` is configured only in backend env variables.
- `DATABASE_URL` is configured only in backend env variables.
- Frontend uses only `VITE_API_URL`.
- Backend `/api/health` works before deploying the frontend.
- Frontend `VITE_API_URL` points to the deployed backend URL.
- Backend `FRONTEND_URL` points to the deployed frontend URL.
