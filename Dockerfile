# On part d'une image officielle Node.js légère
FROM node:16-alpine

# On définit le dossier de travail à l'intérieur du conteneur
WORKDIR /usr/src/app

# On copie les fichiers de configuration des dépendances
COPY package*.json ./

# On installe les dépendances de l'application
RUN npm install

# On copie le reste du code source
COPY . .

# On expose le port 3000 (celui utilisé par notre server.js)
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "start"]
