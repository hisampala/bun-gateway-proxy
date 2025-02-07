# Stage 1: Build
FROM oven/bun AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lockb ./
RUN bun install

# Copy source code
COPY ./src ./src

# Build the project
ENV NODE_ENV=production
RUN bun build --compile --minify-whitespace --minify-syntax --target bun --outfile server ./src/index.ts

# Stage 2: Production Image
FROM gcr.io/distroless/base-debian11

WORKDIR /app

# Copy the built server from the build stage
COPY --from=build /app/server /app/server

# Run the server
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["/app/server"]
