import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Users, 
  Lightbulb,
  CreditCard,
  Building,
  Clock,
  DollarSign,
  Shield,
  Zap,
  AlertTriangle,
  TrendingUpDown,
  Globe,
  Network,
  Database,
  Minus,
  Lock,
  Store,
  BarChart3,
  Settings
} from "lucide-react";
interface ApplicationsLessonOneProps {
  onBackToModule: () => void;
  onHomeClick: () => void;
  onNextLesson?: () => void;
  nextLessonInfo?: {
    title: string;
    moduleTitle?: string;
    isNextModule?: boolean;
  } | null;
  onSectionChange: (sectionId: string) => void;
}

export function ApplicationsLessonOne({ 
  onBackToModule, 
  onHomeClick, 
  onNextLesson, 
  nextLessonInfo, 
  onSectionChange 
}: ApplicationsLessonOneProps) {
const traditionalVsBitcoinSystems = [
    {
      characteristic: "Centralisation",
      traditional: {
        value: "Centralisés",
        description: "Contrôlés par institutions financières",
        examples: ["Banques", "Visa/Mastercard", "PayPal", "Swift"],
        icon: <Building className="w-5 h-5" />,
        color: "bg-red-50 text-red-700"
      },
      bitcoin: {
        value: "Décentralisés", 
        description: "Peer-to-peer sans intermédiaires",
        examples: ["Réseau Bitcoin", "Lightning Network", "Self-custody", "Open source"],
        icon: <Network className="w-5 h-5" />,
        color: "bg-green-50 text-green-700"
      }
    },
    {
      characteristic: "Frais de transaction",
      traditional: {
        value: "Élevés",
        description: "Multiples intermédiaires, marges importantes",
        examples: ["2-4% cartes", "10-25$ virements intl", "Frais de change", "Commissions"],
        icon: <DollarSign className="w-5 h-5" />,
        color: "bg-red-50 text-red-700"
      },
      bitcoin: {
        value: "Faibles",
        description: "Pas d'intermédiaires, frais réseau uniquement",
        examples: ["0.1-1$ on-chain", "< 0.01$ Lightning", "Pas de change", "Transparent"],
        icon: <Minus className="w-5 h-5" />,
        color: "bg-green-50 text-green-700"
      }
    },
    {
      characteristic: "Délais de traitement",
      traditional: {
        value: "Longs",
        description: "Processus multi-étapes, horaires bancaires",
        examples: ["1-5 jours virements", "T+2 règlements", "Weekends fermés", "Fuseaux horaires"],
        icon: <Clock className="w-5 h-5" />,
        color: "bg-red-50 text-red-700"
      },
      bitcoin: {
        value: "Courts",
        description: "24/7, traitement automatisé",
        examples: ["10min on-chain", "< 1sec Lightning", "24/7/365", "Instant mondial"],
        icon: <Zap className="w-5 h-5" />,
        color: "bg-green-50 text-green-700"
      }
    },
    {
      characteristic: "Sécurité",
      traditional: {
        value: "Vulnérable",
        description: "Points de défaillance centralisés",
        examples: ["Fraudes cartes", "Hacks bancaires", "Identity theft", "Chargebacks"],
        icon: <AlertTriangle className="w-5 h-5" />,
        color: "bg-red-50 text-red-700"
      },
      bitcoin: {
        value: "Cryptographique",
        description: "Sécurité mathématique, immutable",
        examples: ["SHA-256", "Signatures ECDSA", "Multisig", "Hardware wallets"],
        icon: <Shield className="w-5 h-5" />,
        color: "bg-green-50 text-green-700"
      }
    },
    {
      characteristic: "Portée internationale",
      traditional: {
        value: "Limitée",
        description: "Restrictions géographiques et réglementaires",
        examples: ["Sanctions pays", "Correspondent banking", "KYC/AML", "Capital controls"],
        icon: <Lock className="w-5 h-5" />,
        color: "bg-red-50 text-red-700"
      },
      bitcoin: {
        value: "Globale",
        description: "Accessible partout avec internet",
        examples: ["Sans frontières", "Censorship resistant", "Inclusion financière", "Unbanked access"],
        icon: <Globe className="w-5 h-5" />,
        color: "bg-green-50 text-green-700"
      }
    }
  ];

  const bitcoinPaymentAdvantages = [
    {
      category: "Réduction des Frais",
      icon: <DollarSign className="w-8 h-8" />,
      color: "bg-green-500",
      benefits: [
        {
          title: "Élimination des Intermédiaires",
          description: "Pas de banques, Visa/Mastercard, ou processeurs",
          impact: "Économies 2-4% sur chaque transaction",
          example: "Vente 1000€ : 970€ reçus vs 999€ avec Bitcoin"
        },
        {
          title: "Frais Transparents et Prévisibles", 
          description: "Frais réseau calculables à l'avance",
          impact: "Planification budgétaire simplifiée",
          example: "Transaction Lightning : < 0.01€ vs 3% carte"
        },
        {
          title: "Microtransactions Viables",
          description: "Frais fixes très faibles permettent petits montants",
          impact: "Nouveaux modèles économiques possibles",
          example: "Paywall 0.10€ faisable vs minimum 1€ carte"
        }
      ]
    },
    {
      category: "Rapidité des Transactions",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-blue-500",
      benefits: [
        {
          title: "Transactions 24/7/365",
          description: "Pas d'horaires bancaires ou jours fériés",
          impact: "Liquidité et cash flow améliorés",
          example: "Paiement Dimanche 2h du matin = instantané"
        },
        {
          title: "Règlement Final Immédiat",
          description: "Pas de période de contestation ou chargeback",
          impact: "Certitude de paiement pour commerçants",
          example: "Bitcoin reçu = argent acquis définitivement"
        },
        {
          title: "Vitesse Lightning Network",
          description: "Transactions sub-secondes pour montants usuels",
          impact: "Expérience utilisateur proche de la carte",
          example: "Paiement café instantané comme contactless"
        }
      ]
    },
    {
      category: "Sécurité et Confidentialité",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-purple-500", 
      benefits: [
        {
          title: "Cryptographie Militaire",
          description: "Sécurité SHA-256 et signatures ECDSA",
          impact: "Impossible à falsifier ou dupliquer",
          example: "Plus sûr que coffrefort physique"
        },
        {
          title: "Pas de Données Sensibles Partagées",
          description: "Pas de numéro de carte ou données bancaires",
          impact: "Zero risque de vol d'identité",
          example: "Marchands ne voient qu'une adresse publique"
        },
        {
          title: "Contrôle Total des Fonds",
          description: "Vos clés = votre argent, pas de gel possible",
          impact: "Indépendance financière complète",
          example: "Pas de compte gelé par erreur bancaire"
        }
      ]
    }
  ];

  const bitcoinPaymentDisadvantages = [
    {
      category: "Volatilité",
      icon: <TrendingUpDown className="w-8 h-8" />,
      color: "bg-red-500",
      challenges: [
        {
          title: "Fluctuations de Prix Importantes",
          description: "Valeur Bitcoin peut varier ±10% par jour",
          impact: "Risque de perte/gain involontaire",
          solution: "Conversion immédiate en fiat via processeurs",
          example: "Vente 1000€ = 900€ le lendemain si chute 10%"
        },
        {
          title: "Risque de Change pour Commerçants",
          description: "Temps entre réception et conversion",
          impact: "Exposition involontaire au marché crypto",
          solution: "Services de hedging ou conversion auto",
          example: "BitPay conversion instantanée EUR"
        },
        {
          title: "Difficulté Pricing Stable",
          description: "Prix en Bitcoin fluctue constamment",
          impact: "Complexité pour affichage prix fixes",
          solution: "Pricing dynamique ou fiat avec conversion",
          example: "Café à 0.000025 BTC aujourd'hui, 0.000030 demain"
        }
      ]
    },
    {
      category: "Adoption Limitée",
      icon: <Users className="w-8 h-8" />,
      color: "bg-orange-500",
      challenges: [
        {
          title: "Acceptation Commerciale Restreinte",
          description: "Minorité des commerçants acceptent Bitcoin",
          impact: "Utilité pratique limitée au quotidien",
          solution: "Cartes Bitcoin-to-fiat, croissance adoption",
          example: "< 1% commerces vs 100% cartes bancaires"
        },
        {
          title: "Barrières Réglementaires",
          description: "Interdictions ou restrictions gouvernementales",
          impact: "Adoption freinée dans certains pays",
          solution: "Lobbying, clarifications légales",
          example: "Chine interdit, Salvador adopte"
        },
        {
          title: "Manque d'Éducation Publique",
          description: "Méconnaissance et méfiance du grand public",
          impact: "Résistance au changement d'habitudes",
          solution: "Campagnes éducatives, démos pratiques",
          example: "Peur de la technologie chez +50 ans"
        }
      ]
    },
    {
      category: "Complexité Technique",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-gray-500",
      challenges: [
        {
          title: "Courbe d'Apprentissage Utilisateur",
          description: "Concepts wallet, adresses, clés privées",
          impact: "Barrière à l'adoption masse",
          solution: "UX simplifiées, wallets custodial",
          example: "Plus complexe qu'Apple Pay"
        },
        {
          title: "Gestion Sécurité Personnelle",
          description: "Responsabilité backup et protection clés",
          impact: "Risque de perte fonds par erreur",
          solution: "Hardware wallets, services custody",
          example: "Perte seed phrase = perte définitive"
        },
        {
          title: "Support Technique Limité",
          description: "Pas de service client traditionnel",
          impact: "Résolution problèmes complexe",
          solution: "Communautés, support tiers, formation",
          example: "Pas de numéro à appeler si problème"
        }
      ]
    }
  ];

  const paymentSystemsCaseStudies = [
    {
      name: "BitPay",
      founded: "2011",
      type: "Processeur de paiement crypto pionnier",
      description: "Premier service permettant aux commerçants d'accepter Bitcoin avec conversion automatique",
      keyFeatures: [
        "Conversion Bitcoin → Fiat instantanée",
        "Intégrations e-commerce majeures",
        "Facturation et comptabilité intégrées",
        "Support 200+ cryptomonnaies"
      ],
      metrics: {
        merchants: "100,000+",
        volume: "$5B+ traités",
        countries: "200+ pays",
        integrations: "Shopify, WooCommerce, Magento"
      },
      advantages: [
        "Protection volatilité pour commerçants",
        "Setup rapide et facile",
        "Conformité réglementaire assurée",
        "Expérience utilisateur familière"
      ],
      challenges: [
        "Frais de service (1-2%)",
        "KYC requis pour gros volumes",
        "Dépendance service tiers",
        "Not your keys, not your Bitcoin"
      ],
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      name: "Strike",
      founded: "2019", 
      type: "Paiements Lightning natifs",
      description: "Application mobile utilisant Lightning Network pour paiements instantanés et micro-frais",
      keyFeatures: [
        "Lightning Network natif",
        "Conversion fiat/Bitcoin automatique", 
        "Envois internationaux instantanés",
        "Pas de frais réseau visibles"
      ],
      metrics: {
        merchants: "10,000+",
        volume: "$500M+ annuels",
        countries: "USA, El Salvador",
        speed: "< 1 seconde"
      },
      advantages: [
        "Frais quasi-nuls (< 0.1%)",
        "Transactions instantanées",
        "Interface simple et intuitive",
        "Innovation Lightning native"
      ],
      challenges: [
        "Disponibilité géographique limitée",
        "Écosystème Lightning encore jeune",
        "Liquidité parfois insuffisante",
        "Régulations en évolution"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "bg-yellow-500"
    },
    {
      name: "OpenNode",
      founded: "2018",
      type: "Infrastructure Bitcoin pour entreprises",
      description: "Solutions entreprise pour accepter Bitcoin avec APIs développeur et outils professionnels",
      keyFeatures: [
        "APIs développeur complètes",
        "Lightning et on-chain",
        "Webhooks et automatisation",
        "Dashboard analytics avancé"
      ],
      metrics: {
        merchants: "5,000+",
        volume: "$200M+ traités",
        countries: "50+ pays",
        uptime: "99.9%"
      },
      advantages: [
        "Infrastructure robuste entreprise",
        "Intégration technique flexible",
        "Support Lightning et Bitcoin",
        "Outils analytics professionnels"
      ],
      challenges: [
        "Public cible développeurs/tech",
        "Courbe apprentissage APIs",
        "Moins de marketing grand public",
        "Focus B2B vs B2C"
      ],
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-500"
    }
  ];

  const paymentSystemComparison = [
    {
      system: "BitPay",
      costStructure: "1-2% + frais réseau",
      settlementTime: "Instantané → Fiat",
      targetMarket: "E-commerce, PME",
      technicalComplexity: "Faible",
      volatilityProtection: "Complète",
      custody: "Custodial",
      strengths: ["Facilité usage", "Protection volatilité", "Écosystème mature"],
      weaknesses: ["Frais service", "Pas self-custody", "KYC requis"]
    },
    {
      system: "Strike", 
      costStructure: "< 0.1% Lightning",
      settlementTime: "< 1 seconde",
      targetMarket: "P2P, Particuliers",
      technicalComplexity: "Moyenne",
      volatilityProtection: "Optionnelle",
      custody: "Hybride",
      strengths: ["Ultra-rapide", "Frais minimes", "Innovation Lightning"],
      weaknesses: ["Geo-limité", "Lightning complexe", "Moins enterprise"]
    },
    {
      system: "OpenNode",
      costStructure: "0.5-1% + réseau",
      settlementTime: "Variable",
      targetMarket: "Développeurs, B2B",
      technicalComplexity: "Élevée",
      volatilityProtection: "Configurable",
      custody: "Non-custodial",
      strengths: ["APIs flexibles", "Self-custody", "Pro tools"],
      weaknesses: ["Dev requis", "Moins marketing", "Setup complexe"]
    }
  ];

  const adoptionMetrics = [
    {
      year: "2015",
      merchants: "10,000",
      users: "100,000",
      volume: "$50M",
      keyEvents: ["BitPay croissance", "Premiers e-commerces"]
    },
    {
      year: "2016", 
      merchants: "20,000",
      users: "200,000", 
      volume: "$150M",
      keyEvents: ["Steam accepte Bitcoin", "Overstock adoption"]
    },
    {
      year: "2017",
      merchants: "50,000",
      users: "500,000",
      volume: "$1B",
      keyEvents: ["Bulle retail adoption", "Frais réseau élevés"]
    },
    {
      year: "2018",
      merchants: "40,000",
      users: "400,000",
      volume: "$600M", 
      keyEvents: ["Bear market", "Steam retire Bitcoin"]
    },
    {
      year: "2019",
      merchants: "60,000",
      users: "800,000",
      volume: "$900M",
      keyEvents: ["Lightning Network", "Stabilisation"]
    },
    {
      year: "2020",
      merchants: "100,000",
      users: "1,500,000",
      volume: "$2B",
      keyEvents: ["COVID stimulus", "Digital payments boom"]
    },
    {
      year: "2021",
      merchants: "200,000", 
      users: "3,000,000",
      volume: "$8B",
      keyEvents: ["Tesla acceptance", "El Salvador adoption"]
    },
    {
      year: "2022",
      merchants: "180,000",
      users: "2,500,000", 
      volume: "$6B",
      keyEvents: ["Bear market", "Terra Luna crash"]
    },
    {
      year: "2023",
      merchants: "250,000",
      users: "4,000,000",
      volume: "$12B",
      keyEvents: ["ETF applications", "Lightning growth"]
    }
  ];

  const practicalExamples = [
    {
      scenario: "E-commerce International",
      description: "Boutique en ligne vendant dans 50 pays",
      traditionalPain: "Frais 3-5%, délais 3-7 jours, conversion 20+ devises",
      bitcoinSolution: "BitPay: 1% frais, conversion instantanée, devise unique",
      savings: "Économies 2-4% sur CA, trésorerie améliorée",
      implementation: "Plugin Shopify + compte BitPay",
      timeToLive: "< 1 jour setup"
    },
    {
      scenario: "Freelancer International",
      description: "Développeur travaillant pour clients USA/Europe", 
      traditionalPain: "Wise 1-2%, délais 1-3 jours, commissions banques",
      bitcoinSolution: "Strike: réception directe, conversion EUR auto",
      savings: "Économies 1-1.5% par paiement",
      implementation: "App Strike + factures Bitcoin",
      timeToLive: "< 1 heure setup"
    },
    {
      scenario: "Restaurant Lightning",
      description: "Coffee shop acceptant paiements mobiles",
      traditionalPain: "TPE 2-3%, contactless fees, slow settlements",
      bitcoinSolution: "Terminal Lightning + conversion auto",
      savings: "Réduction fees 50-70%",
      implementation: "BTCPay Server + Lightning wallet",
      timeToLive: "2-3 jours setup"
    },
    {
      scenario: "Remittances Familiales",
      description: "Envois d'argent pays développé → émergent",
      traditionalPain: "Western Union 5-15%, points physiques requis",
      bitcoinSolution: "Strike/Wallet of Satoshi P2P",
      savings: "Économies 80-90% sur frais",
      implementation: "Apps mobiles des deux côtés",
      timeToLive: "< 30 minutes"
    }
  ];

  const futureInnovations = [
    {
      innovation: "Lightning Address",
      description: "Email-like addresses pour paiements Lightning",
      impact: "Simplification UX, adoption mainstream",
      timeline: "Déjà déployé",
      example: "alice@strike.me reçoit paiements instantanés"
    },
    {
      innovation: "RGB & Taro Assets",
      description: "Tokens et stablecoins sur Bitcoin/Lightning",
      impact: "Stablecoins sans volatilité + vitesse Lightning",
      timeline: "2024-2025",
      example: "USDT Lightning pour commerce quotidien"
    },
    {
      innovation: "BOLT 12 Offers",
      description: "Factures Lightning avancées réutilisables",
      impact: "Subscriptions, billing automatique",
      timeline: "En développement",
      example: "Abonnements Netflix payés en Lightning"
    },
    {
      innovation: "Federated E-Cash",
      description: "Tokens Bitcoin privacy-preserving",
      impact: "Privacy + UX simplifié",
      timeline: "2024-2026", 
      example: "Cashu/Fedimint pour microtransactions privées"
    }
  ];

  const resources = [
    {
      title: "BitPay Merchant Dashboard",
      type: "Outil professionnel",
      description: "Interface complète pour commerçants acceptant crypto",
      icon: <Store className="w-5 h-5" />,
      url: "https://bitpay.com/merchant-dashboard"
    },
    {
      title: "Lightning Network Explorer",
      type: "Monitoring réseau",
      description: "Statistiques et visualisation réseau Lightning",
      icon: <Network className="w-5 h-5" />,
      url: "https://1ml.com/"
    },
    {
      title: "Payment Processor Comparison",
      type: "Guide comparatif",
      description: "Tableau détaillé des solutions de paiement Bitcoin",
      icon: <BarChart3 className="w-5 h-5" />,
      url: "https://btcpayserver.org/doc/guide-payment-processors-comparison/"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onHomeClick}
          className="text-muted-foreground hover:text-foreground p-0 h-auto flex items-center gap-2"
        >
          <Logo size="small" />
          <span>Orandys</span>
        </Button>
        <span>/</span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBackToModule}
          className="text-muted-foreground hover:text-foreground p-0 h-auto"
        >
          Applications & géopolitique
        </Button>
        <span>/</span>
        <span className="text-foreground">Cas d'usages concrets</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <CreditCard className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Cas d'usages concrets</h1>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 w-fit">
                Leçon 1/3
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Cas d'usages pratiques et applications concrètes de Bitcoin
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Niveau intermédiaire</span>
          </div>
          <Badge variant="outline">
            Module 5 - Applications
          </Badge>
        </div>
      </div>

      {/* Introduction */}
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-emerald-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Les systèmes de paiement utilisant Bitcoin offrent une alternative décentralisée et sécurisée 
              aux systèmes de paiement traditionnels. Ils transforment la façon dont nous envisageons les 
              transactions financières en éliminant les intermédiaires et en réduisant les coûts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ce chapitre explore en détail les différents systèmes de paiement basés sur Bitcoin, leurs 
              avantages concrets, leurs défis actuels, et leurs implications révolutionnaires pour 
              utilisateurs, commerçants et institutions financières du monde entier.
            </p>
          </div>
        </div>
      </Card>

      {/* Traditional vs Bitcoin Comparison */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Traditionnels vs Bitcoin</h2>
        <p className="text-blue-800 mb-8">
          Comparaison détaillée des caractéristiques fondamentales entre systèmes de paiement 
          centralisés traditionnels et solutions décentralisées Bitcoin.
        </p>
        
        <div className="space-y-6">
          {traditionalVsBitcoinSystems.map((comparison, index) => (
            <Card key={index} className="p-6 bg-white">
              <h3 className="text-lg font-semibold mb-4 text-center">{comparison.characteristic}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Traditional System */}
                <Card className="p-4 border-2 border-red-200 bg-red-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center">
                      {comparison.traditional.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800">Systèmes Traditionnels</h4>
                      <p className="text-red-700 font-medium">{comparison.traditional.value}</p>
                    </div>
                  </div>
                  
                  <p className="text-red-700 text-sm mb-3">{comparison.traditional.description}</p>
                  
                  <div className="space-y-1">
                    <h5 className="text-xs font-medium text-red-800">Exemples :</h5>
                    <ul className="text-xs text-red-600 space-y-1">
                      {comparison.traditional.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Bitcoin System */}
                <Card className="p-4 border-2 border-green-200 bg-green-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center">
                      {comparison.bitcoin.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Systèmes Bitcoin</h4>
                      <p className="text-green-700 font-medium">{comparison.bitcoin.value}</p>
                    </div>
                  </div>
                  
                  <p className="text-green-700 text-sm mb-3">{comparison.bitcoin.description}</p>
                  
                  <div className="space-y-1">
                    <h5 className="text-xs font-medium text-green-800">Exemples :</h5>
                    <ul className="text-xs text-green-600 space-y-1">
                      {comparison.bitcoin.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Bitcoin Payment Advantages */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Avantages des Systèmes Bitcoin</h2>
        <p className="text-muted-foreground mb-8">
          Les bénéfices concrets et mesurables des systèmes de paiement Bitcoin pour tous les acteurs.
        </p>
        
        <div className="space-y-8">
          {bitcoinPaymentAdvantages.map((category, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-indigo-400">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.color} text-white rounded-lg flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.benefits.map((benefit, benefitIndex) => (
                  <Card key={benefitIndex} className="p-4 bg-gray-50">
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-blue-50 rounded p-3">
                        <h5 className="text-xs font-medium text-blue-800 mb-1">Impact :</h5>
                        <p className="text-xs text-blue-700">{benefit.impact}</p>
                      </div>
                      <div className="bg-green-50 rounded p-3">
                        <h5 className="text-xs font-medium text-green-800 mb-1">Exemple :</h5>
                        <p className="text-xs text-green-700">{benefit.example}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Bitcoin Payment Disadvantages */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-red-900">Défis des Systèmes Bitcoin</h2>
        <p className="text-red-800 mb-8">
          Les obstacles actuels et leurs solutions pour l'adoption massive des paiements Bitcoin.
        </p>
        
        <div className="space-y-8">
          {bitcoinPaymentDisadvantages.map((category, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.color} text-white rounded-lg flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.challenges.map((challenge, challengeIndex) => (
                  <Card key={challengeIndex} className="p-4 bg-gray-50">
                    <h4 className="font-semibold mb-2">{challenge.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-red-50 rounded p-3">
                        <h5 className="text-xs font-medium text-red-800 mb-1">Impact :</h5>
                        <p className="text-xs text-red-700">{challenge.impact}</p>
                      </div>
                      <div className="bg-blue-50 rounded p-3">
                        <h5 className="text-xs font-medium text-blue-800 mb-1">Solution :</h5>
                        <p className="text-xs text-blue-700">{challenge.solution}</p>
                      </div>
                      <div className="bg-orange-50 rounded p-3">
                        <h5 className="text-xs font-medium text-orange-800 mb-1">Exemple :</h5>
                        <p className="text-xs text-orange-700">{challenge.example}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Case Studies */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Études de Cas Concrets</h2>
        <p className="text-muted-foreground mb-8">
          Analyse approfondie des principales solutions de paiement Bitcoin et de leur impact réel.
        </p>
        
        <div className="space-y-8">
          {paymentSystemsCaseStudies.map((caseStudy, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-purple-400">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${caseStudy.color} text-white rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {caseStudy.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold">{caseStudy.name}</h3>
                    <Badge variant="outline">Fondé en {caseStudy.founded}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{caseStudy.description}</p>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-800 mb-2">Fonctionnalités clés :</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          {caseStudy.keyFeatures.map((feature, i) => (
                            <li key={i}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-medium text-purple-800 mb-2">Métriques :</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {Object.entries(caseStudy.metrics).map(([key, value], i) => (
                            <div key={i} className="text-purple-700">
                              <span className="font-medium">{key} :</span> {value}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-medium text-green-800 mb-2">Avantages :</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          {caseStudy.advantages.map((advantage, i) => (
                            <li key={i}>• {advantage}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-medium text-red-800 mb-2">Défis :</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          {caseStudy.challenges.map((challenge, i) => (
                            <li key={i}>• {challenge}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Comparaison des Solutions</h3>
          <Card className="p-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Système</th>
                  <th className="text-left p-2">Coûts</th>
                  <th className="text-left p-2">Vitesse</th>
                  <th className="text-left p-2">Marché cible</th>
                  <th className="text-left p-2">Complexité</th>
                  <th className="text-left p-2">Volatilité</th>
                </tr>
              </thead>
              <tbody>
                {paymentSystemComparison.map((system, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 font-medium">{system.system}</td>
                    <td className="p-2">{system.costStructure}</td>
                    <td className="p-2">{system.settlementTime}</td>
                    <td className="p-2">{system.targetMarket}</td>
                    <td className="p-2">{system.technicalComplexity}</td>
                    <td className="p-2">{system.volatilityProtection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </Card>

      {/* Practical Examples */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-900">Exemples Pratiques d'Usage</h2>
        <p className="text-green-800 mb-8">
          Cas d'usage réels montrant l'application concrète des systèmes de paiement Bitcoin.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {practicalExamples.map((example, index) => (
            <Card key={index} className="p-6 bg-white">
              <h3 className="font-semibold text-lg mb-3">{example.scenario}</h3>
              <p className="text-sm text-muted-foreground mb-4">{example.description}</p>
              
              <div className="space-y-3">
                <div className="bg-red-50 rounded p-3">
                  <h4 className="text-xs font-medium text-red-800 mb-1">Problème traditionnel :</h4>
                  <p className="text-xs text-red-700">{example.traditionalPain}</p>
                </div>
                
                <div className="bg-blue-50 rounded p-3">
                  <h4 className="text-xs font-medium text-blue-800 mb-1">Solution Bitcoin :</h4>
                  <p className="text-xs text-blue-700">{example.bitcoinSolution}</p>
                </div>
                
                <div className="bg-green-50 rounded p-3">
                  <h4 className="text-xs font-medium text-green-800 mb-1">Économies :</h4>
                  <p className="text-xs text-green-700">{example.savings}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-purple-50 rounded p-2">
                    <h4 className="text-xs font-medium text-purple-800 mb-1">Mise en œuvre :</h4>
                    <p className="text-xs text-purple-700">{example.implementation}</p>
                  </div>
                  <div className="bg-orange-50 rounded p-2">
                    <h4 className="text-xs font-medium text-orange-800 mb-1">Délai :</h4>
                    <p className="text-xs text-orange-700">{example.timeToLive}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Adoption Metrics */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Évolution de l'Adoption</h2>
        <p className="text-muted-foreground mb-8">
          Données historiques sur la croissance des systèmes de paiement Bitcoin.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Année</th>
                <th className="text-left p-3">Commerçants</th>
                <th className="text-left p-3">Utilisateurs</th>
                <th className="text-left p-3">Volume</th>
                <th className="text-left p-3">Événements clés</th>
              </tr>
            </thead>
            <tbody>
              {adoptionMetrics.map((metric, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{metric.year}</td>
                  <td className="p-3">{metric.merchants}</td>
                  <td className="p-3">{metric.users}</td>
                  <td className="p-3">{metric.volume}</td>
                  <td className="p-3">
                    <ul className="text-xs space-y-1">
                      {metric.keyEvents.map((event, i) => (
                        <li key={i}>• {event}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Future Innovations */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-purple-900">Innovations Futures</h2>
        <p className="text-purple-800 mb-8">
          Technologies émergentes qui transformeront les systèmes de paiement Bitcoin.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {futureInnovations.map((innovation, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-semibold text-lg">{innovation.innovation}</h3>
                <Badge variant="outline" className="text-xs">{innovation.timeline}</Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">{innovation.description}</p>
              
              <div className="space-y-3">
                <div className="bg-blue-50 rounded p-3">
                  <h4 className="text-xs font-medium text-blue-800 mb-1">Impact attendu :</h4>
                  <p className="text-xs text-blue-700">{innovation.impact}</p>
                </div>
                
                <div className="bg-green-50 rounded p-3">
                  <h4 className="text-xs font-medium text-green-800 mb-1">Exemple d'usage :</h4>
                  <p className="text-xs text-green-700">{innovation.example}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Conclusion */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-emerald-900">Conclusion</h2>
            <p className="text-emerald-800 mb-4 leading-relaxed">
              Les systèmes de paiement Bitcoin représentent une évolution majeure vers un écosystème 
              financier plus efficace, accessible et équitable. Malgré les défis actuels comme la 
              volatilité et l'adoption limitée, les avantages structurels sont indéniables.
            </p>
            <p className="text-emerald-800 leading-relaxed">
              L'innovation continue avec Lightning Network, les stablecoins sur Bitcoin, et l'amélioration 
              de l'expérience utilisateur transforment progressivement la promesse théorique en réalité 
              pratique pour des millions d'utilisateurs worldwide.
            </p>
          </div>
        </div>
      </Card>

      {/* Questions & Activities */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Questions & Activités</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-3">Questions de réflexion</h3>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>1. Quels avantages concrets Bitcoin offre-t-il vs systèmes traditionnels ?</li>
                <li>2. Comment les défis actuels peuvent-ils être surmontés ?</li>
                <li>3. Quel système (BitPay, Strike, OpenNode) convient à quel usage ?</li>
                <li>4. Quelles innovations futures vous semblent les plus prometteuses ?</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-3">Activités pratiques</h3>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• Comparer coûts Bitcoin vs virement international</li>
                <li>• Tester interface Strike ou autre wallet Lightning</li>
                <li>• Analyser adoption commerçante dans votre région</li>
                <li>• Calculer ROI passage à Bitcoin pour un commerce</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Resources */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Pédagogiques</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{resource.title}</h3>
                  <Badge variant="secondary" className="text-xs mb-2">
                    {resource.type}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* References */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-gray-50 to-neutral-50 border-gray-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Références</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>• Nakamoto, S. (2008). <em>Bitcoin: A Peer-to-Peer Electronic Cash System</em></p>
          <p>• Antonopoulos, A. M. (2014). <em>Mastering Bitcoin: Unlocking Digital Cryptocurrencies</em></p>
          <p>• BitPay. (2021). <em>BitPay: The Future of Payments</em></p>
          <p>• Strike. (2021). <em>Strike: The Future of Money</em></p>
          <p>• OpenNode. (2021). <em>OpenNode: The Future of Commerce</em></p>
          <p>• Lightning Network Documentation. <em>Lightning RFC Specifications</em></p>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <Button 
          variant="outline" 
          onClick={onBackToModule}
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au Module
        </Button>
        
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Leçon terminée</Badge>
          <CheckCircle className="w-5 h-5 text-green-500" />
        </div>
        
        {onNextLesson && nextLessonInfo && (
          <Button 
            onClick={onNextLesson}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 w-full sm:w-auto"
          >
            {nextLessonInfo.isNextModule ? `${nextLessonInfo.moduleTitle}` : `Leçon suivante`}
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
