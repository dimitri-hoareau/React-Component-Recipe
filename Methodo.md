# React et Méthodo

### Etape 1 - Composant Principal dans le DOM

Réussir à afficher un composant dans le DOM. Le modèle vous fourni déjà un composant App, donc vous pouvez considérer cette étape comme déjà faite.

### Etape 2 - Composants intermédiares dans Composant principal

Créer autant de composants que de blocs d'interface. Essayer d'identifier les principaux "morceaux" de l'ui, de faire un Composant pour chacun, et que chaque composant n'affiche qu'un texte simple et facilement identifiable (Ex: "menu" pour un composant de menu ;)

> Une fois ces composants créées, pernser à les utiliser quelque part. Dans App par exemple.

### Etape 3 - Composants statiques

Bien, j'ai mes composants d'affichés, je peux me faire plaisir et m'occuper de la mise en page. Ecrire tout le html et le css à afficher, en dur dans les composants.

L'idée c'est d'avoir un affichage qui marche, sans penser aux datas pour le moment.

### Etape 4 - Composants dynamiques

Identifier pour chaque composants les données dynamiques dont il aura besoin.

- Dans le fichier du composant
  - Décrire les props attendus
  - Les récupérer et les utiliser pour l'affichage
- Dans le fichier qui UTILISE votre composant
  - Utiliser le composant `<Composant />`
  - Donner lui les props éventuellement attendus

> ### Rappels pour faire passer les props
>
> Quand j'utilise mon composant:
>
> ```javascript
> <Composant
>   prop1="un texte"
>   prop2={0}
>   prop3={{ objet: true }}
>   prop4={["je", "suis", "taaaableau"]}
> />
> ```
>
> Quand je définis mon composant
>
> ```javascript
> const Composant = (props) => {
>   // Tous les props arrivent en premier param
>   console.log(props);
>   return <div>{props.prop1}</div>;
> };
> ```

A vous de jouer :muscle:
