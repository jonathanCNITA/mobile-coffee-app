# Application de gestion du parc des machines à café.

## 1) Initialiser une application Vue.

**Question : Rappeler ce qu'est npm et pourquoi nous utilisons l'option --global ?**     
Npm est le "Node Package Manager", il sers à la gestion et installation des programmes et de leur dépendance sous Node.    
On utilise --global car on veut que le programme Vue soit accessible sur toute notre machine et non sur un répertoire en particulier.     


**Question : Quels sont les bons réflexes à avoir quand vous téléchargez un nouveau projet ? Quels fichiers regarder en priorité ?**
Le fichier à regarder en priorité et le package.json qui nous donnera tout un tas d'information concernant le projet (nom auteur résumé environement etc..) ainsi que les plugins et dépendances nécessaire pour faire fonctionner correctement le projet.          
Faire un `npm install` afin d'installer toutes les dépendances du projet.


**Question : Si vous regardez le fichier README.md du projet vous voyez que trois commandes sont indiquées, quel est le but de chacune ?**    
`npm install` sert  installer toutes les dépendance du projet (cf package.json).     
`npm run dev` 