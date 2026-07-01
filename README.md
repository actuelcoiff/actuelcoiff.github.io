# Actuel Coiff — Site Jekyll

Site web Jekyll pour le salon **Actuel Coiff** à Rennes.  
Conçu pour être hébergé **gratuitement sur GitHub Pages**.

---

## 🚀 Démarrage rapide

### 1. Prérequis

Installez Ruby et Jekyll sur votre machine :

- **macOS** : `brew install ruby` puis `gem install jekyll bundler`
- **Windows** : téléchargez [RubyInstaller](https://rubyinstaller.org/) puis `gem install jekyll bundler`
- **Linux** : `sudo apt install ruby-full` puis `gem install jekyll bundler`

### 2. Installer les dépendances

```bash
cd actuel-coiff
bundle install
```

### 3. Lancer le site en local

```bash
bundle exec jekyll serve
```

Ouvrez votre navigateur sur **http://localhost:4000**

---

## ✏️ Personnaliser le contenu

### Informations du salon (téléphone, adresse, horaires…)

Tout se trouve dans **`_config.yml`** — c'est le seul fichier à modifier pour les infos de base :

```yaml
salon:
  name:   "Actuel Coiff"
  phone:  "02 99 67 31 75"
  ...

hours:
  - day:   "Mardi – Mercredi"
    times: "08h30 – 18h00"
  ...
```

Après modification de `_config.yml`, redémarrez Jekyll (`Ctrl+C` puis `bundle exec jekyll serve`).

### Pages

Chaque page se trouve dans le dossier **`_pages/`** :

| Fichier                    | URL                    |
|---------------------------|------------------------|
| `index.html`              | `/`                    |
| `_pages/coiffeur.html`    | `/coiffeur/`           |
| `_pages/coiffure.html`    | `/coiffure/`           |
| `_pages/galerie.html`     | `/galerie-photos/`     |
| `_pages/contact.html`     | `/contact/`            |
| `_pages/mentions-legales.html` | `/mentions-legales/` |
| `_pages/vie-privee.html`  | `/vie-privee/`         |

Ouvrez le fichier correspondant et modifiez le texte entre les balises HTML.

### Photos

Remplacez les images dans **`assets/images/`** par vos propres photos :

```
assets/images/
├── hero-1.jpg          ← 1ère diapo du slider (1920×1080 recommandé)
├── hero-2.jpg          ← 2ème diapo du slider
├── salon-interieur.jpg ← Photo de l'intérieur du salon
├── services/
│   ├── coupes.jpg
│   ├── coloration.jpg
│   ├── permanente.jpg
│   └── enfants.jpg
└── gallery/
    ├── gallery-1.jpg   ← Ajoutez autant de photos que vous voulez
    ├── gallery-2.jpg
    └── ...
```

**Pour ajouter une photo à la galerie :**
1. Copiez votre photo dans `assets/images/gallery/`
2. Ouvrez `_pages/galerie.html`
3. Dupliquez un bloc `<div class="gallery-item">...</div>` et mettez le bon nom de fichier

### Carte Google Maps

Dans `index.html` et `_pages/contact.html`, remplacez le `src` de la balise `<iframe>` :

1. Allez sur [maps.google.com](https://maps.google.com)
2. Recherchez votre adresse
3. Cliquez sur **Partager** → **Intégrer une carte**
4. Copiez l'URL du `src="..."` et collez-la dans le fichier

### Couleurs

Les couleurs sont définies dans **`assets/css/main.scss`** tout en haut (variables CSS) :

```css
:root {
  --color-accent: #b8936a;   /* Couleur dorée principale */
  --color-bg:     #faf8f5;   /* Fond clair */
  --color-bg-dark:#1a1714;   /* Fond sombre (header, footer) */
  ...
}
```

---

## 🌐 Publier sur GitHub Pages

1. Créez un compte sur [github.com](https://github.com) si vous n'en avez pas
2. Créez un nouveau dépôt (ex: `actuel-coiff`)
3. Poussez votre code :

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE-NOM/actuel-coiff.git
git push -u origin main
```

4. Dans les **Settings** du dépôt → **Pages** → Source : `main` / `/ (root)`
5. Votre site sera disponible sur `https://VOTRE-NOM.github.io/actuel-coiff/`

### Domaine personnalisé (actuel-coiff.fr)

Pour garder votre adresse actuelle :

1. Dans GitHub Pages Settings, entrez `www.actuel-coiff.fr` dans "Custom domain"
2. Chez votre registrar DNS, créez un enregistrement CNAME :
   - **Nom** : `www`
   - **Valeur** : `VOTRE-NOM.github.io`
3. Mettez à jour `url:` dans `_config.yml` avec `https://www.actuel-coiff.fr`

---

## 🆘 Aide

- Documentation Jekyll : https://jekyllrb.com/docs/
- GitHub Pages : https://pages.github.com/
- Pour les icônes emoji dans les services, vous pouvez les remplacer par des SVG ou des images

---

*Site généré avec Jekyll — hébergement gratuit via GitHub Pages*
