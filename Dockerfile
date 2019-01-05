From node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm audit fix

EXPOSE 4420

CMD ["npm", "run", "docker"]