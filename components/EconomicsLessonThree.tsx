import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Users, 
  Target, 
  Lightbulb,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Activity,
  AlertTriangle,
  Shield,
  Zap,
  BarChart3,
  LineChart,
  PieChart,
  Calculator,
  Users2,
  Building,
  Wallet,
  CreditCard,
  DollarSign,
  Gauge,
  ArrowUpDown,
  Eye,
  Briefcase,
  Heart,
  Star,
  Globe,
  Lock,
  Layers,
  Package,
  Network,
  Database,
  CheckCircle2,
  Brain,
  Repeat,
  Smile,
  Frown,
  Meh,
  Zap as Lightning,
  Timer,
  BookOpen,
  MessageSquare,
  RotateCcw,
  Thermometer,
  Clipboard,
  Target as Goal,
  Award,
  Settings
} from "lucide-react";

interface EconomicsLessonThreeProps {
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

export function EconomicsLessonThree({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: EconomicsLessonThreeProps) {
  const psychologicalCycles = [
    {
      phase: "Euphorie",
      description: "Optimisme extrême, prix aux sommets",
      characteristics: ["FOMO généralisé", "Médias très positifs", "Nouveaux investisseurs affluent", "Valorisations irrationnelles"],
      example: "Décembre 2017 - Bitcoin atteint 20 000$",
      duration: "Quelques semaines",
      sentiment: "Très haussier",
      icon: <Smile className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-800"
    },
    {
      phase: "Optimisme",
      description: "Confiance maintenue malgré corrections",
      characteristics: ["Achats sur les baisses", "Narratives positives", "Croissance soutenue", "Adoption progressive"],
      example: "2019 - Recovery post-crash",
      duration: "Plusieurs mois",
      sentiment: "Haussier",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800"
    },
    {
      phase: "Scepticisme",
      description: "Doutes émergents, volatilité accrue",
      characteristics: ["Questions sur viabilité", "Premiers signes de faiblesse", "Médias mitigés", "Consolidation de prix"],
      example: "Mi-2018 - Doutes post-bulle",
      duration: "Plusieurs mois",
      sentiment: "Neutre-Baissier",
      icon: <Meh className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800"
    },
    {
      phase: "Pessimisme",
      description: "Sentiment négatif dominant",
      characteristics: ["Ventes persistantes", "Narratives négatives", "Adoption ralentie", "Médias critiques"],
      example: "Fin 2018 - Bear market prolongé",
      duration: "6-12 mois",
      sentiment: "Baissier",
      icon: <TrendingDown className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-800"
    },
    {
      phase: "Panique",
      description: "Ventes massives, peur extrême",
      characteristics: ["Liquidations forcées", "Médias alarmistes", "Capitulation générale", "Prix effondrés"],
      example: "Mars 2020 - COVID crash",
      duration: "Quelques jours/semaines",
      sentiment: "Très baissier",
      icon: <Frown className="w-6 h-6" />,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      textColor: "text-red-800"
    }
  ];

  const marketSentimentFactors = [
    {
      factor: "Actualités & Événements",
      impact: "Très élevé",
      timeframe: "Immédiat",
      examples: ["Adoptions institutionnelles", "Régulations", "Tweets influents", "Hacks d'exchanges"],
      mechanism: "Réactions émotionnelles instantanées",
      volatility: "+/- 5-15%",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      factor: "Évolution des Prix",
      impact: "Élevé", 
      timeframe: "Court-Moyen terme",
      examples: ["Breakouts techniques", "Support/résistance", "ATH/ATL", "Corrections majeures"],
      mechanism: "Boucles de feedback psychologiques",
      volatility: "+/- 3-10%",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      factor: "Volume de Trading",
      impact: "Modéré",
      timeframe: "Court terme", 
      examples: ["Volumes inhabituels", "Activité baleines", "Liquidations", "Accumulation"],
      mechanism: "Signaux d'intérêt et conviction",
      volatility: "+/- 2-8%",
      icon: <Activity className="w-6 h-6" />
    },
    {
      factor: "Métriques On-Chain",
      impact: "Modéré",
      timeframe: "Moyen terme",
      examples: ["Adresses actives", "HODLing behavior", "Exchange flows", "Hashrate"],
      mechanism: "Fondamentaux sous-jacents",
      volatility: "+/- 1-5%",
      icon: <Network className="w-6 h-6" />
    }
  ];

  const investorBehaviors = [
    {
      type: "Comportement Rationnel",
      profile: "Investisseurs institutionnels",
      decisionBasis: "Analyse fondamentale et technique approfondie",
      characteristics: [
        "Due diligence rigoureuse",
        "Gestion de risque structurée", 
        "Objectifs long terme",
        "Diversification planifiée"
      ],
      marketImpact: "Stabilisant",
      prevalence: "20-30%",
      example: "MicroStrategy - Analyse macro et stratégie treasury",
      strengths: ["Décisions éclairées", "Résilience volatilité"],
      weaknesses: ["Opportunities manquées", "Analyse paralysis"],
      color: "bg-blue-500",
      icon: <Brain className="w-8 h-8" />
    },
    {
      type: "Comportement Spéculatif",
      profile: "Traders actifs",
      decisionBasis: "Anticipations court terme et momentum",
      characteristics: [
        "Trading haute fréquence",
        "Effet de levier",
        "Chasing trends", 
        "Profits rapides"
      ],
      marketImpact: "Amplificateur volatilité",
      prevalence: "40-50%",
      example: "Day traders - Pump & dump cycles",
      strengths: ["Profits rapides possibles", "Liquidité marché"],
      weaknesses: ["Pertes importantes", "Stress psychologique"],
      color: "bg-purple-500",
      icon: <Zap className="w-8 h-8" />
    },
    {
      type: "Comportement Émotionnel",
      profile: "Investisseurs particuliers",
      decisionBasis: "Peur, cupidité et réactions instinctives",
      characteristics: [
        "FOMO/FUD driven",
        "Achat high, vente low",
        "Herd mentality",
        "Réactions excessives"
      ],
      marketImpact: "Créateur bulles/crashs",
      prevalence: "30-40%",
      example: "Retail 2017 - FOMO achat au sommet",
      strengths: ["Momentum trends", "Adoption virale"],
      weaknesses: ["Pertes systématiques", "Manipulation vulnérable"],
      color: "bg-red-500", 
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const managementStrategies = [
    {
      category: "Investisseurs Individuels",
      strategies: [
        {
          name: "Éducation Continue",
          description: "Apprentissage fondamentaux et cycles",
          implementation: "Lectures, cours, communautés",
          effectiveness: "Élevée long terme",
          cost: "Temps/effort",
          timeframe: "Permanent"
        },
        {
          name: "Dollar Cost Averaging",
          description: "Achats réguliers automatisés",
          implementation: "Investissement périodique fixe",
          effectiveness: "Très élevée",
          cost: "Faible",
          timeframe: "Multi-années"
        },
        {
          name: "Règles Prédéfinies",
          description: "Stop-loss et take-profit automatiques",
          implementation: "Orders conditionnels",
          effectiveness: "Modérée",
          cost: "Fees trading",
          timeframe: "Court-Moyen"
        }
      ],
      icon: <Users className="w-8 h-8" />,
      color: "bg-green-500"
    },
    {
      category: "Entreprises & Institutions", 
      strategies: [
        {
          name: "Analyse Fondamentale",
          description: "Due diligence approfondie",
          implementation: "Équipes recherche dédiées",
          effectiveness: "Très élevée",
          cost: "Élevé",
          timeframe: "Long terme"
        },
        {
          name: "Instruments Dérivés",
          description: "Hedging et protection portfolio",
          implementation: "Options, futures, swaps",
          effectiveness: "Élevée",
          cost: "Très élevé",
          timeframe: "Flexible"
        },
        {
          name: "Allocation Stratégique",
          description: "Pourcentage fixe du portfolio",
          implementation: "1-5% allocation",
          effectiveness: "Élevée",
          cost: "Modéré",
          timeframe: "Long terme"
        }
      ],
      icon: <Building className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      category: "Écosystème Bitcoin",
      strategies: [
        {
          name: "Éducation Publique",
          description: "Sensibilisation et formation",
          implementation: "Contenus, événements, médias",
          effectiveness: "Modérée long terme",
          cost: "Élevé",
          timeframe: "Permanent"
        },
        {
          name: "Infrastructure Stable",
          description: "Stabilité technique et sécurité",
          implementation: "Développement core, sécurité",
          effectiveness: "Très élevée",
          cost: "Très élevé", 
          timeframe: "Permanent"
        },
        {
          name: "Innovation Continue",
          description: "Nouvelles applications et services",
          implementation: "R&D, startups, Lightning",
          effectiveness: "Élevée",
          cost: "Élevé",
          timeframe: "Moyen-Long"
        }
      ],
      icon: <Network className="w-8 h-8" />,
      color: "bg-orange-500"
    }
  ];

  const historicalExamples = [
    {
      period: "Bulle 2017",
      trigger: "Découverte grand public + ICO mania",
      psychologicalPhases: [
        "Jan-Nov 2017: Optimisme croissant",
        "Nov-Déc 2017: Euphorie FOMO",
        "Jan-Mar 2018: Scepticisme émergent",
        "Avr-Nov 2018: Pessimisme profond",
        "Déc 2018: Panique capitulation"
      ],
      lessons: [
        "Médias amplifient les extrêmes",
        "FOMO conduit à des achats irrationnels",
        "Correction sévère suit euphorie",
        "Narratives changent rapidement"
      ],
      priceAction: "$1,000 → $20,000 → $3,200",
      duration: "24 mois cycle complet",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      period: "Adoption Institutionnelle 2020-2021",
      trigger: "MicroStrategy + Tesla + COVID stimulus",
      psychologicalPhases: [
        "Mar-Jul 2020: Recovery optimisme",
        "Août-Oct 2020: Adoption narrative",
        "Nov 2020-Avr 2021: Euphorie institutionnelle",
        "Mai-Jul 2021: Scepticisme régulation",
        "Août 2021+: Consolidation"
      ],
      lessons: [
        "Narratives institutionnelles puissantes",
        "Adoption progressive vs spéculation",
        "Régulation crée incertitude",
        "Maturité graduelle du marché"
      ],
      priceAction: "$3,800 → $69,000 → $28,800",
      duration: "18 mois cycle",
      icon: <Building className="w-6 h-6" />
    },
    {
      period: "Bear Market 2022",
      trigger: "Fed hawkish + Luna/FTX collapse",
      psychologicalPhases: [
        "Jan-Mai 2022: Scepticisme macro",
        "Jun-Jul 2022: Pessimisme Luna crash",
        "Aug-Oct 2022: Stabilisation relative",
        "Nov 2022: Panique FTX",
        "Déc 2022+: Capitulation/Recovery"
      ],
      lessons: [
        "Macro-économie influence Bitcoin",
        "Contagion crypto spécifique",
        "Qualité vs spéculation",
        "Self-custody importance"
      ],
      priceAction: "$48,000 → $15,500 → $43,000",
      duration: "15 mois cycle",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const sentimentIndicators = [
    {
      indicator: "Fear & Greed Index",
      description: "Indice composite sentiment marché",
      range: "0 (Fear extrême) - 100 (Greed extrême)",
      signals: {
        extremeFear: "Opportunité d'achat potentielle",
        extremeGreed: "Risque de correction élevé"
      },
      components: ["Volatilité", "Volume", "Social media", "Surveys", "Dominance", "Trends"],
      useCase: "Timing contrarian",
      icon: <Thermometer className="w-6 h-6" />
    },
    {
      indicator: "Social Media Sentiment",
      description: "Analyse sentiment réseaux sociaux",
      range: "Très négatif - Très positif",
      signals: {
        massivePositivity: "Sommet potentiel proche",
        massiveNegativity: "Fond potentiel proche"
      },
      components: ["Twitter mentions", "Reddit posts", "Google trends", "News sentiment"],
      useCase: "Early warning système",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      indicator: "On-Chain Behavior",
      description: "Actions réelles utilisateurs blockchain",
      range: "Accumulation - Distribution",
      signals: {
        longTermHolding: "Confiance fondamentale",
        massiveSelling: "Panique ou profit-taking"
      },
      components: ["HODL waves", "Exchange flows", "Whale activity", "Address activity"],
      useCase: "Confirmation tendances",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const resources = [
    {
      title: "Fear & Greed Index Dashboard",
      type: "Indicateur sentiment temps réel",
      description: "Suivi quotidien indice peur/cupidité avec historique",
      icon: <Gauge className="w-5 h-5" />,
      url: "https://alternative.me/crypto/fear-and-greed-index/"
    },
    {
      title: "Sentiment Analysis Tools",
      type: "Analyse comportementale",
      description: "Outils analyse sentiment réseaux sociaux et médias",
      icon: <Eye className="w-5 h-5" />,
      url: "https://santiment.net/"
    },
    {
      title: "Psychology Trading Simulator",
      type: "Formation pratique",
      description: "Simulation trading avec biais psychologiques intégrés",
      icon: <Brain className="w-5 h-5" />,
      url: "https://www.tradingpsychology.com/"
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
          className="text-muted-foreground hover:text-foreground p-0 h-auto"
        >
          Orandys
        </Button>
        <span>/</span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBackToModule}
          className="text-muted-foreground hover:text-foreground p-0 h-auto"
        >
          Économie & perception
        </Button>
        <span>/</span>
        <span className="text-foreground">Psychologie des marchés</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Brain className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Psychologie des marchés</h1>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 w-fit">
                Leçon 3/3
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Cycles psychologiques, sentiment de marché et comportements investisseurs
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Niveau intermédiaire</span>
          </div>
          <Badge variant="outline">
            Module 4 - Économie
          </Badge>
        </div>
      </div>

      {/* Introduction */}
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-purple-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              La psychologie des marchés joue un rôle crucial dans la dynamique des prix de Bitcoin. 
              Les cycles psychologiques, le sentiment de marché et les comportements des investisseurs 
              influencent considérablement les fluctuations de prix et l'adoption de Bitcoin.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ce chapitre explore en détail ces concepts psychologiques, leurs implications concrètes 
              et les stratégies éprouvées pour les comprendre, les anticiper et les transformer en 
              avantages stratégiques plutôt qu'en obstacles à la prise de décision rationnelle.
            </p>
          </div>
        </div>
      </Card>

      {/* Psychological Cycles */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-purple-900">Cycles Psychologiques</h2>
        <p className="text-purple-800 mb-8">
          Les cycles psychologiques sont des modèles récurrents de comportement des investisseurs qui 
          créent des patterns prévisibles dans l'évolution des prix et du sentiment de marché.
        </p>
        
        <div className="space-y-6">
          {psychologicalCycles.map((cycle, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${cycle.color} text-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                  {cycle.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-xl">{cycle.phase}</h3>
                    <Badge variant="outline" className="text-xs">
                      {cycle.duration}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{cycle.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className={`${cycle.bgColor} rounded-lg p-4`}>
                      <h4 className={`font-medium ${cycle.textColor} mb-2`}>Caractéristiques :</h4>
                      <ul className={`${cycle.textColor} text-sm space-y-1`}>
                        {cycle.characteristics.map((char, i) => (
                          <li key={i}>• {char}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Exemple historique :</h4>
                      <p className="text-gray-700 text-sm">{cycle.example}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {cycle.sentiment}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-indigo-100 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Repeat className="w-5 h-5 text-indigo-600" />
            <h4 className="font-medium text-indigo-800">Pattern cyclique :</h4>
          </div>
          <p className="text-indigo-700 text-sm">
            Ces phases se succèdent généralement dans l'ordre, mais peuvent varier en durée et intensité. 
            La compréhension de ces cycles permet d'adopter des stratégies contrariennes efficaces.
          </p>
        </div>
      </Card>

      {/* Market Sentiment */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Sentiment de Marché</h2>
        <p className="text-muted-foreground mb-8">
          Le sentiment de marché mesure l'attitude collective des investisseurs et influence directement 
          les mouvements de prix à court terme.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {marketSentimentFactors.map((factor, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-orange-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {factor.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{factor.factor}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-blue-50 rounded p-2">
                      <h4 className="text-xs font-medium text-blue-800 mb-1">Impact :</h4>
                      <p className="text-xs text-blue-700">{factor.impact}</p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <h4 className="text-xs font-medium text-green-800 mb-1">Durée :</h4>
                      <p className="text-xs text-green-700">{factor.timeframe}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-purple-800 mb-2">Mécanisme :</h4>
                      <p className="text-sm text-purple-700">{factor.mechanism}</p>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-red-800 mb-2">Volatilité typique :</h4>
                      <p className="text-sm text-red-700 font-mono">{factor.volatility}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-2">Exemples :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {factor.examples.map((example, i) => (
                          <li key={i}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Sentiment Indicators */}
        <h3 className="text-lg font-semibold mb-4">Indicateurs de Sentiment</h3>
        <div className="space-y-4">
          {sentimentIndicators.map((indicator, index) => (
            <Card key={index} className="p-4 bg-gray-50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {indicator.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{indicator.indicator}</h4>
                    <Badge variant="outline" className="text-xs">{indicator.useCase}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{indicator.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white rounded p-3">
                      <h5 className="text-xs font-medium text-blue-800 mb-1">Range :</h5>
                      <p className="text-xs text-blue-700">{indicator.range}</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <h5 className="text-xs font-medium text-green-800 mb-1">Signaux :</h5>
                      <p className="text-xs text-green-700">{Object.values(indicator.signals).join(" / ")}</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <h5 className="text-xs font-medium text-purple-800 mb-1">Composants :</h5>
                      <p className="text-xs text-purple-700">{indicator.components.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Investor Behaviors */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Comportements des Investisseurs</h2>
        <p className="text-blue-800 mb-8">
          Les différents types de comportements d'investissement créent la dynamique complexe des marchés Bitcoin.
        </p>
        
        <div className="space-y-6">
          {investorBehaviors.map((behavior, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 ${behavior.color} text-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                  {behavior.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-xl">{behavior.type}</h3>
                    <Badge variant="secondary">{behavior.prevalence}</Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-muted-foreground mb-3">{behavior.decisionBasis}</p>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-blue-800 mb-2">Profile typique :</h4>
                        <p className="text-sm text-blue-700">{behavior.profile}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <h4 className="text-sm font-medium mb-2">Caractéristiques :</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {behavior.characteristics.map((char, i) => (
                            <li key={i}>• {char}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant={behavior.marketImpact.includes("Stabilisant") ? "secondary" : 
                                       behavior.marketImpact.includes("Amplificateur") ? "destructive" : "outline"}>
                          {behavior.marketImpact}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-green-50 rounded p-3">
                      <h4 className="text-xs font-medium text-green-800 mb-1">Forces :</h4>
                      <ul className="text-xs text-green-700 space-y-1">
                        {behavior.strengths.map((strength, i) => (
                          <li key={i}>• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 rounded p-3">
                      <h4 className="text-xs font-medium text-red-800 mb-1">Faiblesses :</h4>
                      <ul className="text-xs text-red-700 space-y-1">
                        {behavior.weaknesses.map((weakness, i) => (
                          <li key={i}>• {weakness}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 rounded p-3">
                      <h4 className="text-xs font-medium text-purple-800 mb-1">Exemple :</h4>
                      <p className="text-xs text-purple-700">{behavior.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Management Strategies */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Stratégies de Gestion Psychologique</h2>
        <p className="text-muted-foreground mb-8">
          Approches structurées pour gérer l'impact de la psychologie de marché selon le profil d'acteur.
        </p>
        
        <div className="space-y-8">
          {managementStrategies.map((category, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-indigo-400">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.color} text-white rounded-lg flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.strategies.map((strategy, stratIndex) => (
                  <Card key={stratIndex} className="p-4 bg-gray-50">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-500 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-medium">
                        {stratIndex + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-2">{strategy.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{strategy.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Implémentation:</span>
                              <span className="font-medium">{strategy.implementation}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Efficacité:</span>
                              <span className="font-medium">{strategy.effectiveness}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Coût:</span>
                              <span className="font-medium">{strategy.cost}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Horizon:</span>
                              <span className="font-medium">{strategy.timeframe}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Historical Examples */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">Études de Cas Historiques</h2>
        <p className="text-gray-800 mb-8">
          Analyse des cycles psychologiques majeurs pour comprendre les patterns récurrents.
        </p>
        
        <div className="space-y-6">
          {historicalExamples.map((example, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {example.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-xl">{example.period}</h3>
                    <Badge variant="outline">{example.duration}</Badge>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-medium text-red-800 mb-2">Déclencheur :</h4>
                        <p className="text-red-700 text-sm">{example.trigger}</p>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-800 mb-2">Évolution prix :</h4>
                        <p className="text-blue-700 text-sm font-mono">{example.priceAction}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-medium text-purple-800 mb-2">Phases psychologiques :</h4>
                        <ul className="text-purple-700 text-sm space-y-1">
                          {example.psychologicalPhases.map((phase, i) => (
                            <li key={i}>• {phase}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-medium text-green-800 mb-2">Leçons apprises :</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          {example.lessons.map((lesson, i) => (
                            <li key={i}>• {lesson}</li>
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
              La psychologie des marchés est un facteur déterminant dans la dynamique des prix Bitcoin. 
              La compréhension des cycles psychologiques, du sentiment de marché et des comportements 
              d'investisseurs permet de prendre des décisions plus éclairées et rationnelles.
            </p>
            <p className="text-emerald-800 leading-relaxed">
              Les stratégies de gestion psychologique adaptées à chaque profil d'acteur transforment 
              ces défis comportementaux en avantages compétitifs durables. L'éducation continue et 
              la discipline méthodologique restent les meilleures protections contre les biais cognitifs.
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
                <li>1. Comment identifiez-vous votre position dans le cycle psychologique actuel ?</li>
                <li>2. Quels biais comportementaux influencent vos décisions d'investissement ?</li>
                <li>3. Comment les médias influencent-ils le sentiment de marché ?</li>
                <li>4. Quelle stratégie psychologique convient le mieux à votre profil ?</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-3">Activités pratiques</h3>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• Analyser un cycle psychologique historique en détail</li>
                <li>• Créer un journal de trading avec émotions</li>
                <li>• Tester des stratégies anti-biais sur simulateur</li>
                <li>• Débat sur efficacité des indicateurs sentiment</li>
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
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
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
          <p>• Ammous, S. (2018). <em>The Bitcoin Standard: The Decentralized Alternative to Central Banking</em></p>
          <p>• Lewis, P. (2019). <em>Gradually, Then Suddenly: The Impact of Bitcoin on Global Finance</em></p>
          <p>• Kahneman, D. (2011). <em>Thinking, Fast and Slow</em></p>
          <p>• Shiller, R. (2000). <em>Irrational Exuberance</em></p>
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
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 w-full sm:w-auto"
          >
            {nextLessonInfo.isNextModule ? `${nextLessonInfo.moduleTitle}` : `Leçon suivante`}
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}