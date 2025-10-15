# 🚗 Garage Auto Pro Marrakech - Website

Un site web moderne et professionnel pour un garage automobile à Marrakech, Maroc.

## 📋 Caractéristiques

### ✨ Fonctionnalités Principales
- **Design Moderne** : Interface élégante avec palette de couleurs gris foncé et rouge
- **Responsive** : Optimisé pour mobile, tablette et desktop
- **SEO Optimisé** : Meta tags pour "mécanicien Marrakech", "garage auto Marrakech", "réparation voiture Marrakech"
- **Multilingue** : Contenu en français clair et simple

### 🔧 Sections du Site

1. **Accueil (Hero)**
   - Titre accrocheur avec overlay
   - Boutons d'action (Réserver, Services)
   - Badges de confiance (Ouvert 6j/7, Équipement moderne, Certifié)

2. **Services**
   - Vidange
   - Réparation freins
   - Diagnostic moteur
   - Remplacement pneus
   - Lavage auto
   - Entretien général

3. **À Propos**
   - Histoire du garage
   - Expérience (15+ ans)
   - Points forts et certifications

4. **Galerie Photos**
   - Photos du garage
   - Équipements professionnels
   - Voitures réparées
   - Effet lightbox au clic

5. **Témoignages**
   - Avis clients avec étoiles
   - Profils clients authentiques

6. **Réservation**
   - Formulaire de prise de rendez-vous
   - Intégration WhatsApp automatique
   - Validation des données

7. **Contact**
   - Informations complètes (adresse, téléphone, email, horaires)
   - Bouton WhatsApp direct
   - Google Maps intégré

## 🚀 Installation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation serveur requise (site statique)

### Démarrage Rapide

1. **Ouvrir le site**
   - Double-cliquez sur `index.html`
   - OU utilisez un serveur local (recommandé)

2. **Avec un serveur local** (optionnel mais recommandé)

   **Option 1 : Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Puis ouvrez : http://localhost:8000
   ```

   **Option 2 : Node.js (http-server)**
   ```bash
   npx http-server -p 8000
   
   # Puis ouvrez : http://localhost:8000
   ```

   **Option 3 : VS Code Live Server**
   - Installez l'extension "Live Server"
   - Clic droit sur `index.html` → "Open with Live Server"

## ⚙️ Configuration

### 1. Modifier les Informations de Contact

Éditez `index.html` et modifiez :

```html
<!-- Téléphone -->
<p>+212 524-123456<br>+212 661-234567</p>

<!-- Email -->
<p>contact@garageautopro.ma<br>info@garageautopro.ma</p>

<!-- Adresse -->
<p>Avenue Mohammed VI, Marrakech<br>40000, Maroc</p>
```

### 2. Configurer WhatsApp

Dans `index.html` et `script.js`, remplacez le numéro WhatsApp :

```javascript
// Dans script.js, ligne ~150
const whatsappNumber = '212672057286'; // Numéro WhatsApp configuré

// Format : code pays + numéro (sans +, espaces ou tirets)
// Exemple : 212672057286 pour +212 672-057286
```

### 3. Modifier la Carte Google Maps

Dans `index.html`, section Contact, remplacez l'URL de l'iframe :

```html
<iframe src="VOTRE_URL_GOOGLE_MAPS" ...></iframe>
```

**Comment obtenir l'URL :**
1. Allez sur Google Maps
2. Cherchez votre adresse
3. Cliquez sur "Partager" → "Intégrer une carte"
4. Copiez le code iframe

### 4. Personnaliser les Images

Les images actuelles utilisent Unsplash (placeholder). Pour utiliser vos propres images :

1. Créez un dossier `images/` dans le projet
2. Ajoutez vos photos (garage, équipements, voitures)
3. Remplacez les URLs dans `index.html` :

```html
<!-- Exemple -->
<img src="images/garage-facade.jpg" alt="Notre garage">
```

**Images recommandées :**
- `hero-bg.jpg` : Photo du garage (1920x1080px)
- `about.jpg` : Mécanicien au travail (800x600px)
- `gallery-1.jpg` à `gallery-6.jpg` : Photos variées (600x400px)

### 5. Modifier les Couleurs

Dans `styles.css`, modifiez les variables CSS :

```css
:root {
    --primary-red: #dc2626;      /* Rouge principal */
    --dark-red: #991b1b;         /* Rouge foncé */
    --light-red: #ef4444;        /* Rouge clair */
    --dark-gray: #1f2937;        /* Gris foncé */
    --medium-gray: #374151;      /* Gris moyen */
    --light-gray: #6b7280;       /* Gris clair */
}
```

## 📱 Fonctionnalités Interactives

### Navigation
- Menu hamburger responsive sur mobile
- Navigation smooth scroll
- Highlight automatique de la section active

### Animations
- Fade-in au scroll pour les cartes
- Hover effects sur les services
- Parallax sur le hero
- Transitions fluides

### Formulaire de Réservation
- Validation des champs
- Envoi automatique vers WhatsApp
- Message de confirmation
- Date minimum = aujourd'hui

### Galerie
- Lightbox au clic sur les images
- Fermeture par clic extérieur ou bouton X
- Responsive

## 🎨 Personnalisation Avancée

### Ajouter un Service

Dans `index.html`, section Services :

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-VOTRE-ICONE"></i>
    </div>
    <h3>Nom du Service</h3>
    <p>Description du service.</p>
</div>
```

**Icônes disponibles :** [Font Awesome Icons](https://fontawesome.com/icons)

### Ajouter un Témoignage

```html
<div class="testimonial-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">"Votre témoignage ici..."</p>
    <div class="testimonial-author">
        <div class="author-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="author-info">
            <h4>Nom du Client</h4>
            <span>Client depuis 2023</span>
        </div>
    </div>
</div>
```

## 🔍 SEO

### Meta Tags Inclus
- Description optimisée
- Keywords : mécanicien Marrakech, garage auto Marrakech, réparation voiture Marrakech
- Open Graph (pour réseaux sociaux)
- Viewport (responsive)

### Améliorer le SEO

1. **Ajoutez un fichier `robots.txt`**
```txt
User-agent: *
Allow: /
Sitemap: https://votresite.com/sitemap.xml
```

2. **Créez un `sitemap.xml`**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://votresite.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

3. **Ajoutez Google Analytics** (dans `<head>`)
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📦 Structure des Fichiers

```
mecanicien/
│
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript interactif
├── README.md           # Ce fichier
│
└── images/             # (À créer) Vos images
    ├── logo.png
    ├── hero-bg.jpg
    ├── about.jpg
    └── gallery/
        ├── gallery-1.jpg
        ├── gallery-2.jpg
        └── ...
```

## 🌐 Déploiement

### Option 1 : GitHub Pages (Gratuit)
1. Créez un repo GitHub
2. Uploadez les fichiers
3. Settings → Pages → Source: main branch
4. Votre site sera sur : `https://username.github.io/repo-name`

### Option 2 : Netlify (Gratuit)
1. Créez un compte sur [Netlify](https://netlify.com)
2. Drag & drop le dossier du projet
3. Site déployé instantanément

### Option 3 : Vercel (Gratuit)
1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez le projet
3. Déploiement automatique

### Option 4 : Hébergement Marocain
- **Recommandations** : Hostinger Maroc, LWS Maroc, o2switch
- Uploadez via FTP
- Configurez le domaine (.ma)

## 🛠️ Support Navigateurs

- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Edge (dernières versions)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 📞 Support

Pour toute question ou personnalisation :
- 📧 Email : contact@garageautopro.ma
- 📱 WhatsApp : +212 661-234567

## 📄 Licence

Ce projet est libre d'utilisation pour Garage Auto Pro Marrakech.

---

**Développé avec ❤️ pour Garage Auto Pro Marrakech**

🚗 Votre expert automobile à Marrakech depuis 15 ans
