import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  BookOpen, 
  Play, 
  FileText, 
  Video, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Users, 
  Target, 
  Lightbulb,
  Network,
  Timer,
  Layers,
  Share2,
  Wifi,
  Server,
  Activity,
  BarChart3,
  ExternalLink,
  Zap,
  Globe,
  Eye,
  Edit,
  Shield
} from "lucide-react";

interface SecurityLessonTwoProps {
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

export function SecurityLessonTwo({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: SecurityLessonTwoProps) {
  const mempoolConcepts = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Mempool",
      description: "Zone d'attente des transactions non confirmées",
      details: [
        "Memory Pool = Pool de mémoire",
        "Transactions en attente de validation",
        "Propre à chaque nœud du réseau",
        "Priorité selon les frais payés"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Diffusion",
      description: "Propagation des transactions et blocs sur le réseau",
      details: [
        "Protocole peer-to-peer",
        "Propagation en cascade",
        "~15 000 nœuds actifs",
        "Résilience par redondance"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Temps de confirmation",
      description: "Délai entre émission et inclusion dans un bloc",
      details: [
        "Dépend des frais de transaction",
        "Congestion du réseau variable",
        "Moyenne ~10 minutes par bloc",
        "Confirmations multiples recommandées"
      ],
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const transactionLifecycle = [
    {
      step: "Création de transaction",
      description: "Utilisateur crée et signe une transaction",
      details: [
        "Sélection des UTXO à dépenser",
        "Définition des destinations",
        "Calcul et signature cryptographique",
        "Définition des frais de transaction"
      ],
      actors: ["Wallet utilisateur"],
      timeframe: "Instantané",
      icon: <Edit className="w-6 h-6" />
    },
    {
      step: "Diffusion initiale",
      description: "Transaction transmise aux nœuds connectés",
      details: [
        "Envoi aux peers directs",
        "Vérification de la validité basique",
        "Ajout à la mempool locale",
        "Retransmission aux autres nœuds"
      ],
      actors: ["Nœuds du réseau"],
      timeframe: "~1-5 secondes",
      icon: <Wifi className="w-6 h-6" />
    },
    {
      step: "Propagation réseau",
      description: "Diffusion progressive à travers tout le réseau",
      details: [
        "Propagation peer-to-peer",
        "Validation par chaque nœud",
        "Ajout aux mempools locales",
        "Couverture ~99% en 30 secondes"
      ],
      actors: ["Réseau global"],
      timeframe: "~30 secondes",
      icon: <Network className="w-6 h-6" />
    },
    {
      step: "Sélection par mineur",
      description: "Mineurs choisissent les transactions rentables",
      details: [
        "Tri par frais/byte",
        "Construction du bloc candidat",
        "Tentative de résolution PoW",
        "Compétition entre mineurs"
      ],
      actors: ["Mineurs"],
      timeframe: "Variable (0-∞)",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "Inclusion dans bloc",
      description: "Transaction incluse dans un bloc miné",
      details: [
        "Bloc trouvé par un mineur",
        "Transaction dans l'arbre de Merkle",
        "Première confirmation obtenue",
        "Diffusion du nouveau bloc"
      ],
      actors: ["Mineur gagnant"],
      timeframe: "~10 minutes",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: "Confirmations multiples",
      description: "Accumulation de confirmations sécurisantes",
      details: [
        "Nouveaux blocs construits dessus",
        "Immutabilité croissante",
        "Réduction du risque de double-spend",
        "Finalité pratique atteinte"
      ],
      actors: ["Réseau entier"],
      timeframe: "~60+ minutes",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const mempoolDynamics = [
    {
      metric: "Taille de la mempool",
      description: "Nombre de transactions en attente",
      currentRange: "50 000 - 300 000 transactions",
      factors: ["Activité réseau", "Frais moyens", "Capacité des blocs"],
      implications: "Indicateur de congestion du réseau"
    },
    {
      metric: "Frais recommandés",
      description: "Coût pour inclusion rapide",
      currentRange: "1-50 sat/vB selon congestion",
      factors: ["Compétition", "Urgence", "Taille transaction"],
      implications: "Détermine le temps de confirmation"
    },
    {
      metric: "Temps d'attente médian",
      description: "Délai typique pour première confirmation",
      currentRange: "10 minutes - 24 heures",
      factors: ["Frais payés", "Congestion", "Luck mining"],
      implications: "Experience utilisateur variable"
    },
    {
      metric: "Taux de drop",
      description: "Transactions expirées de la mempool",
      currentRange: "~2-5% selon les nœuds",
      factors: ["Limite mempool", "Temps expiration", "Frais trop bas"],
      implications: "Transactions perdues si sous-payées"
    }
  ];

  const blockPropagation = [
    {
      phase: "Découverte du bloc",
      description: "Mineur trouve un bloc valide",
      process: [
        "Hash satisfait la difficulté",
        "Validation interne du bloc",
        "Préparation pour diffusion",
        "Transmission aux peers directs"
      ],
      timing: "0-10 secondes",
      criticalness: "Critique - détermine l'avantage"
    },
    {
      phase: "Validation rapide",
      description: "Nœuds valident rapidement le header",
      process: [
        "Vérification du hash de difficulté",
        "Validation du header seulement",
        "Retransmission immédiate",
        "Validation complète en parallèle"
      ],
      timing: "Millisecondes",
      criticalness: "Importante - évite les orphelins"
    },
    {
      phase: "Propagation globale",
      description: "Diffusion à travers le réseau entier",
      process: [
        "Relay hop-by-hop",
        "Validation complète par chaque nœud",
        "Mise à jour des chaînes locales",
        "Éviction des transactions confirmées"
      ],
      timing: "10-30 secondes",
      criticalness: "Normale - consensus global"
    },
    {
      phase: "Finalisation",
      description: "Bloc accepté par tout le réseau",
      process: [
        "Consensus sur le nouveau tip",
        "Mise à jour des mempools",
        "Ajustement des priorités",
        "Préparation bloc suivant"
      ],
      timing: "30-60 secondes",
      criticalness: "Standard - stabilisation"
    }
  ];

  const networkOptimizations = [
    {
      technique: "Compact Blocks (BIP 152)",
      purpose: "Réduire la bande passante lors de la propagation",
      mechanism: "Envoi des identifiants de transactions au lieu des transactions complètes",
      benefits: ["Propagation ~6x plus rapide", "Moins de bande passante", "Réduction orphelins"],
      adoption: "~95% des nœuds"
    },
    {
      technique: "FIBRE Network",
      purpose: "Réseau dédié pour propagation ultra-rapide",
      mechanism: "Infrastructure spécialisée avec Forward Error Correction",
      benefits: ["Propagation <1 seconde", "Réduction latence", "Réseau redondant"],
      adoption: "Utilisé par grands mineurs"
    },
    {
      technique: "Block Relay Network",
      purpose: "Optimisation spécifique pour mineurs",
      mechanism: "Réseau overlay dédié à la propagation de blocs",
      benefits: ["Latence minimale", "Pas d'orphelins", "Coûts réduits"],
      adoption: "Infrastructure critique"
    },
    {
      technique: "Lightning Network",
      purpose: "Réduire la pression sur la couche de base",
      mechanism: "Transactions off-chain avec settlement périodique",
      benefits: ["Décongest mempool", "Frais réduits", "Confirmation instantanée"],
      adoption: "Croissance exponentielle"
    }
  ];

  const mempoolStrategies = [
    {
      strategy: "Fee bumping (RBF)",
      description: "Augmenter les frais d'une transaction non confirmée",
      whenToUse: "Transaction bloquée avec frais trop bas",
      howItWorks: [
        "Replace-By-Fee activé (BIP 125)",
        "Création nouvelle version avec frais plus élevés",
        "Remplacement dans la mempool",
        "Confirmation accélérée"
      ],
      considerations: "Pas tous wallets supportent RBF"
    },
    {
      strategy: "Child Pays For Parent (CPFP)",
      description: "Transaction enfant avec frais élevés pour priorité parent",
      whenToUse: "Transaction parent bloquée, pas de RBF",
      howItWorks: [
        "Création transaction dépensant l'output parent",
        "Frais élevés sur transaction enfant",
        "Mineurs incités à inclure les deux",
        "Package mining économiquement rationnel"
      ],
      considerations: "Coûte plus cher que RBF"
    },
    {
      strategy: "Fee estimation",
      description: "Prédire les frais nécessaires selon délai souhaité",
      whenToUse: "Avant chaque transaction",
      howItWorks: [
        "Analyse historique des confirmations",
        "Monitoring de la mempool actuelle",
        "Algorithmes prédictifs",
        "Recommendations par timeframe"
      ],
      considerations: "Estimations parfois incorrectes"
    },
    {
      strategy: "Timing optimal",
      description: "Choisir les moments de faible congestion",
      whenToUse: "Transactions non urgentes",
      howItWorks: [
        "Weekend généralement moins cher",
        "Éviter les heures de pointe",
        "Monitoring des patterns cycliques",
        "Patience vs économies"
      ],
      considerations: "Pas adapté aux urgences"
    }
  ];

  const securityImplications = [
    {
      risk: "Double-spend 0-conf",
      description: "Tentative de double-dépense avant confirmation",
      probability: "Modérée pour petits montants",
      mitigation: ["Attendre confirmations", "Monitoring mempool", "RBF détection"],
      context: "Commerce électronique, paiements rapides"
    },
    {
      risk: "Fee manipulation",
      description: "Manipulation des frais pour créer congestion",
      probability: "Faible mais possible",
      mitigation: ["Diversité des estimateurs", "Monitoring anomalies", "Patience"],
      context: "Attaques économiques, spam réseau"
    },
    {
      risk: "Mempool divergence",
      description: "Différences entre mempools des nœuds",
      probability: "Normale et acceptable",
      mitigation: ["Standardisation politiques", "Synchronisation peer", "Consensus rules"],
      context: "Hétérogénéité normale du réseau"
    },
    {
      risk: "Eclipse attacks",
      description: "Isolation d'un nœud du vrai réseau",
      probability: "Très faible",
      mitigation: ["Multiples connexions", "Diversité géographique", "Monitoring"],
      context: "Attaques sophistiquées ciblées"
    }
  ];

  const resources = [
    {
      title: "Mempool Explorer",
      type: "Outil temps réel",
      duration: "Temps réel",
      description: "Visualiser l'état actuel de la mempool Bitcoin",
      icon: <Eye className="w-5 h-5" />,
      url: "https://mempool.space/"
    },
    {
      title: "Fee Estimation API",
      type: "Outil développeur",
      duration: "Intégration",
      description: "API pour estimer les frais optimaux",
      icon: <BarChart3 className="w-5 h-5" />,
      url: "https://bitcoinfees.earn.com/api"
    },
    {
      title: "Network Propagation Analysis",
      type: "Recherche académique",
      duration: "60 min",
      description: "Étude sur la propagation dans le réseau Bitcoin",
      icon: <FileText className="w-5 h-5" />,
      url: "https://arxiv.org/abs/1505.06837"
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
          Sécurité & régulation
        </Button>
        <span>/</span>
        <span className="text-foreground">Mempool & diffusion des blocs</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Network className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Mempool & diffusion des blocs</h1>
              <Badge variant="secondary" className="bg-green-100 text-green-700 w-fit">
                Leçon 2/3
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comment les transactions et blocs se propagent sur le réseau
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
            <span>Niveau technique</span>
          </div>
          <Badge variant="outline">
            Module 3 - Sécurité
          </Badge>
        </div>
      </div>

      {/* Introduction */}
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-green-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              La mempool et la diffusion des blocs sont des mécanismes cruciaux qui permettent 
              au réseau Bitcoin de fonctionner de manière décentralisée. Ces processus déterminent 
              la rapidité et l'efficacité des transactions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre ces mécanismes est essentiel pour optimiser ses transactions 
              et appréhender le fonctionnement interne du réseau Bitcoin.
            </p>
          </div>
        </div>
      </Card>

      {/* Mempool Concepts */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Concepts Fondamentaux</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          La mempool et la propagation réseau forment l'infrastructure qui permet 
          aux transactions d'atteindre les mineurs et aux blocs de se diffuser.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mempoolConcepts.map((concept, index) => (
            <Card key={index} className={`p-6 border-2 ${concept.color} hover:shadow-lg transition-shadow`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {concept.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{concept.title}</h3>
                <p className="text-muted-foreground mb-4">{concept.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium mb-2">Caractéristiques :</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {concept.details.map((detail, idx) => (
                    <li key={idx}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Transaction Lifecycle */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Cycle de Vie d'une Transaction</h2>
        <p className="text-muted-foreground mb-8">
          Parcours détaillé d'une transaction depuis sa création jusqu'à sa confirmation définitive.
        </p>
        
        <div className="space-y-6">
          {transactionLifecycle.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-lg">{step.step}</h3>
                    <Badge variant="outline" className="text-xs">
                      {step.timeframe}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Processus :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <strong className="text-blue-700">Acteurs :</strong>
                        <p className="text-blue-600 text-sm">{step.actors.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Mempool Dynamics */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Dynamiques de la Mempool</h2>
        <p className="text-blue-800 mb-8">
          Métriques clés qui déterminent l'état et l'efficacité du réseau de transactions.
        </p>
        
        <div className="space-y-6">
          {mempoolDynamics.map((metric, index) => (
            <Card key={index} className="p-6 bg-white">
              <h3 className="font-semibold text-lg mb-3">{metric.metric}</h3>
              <p className="text-muted-foreground mb-4">{metric.description}</p>
              
              <div className="grid lg:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-green-600">Plage actuelle :</strong>
                  <p className="text-green-700 font-semibold">{metric.currentRange}</p>
                </div>
                <div>
                  <strong className="text-blue-600">Facteurs :</strong>
                  <p className="text-blue-700">{metric.factors.join(", ")}</p>
                </div>
                <div>
                  <strong className="text-purple-600">Implications :</strong>
                  <p className="text-purple-700">{metric.implications}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Block Propagation */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Propagation des Blocs</h2>
        <p className="text-muted-foreground mb-8">
          Processus critique pour la sécurité du réseau : comment les nouveaux blocs 
          se diffusent à travers le réseau Bitcoin.
        </p>
        
        <div className="space-y-6">
          {blockPropagation.map((phase, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-lg">{phase.phase}</h3>
                    <Badge 
                      variant={phase.criticalness.includes("Critique") ? "destructive" : "outline"}
                      className="text-xs"
                    >
                      {phase.timing}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{phase.description}</p>
                  
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Processus :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {phase.process.map((step, idx) => (
                          <li key={idx}>• {step}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-orange-700">Criticité :</h4>
                      <p className="text-sm text-orange-600">{phase.criticalness}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Network Optimizations */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Optimisations Réseau</h2>
        <p className="text-muted-foreground mb-8">
          Technologies et techniques développées pour améliorer l'efficacité 
          de la propagation sur le réseau Bitcoin.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {networkOptimizations.map((optimization, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{optimization.technique}</h3>
                  <Badge variant="secondary" className="text-xs">{optimization.adoption}</Badge>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-blue-600">Objectif :</strong>
                  <p className="text-blue-700">{optimization.purpose}</p>
                </div>
                <div>
                  <strong className="text-green-600">Mécanisme :</strong>
                  <p className="text-green-700">{optimization.mechanism}</p>
                </div>
                <div>
                  <strong className="text-purple-600">Bénéfices :</strong>
                  <ul className="text-purple-700 space-y-1">
                    {optimization.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Mempool Strategies */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Stratégies de Gestion</h2>
        <p className="text-muted-foreground mb-8">
          Techniques pratiques pour optimiser ses transactions en fonction de l'état de la mempool.
        </p>
        
        <div className="space-y-6">
          {mempoolStrategies.map((strategy, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-lg mb-3">{strategy.strategy}</h3>
              <p className="text-muted-foreground mb-4">{strategy.description}</p>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <strong className="text-blue-600">Quand l'utiliser :</strong>
                    <p className="text-blue-700 text-sm">{strategy.whenToUse}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <strong className="text-green-700">Fonctionnement :</strong>
                    <ul className="text-green-600 text-sm space-y-1 mt-1">
                      {strategy.howItWorks.map((step, idx) => (
                        <li key={idx}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <strong className="text-yellow-700">Considérations :</strong>
                    <p className="text-yellow-600 text-sm">{strategy.considerations}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Security Implications */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-orange-900">Implications Sécuritaires</h2>
        <p className="text-orange-800 mb-8">
          Risques et vulnérabilités liés au fonctionnement de la mempool et à la propagation.
        </p>
        
        <div className="space-y-6">
          {securityImplications.map((risk, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center">
                  !
                </div>
                <h3 className="font-semibold text-lg">{risk.risk}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{risk.description}</p>
              
              <div className="grid lg:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div>
                    <strong className="text-red-600">Probabilité :</strong>
                    <p className="text-red-700">{risk.probability}</p>
                  </div>
                  <div>
                    <strong className="text-blue-600">Contexte :</strong>
                    <p className="text-blue-700">{risk.context}</p>
                  </div>
                </div>
                <div>
                  <strong className="text-green-600">Mitigations :</strong>
                  <ul className="text-green-700 space-y-1">
                    {risk.mitigation.map((measure, idx) => (
                      <li key={idx}>• {measure}</li>
                    ))}
                  </ul>
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
                <span>La <strong>mempool</strong> est la zone d'attente des transactions non confirmées</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La <strong>propagation</strong> détermine la rapidité de diffusion des transactions et blocs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>frais de transaction</strong> déterminent la priorité dans la mempool</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>optimisations réseau</strong> améliorent continuellement l'efficacité</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Outils pour surveiller et comprendre l'état de la mempool en temps réel.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
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
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}