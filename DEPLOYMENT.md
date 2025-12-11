# Deployment Guide

This project is currently a frontend-first React app with an unused Express scaffold. Deploy the built frontend; the backend is not wired to the UI yet.

## Prerequisites
- Docker (for containerized deployments), or
- Node.js 18+ and npm if building locally

## Option 1: Docker Image (recommended)
1. Build the image:
   ```bash
docker build -t codeb-website .
   ```
2. Run it locally to verify:
   ```bash
docker run -p 8080:80 codeb-website
   ```
   The site is available at http://localhost:8080.
3. Publish to your registry (example):
   ```bash
docker tag codeb-website your-registry/codeb-website:latest
docker push your-registry/codeb-website:latest
   ```
4. Deploy the image to your target platform (container service, VM with Docker, etc.). Only port 80 needs to be exposed.

## Option 2: Static Hosting
1. Build the frontend bundle:
   ```bash
cd frontend
npm install
npm run build
   ```
2. Deploy the contents of `frontend/build` to your static host (e.g., CDN bucket, static site service, or nginx serving the build directory).
3. Ensure the host supports SPA routing (serve `index.html` for unknown routes).

## Option 3: docker-compose for Dev Preview
```bash
docker compose up --build
```
- Frontend: http://localhost:3000
- Backend (scaffold): http://localhost:5000

## Environment
- No required environment variables for the current frontend.
- Backend `.env` can be added later if APIs are introduced.

## Notes
- The Dockerfile uses nginx to serve the built frontend and includes the backend files for future use. No backend process is started in the final image.
- If you add APIs later, update the Dockerfile and nginx config accordingly and wire the frontend to those endpoints.
