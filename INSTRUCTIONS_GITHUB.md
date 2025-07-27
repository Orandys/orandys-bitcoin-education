# 🚀 Instructions pour Publier Orandys sur GitHub

## Étapes de Migration depuis Figma Make

### 1. Préparation du Repository

```bash
# Créer un nouveau repository sur GitHub
# Puis cloner localement
git clone https://github.com/votre-username/orandys-bitcoin-education.git
cd orandys-bitcoin-education
```

### 2. Structure des Fichiers

Copiez tous les fichiers selon cette structure :

```
orandys-bitcoin-education/
├── package.json                    ✅ Fourni
├── vite.config.ts                  ✅ Fourni  
├── tsconfig.json                   ✅ Fourni
├── tailwind.config.js              ✅ Fourni
├── index.html                      ✅ Fourni
├── main.tsx                        ✅ Fourni
├── App.tsx                         📋 Copier depuis Figma Make
├── .env.example                    ✅ Fourni
├── README.md                       ✅ Fourni
├── .gitignore                      ✅ Fourni
├── components/                     📋 Copier TOUT le dossier depuis Figma Make
├── styles/                         📋 Copier depuis Figma Make
├── utils/                          📋 Copier depuis Figma Make
├── supabase/                       📋 Copier depuis Figma Make
└── public/                         ⚠️  À créer (voir section Assets)
```

### 3. ⚠️ IMPORTANT : Gestion des Assets

Les assets Figma (`figma:asset/...`) doivent être remplacés :

#### Assets à récupérer :
- **Logo Orandys** : `figma:asset/c61e6dd123bffdb74bc6b36c0f4d0f50700a8333.png`
- **Images historiques** : 3 images pour l'évolution de la monnaie
- **Icônes et assets divers**

#### Solutions :
1. **Télécharger depuis Figma Make** et placer dans `/public/`
2. **Ou remplacer par des URLs Unsplash/alternatives**

#### Modifications nécessaires dans le code :
```tsx
// Remplacer :
import orandysLogo from 'figma:asset/c61e6dd123bffdb74bc6b36c0f4d0f50700a8333.png';

// Par :
import orandysLogo from '/orandys-logo.png';
// ou
const orandysLogo = '/orandys-logo.png';
```

### 4. Configuration Supabase

#### Créer un projet Supabase :
1. Aller sur [supabase.com](https://supabase.com)
2. Créer un nouveau projet
3. Noter les clés d'API

#### Configurer la base de données :
```sql
-- Table pour la newsletter
CREATE TABLE kv_store_9bcea3e8 (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Index pour les recherches
CREATE INDEX idx_kv_store_key ON kv_store_9bcea3e8(key);
```

#### Déployer les Edge Functions :
```bash
# Installer Supabase CLI
npm install -g supabase

# Se connecter
supabase login

# Lier au projet
supabase link --project-ref votre-projet-ref

# Déployer les fonctions
supabase functions deploy make-server-9bcea3e8
```

### 5. Variables d'Environnement

Créer `.env.local` :
```bash
cp .env.example .env.local
# Puis éditer avec vos vraies valeurs Supabase
```

### 6. Installation et Test

```bash
# Installer les dépendances
npm install

# Tester en local
npm run dev

# Build pour production
npm run build
```

### 7. Modifications du Code pour GitHub

#### Dans `/App.tsx` :
- Remplacer l'import du logo Figma
- Vérifier tous les imports d'assets

#### Dans les composants :
- Remplacer tous les imports `figma:asset/...`
- Mettre à jour les références d'images

#### Dans `/utils/supabase/info.tsx` :
```tsx
// Utiliser les variables d'environnement
export const projectId = import.meta.env.VITE_SUPABASE_URL?.split('//')[1]?.split('.')[0] || '';
export const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
```

### 8. Déploiement

#### Vercel (Recommandé) :
```bash
npm install -g vercel
vercel
# Configurer les variables d'environnement dans le dashboard
```

#### Netlify :
```bash
npm run build
# Uploader le dossier dist/ vers Netlify
```

### 9. Checklist Final

- [ ] Tous les fichiers copiés
- [ ] Assets remplacés (plus de `figma:asset/`)
- [ ] Supabase configuré et testé
- [ ] Variables d'environnement définies
- [ ] Build réussit sans erreurs
- [ ] Newsletter fonctionne
- [ ] Navigation fonctionne
- [ ] Responsive testé
- [ ] Repository GitHub créé
- [ ] README.md à jour
- [ ] Premier commit poussé

### 10. Commits Suggérés

```bash
git add .
git commit -m "🎉 Initial commit: Orandys Bitcoin Education Platform

- Complete React/TypeScript educational platform
- 5 modules with 21+ lessons on Bitcoin
- Supabase integration for newsletter
- Responsive design with Tailwind CSS
- shadcn/ui components"

git push origin main
```

## 🔧 Dépannage Courant

### Erreurs de Build
- Vérifier les imports d'assets
- S'assurer que tous les composants shadcn/ui sont présents
- Vérifier les variables d'environnement

### Problèmes Supabase
- Vérifier les CORS dans Supabase
- Confirmer que les Edge Functions sont déployées
- Tester la connexion avec les bons endpoints

### Assets Manquants
- Remplacer par des alternatives depuis Unsplash
- Ou exporter depuis Figma et placer dans `/public/`

---

**Bonne chance avec votre migration ! 🚀**