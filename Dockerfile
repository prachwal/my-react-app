FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Instalacja morgan (jeśli nie ma w package.json)
RUN npm install morgan

COPY . .

# Kopiowanie skryptu wait-for-it.sh
COPY ./wait-for-it.sh ./wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

# Kopiowanie folderu dist
COPY ./dist ./dist

# Eksponowanie portów 80 (HTTP) i 443 (HTTPS)
EXPOSE 80 443

CMD ["node", "src/server.js"]
