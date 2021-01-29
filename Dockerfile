FROM node:15.3.0
ENV NODE_ENV=production
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . .
RUN npm install
EXPOSE 3002
CMD [ "npm", "run", "docker-start" ]