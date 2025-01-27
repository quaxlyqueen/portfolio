FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY src/. /app

# Expose the port your Node server will run on (e.g., 5000)
EXPOSE 3001

CMD ["npm", "start"]
