# Use a base image with Node.js and npm
FROM node:18-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY index.html /app
COPY package.json /app

# Install dependencies
RUN npm install

# Copy the rest of the React app
COPY src/. /app/src/

# Build the React app for production
RUN npm run build

COPY public/images/. /app/dist/images/

# Expose the port your React app will run on (usually 3000)
EXPOSE 3000

# Start the production server (serve the built files)
CMD ["npx", "serve", "dist"]
