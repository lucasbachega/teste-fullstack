FROM node:20.5.1-alpine3.18
WORKDIR /app
COPY ./src ./src
COPY package*.json ./
RUN npm install --only=production
ENV NODE_ENV=production
CMD ["npm", "run", "start:prod"]
