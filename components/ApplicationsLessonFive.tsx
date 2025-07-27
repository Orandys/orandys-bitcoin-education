import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Users,  
  Lightbulb,
  Building,
  Cpu,
  Shield,
  DollarSign,
  Rocket,
  ExternalLink,
  BarChart3,
  Scale,
  Award,
  Heart,
  Star,
  Gift,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "./ui/logo";

interface ApplicationsLessonFiveProps {
  onBackToModule: () => void;
  onHomeClick: () => void;
  onNextLesson?: () => void;
  nextLessonInfo?: {
    title: string;
    moduleTitle?: string;
    isNextModule?: boolean;
  };
  onSectionChange?: (sectionId: string) => void;
}

export function ApplicationsLessonFive({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: ApplicationsLessonFiveProps) {
  const currentTrends = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Adoption Institutionnelle",
      description: "Intégration par les entreprises et institutions financières",
      examples: ["Tesla, MicroStrategy", "ETF Bitcoin", "Banques traditionnelles"],
      color: "bg-blue-50 border-blue-200",
      impact: "Légitimation et stabilisation"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Développement Technologique",
      description: "Améliorations continues du protocole et de l'écosystème",
      examples: ["Lightning Network", "Taproot upgrade", "Layer 2 solutions"],
      color: "bg-purple-50 border-purple-200",
      impact: "Scalabilité et fonctionnalités"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Adoption Utilisateurs",
      description: "Croissance du nombre d'utilisateurs et de cas d'usage",
      examples: ["Wallets mobiles", "Paiements marchands", "Remittances"],
      color: "bg-green-50 border-green-200",
      impact: "Utilité et acceptation"
    }
  ];

  const futureChallenges = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Régulation et Conformité",
      description: "Encadrement juridique et compliance",
      details: [
        "Développement de cadres réglementaires clairs",
        "Exigences KYC/AML pour les exchanges",
        "Taxation et déclarations obligatoires"
      ],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Scalabilité et Frais",
      description: "Capacité de traitement et coûts",
      details: [
        "Limitation à 7 transactions/seconde",
        "Congestion réseau et frais élevés",
        "Solutions Layer 2 en développement"
      ],
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité et Attaques",
      description: "Résistance aux menaces futures",
      details: [
        "Évolution des menaces cryptographiques",
        "Attaques 51% théoriques",
        "Sécurité des wallets et exchanges"
      ],
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  const opportunities = [
    {
      category: "Intégration Financière",
      icon: <DollarSign className="w-8 h-8" />,
      color: "bg-emerald-500",
      items: [
        {
          title: "Solutions de Paiement",
          description: "Faciliter l'utilisation comme moyen d'échange",
          example: "Cartes Bitcoin, terminaux de paiement"
        },
        {
          title: "Produits d'Investissement",
          description: "Intégration dans les portefeuilles traditionnels",
          example: "ETF, fonds d'investissement, assurance-vie"
        },
        {
          title: "Services Bancaires",
          description: "Intégration dans les services financiers",
          example: "Prêts garantis par Bitcoin, comptes yield"
        }
      ]
    },
    {
      category: "Innovation Technologique", 
      icon: <Rocket className="w-8 h-8" />,
      color: "bg-blue-500",
      items: [
        {
          title: "Lightning Network",
          description: "Paiements instantanés et micro-frais",
          example: "Streaming payments, microtransactions"
        },
        {
          title: "Smart Contracts",
          description: "Contrats intelligents sur Bitcoin",
          example: "RGB, Taro, RSK sidechain"
        },
        {
          title: "Privacy Solutions",
          description: "Amélioration de la confidentialité",
          example: "CoinJoin, Schnorr signatures"
        }
      ]
    }
  ];

  const scenarios = [
    {
      type: "Optimiste",
      probability: "30%",
      color: "bg-green-500",
      description: "Adoption massive et développement optimal",
      characteristics: [
        "Bitcoin devient une réserve de valeur globale",
        "Adoption institutionnelle généralisée",
        "Régulation claire et favorable",
        "Solutions de scalabilité déployées avec succès"
      ],
      timeline: "2030-2035",
      priceTarget: "> 1M$ par BTC"
    },
    {
      type: "Réaliste",
      probability: "50%",
      color: "bg-blue-500", 
      description: "Croissance modérée avec défis surmontés",
      characteristics: [
        "Adoption institutionnelle continue mais progressive",
        "Coexistence avec monnaies traditionnelles",
        "Régulation équilibrée mais stricte",
        "Améliations techniques graduelles"
      ],
      timeline: "2025-2030",
      priceTarget: "100k$ - 500k$ par BTC"
    },
    {
      type: "Pessimiste",
      probability: "20%",
      color: "bg-red-500",
      description: "Obstacles majeurs et adoption limitée",
      characteristics: [
        "Régulations restrictives multiples",
        "Problèmes de scalabilité non résolus",
        "Concurrence des CBDCs",
        "Volatilité persistante"
      ],
      timeline: "2025-2028",
      priceTarget: "10k$ - 50k$ par BTC"
    }
  ];

  const futureInnovations = [
    {
      innovation: "Quantum Resistance",
      description: "Résistance aux ordinateurs quantiques",
      timeline: "2025-2030",
      impact: "Sécurité long-terme assurée"
    },
    {
      innovation: "Cross-Chain Interoperability",
      description: "Intéropérabilité avec autres blockchains",
      timeline: "2025-2027",
      impact: "Écosystème DeFi élargi"
    },
    {
      innovation: "Privacy by Default",
      description: "Confidentialité native améliorée",
      timeline: "2025-2027",
      impact: "Acceptation mainstream"
    },
    {
      innovation: "Green Mining",
      description: "Minage 100% énergies renouvelables",
      timeline: "2025-2030",
      impact: "Acceptabilité environnementale"
    }
  ];

  const keyMetrics = [
    {
      metric: "Adoption Institutionnelle",
      current: "~5% des entreprises Fortune 500",
      target2030: "25-50% des entreprises",
      indicator: "Nombre d'entreprises avec Bitcoin au bilan"
    },
    {
      metric: "Volume Transactions",
      current: "~300,000 tx/jour",
      target2030: "1-10M tx/jour (avec Lightning)",
      indicator: "Transactions quotidiennes combinées"
    },
    {
      metric: "Capitalisation",
      current: "~800B$ (2025)",
      target2030: "5-15T$ (scénario réaliste)",
      indicator: "Market cap vs or et obligations"
    }
  ];

  const resources = [
    {
      title: "Plan B - Stock-to-Flow Model",
      type: "Analyse",
      duration: "15 min",
      description: "Modèle prédictif basé sur la rareté de Bitcoin",
      icon: <BarChart3 className="w-5 h-5" />,
      url: "https://100trillionusd.github.io/"
    },
    {
      title: "Hal Finney - Running Bitcoin",
      type: "Article historique",
      duration: "5 min", 
      description: "Vision précoce du futur de Bitcoin (2009)",
      icon: <FileText className="w-5 h-5" />,
      url: "https://bitcointalk.org/index.php?topic=155054.0"
    },
    {
      title: "Lightning Network Roadmap",
      type: "Documentation technique",
      duration: "20 min",
      description: "Développements futurs du Lightning Network",
      icon: <Rocket className="w-5 h-5" />,
      url: "https://github.com/lightningnetwork/lightning-rfc"
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
          Applications & géopolitique
        </Button>
        <span>/</span>
        <span className="text-foreground">Le futur de Bitcoin</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Rocket className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Le futur de Bitcoin</h1>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 w-fit">
                Leçon 5/5
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Tendances, défis et scénarios d'évolution pour Bitcoin
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>30 min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Niveau avancé</span>
          </div>
          <Badge variant="outline">
            Module 5 - Applications
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
              Le futur de Bitcoin est un sujet de débat et de spéculation intense. Ce chapitre explore 
              en détail les tendances actuelles, les défis à venir et les opportunités pour Bitcoin, 
              ainsi que les scénarios possibles pour son évolution future.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre ces dynamiques est essentiel pour anticiper l'évolution de Bitcoin et 
              prendre des décisions éclairées concernant son adoption, son investissement et son 
              intégration dans l'économie mondiale.
            </p>
          </div>
        </div>
      </Card>

      {/* Tendances Actuelles */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Tendances Actuelles</h2>
        <p className="text-muted-foreground mb-8">
          Trois tendances majeures façonnent actuellement l'évolution de Bitcoin et 
          déterminent son adoption future.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTrends.map((trend, index) => (
            <Card key={index} className={`p-6 border-2 ${trend.color}`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {trend.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{trend.title}</h3>
                <p className="text-muted-foreground mb-4">{trend.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-medium mb-2">Exemples concrets :</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {trend.examples.map((example, idx) => (
                    <li key={idx}>• {example}</li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="text-xs">
                  Impact: {trend.impact}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Défis à Venir */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Défis à Venir</h2>
        <p className="text-muted-foreground mb-8">
          Bitcoin fait face à plusieurs défis majeurs qui détermineront sa capacité 
          à atteindre son potentiel maximal.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureChallenges.map((challenge, index) => (
            <Card key={index} className={`p-6 border-2 ${challenge.color}`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {challenge.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground mb-4">{challenge.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium mb-2">Aspects clés :</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {challenge.details.map((detail, idx) => (
                    <li key={idx}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Opportunités */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Opportunités Majeures</h2>
        <p className="text-muted-foreground mb-8">
          Malgré les défis, Bitcoin présente des opportunités considérables 
          d'innovation et d'adoption dans plusieurs domaines.
        </p>
        
        <div className="space-y-8">
          {opportunities.map((opportunity, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${opportunity.color} text-white rounded-lg flex items-center justify-center`}>
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-semibold">{opportunity.category}</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {opportunity.items.map((item, idx) => (
                  <Card key={idx} className="p-6">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="text-xs text-blue-600 bg-blue-50 rounded-lg p-2">
                      <strong>Exemple :</strong> {item.example}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Scénarios d'Évolution */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-indigo-900">Scénarios d'Évolution</h2>
        <p className="text-indigo-800 mb-8">
          Trois scénarios principaux se dessinent pour l'évolution de Bitcoin dans les prochaines années.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${scenario.color} text-white rounded-lg flex items-center justify-center font-semibold`}>
                  {scenario.probability}
                </div>
                <div>
                  <h3 className="font-semibold">{scenario.type}</h3>
                  <Badge variant="outline" className="text-xs mt-1">
                    {scenario.timeline}
                  </Badge>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">{scenario.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-2">Caractéristiques :</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {scenario.characteristics.map((char, idx) => (
                      <li key={idx}>• {char}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600">
                    <strong>Objectif prix :</strong> {scenario.priceTarget}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Innovations Futures */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Innovations Futures</h2>
        <p className="text-muted-foreground mb-8">
          Les développements technologiques attendus qui façonneront le futur de Bitcoin.
        </p>
        
        <div className="space-y-4">
          {futureInnovations.map((innovation, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                {index < futureInnovations.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-purple-300 to-indigo-300 mt-2"></div>
                )}
              </div>
              <Card className="flex-1 p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <h3 className="font-semibold">{innovation.innovation}</h3>
                  <Badge variant="outline" className="text-xs w-fit">
                    {innovation.timeline}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{innovation.description}</p>
                <div className="text-xs">
                  <strong className="text-green-600">Impact :</strong> {innovation.impact}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Card>

      {/* Métriques Clés */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Métriques d'Évolution</h2>
        <p className="text-muted-foreground mb-8">
          Indicateurs clés pour mesurer l'évolution de Bitcoin vers ses objectifs futurs.
        </p>
        
        <div className="space-y-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{metric.metric}</h3>
                  <p className="text-sm text-muted-foreground">{metric.indicator}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-xs text-blue-600 font-medium">Actuel</div>
                    <div className="text-sm font-semibold">{metric.current}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-xs text-green-600 font-medium">Objectif 2030</div>
                    <div className="text-sm font-semibold">{metric.target2030}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Key Insights */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <div className="flex items-start gap-4">
          <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-900">Points Clés à Retenir</h3>
            <ul className="space-y-3 text-green-800">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>L'<strong>adoption institutionnelle</strong> est le facteur clé de légitimation de Bitcoin</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>innovations techniques</strong> (Lightning, etc.) détermineront la scalabilité</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La <strong>régulation équilibrée</strong> est cruciale pour l'adoption mainstream</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Le <strong>scénario réaliste</strong> combine croissance modérée et défis surmontés</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Explorez les visions et analyses du futur de Bitcoin par les experts.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  {resource.icon}
                </div>
                <div>
                  <Badge variant="secondary" className="text-xs mb-1">
                    {resource.type}
                  </Badge>
                  <div className="text-xs text-muted-foreground">{resource.duration}</div>
                </div>
              </div>
              <h3 className="font-semibold mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full"
                onClick={() => window.open(resource.url, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Consulter
              </Button>
            </Card>
          ))}
        </div>
      </Card>

      {/* Félicitations - Fin de Formation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 border-2 border-orange-200 shadow-xl">
          <div className="text-center space-y-8">
            {/* Badge de Réussite */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                    <Logo size="large" />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Message de Félicitations */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                🎉 Félicitations !
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Vous venez de terminer avec succès la formation complète <strong>Orandys</strong> sur Bitcoin !
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Vous maîtrisez maintenant les fondamentaux monétaires, les aspects techniques, 
                la sécurité, l'économie et les applications géopolitiques de Bitcoin.
              </p>
            </motion.div>

            {/* Badge Earned */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl font-bold text-gray-800">Badge obtenu</h3>
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-orange-700">Expert Bitcoin Orandys</span>
                    <Star className="w-5 h-5 text-orange-500" />
                  </div>
                  <p className="text-sm text-orange-600">
                    Formation complète • 6 modules • 23 leçons
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Statistiques de Réussite */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">6</div>
                  <div className="text-sm text-gray-600">Modules</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">23</div>
                  <div className="text-sm text-gray-600">Leçons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">~12h</div>
                  <div className="text-sm text-gray-600">Contenu</div>
                </div>
              </div>
            </motion.div>

            {/* Section de Soutien */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="space-y-6 pt-8 border-t border-orange-200"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  Soutenez le projet Orandys
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Cette formation est gratuite et accessible à tous. Si elle vous a été utile, 
                  vous pouvez nous soutenir pour continuer à développer du contenu éducatif de qualité.
                </p>
              </div>

              <div className="flex justify-center">
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-12 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://donate.orandys.com', '_blank')}
                >
                  <Gift className="w-6 h-6 mr-3" />
                  Faire un don
                </Button>
              </div>

              <div className="text-sm text-gray-500 space-y-2">
                <p>
                  💡 <strong>Partagez vos connaissances :</strong> Recommandez cette formation à vos proches
                </p>
                <p>
                  🚀 <strong>Restez connecté :</strong> Suivez nos prochains projets et modules avancés
                </p>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button variant="outline" onClick={onBackToModule} className="flex items-center gap-2 w-full sm:w-auto">
          <ArrowLeft className="w-4 h-4" />
          Retour au module
        </Button>
        
        {/* Message de fin de formation si pas de leçon suivante */}
        {!nextLessonInfo && (
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-4 border border-orange-200">
              <p className="font-semibold text-orange-800 mb-1">
                🎓 Formation terminée !
              </p>
              <p className="text-sm text-orange-600">
                Vous avez complété tous les modules Orandys
              </p>
            </div>
          </div>
        )}
        
        {nextLessonInfo && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              {nextLessonInfo.isNextModule ? "Module suivant" : "Prochaine leçon"}
            </p>
            <p className="font-medium">{nextLessonInfo.title}</p>
            {nextLessonInfo.moduleTitle && (
              <p className="text-xs text-muted-foreground">{nextLessonInfo.moduleTitle}</p>
            )}
          </div>
        )}
        
        {onNextLesson && nextLessonInfo ? (
          <Button 
            onClick={onNextLesson}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 w-full sm:w-auto"
          >
            Continuer
            <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button 
            variant="outline"
            onClick={onHomeClick}
            className="flex items-center gap-2 w-full sm:w-auto border-orange-300 text-orange-700 hover:bg-orange-50"
          >
            <Trophy className="w-4 h-4" />
            Retour à l'accueil
          </Button>
        )}
      </div>
    </div>
  );
}
