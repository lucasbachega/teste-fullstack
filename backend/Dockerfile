FROM node:20.5.1-alpine3.18
WORKDIR /app
COPY . .
RUN npm install
RUN npm i -g @nestjs/cli
RUN npm i -g @nestjs/cli
ENV NODE_ENV=production
RUN npm run seed
CMD ["npm", "run", "start:prod"]
