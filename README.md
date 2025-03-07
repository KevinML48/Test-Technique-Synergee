## Étapes de Création

1. **Initialisation du Projet** :
   - J'ai créé un nouveau projet Node.js avec `npm init`.
   - J'ai installé TypeScript avec `npm install --save-dev typescript`.
   - J'ai configuré `tsconfig.json` pour compiler les fichiers `.ts`.

2. **Installation des Dépendances** :
   - Installation de Jest pour les tests unitaires avec `npm install --save-dev jest ts-jest @types/jest`.
   - J'ai installé les types pour Node.js avec `npm install --save-dev @types/node`.

3. **Création des Fichiers** :
   - Création du dossier `src` pour le code source et `tests` pour les tests unitaires.
   - Définition de l'interface `LabelRange` dans `src/models/LabelRange.ts`.
   - Implémentation de la classe `LabelRangeManager` dans `src/services/label-range-manager.ts`.
   - Conception des tests unitaires dans `tests/label-range-manager.test.ts`.

4. **Compilation et Exécution** :
   - Compilation du projet avec `tsc`.
   - Execution du projet avec `node build/src/main/main.js`.
   - Execution des test avec avec `jest`.

## Commandes Utilisées

- `npm init` pour initialiser le projet.
- `npm install --save-dev typescript` pour installer TypeScript.
- `npm install --save-dev jest ts-jest @types/jest` pour installer Jest.
- `npm install --save-dev @types/node` pour installer les types Node.js.
- `tsc` pour compiler le projet.
- `node build/src/main/main.js` pour exécuter le projet.
- `jest` pour exécuter les tests.
