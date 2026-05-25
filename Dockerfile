# Stage 1: Build (has devDeps + build tools)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
ENV HUSKY=0
RUN npm install 
COPY src/ ./src/

# Stage 2: Runtime (lean, secure)
FROM node:20-alpine AS runtime
WORKDIR /app
RUN addgroup -S appgroup &&     adduser  -S appuser -G appgroup
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
USER appuser
EXPOSE 3000
HEALTHCHECK CMD wget -qO- http://localhost:3000/health
CMD ["node", "src/index.js"]
