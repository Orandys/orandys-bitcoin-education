import { 
  BookOpen, 
  Cpu, 
  Shield, 
  TrendingUp, 
  Globe
} from "lucide-react";

export interface CourseSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  lessons: {
    title: string;
    description: string;
    resources: string;
    format: string;
  }[];
}

export const courseSections: CourseSection[] = [
  {
    id: "introduction",
    title: "Introduction à la monnaie et aux origines du Bitcoin",
    icon: <BookOpen className="w-5 h-5" />,
    description: "Comprendre les bases de la monnaie et l'émergence de Bitcoin",
    lessons: [
      {
        title: "À quoi sert l'argent ?",
        description: "Comprendre l'origine de la monnaie, ses fonctions (échange, réserve de valeur, unité de compte)",
        resources: "Vidéos de Hasheur, LearnMeABitcoin, \"Gradually Then Suddenly\"",
        format: "Vidéo + fiche PDF"
      },
      {
        title: "Tentatives monétaires précédentes",
        description: "e-gold, b-money, hashcash",
        resources: "Nakamoto Institute, Wei Dai, Nick Szabo",
        format: "Ligne du temps interactive"
      },
      {
        title: "Politique monétaire actuelle",
        description: "Banque centrale, inflation, taux d'intérêt",
        resources: "The Bitcoin Standard, économistes classiques vs Bitcoiners",
        format: "Comparatif graphique"
      },
      {
        title: "Satoshi Nakamoto et les Cypherpunks",
        description: "Qui est Satoshi ? Réflexions sur son identité, sa vision, et l'influence des Cypherpunks",
        resources: "Le Mystère Satoshi (Arte), Nakamoto Institute, Manifeste cypherpunk",
        format: "Vidéo + Document commenté"
      }
    ]
  },
  {
    id: "technical",
    title: "Les fondamentaux techniques",
    icon: <Cpu className="w-5 h-5" />,
    description: "Comprendre la technologie blockchain et les mécanismes de Bitcoin",
    lessons: [
      {
        title: "Blockchain & registre distribué",
        description: "Qu'est-ce qu'un ledger, comment les blocs s'enchaînent",
        resources: "LearnMeABitcoin",
        format: "Animation interactive"
      },
      {
        title: "Transactions",
        description: "Alice → Bob, fees, UTXO",
        resources: "LearnMeABitcoin",
        format: "Démo animée"
      },
      {
        title: "Seed Phrase & sécurité",
        description: "12-24 mots, SHA256, portefeuille",
        resources: "Ledger, Electrum",
        format: "Vidéo explicative + tuto"
      },
      {
        title: "Public / Private key",
        description: "Cryptographie asymétrique",
        resources: "Andreas Antonopoulos",
        format: "Visualisation schématique"
      },
      {
        title: "Minage & preuve de travail",
        description: "Hash, nonce, block header",
        resources: "Antonopoulos, Nakamoto Whitepaper",
        format: "Vidéo + jeu interactif"
      },
      {
        title: "Double dépense & attaque 51%",
        description: "Mécanismes d'attaque, protections et sécurité du réseau",
        resources: "LearnMeABitcoin, Antonopoulos, recherches académiques",
        format: "Schéma explicatif + simulations interactives"
      }
    ]
  },
  {
    id: "security",
    title: "Mécanismes de sécurité et de régulation du réseau",
    icon: <Shield className="w-5 h-5" />,
    description: "Explorer les systèmes de sécurité et de consensus de Bitcoin",
    lessons: [
      {
        title: "Puissance de calcul",
        description: "Loi de Moore, matériel de minage",
        resources: "CRI Bitcoin series",
        format: "Graphique évolutif"
      },
      {
        title: "Mempool & diffusion des blocs",
        description: "Temps, propagation réseau",
        resources: "LearnMeABitcoin",
        format: "Animation réseau"
      },
      {
        title: "Halving & émission",
        description: "Courbe logarithmique, rareté programmée",
        resources: "Bitcoin Whitepaper, The Bitcoin Standard",
        format: "Infographie + vidéo courte"
      }
    ]
  },
  {
    id: "economics",
    title: "Économie et perception de Bitcoin",
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Analyser les aspects économiques et la valeur de Bitcoin",
    lessons: [
      {
        title: "Prix ≠ Valeur",
        description: "Pourquoi 1 BTC = 1 BTC, indépendamment de son prix",
        resources: "Parker Lewis, Saifedean Ammous",
        format: "Capsule vidéo"
      },
      {
        title: "Volatilité",
        description: "Causes, adoption croissante",
        resources: "Glassnode, CoinMetrics",
        format: "Graphiques / Analyse"
      },
      {
        title: "Psychologie des marchés",
        description: "Don't trust, verify - Comprendre les mécanismes psychologiques des marchés Bitcoin",
        resources: "Cypherpunk & nodes, analyses comportementales",
        format: "Vidéo + citation marquante"
      }
    ]
  },
  {
    id: "applications",
    title: "Applications, enjeux géopolitiques et futurs possibles",
    icon: <Globe className="w-5 h-5" />,
    description: "Découvrir les applications réelles et l'avenir de Bitcoin",
    lessons: [
      {
        title: "Réserves stratégiques",
        description: "Bitcoin comme réserve de valeur institutionnelle et individuelle",
        resources: "MicroStrategy, El Salvador, Saylor",
        format: "Infographie"
      },
      {
        title: "Critiques & limites",
        description: "BCE, FMI, vidéo d'Isabela",
        resources: "Isabella Sg3, institutions",
        format: "Débat argumenté"
      },
      {
        title: "Écologie & énergie",
        description: "Miner avec énergie verte, coût/valeur environnementale",
        resources: "Digiconomist vs Bitcoin mining council",
        format: "Tableau comparatif"
      },
      {
        title: "Cas d'usages concrets",
        description: "Systèmes de paiement Bitcoin, remittance, inclusion financière",
        resources: "Afrique, Amérique Latine",
        format: "Témoignages vidéo"
      },
      {
        title: "Le futur de Bitcoin",
        description: "Layer 2, évolution du protocole",
        resources: "Lightning Network, Taproot",
        format: "Vidéo interactive"
      }
    ]
  }
];
