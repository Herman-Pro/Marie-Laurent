# Site Portfolio — Marie-Laurent

Description
-
Site web statique de type portfolio / page de présentation conçu pour Marie-Laurent. Contient une page principale `index.html`, des styles modulaires dans `assets/css/` (base, composants, layout, patterns) et du JavaScript dans `assets/js/` pour les interactions (menu, FAQ, animations).

Structure du projet
-
- [index.html](index.html) — page d'accueil
- [assets/css/](assets/css/) — feuilles de style organisées par `base`, `components`, `layout`, `patterns`
- [assets/js/](assets/js/) — scripts JavaScript (animations, menu, FAQ)

Installation et usage
-
1. Cloner le dépôt ou télécharger les fichiers.
2. Ouvrir `index.html` dans votre navigateur (double-clic) ou utiliser un serveur local pour développement.

Serveur de développement (optionnel)
-
Utilisez l'extension Live Server de VS Code ou un serveur simple pour voir les changements en temps réel.

Exemple avec `npx` (si Node.js installé):

```bash
npx http-server -c-1 .
```

Bonnes pratiques & développement
-
- Modifier les fichiers CSS modulaires sous `assets/css/base` et `assets/css/components` pour maintenir la cohérence visuelle.
- Ajouter de nouveaux composants CSS dans `assets/css/components/` et importer si nécessaire depuis `main.css`.
- Placer les nouveaux scripts dans `assets/js/` et les référencer depuis `index.html`.

Tests & validation
-
- Valider le HTML avec un validateur (ex. W3C).
- Vérifier l'accessibilité (contraste, balises sémantiques).

Contribuer
-
1. Forkez le projet et créez une branche feature: `git checkout -b feature/ma-modif`
2. Faites vos modifications et ouvrez une Pull Request expliquant vos changements.

Licence
-
Indiquez ici la licence du projet si nécessaire (ex. MIT). Si aucune licence n'est spécifiée, demander au propriétaire du dépôt.

Contact
-
Pour toute question ou suggestion, contactez le propriétaire du dépôt.
