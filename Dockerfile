FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
USER node
COPY --chown=node:node . .
EXPOSE 8080
CMD ["npm", "start"]