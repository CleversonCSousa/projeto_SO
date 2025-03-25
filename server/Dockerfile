FROM --platform=linux/amd64 node:18

RUN apt update && apt install -y strace && rm -rf /var/lib/apt/lists/*
RUN apt update && apt install -y time && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5052

CMD [ "npm", "run", "dev" ]