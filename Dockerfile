FROM node:alpine

WORKDIR /Users/surajnag

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD [ "npm", "start" ]