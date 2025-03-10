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

# Kopiowanie pliku server.cjs z folderu src/server
COPY src/server/server.cjs src/server/server.cjs

# Kopiowanie folderu models z src/server
COPY src/server/models src/server/models

# Kopiowanie folderu scripts z src/server
COPY src/server/scripts src/server/scripts

# Kopiowanie skryptu wait-for-it.sh
COPY ./wait-for-it.sh ./wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

# Eksponowanie portów 80 (HTTP) i 443 (HTTPS)
EXPOSE 80 443

CMD ["node", "src/server/server.cjs"]
