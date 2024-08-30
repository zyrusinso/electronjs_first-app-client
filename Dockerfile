FROM node:20.17.0-alpine3.19

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

CMD ["npm", "start"]