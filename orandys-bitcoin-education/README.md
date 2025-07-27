# 🟠 Orandys - Formation Bitcoin Complète

> **Naviguer, apprendre, évoluer**

Orandys est une plateforme éducative complète dédiée à l'apprentissage de Bitcoin, couvrant tous les aspects depuis les fondements monétaires jusqu'aux applications géopolitiques contemporaines.

## 🎯 Objectifs Pédagogiques

- **Comprendre le fonctionnement de Bitcoin** : Expliquer simplement mais rigoureusement les briques essentielles du protocole
- **Comprendre les bases de l'argent** : Faire réfléchir à ce qu'est la monnaie et pourquoi Bitcoin a émergé
- **Donner les outils pratiques** : Permettre de manipuler Bitcoin concrètement
- **Stimuler la curiosité** : Donner envie d'approfondir vers des modules plus avancés
- **Contenu structuré** : Adaptation au contexte pédagogique avec validation des acquis

## 📚 Contenu de la Formation

### Module 1 : Introduction & Monnaie (4 leçons)
- Histoire de l'argent et systèmes monétaires
- Les problèmes du système actuel
- Introduction à Bitcoin
- Premiers pas pratiques

### Module 2 : Fondamentaux Techniques (6 leçons)
- Cryptographie et hachage
- Blockchain et blocs
- Transactions et UTXO
- Minage et consensus
- Réseau peer-to-peer
- Adresses et portefeuilles

### Module 3 : Sécurité & Réseau (3 leçons)
- Sécurité des portefeuilles
- Bonnes pratiques
- Réseau Lightning

### Module 4 : Économie Bitcoin (3 leçons)
- Politique monétaire
- Adoption et marchés
- Écosystème économique

### Module 5 : Applications & Géopolitique (5 leçons)
- Cas d'usage mondiaux
- Régulation et juridique
- Impact géopolitique
- Écosystème et innovation
- Le futur de Bitcoin

## 🚀 Installation et Développement

### Prérequis

- Node.js 18+ 
- npm ou yarn
- Compte Supabase (pour la newsletter et backend)

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/orandys-bitcoin-education.git
cd orandys-bitcoin-education

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
```

### Configuration des Variables d'Environnement

Créez un fichier `.env.local` avec :

```env
# Supabase Configuration
VITE_SUPABASE_URL=votre_supabase_url
VITE_SUPABASE_ANON_KEY=votre_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key
```

### Développement

```bash
# Démarrer le serveur de développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## 🛠 Technologies Utilisées

- **Frontend** : React 18, TypeScript, Vite
- **Styling** : Tailwind CSS v4, Radix UI
- **Animations** : Motion (ex-Framer Motion)
- **Backend** : Supabase (Database, Auth, Edge Functions)
- **Déploiement** : Vercel/Netlify recommandé

## 📁 Structure du Projet

```
├── components/
│   ├── ui/                 # Composants shadcn/ui
│   ├── navigation/         # Navigation desktop/mobile
│   ├── data/              # Données des cours
│   └── [Module]Lesson[X].tsx  # Composants de leçons
├── styles/
│   └── globals.css        # Styles globaux Tailwind v4
├── supabase/
│   └── functions/         # Edge Functions Supabase
├── utils/
│   └── supabase/          # Configuration Supabase
└── assets/                # Images et assets
```

## 🔧 Configuration Supabase

### 1. Base de Données

Créez une table `kv_store_9bcea3e8` pour la newsletter :

```sql
CREATE TABLE kv_store_9bcea3e8 (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

### 2. Edge Functions

Déployez les fonctions serverless depuis `/supabase/functions/` :

```bash
supabase functions deploy make-server-9bcea3e8
```

### 3. Authentification (Optionnel)

Configurez l'authentification Supabase si vous souhaitez ajouter des fonctionnalités utilisateur.

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Configurer les variables d'environnement dans le dashboard Vercel
```

### Netlify

```bash
# Build
npm run build

# Déployer le dossier dist/
```

## 🎨 Personnalisation

### Thème et Couleurs

Modifiez les variables CSS dans `/styles/globals.css` :

```css
:root {
  --primary: #f97316;     /* Orange principal */
  --secondary: #eab308;   /* Jaune secondaire */
  /* ... autres variables */
}
```

### Contenu des Leçons

Les leçons sont dans `/components/[Module]Lesson[X].tsx`. Chaque leçon suit une structure cohérente avec :

- Header avec navigation
- Contenu structuré par sections
- Ressources complémentaires
- Navigation vers leçon suivante

## 📜 Licence

MIT License - Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! Merci de :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📞 Contact

- **Email** : orandys.bitcoin@gmail.com
- **Donation Bitcoin** : `bc1q8n3lzak9wrfqt73wesc94xmtvy05pe4hsgeg5q`
- **Buy Me a Coffee** : https://buymeacoffee.com/orandys

## 🙏 Remerciements

Merci à tous les contributeurs de la communauté Bitcoin pour leurs ressources éducatives qui ont inspiré ce projet.

---

**Orandys** - *Naviguer, apprendre, évoluer* 🟠