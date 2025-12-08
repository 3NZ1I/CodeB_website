# Backend service
FROM node:16 AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ .

# Frontend service
FROM node:18 AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Production image
FROM nginx:alpine
COPY --from=frontend /app/frontend/build /usr/share/nginx/html
COPY --from=backend /app/backend /usr/share/backend
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]