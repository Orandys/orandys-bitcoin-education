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
  Zap,
  Cpu,
  Hash,
  Award,
  TrendingUp,
  Shield,
  Calculator,
  ExternalLink,
  Timer,
  Network,
  Hammer
} from "lucide-react";

interface TechnicalLessonFiveProps {
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

export function TechnicalLessonFive({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: TechnicalLessonFiveProps) {
  const miningConcepts = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Puissance de Calcul",
      description: "Les mineurs utilisent des ordinateurs spécialisés pour calculer",
      details: [
        "ASICs dédiés au minage Bitcoin",
        "Milliards de calculs par seconde",
        "Course à l'efficacité énergétique",
        "Hash rate total : ~500 EH/s"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Preuve de Travail",
      description: "Démonstration mathématique qu'un effort computationnel a été fourni",
      details: [
        "Algorithme SHA-256",
        "Recherche d'un hash avec zéros initiaux",
        "Ajustement automatique de difficulté",
        "Impossible à contrefaire"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Récompenses",
      description: "Incitations économiques pour sécuriser le réseau",
      details: [
        "Nouveaux bitcoins créés (subsidy)",
        "Frais de transactions collectés",
        "Halving tous les 4 ans",
        "Total maximal : 21 millions BTC"
      ],
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  const proofOfWorkProcess = [
    {
      step: "Construction du bloc",
      description: "Collecte des transactions en attente dans la mempool",
      details: [
        "Sélection des transactions les plus rentables",
        "Vérification de la validité de chaque transaction",
        "Construction de l'arbre de Merkle",
        "Ajout des métadonnées du bloc"
      ],
      icon: <Network className="w-6 h-6" />
    },
    {
      step: "Calcul du hash",
      description: "Application de SHA-256 aux données du bloc avec un nonce",
      details: [
        "Header du bloc + nonce = input",
        "SHA-256(SHA-256(input)) = hash du bloc",
        "Vérification si le hash respecte la difficulté",
        "Incrémentation du nonce si échec"
      ],
      icon: <Hash className="w-6 h-6" />
    },
    {
      step: "Vérification de difficulté",
      description: "Le hash doit commencer par un nombre défini de zéros",
      details: [
        "Cible ajustée tous les 2016 blocs",
        "Maintient un temps de bloc de ~10 minutes",
        "Plus de zéros = plus difficile",
        "Probabilité de succès très faible"
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "Diffusion et validation",
      description: "Le bloc valide est diffusé sur le réseau pour validation",
      details: [
        "Transmission à tous les nœuds du réseau",
        "Vérification par chaque nœud complet",
        "Ajout à la blockchain locale",
        "Début du cycle suivant"
      ],
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const difficultyAdjustment = {
    principle: "Maintenir un temps de bloc stable de ~10 minutes",
    frequency: "Tous les 2016 blocs (~2 semaines)",
    calculation: "Nouvelle difficulté = Ancienne difficulté × (2 semaines / Temps réel écoulé)",
    examples: [
      {
        scenario: "Hash rate augmente",
        effect: "Blocs plus rapides que 10 min",
        adjustment: "Difficulté augmente",
        result: "Retour à ~10 min par bloc"
      },
      {
        scenario: "Hash rate diminue",
        effect: "Blocs plus lents que 10 min",
        adjustment: "Difficulté diminue",
        result: "Retour à ~10 min par bloc"
      }
    ]
  };

  const miningEconomics = [
    {
      factor: "Coûts d'équipement",
      description: "Investissement initial en matériel de minage",
      details: [
        "ASIC moderne : 2 000 - 15 000€",
        "Durée de vie : 3-5 ans",
        "Obsolescence technologique rapide",
        "Économies d'échelle importantes"
      ],
      impact: "Détermine la barrière à l'entrée"
    },
    {
      factor: "Coûts énergétiques",
      description: "Électricité consommée par les équipements",
      details: [
        "70-80% des coûts opérationnels",
        "Recherche d'électricité bon marché",
        "Efficacité : J/TH (Joules par TeraHash)",
        "Avantage aux énergies renouvelables"
      ],
      impact: "Principal déterminant de la rentabilité"
    },
    {
      factor: "Prix du Bitcoin",
      description: "Valeur marchande des récompenses minées",
      details: [
        "Récompense actuelle : 6.25 BTC par bloc",
        "Frais variables selon congestion",
        "Volatilité importante du prix",
        "Corrélation avec rentabilité"
      ],
      impact: "Influence directe sur les revenus"
    },
    {
      factor: "Difficulté de minage",
      description: "Compétition entre mineurs",
      details: [
        "Ajustement automatique",
        "Plus de mineurs = plus difficile",
        "Hash rate global en croissance",
        "Course technologique constante"
      ],
      impact: "Dilue les récompenses individuelles"
    }
  ];

  const miningTypes = [
    {
      type: "Solo Mining",
      description: "Minage individuel avec ses propres équipements",
      pros: ["Récompenses complètes", "Contrôle total", "Pas de frais de pool"],
      cons: ["Revenus très irréguliers", "Faible probabilité de succès", "Investissement important"],
      suitability: "Gros mineurs avec équipements conséquents",
      probability: "Très faible pour mineurs individuels"
    },
    {
      type: "Pool Mining",
      description: "Collaboration de mineurs pour partager les récompenses",
      pros: ["Revenus réguliers", "Risque partagé", "Accessible aux petits mineurs"],
      cons: ["Frais de pool (1-3%)", "Centralisation potentielle", "Moins de contrôle"],
      suitability: "Majorité des mineurs actuels",
      probability: "Proportionnelle à la contribution"
    },
    {
      type: "Cloud Mining",
      description: "Location de puissance de minage à distance",
      pros: ["Pas d'équipement", "Pas de maintenance", "Facilité d'accès"],
      cons: ["Frais élevés", "Risque de fraude", "Rentabilité douteuse"],
      suitability: "Débutants (avec prudence)",
      probability: "Dépend du fournisseur"
    }
  ];

  const environmentalAspects = [
    {
      aspect: "Consommation énergétique",
      current: "~150 TWh/an (estimation 2024)",
      comparison: "Équivalent à l'Argentine ou aux Pays-Bas",
      trend: "Stabilisation relative malgré croissance du hash rate",
      solutions: ["Efficacité des ASICs", "Énergies renouvelables", "Récupération de chaleur"]
    },
    {
      aspect: "Sources d'énergie",
      current: "~60% énergies renouvelables",
      comparison: "Plus vert que beaucoup d'industries",
      trend: "Transition continue vers le renouvelable",
      solutions: ["Incitations économiques vertes", "Localisation stratégique", "Innovation technologique"]
    },
    {
      aspect: "Utilité énergétique",
      current: "Sécurisation du réseau monétaire global",
      comparison: "Système bancaire traditionnel : ~260 TWh/an",
      trend: "Efficacité croissante par transaction",
      solutions: ["Lightning Network", "Optimisations protocolaires", "Adoption mainstream"]
    }
  ];

  const consensusSecurity = [
    {
      protection: "Immutabilité",
      mechanism: "Coût énergétique de réécriture de l'historique",
      strength: "Plus de blocs = exponentiellement plus coûteux",
      attack: "Réécrire 6 blocs coûterait >100M$ d'électricité"
    },
    {
      protection: "Décentralisation",
      mechanism: "Milliers de mineurs indépendants",
      strength: "Aucun contrôle centralisé du réseau",
      attack: "Contrôler 51% nécessiterait des milliards d'investissement"
    },
    {
      protection: "Incitations alignées",
      mechanism: "Récompenses pour comportement honnête",
      strength: "Plus rentable de suivre les règles que de tricher",
      attack: "Attaque détruirait la valeur des récompenses"
    }
  ];

  const resources = [
    {
      title: "Bitcoin Mining Calculator",
      type: "Outil de calcul",
      duration: "Temps réel",
      description: "Calculer la rentabilité du minage selon vos paramètres",
      icon: <Calculator className="w-5 h-5" />,
      url: "https://www.cryptocompare.com/mining/calculator/btc"
    },
    {
      title: "Proof of Work Explained",
      type: "Vidéo éducative",
      duration: "20 min",
      description: "Comprendre la preuve de travail en détail",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.youtube.com/watch?v=9V1bipPkCTU"
    },
    {
      title: "Mining Pool Comparison",
      type: "Guide comparatif",
      duration: "15 min",
      description: "Analyser les différentes pools de minage",
      icon: <FileText className="w-5 h-5" />,
      url: "https://www.blockchain.com/explorer/pools"
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
          Aspects techniques
        </Button>
        <span>/</span>
        <span className="text-foreground">Minage & preuve de travail</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Hammer className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Minage & preuve de travail</h1>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 w-fit">
                Leçon 5/6
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Le mécanisme de consensus qui sécurise Bitcoin
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>35 min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Niveau technique</span>
          </div>
          <Badge variant="outline">
            Module 2 - Technique
          </Badge>
        </div>
      </div>

      {/* Introduction */}
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-yellow-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Le minage Bitcoin est le processus par lequel de nouveaux blocs sont ajoutés 
              à la blockchain. La preuve de travail (Proof of Work) est l'innovation géniale 
              qui permet un consensus décentralisé sans autorité centrale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ce mécanisme transforme l'énergie en sécurité numérique, créant le système 
              monétaire le plus sécurisé jamais conçu.
            </p>
          </div>
        </div>
      </Card>

      {/* Mining Concepts */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Concepts Fondamentaux du Minage</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Le minage Bitcoin combine puissance de calcul, preuve cryptographique 
          et incitations économiques pour sécuriser le réseau.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {miningConcepts.map((concept, index) => (
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

      {/* Proof of Work Process */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Processus de Preuve de Travail</h2>
        <p className="text-muted-foreground mb-8">
          Étapes détaillées du processus de minage et de validation des blocs.
        </p>
        
        <div className="space-y-6">
          {proofOfWorkProcess.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-lg">{step.step}</h3>
                    <Badge variant="outline" className="text-xs">
                      Étape {index + 1}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Détails techniques :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Difficulty Adjustment */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-orange-900">Ajustement de Difficulté</h2>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">{difficultyAdjustment.principle}</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <p className="text-muted-foreground mb-3">
                <strong>Fréquence :</strong> {difficultyAdjustment.frequency}
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium mb-2">Formule de calcul :</h4>
                <code className="text-sm bg-gray-100 p-2 rounded block">
                  {difficultyAdjustment.calculation}
                </code>
              </div>
            </div>
            <div className="space-y-4">
              {difficultyAdjustment.examples.map((example, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-medium mb-2">{example.scenario}</h4>
                  <div className="text-sm space-y-1">
                    <div><strong>Effet :</strong> {example.effect}</div>
                    <div><strong>Ajustement :</strong> {example.adjustment}</div>
                    <div><strong>Résultat :</strong> {example.result}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Mining Economics */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Économie du Minage</h2>
        <p className="text-muted-foreground mb-8">
          Les facteurs économiques qui déterminent la rentabilité et la viabilité du minage.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {miningEconomics.map((factor, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-lg mb-3">{factor.factor}</h3>
              <p className="text-muted-foreground mb-4">{factor.description}</p>
              
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-medium mb-2 text-blue-700">Détails :</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    {factor.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-medium text-green-700">Impact :</h4>
                  <p className="text-sm text-green-600">{factor.impact}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Mining Types */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Types de Minage</h2>
        <p className="text-muted-foreground mb-8">
          Différentes approches pour participer au minage Bitcoin.
        </p>
        
        <div className="space-y-6">
          {miningTypes.map((type, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">{type.type}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium mb-2 text-green-600">Avantages :</h4>
                      <ul className="text-sm space-y-1">
                        {type.pros.map((pro, idx) => (
                          <li key={idx} className="text-green-700">+ {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-600">Inconvénients :</h4>
                      <ul className="text-sm space-y-1">
                        {type.cons.map((con, idx) => (
                          <li key={idx} className="text-red-700">- {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-600">Adapté pour :</strong>
                      <p className="text-blue-700">{type.suitability}</p>
                    </div>
                    <div>
                      <strong className="text-purple-600">Probabilité succès :</strong>
                      <p className="text-purple-700">{type.probability}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Environmental Aspects */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-900">Aspects Environnementaux</h2>
        <p className="text-green-800 mb-8">
          Analyse objective de l'impact énergétique et environnemental du minage Bitcoin.
        </p>
        
        <div className="space-y-6">
          {environmentalAspects.map((aspect, index) => (
            <Card key={index} className="p-6 bg-white">
              <h3 className="font-semibold text-lg mb-4">{aspect.aspect}</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-700">État actuel :</strong>
                    <p className="text-gray-600">{aspect.current}</p>
                  </div>
                  <div>
                    <strong className="text-blue-700">Comparaison :</strong>
                    <p className="text-blue-600">{aspect.comparison}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <strong className="text-green-700">Tendance :</strong>
                    <p className="text-green-600">{aspect.trend}</p>
                  </div>
                  <div>
                    <strong className="text-purple-700">Solutions :</strong>
                    <ul className="text-purple-600 text-sm space-y-1">
                      {aspect.solutions.map((solution, idx) => (
                        <li key={idx}>• {solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Consensus Security */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Sécurité du Consensus</h2>
        <p className="text-muted-foreground mb-8">
          Comment la preuve de travail protège Bitcoin contre les attaques.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {consensusSecurity.map((security, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-green-600" />
                <h3 className="font-semibold text-lg">{security.protection}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-blue-600">Mécanisme :</strong>
                  <p className="text-blue-700">{security.mechanism}</p>
                </div>
                <div>
                  <strong className="text-green-600">Force :</strong>
                  <p className="text-green-700">{security.strength}</p>
                </div>
                <div>
                  <strong className="text-red-600">Coût d'attaque :</strong>
                  <p className="text-red-700">{security.attack}</p>
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
                <span>Le <strong>minage</strong> transforme l'énergie en sécurité numérique</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La <strong>preuve de travail</strong> permet un consensus décentralisé sans autorité</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>L'<strong>ajustement de difficulté</strong> maintient la stabilité du réseau</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>incitations économiques</strong> alignent les intérêts individuels et collectifs</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Outils et références pour approfondir vos connaissances sur le minage.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
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
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}