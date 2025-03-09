FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache \
    autoconf \
    automake \
    libtool \
    nasm \
    build-base \
    zlib-dev \
    netcat-openbsd

COPY package*.json ./
RUN npm install

# Kopiowanie plików z folderu src
COPY . .

# Kopiowanie skryptu wait-for-it.sh
COPY ./wait-for-it.sh ./wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

# Eksponowanie portów 80 (HTTP) i 443 (HTTPS)
EXPOSE 80 443

CMD ["node", "src/server.cjs"]
