# CodeB Website

Personal catalog site for CodeB (Bessar Farac) built with React. The frontend features the animated DataCenter Terminal background, streamlined navigation, résumé-style content, WhatsApp contact links, and dual call-to-action buttons for SY/TR numbers. A minimal Express backend scaffold is included for future API needs, but the current experience is frontend-only.

## Stack
- Frontend: React 18, react-router-dom 6, react-scripts 5.0.1
- Styling: CSS modules per page/component, custom animated canvas background
- Backend (placeholder): Node.js 16/Express
- Tooling: npm, Dockerfile (multi-stage), docker-compose for dev

## Project Structure
- `frontend/` – React SPA source
- `backend/` – Express starter (no active routes yet)
- `Dockerfile` – Builds frontend (Node 18) and includes backend bits, serves the built frontend via nginx
- `docker-compose.yml` – Dev convenience targets for frontend and backend

## Prerequisites
- Node.js 18+ for frontend work (backend scaffold targets Node 16 in the Dockerfile)
- npm 9+

## Local Development
```bash
# Frontend
cd frontend
npm install
npm start
# available at http://localhost:3000

# Backend (optional scaffold)
cd ../backend
npm install
npm run dev  # runs on http://localhost:5000
```

## Build
```bash
cd frontend
npm run build
```
The production bundle is written to `frontend/build`.

## Docker (all-in-one image)
```bash
docker build -t codeb-website .
docker run -p 8080:80 codeb-website
# frontend served at http://localhost:8080
```

For dev with compose:
```bash
docker compose up --build
```

## Deployment
See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment steps and options.

## Assets
- WhatsApp icon: `frontend/public/icons8-whatsapp-48.png` (used beside contact numbers)

## Notes
- Environment variables: none required for the current frontend; add `.env` files as needed if APIs are introduced.
- Testing: no automated tests yet; add Jest/RTL for frontend and supertest for backend when APIs go live.