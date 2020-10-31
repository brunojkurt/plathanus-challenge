FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN apk --no-cache add --virtual builds-deps build-base python

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "start"]