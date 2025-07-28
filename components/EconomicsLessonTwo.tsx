import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Users, 
  Lightbulb,
  ExternalLink,
  TrendingDown,
  Activity,
  AlertTriangle,
  BarChart3,
  Calculator,
  Timer,
  Building,
  Wallet,
  CreditCard,
  Eye
} from "lucide-react";

interface EconomicsLessonTwoProps {
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

export function EconomicsLessonTwo({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange: _onSectionChange }: EconomicsLessonTwoProps) {
  const volatilityCauses = [
    {
      cause: "Marché jeune et peu liquide",
      mechanism: "Faible volume comparé marchés traditionnels",
      impact: "Fluctuations amplifiées",
      severity: "Élevé",
      timeframe: "Court terme",
      example: "Ordre 100 BTC peut bouger prix 2-5%",
      icon: <Timer className="w-6 h-6" />
    },
    {
      cause: "Spéculation massive",
      mechanism: "Trading emotionnel et effet levier",
      impact: "Bulles et crashs",
      severity: "Très élevé",
      timeframe: "Cycles 2-4 ans",
      example: "Bulle 2017: +2000% puis -85%",
      icon: <Activity className="w-6 h-6" />
    },
    {
      cause: "News et événements",
      mechanism: "Réactions émotionnelles instantanées",
      impact: "Volatilité événementielle",
      severity: "Variable",
      timeframe: "Minutes à jours",
      example: "Tweet Elon Musk: ±10% en heures",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      cause: "Manipulation de marché",
      mechanism: "Ordres artificiels et wash trading",
      impact: "Distorsions temporaires",
      severity: "Modéré",
      timeframe: "Ponctuel",
      example: "Pump & dump altcoins",
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const volatilityMetrics = [
    {
      period: "2017",
      avgVolatility: "4.5%",
      maxDrawdown: "-85%",
      sharpeRatio: "0.8",
      description: "Bulle spéculative majeure",
      priceRange: "$1,000 - $20,000",
      context: "Découverte grand public"
    },
    {
      period: "2018-2019",
      avgVolatility: "3.8%",
      maxDrawdown: "-50%",
      sharpeRatio: "-0.2",
      description: "Hiver crypto prolongé",
      priceRange: "$3,200 - $13,800",
      context: "Consolidation et développement"
    },
    {
      period: "2020-2021",
      avgVolatility: "4.2%",
      maxDrawdown: "-55%",
      sharpeRatio: "1.2",
      description: "Adoption institutionnelle",
      priceRange: "$3,800 - $69,000",
      context: "ETF et entreprises"
    },
    {
      period: "2022-2023",
      avgVolatility: "3.1%",
      maxDrawdown: "-77%",
      sharpeRatio: "-0.1",
      description: "Récession et régulation",
      priceRange: "$15,500 - $48,000",
      context: "Maturité relative"
    },
    {
      period: "2024",
      avgVolatility: "2.8%",
      maxDrawdown: "-25%",
      sharpeRatio: "1.8",
      description: "ETF approuvés",
      priceRange: "$38,000 - $73,000",
      context: "Institutionnalisation"
    }
  ];

  const userImplications = [
    {
      userType: "Utilisateur quotidien",
      risks: ["Perte pouvoir achat", "Difficulté budgeting", "Réticence marchands"],
      opportunities: ["Gains fortuits", "Hedge inflation", "Innovation payments"],
      strategies: ["Conversion auto fiat", "Amounts limités", "Services stabilisés"],
      riskLevel: "Élevé",
      timeHorizon: "Immédiat",
      icon: <CreditCard className="w-8 h-8" />,
      color: "bg-red-500"
    },
    {
      userType: "Investisseur long terme",
      risks: ["Drawdowns prolongés", "Test psychologique", "Timing mauvais"],
      opportunities: ["Rendements élevés", "Diversification", "Store of value"],
      strategies: ["DCA", "HODL", "Ignore volatilité"],
      riskLevel: "Modéré",
      timeHorizon: "5-10 ans",
      icon: <Wallet className="w-8 h-8" />,
      color: "bg-orange-500"
    },
    {
      userType: "Trader actif",
      risks: ["Pertes rapides", "Stress émotionnel", "Overtrading"],
      opportunities: ["Profits volatilité", "Arbitrage", "Momentum trading"],
      strategies: ["Stop loss", "Position sizing", "Risk management"],
      riskLevel: "Très élevé",
      timeHorizon: "Minutes-Jours",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-purple-500"
    },
    {
      userType: "Entreprise Bitcoin",
      risks: ["Cash flow volatil", "Comptabilité complexe", "Clients réticents"],
      opportunities: ["Réserve treasury", "Différenciation", "Cost savings"],
      strategies: ["Hedging", "Conversion partielle", "Education clients"],
      riskLevel: "Modéré-Élevé",
      timeHorizon: "Trimestriel",
      icon: <Building className="w-8 h-8" />,
      color: "bg-blue-500"
    }
  ];

  const managementStrategies = [
    {
      strategy: "Diversification portfolio",
      target: "Tous investisseurs",
      mechanism: "Répartition multi-actifs",
      effectiveness: "Élevée",
      cost: "Faible",
      implementation: "5-20% allocation Bitcoin",
      timeframe: "Long terme",
      pros: ["Réduction risque global", "Corrélations faibles"],
      cons: ["Dilution gains potentiels", "Complexité gestion"]
    },
    {
      strategy: "Dollar Cost Averaging",
      target: "Investisseurs réguliers",
      mechanism: "Achats périodiques fixes",
      effectiveness: "Très élevée",
      cost: "Faible",
      implementation: "Automatisation hebdo/mensuelle",
      timeframe: "Multi-années",
      pros: ["Lisse volatilité", "Discipline forcée", "Psychologie saine"],
      cons: ["Pas optimal timing", "Gains moyennés"]
    },
    {
      strategy: "Instruments dérivés",
      target: "Investisseurs sophistiqués",
      mechanism: "Options, futures, hedging",
      effectiveness: "Variable",
      cost: "Élevé",
      implementation: "Contrats professionnels",
      timeframe: "Court-Moyen terme",
      pros: ["Protection ciblée", "Leverage contrôlé"],
      cons: ["Complexité", "Coûts élevés", "Risque contrepartie"]
    },
    {
      strategy: "Stablecoins integration",
      target: "Utilisateurs quotidiens",
      mechanism: "Conversion automatique",
      effectiveness: "Élevée usage",
      cost: "Modéré",
      implementation: "Wallets et services intégrés",
      timeframe: "Immédiat",
      pros: ["Stabilité transactions", "UX améliorée"],
      cons: ["Centralisation", "Risques techniques"]
    }
  ];

  const historicalCases = [
    {
      period: "Bulle 2017",
      trigger: "FOMO médiatique + ICO mania",
      peak: "$19,783 (Déc 2017)",
      trough: "$3,122 (Déc 2018)",
      volatility: "Extrême (8-15% quotidien)",
      duration: "12 mois montée + 12 mois chute",
      lessons: ["Spéculation insoutenable", "Importance fondamentaux", "Cycles psychologiques"],
      winners: ["Early adopters", "Traders expérimentés", "Projets sérieux"],
      losers: ["FOMO investors", "Leveraged traders", "ICO scams"]
    },
    {
      period: "COVID Crash 2020",
      trigger: "Panique liquidité globale",
      peak: "$10,500 (Fév 2020)",
      trough: "$3,850 (Mar 2020)",
      volatility: "Brutale (-50% en 24h)",
      duration: "2 semaines",
      lessons: ["Corrélation crise", "Liquidité primordiale", "Opportunities stress"],
      winners: ["Cash holders", "Quick buyers", "Institutional funds"],
      losers: ["Leveraged positions", "Panic sellers", "Forced liquidations"]
    },
    {
      period: "Adoption 2020-2021",
      trigger: "MicroStrategy + Tesla + institutions",
      peak: "$68,789 (Nov 2021)",
      trough: "$28,800 (Juil 2021)",
      volatility: "Élevée mais structurée",
      duration: "18 mois cycle",
      lessons: ["Narratives driving prices", "Institutional impact", "Sustainability questions"],
      winners: ["Institutional early", "HODLers patients", "Infrastructure plays"],
      losers: ["Top buyers", "Emotional traders", "Altcoin maximalists"]
    },
    {
      period: "Hiver 2022",
      trigger: "Fed hawkish + Luna/FTX collapse",
      peak: "$48,240 (Mar 2022)",
      trough: "$15,476 (Nov 2022)",
      volatility: "Persistante (-5% moyenne)",
      duration: "9 mois baisse",
      lessons: ["Macro sensitivity", "Contagion risks", "Quality vs speculation"],
      winners: ["Bear market builders", "Accumulation strategies", "Self-custody advocates"],
      losers: ["CeFi depositors", "Leverage users", "Speculative projects"]
    }
  ];

  const futureOutlook = [
    {
      factor: "Adoption institutionnelle",
      trend: "Croissance continue",
      impact: "Réduction volatilité",
      timeline: "2024-2030",
      confidence: "Élevée",
      evidence: "ETF approval, corporate treasuries"
    },
    {
      factor: "Régulation clarifiée",
      trend: "Frameworks stabilisés",
      impact: "Moins d'incertitude",
      timeline: "2025-2027",
      confidence: "Modérée",
      evidence: "EU MiCA, US clarity progress"
    },
    {
      factor: "Maturation marché",
      trend: "Liquidité croissante",
      impact: "Volatilité diminuée",
      timeline: "2025-2035",
      confidence: "Élevée",
      evidence: "Market cap growth, derivatives"
    },
    {
      factor: "Intégration macro",
      trend: "Asset class establishment",
      impact: "Corrélations normalisées",
      timeline: "2030+",
      confidence: "Modérée",
      evidence: "Central bank reserves, pension funds"
    }
  ];

  const resources = [
    {
      title: "Bitcoin Volatility Tracker",
      type: "Dashboard temps réel",
      duration: "Temps réel",
      description: "Métriques volatilité live avec comparaisons historiques",
      icon: <Activity className="w-5 h-5" />,
      url: "https://charts.woobull.com/bitcoin-volatility/"
    },
    {
      title: "Volatility Risk Calculator",
      type: "Outil gestion risque",
      duration: "5 min",
      description: "Calcul position sizing selon tolérance volatilité",
      icon: <Calculator className="w-5 h-5" />,
      url: "https://www.portfoliovisualizer.com/asset-class-correlations"
    },
    {
      title: "DCA Strategy Backtest",
      type: "Analyse stratégie",
      duration: "15 min",
      description: "Performance DCA vs lump sum sur cycles Bitcoin",
      icon: <BarChart3 className="w-5 h-5" />,
      url: "https://dcabtc.com/"
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
        <span className="text-foreground">Volatilité</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Activity className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Volatilité</h1>
              <Badge variant="secondary" className="bg-red-100 text-red-700 w-fit">
                Leçon 2/3
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprendre les fluctuations de prix Bitcoin et apprendre à les gérer
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
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-red-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              La volatilité est une caractéristique majeure de Bitcoin, reflétant les fluctuations rapides et 
              importantes de son prix. Ces variations peuvent atteindre 10-15% en une seule journée, 
              contrastant avec les 1-2% des marchés traditionnels.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ce chapitre explore en détail les causes de la volatilité Bitcoin, ses implications pour différents 
              types d'acteurs (utilisateurs, investisseurs, entreprises), et les stratégies éprouvées pour la gérer 
              et la transformer en opportunité plutôt qu'en obstacle.
            </p>
          </div>
        </div>
      </Card>

      {/* Volatility Definition & Causes */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-red-900">Causes de la Volatilité</h2>
        <p className="text-red-800 mb-8">
          La volatilité Bitcoin provient de l'interaction de facteurs structurels et comportementaux uniques.
        </p>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {volatilityCauses.map((cause, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {cause.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-3">{cause.cause}</h3>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-blue-800 mb-1">Mécanisme :</h4>
                      <p className="text-sm text-blue-700">{cause.mechanism}</p>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-red-800 mb-1">Impact :</h4>
                      <p className="text-sm text-red-700">{cause.impact}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-orange-50 rounded p-2">
                        <h4 className="text-xs font-medium text-orange-800 mb-1">Sévérité :</h4>
                        <p className="text-xs text-orange-700">{cause.severity}</p>
                      </div>
                      
                      <div className="bg-purple-50 rounded p-2">
                        <h4 className="text-xs font-medium text-purple-800 mb-1">Durée :</h4>
                        <p className="text-xs text-purple-700">{cause.timeframe}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-1">Exemple récent :</h4>
                      <p className="text-sm text-muted-foreground">{cause.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Historical Volatility Metrics */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Métriques Historiques de Volatilité</h2>
        <p className="text-muted-foreground mb-8">
          L'évolution de la volatilité Bitcoin montre une tendance à la baisse avec la maturation du marché.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold">Période</th>
                <th className="text-left p-3 font-semibold">Volatilité moy.</th>
                <th className="text-left p-3 font-semibold">Max Drawdown</th>
                <th className="text-left p-3 font-semibold">Sharpe Ratio</th>
                <th className="text-left p-3 font-semibold">Fourchette prix</th>
                <th className="text-left p-3 font-semibold">Contexte</th>
              </tr>
            </thead>
            <tbody>
              {volatilityMetrics.map((metric, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{metric.period}</td>
                  <td className="p-3 font-mono text-orange-600">{metric.avgVolatility}</td>
                  <td className="p-3 font-mono text-red-600">{metric.maxDrawdown}</td>
                  <td className="p-3 font-mono text-blue-600">{metric.sharpeRatio}</td>
                  <td className="p-3 font-mono text-green-600">{metric.priceRange}</td>
                  <td className="p-3 text-purple-600">{metric.context}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5 text-green-600" />
            <h4 className="font-medium text-green-800">Tendance long terme :</h4>
          </div>
          <p className="text-green-700 text-sm">
            La volatilité Bitcoin diminue progressivement (4.5% → 2.8% quotidien) avec l'augmentation 
            de la liquidité et l'adoption institutionnelle, se rapprochant des standards d'actifs matures.
          </p>
        </div>
      </Card>

      {/* User Implications */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Implications par Type d'Utilisateur</h2>
        <p className="text-blue-800 mb-8">
          La volatilité affecte différemment chaque catégorie d'acteur selon leurs objectifs et contraintes.
        </p>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {userImplications.map((user, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 ${user.color} text-white rounded-full flex items-center justify-center shadow-lg`}>
                  {user.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{user.userType}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant={user.riskLevel.includes("Très") ? "destructive" : 
                                   user.riskLevel.includes("Élevé") ? "secondary" : "outline"}>
                      {user.riskLevel}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{user.timeHorizon}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-red-800 mb-2">Risques :</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    {user.risks.map((risk, i) => (
                      <li key={i}>• {risk}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-green-800 mb-2">Opportunités :</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    {user.opportunities.map((opp, i) => (
                      <li key={i}>• {opp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">Stratégies recommandées :</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    {user.strategies.map((strategy, i) => (
                      <li key={i}>• {strategy}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Management Strategies */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Stratégies de Gestion de la Volatilité</h2>
        <p className="text-muted-foreground mb-8">
          Approches éprouvées pour réduire l'impact de la volatilité selon le profil et les objectifs.
        </p>
        
        <div className="space-y-6">
          {managementStrategies.map((strategy, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-blue-400">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="font-semibold text-lg mb-2">{strategy.strategy}</h3>
                  <Badge variant="outline" className="mb-3">{strategy.target}</Badge>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Efficacité:</span>
                      <span className="font-medium">{strategy.effectiveness}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Coût:</span>
                      <span className="font-medium">{strategy.cost}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Horizon:</span>
                      <span className="font-medium">{strategy.timeframe}</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3 space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Mécanisme :</h4>
                    <p className="text-blue-700 text-sm">{strategy.mechanism}</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-purple-800 mb-2">Implémentation :</h4>
                    <p className="text-purple-700 text-sm">{strategy.implementation}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-medium text-green-800 mb-2">Avantages :</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        {strategy.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-3">
                      <h4 className="font-medium text-red-800 mb-2">Inconvénients :</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        {strategy.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Historical Case Studies */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">Études de Cas Historiques</h2>
        <p className="text-gray-800 mb-8">
          Analyse des épisodes de volatilité extrême pour comprendre les patterns et leçons.
        </p>
        
        <div className="space-y-8">
          {historicalCases.map((case_, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="font-semibold text-xl mb-2">{case_.period}</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-red-800 mb-1">Pic :</h4>
                      <p className="text-sm font-mono text-red-700">{case_.peak}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-blue-800 mb-1">Creux :</h4>
                      <p className="text-sm font-mono text-blue-700">{case_.trough}</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-orange-800 mb-1">Durée :</h4>
                      <p className="text-sm text-orange-700">{case_.duration}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3 space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-purple-800 mb-2">Déclencheur :</h4>
                    <p className="text-purple-700 text-sm">{case_.trigger}</p>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-800 mb-2">Volatilité :</h4>
                    <p className="text-yellow-700 text-sm">{case_.volatility}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-medium text-green-800 mb-2">Gagnants :</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        {case_.winners.map((winner, i) => (
                          <li key={i}>• {winner}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-3">
                      <h4 className="font-medium text-red-800 mb-2">Perdants :</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        {case_.losers.map((loser, i) => (
                          <li key={i}>• {loser}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="font-medium text-blue-800 mb-2">Leçons :</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        {case_.lessons.map((lesson, i) => (
                          <li key={i}>• {lesson}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Future Outlook */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-900">Perspectives Futures</h2>
        <p className="text-green-800 mb-8">
          Facteurs susceptibles d'influencer l'évolution de la volatilité Bitcoin dans les années à venir.
        </p>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {futureOutlook.map((outlook, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{outlook.factor}</h3>
                  <Badge variant={outlook.confidence === "Élevée" ? "default" : "secondary"}>
                    {outlook.confidence}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-blue-800 mb-1">Tendance :</h4>
                    <p className="text-sm text-blue-700">{outlook.trend}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-green-800 mb-1">Impact volatilité :</h4>
                    <p className="text-sm text-green-700">{outlook.impact}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-purple-50 rounded p-2">
                      <h4 className="text-xs font-medium text-purple-800 mb-1">Timeline :</h4>
                      <p className="text-xs text-purple-700">{outlook.timeline}</p>
                    </div>
                    
                    <div className="bg-orange-50 rounded p-2">
                      <h4 className="text-xs font-medium text-orange-800 mb-1">Preuves :</h4>
                      <p className="text-xs text-orange-700">{outlook.evidence}</p>
                    </div>
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
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-900">Points Clés Volatilité Bitcoin</h3>
            <ul className="space-y-3 text-green-800">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La <strong>volatilité diminue</strong> progressivement avec la maturation du marché et l'adoption</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>stratégies long terme</strong> (DCA, HODL) performent mieux que le trading émotionnel</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La <strong>diversification</strong> et la gestion des risques sont essentielles pour tous les profils</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>L'<strong>éducation</strong> et la préparation psychologique sont clés pour naviguer la volatilité</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>outils de gestion</strong> (stablecoins, dérivés) offrent des solutions adaptées</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Outils de Gestion</h2>
        <p className="text-muted-foreground mb-6">
          Ressources pratiques pour mesurer et gérer la volatilité Bitcoin efficacement.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  {resource.icon}
                </div>
                <div>
                  <Badge variant="secondary" className="text-xs mb-1">
                    {resource.type}
                  </Badge>

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
                Utiliser
              </Button>
            </Card>
          ))}
        </div>
      </Card>



      {/* Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button variant="outline" onClick={onBackToModule} className="flex items-center gap-2 w-full sm:w-auto">
          <ArrowLeft className="w-4 h-4" />
          Retour au module
        </Button>
        
        {nextLessonInfo && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              {nextLessonInfo.isNextModule ? "Prochaine leçon (nouveau module)" : "Prochaine leçon"}
            </p>
            <p className="font-medium">{nextLessonInfo.title}</p>
            {nextLessonInfo.moduleTitle && (
              <p className="text-xs text-muted-foreground">{nextLessonInfo.moduleTitle}</p>
            )}
          </div>
        )}
        
        {onNextLesson && nextLessonInfo && (
          <Button 
            onClick={onNextLesson}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}