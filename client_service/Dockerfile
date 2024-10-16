FROM node:latest

WORKDIR /app/client_service

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start-watch"]