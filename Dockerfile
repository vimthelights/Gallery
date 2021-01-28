FROM node:15.3.0
# ENV NODE_ENV=production
# RUN mkdir -p /src/app
WORKDIR /public
COPY . /public
RUN npm install
EXPOSE 3002
CMD [ "npm", "run", "docker-start" ]