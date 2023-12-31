
# Chat-Apprentissage

Bienvenue dans Chat-Apprentissage, une application de chat interactive conçue pour faciliter une communication efficace et engageante.

## Pour Commencer

Ces instructions vous guideront à travers le processus de configuration pour exécuter Chat-Apprentissage sur votre machine locale pour le développement et les tests.

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

Pour configurer Chat-Apprentissage, suivez ces étapes :

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/AeroticaL/chat-apprentissage.git
   cd chat-apprentissage
   ```

2. **Configuration du Serveur**

   Naviguez vers le répertoire du serveur :

   ```bash
   cd server
   ```

   Installez les dépendances du serveur :

   ```bash
   yarn
   ```

   Démarrez le serveur :

   ```bash
   yarn start
   ```

   Après l'installation, configurez les paramètres de votre serveur. Cela implique généralement la configuration des variables d'environnement, des connexions à la base de données et d'autres services nécessaires.

   Assurez-vous de revoir et d'éditer le fichier `.env` situé dans le répertoire du serveur pour correspondre à vos paramètres d'environnement locaux ou de production.

3. **Configuration du Client**

   Dans une fenêtre de terminal séparée, naviguez vers le répertoire public (client) depuis la racine du projet :

   ```bash
   cd ../public
   ```

   Installez les dépendances du client :

   ```bash
   yarn
   ```

   Démarrez le client :

   ```bash
   yarn start
   ```

   L'interface client devrait maintenant être accessible via votre navigateur Web. Par défaut, elle est généralement disponible à `http://localhost:3000`, mais cela peut varier en fonction de votre configuration.

### Configuration

Configurez le client en éditant le fichier `.env` dans le répertoire public. Assurez-vous que tous les points de terminaison API nécessaires et autres paramètres pertinents sont correctement configurés.

## Utilisation

Avec le serveur et le client en cours d'exécution, accédez à l'interface de chat via votre navigateur Web. L'URL par défaut pour le client est généralement `http://localhost:3000`. Commencez à interagir avec les utilisateurs et profitez des fonctionnalités de Chat-Apprentissage !

## Contribuer

Nous apprécions les contributions sous toutes leurs formes à Chat-Apprentissage. Si vous avez des suggestions d'amélioration, des rapports de bugs ou de nouvelles fonctionnalités, n'hésitez pas à contribuer. Veuillez lire notre [CONTRIBUTING.md](CONTRIBUTING.md) pour les lignes directrices sur la contribution.

## Licence

Ce projet est sous licence [MIT License](LICENSE.md). Vous êtes libre de l'utiliser, de le modifier et de le distribuer selon les termes de la licence MIT.
