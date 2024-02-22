FROM node:20
ENV PORT=8080
EXPOSE $PORT
WORKDIR /scraper
COPY package*.json /scraper
RUN npm ci
COPY . /scraper
RUN npm run build
CMD ["node", "/scraper/build/index.js"]