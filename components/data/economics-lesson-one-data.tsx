import { DollarSign, Scale, Activity, Calculator, BarChart3, Brain } from "lucide-react";

export const priceVsValueConcepts = [
  {
    icon: DollarSign,
    title: "Prix",
    description: "Valeur marchande instantanée déterminée par l'offre et la demande",
    details: [
      "Fluctuation constante sur les marchés",
      "Influencé par émotions et spéculation",
      "Visible et quantifiable immédiatement",
      "Peut diverger significativement de la valeur"
    ],
    color: "bg-red-50 border-red-200"
  },
  {
    icon: Scale,
    title: "Valeur",
    description: "Utilité réelle et fondamentale d'un actif",
    details: [
      "Basée sur propriétés intrinsèques",
      "Évolution lente et structurelle",
      "Difficile à quantifier précisément",
      "Détermine le prix à long terme"
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: Activity,
    title: "Écart Prix/Valeur",
    description: "Différence temporaire créant des opportunités",
    details: [
      "Cycles de sur/sous-évaluation",
      "Correction progressive du marché",
      "Source d'opportunités d'investissement",
      "Risque de mauvais timing"
    ],
    color: "bg-green-50 border-green-200"
  }
];

export const bitcoinValueFactors = [
  {
    category: "Propriétés monétaires",
    description: "Caractéristiques qui font de Bitcoin une réserve de valeur",
    factors: [
      {
        name: "Rareté",
        explanation: "21 millions maximum, émission décroissante",
        strength: "Élevée",
        impact: "Fondamental"
      },
      {
        name: "Divisibilité",
        explanation: "Jusqu'à 8 décimales (satoshis)",
        strength: "Parfaite",
        impact: "Pratique"
      },
      {
        name: "Durabilité",
        explanation: "Résistance numérique au temps",
        strength: "Illimitée",
        impact: "Essentiel"
      },
      {
        name: "Portabilité",
        explanation: "Transport instantané, frontières, quantités",
        strength: "Parfaite",
        impact: "Révolutionnaire"
      }
    ]
  },
  {
    category: "Propriétés technologiques",
    description: "Innovations techniques créant de la valeur",
    factors: [
      {
        name: "Décentralisation",
        explanation: "Aucun point de contrôle central",
        strength: "Très élevée",
        impact: "Résistance censure"
      },
      {
        name: "Sécurité",
        explanation: "Cryptographie + puissance calcul",
        strength: "Inégalée",
        impact: "Confiance absolue"
      },
      {
        name: "Transparence",
        explanation: "Blockchain publique et auditable",
        strength: "Totale",
        impact: "Vérifiabilité"
      },
      {
        name: "Programmabilité",
        explanation: "Scripts et contrats simples",
        strength: "Basique mais efficace",
        impact: "Innovation continue"
      }
    ]
  },
  {
    category: "Propriétés économiques",
    description: "Mécanismes économiques intrinsèques",
    factors: [
      {
        name: "Politique monétaire",
        explanation: "Règles fixes et prédictibles",
        strength: "Immutable",
        impact: "Prévisibilité totale"
      },
      {
        name: "Effets de réseau",
        explanation: "Valeur croît avec adoption",
        strength: "Auto-renforçante",
        impact: "Croissance exponentielle"
      },
      {
        name: "Coût de production",
        explanation: "Énergie et équipement miniers",
        strength: "Plancher de prix",
        impact: "Support économique"
      },
      {
        name: "Liquidité",
        explanation: "Facilité d'échange global",
        strength: "En croissance",
        impact: "Utilité pratique"
      }
    ]
  }
];

export const pricingModels = [
  {
    model: "Stock-to-Flow (S2F)",
    creator: "PlanB",
    principle: "Prix corrélé à la rareté (stock/production annuelle)",
    formula: "SF = Stock existant / Production annuelle",
    predictions: "Prix augmente exponentiellement avec chaque halving",
    accuracy: "Bonne corrélation historique (R² > 0.9)",
    limitations: ["Ignore la demande", "Modèle trop simpliste", "Peu de données"],
    useCase: "Vision long terme de la rareté"
  },
  {
    model: "Valeur Réalisée (RV)",
    creator: "Coinmetrics",
    principle: "Valeur basée sur le dernier prix de mouvement de chaque UTXO",
    formula: "RV = Σ(UTXO_value × price_when_last_moved)",
    predictions: "Plancher de prix basé sur coût réel",
    accuracy: "Excellent support en temps de crise",
    limitations: ["Pas prédictif", "Réactif aux mouvements", "Complexe à calculer"],
    useCase: "Détection de sur/sous-évaluation"
  },
  {
    model: "Valeur de Transaction (NVT)",
    creator: "Willy Woo",
    principle: "Ratio entre cap de marché et volume transactionnel",
    formula: "NVT = Market Cap / Volume transactionnel quotidien",
    predictions: "NVT élevé = surévaluation potentielle",
    accuracy: "Indicateur relatif fiable",
    limitations: ["Dépend de l'activité réseau", "Pas de seuils absolus", "Influence spéculation"],
    useCase: "Comparaison avec action P/E ratio"
  },
  {
    model: "Modèle Rainbow",
    creator: "Communauté Bitcoin",
    principle: "Bandes de prix basées sur régression logarithmique",
    formula: "Régression log avec bandes de confiance colorées",
    predictions: "Zones d'achat/vente selon couleur",
    accuracy: "Bon pour timing cycles",
    limitations: ["Purement statistique", "Pas de base fondamentale", "Peut devenir obsolète"],
    useCase: "Timing d'entrée et sortie"
  }
];

export const marketCycles = [
  {
    phase: "Accumulation",
    duration: "6-18 mois",
    characteristics: [
      "Prix stable/baissier",
      "Volume faible",
      "Intérêt médiatique minimal",
      "Smart money accumule"
    ],
    sentiment: "Capitulation → Espoir",
    opportunities: ["DCA optimal", "Accumulation patient", "Recherche fondamentale"],
    risks: ["Peut durer longtemps", "Tests psychologiques", "Catching falling knife"]
  },
  {
    phase: "Markup (Bull run)",
    duration: "12-18 mois",
    characteristics: [
      "Croissance prix accélérée",
      "Volume croissant",
      "Adoption et couverture média",
      "FOMO généralisé"
    ],
    sentiment: "Optimisme → Euphorie",
    opportunities: ["Réalisation profits", "Riding the trend", "Média et adoption"],
    risks: ["Survente", "Bulles spéculatives", "Timing de sortie"]
  },
  {
    phase: "Distribution",
    duration: "3-6 mois",
    characteristics: [
      "Prix au sommet volatile",
      "Volume très élevé",
      "Euphorie maximale",
      "Smart money distribue"
    ],
    sentiment: "Euphorie → Greed",
    opportunities: ["Dernières prises de profit", "Préparation bear market"],
    risks: ["Déni du retournement", "Maximalist trap", "HODL à tout prix"]
  },
  {
    phase: "Markdown (Bear market)",
    duration: "12-24 mois",
    characteristics: [
      "Déclin prix prolongé",
      "Volume décroissant",
      "Désintérêt et crypto winter",
      "Weak hands capitulent"
    ],
    sentiment: "Peur → Capitulation",
    opportunities: ["Préparation cycle suivant", "Building pendant down"],
    risks: ["Capitulation définitive", "Croyance en mort Bitcoin", "Timing bottom"]
  }
];

export const resources = [
  {
    title: "Bitcoin Valuation Models",
    type: "Analyse quantitative",
    duration: "45 min",
    description: "Comparaison des principaux modèles de valorisation",
    icon: Calculator,
    url: "https://charts.woobull.com/"
  },
  {
    title: "On-chain Analysis Dashboard",
    type: "Outils données",
    duration: "Temps réel",
    description: "Métriques blockchain pour évaluation",
    icon: BarChart3,
    url: "https://studio.glassnode.com/"
  },
  {
    title: "Market Cycle Psychology",
    type: "Éducation comportementale",
    duration: "30 min",
    description: "Comprendre psychologie des cycles de marché",
    icon: Brain,
    url: "https://www.blockchaincenter.net/en/bitcoin-rainbow-chart/"
  }
];
