# IPL social

## Auteur
- Nom: Boubnan
- Prénom: Hajar
- Email: hajar.boubnan@vinci.student.be

## URL GitHub
https://github.com/hajar-boubnan-vinci/IPL-social.git

## Description
Ce projet utilise GitHub Actions pour configurer une pipeline CI. Le développement est basé sur le TDD (Test Driven Development). Les tests unitaires sont exécutés automatiquement à chaque push sur la branche principale.

### Fonctionnalités de validation de mot de passe
Dans le projet « IPL social », au sein d’un nouveau fichier « passwordChecker.js », une fonction de validation de mot de passe en JavaScript a été écrite. La fonction vérifie qu’une chaîne de caractères est bien un mot de passe valide :
1. Il doit contenir au moins 8 caractères.
2. Il doit contenir au moins un caractère spécial.
3. Il doit contenir au moins un chiffre.
4. Il ne peut pas contenir la chaîne de caractères « IPL » quel que soit sa casse (majuscule ou minuscule).

Les tests pour cette fonction sont écrits dans un second fichier nommé « passwordChecker.test.js ». La pipeline CI s’enclenche lors d’une PR/MR vers la branche principale “main”.

## Commande pour exécuter les tests
```bash
npm test