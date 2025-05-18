
# Installation et exécution du client Angular

Ce guide vous accompagne pas à pas pour installer, configurer et lancer notre client Angular, y compris la mise en place du **jeu de données de test** via JSON Server.

## Objectif

Configurer un environnement local prêt à l'emploi pour :
- Compiler et servir le client Angular en mode production.
- Utiliser un backend mocké grâce à JSON Server.

### 1. Installer Node.js (et npm)

Téléchargez et installez Node.js (version recommandée : **20.x**) depuis :  
👉 https://nodejs.org/

Cela installera également `npm` (Node Package Manager).

Vérifiez l’installation :

```bash
node -v
npm -v
```
### 2. Installer Angular CLI

```bash
npm install -g @angular/cli
```

Vérifiez l’installation :

```bash
ng version
```
## Installation du projet

### 1. Cloner le repo

```bash
git clone https://github.com/Alex-zReeZ/Module-i426-projet.git
cd Module-i426-projet
```

### 2. Installer les dépendances du projet

```bash
npm install
```

Cela installe toutes les dépendances requises pour pouvoir faire tourner le site correctement

## Lancer le jeu de données de test (JSON Server)

Nous utilisons `JSON Server` pour simuler un backend avec des données de test.

### 1. Démarrer le serveur mock

Assurez-vous d’avoir un fichier `db.json` à la racine.

```bash
npx json-server db.json
```

Cela expose l’API simulée à :  
http://localhost:3000/walk

## Lancer le projet angular en mode production
Si vous avez déjà lancé le serveur, veuillez ouvrir un nouveau terminal sans fermer le précédent, afin de pouvoir faire tourner le serveur et l'application en même temps

### 1. Servir l'application

```bash
ng serve
```
Le client sera accessible via cet URL :
http://localhost:4200/

## Tester l’application

1. Assurez-vous que **JSON Server** tourne à l’adresse [http://localhost:3000](http://localhost:3000).
2. Servez l’application Angular avec `ng serve`.
3. Accédez à l’application via [http://localhost:4200](http://localhost:4200).
4. L’application devrait interagir avec les données du fichier `db.json`.

## Structure du projet

```
Module-i426-projet
    │   .editorconfig
    │   .gitignore
    │   angular.json
    │   db.json
    │   package-lock.json
    │   package.json
    │   README.md
    │   tsconfig.app.json
    │   tsconfig.json
    │   tsconfig.spec.json
    │
    ├───.angular
    │   └───cache
    │       └───19.2.4
    │           └───groupe4-module-i322
    │               │   .tsbuildinfo
    │               │
    │               └───vite
    │                   ├───deps
    │                           ...
    │                   └───deps_ssr
    |						    ...
    │
    ├───.vscode
    │       ...
    │
    ├───public
    │       favicon.ico
    │       Icon.svg
    │
    └───src
        │   index.html
        │   main.server.ts
        │   main.ts
        │   server.ts
        │   styles.scss
        │
        ├───app
        │   │   app.component.html
        │   │   ...
        │   │
        │   ├───error-pages
        │   │       error-pages.component.html
        │   │       ...
        │   │
        │   ├───hikes-details
        │   │       hikes-details.component.html
        │   │       ...
        │   │
        │   ├───hikes-search-list
        │   │       hikes-search-list.component.html
        │   │       ...
        │   │
        │   ├───home-page
        │   │       home.component.html
        │   │       ...
        │   │
        │   └───page-title
        │           page-title.component.html
        │           ...
        │
        └───assets
            └───pictures
                    areuse.jpeg
                    ...
```

## Remarques

- L’API simulée (JSON Server) doit tourner **avant** de charger l'application.
- Pour pouvoir tourner le serveur et les pages angular, il faut avoir 2 terminaux ouverts.

## Auteurs

Projet développé par :
- Alex Beck
- Esteban Soler
- Henrique Pinto Rocha
- Timothee Delacrétaz
