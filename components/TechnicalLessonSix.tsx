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
  Target,
  Lightbulb,
  AlertTriangle,
  Shield,
  Cpu,
  Network,
  DollarSign,
  Timer,
  ExternalLink,
  Eye
} from "lucide-react";

interface TechnicalLessonSixProps {
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

export function TechnicalLessonSix({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo}: TechnicalLessonSixProps) {
  const doubleSpendProblem = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Le problème",
      description: "Comment empêcher qu'un bitcoin soit dépensé deux fois ?",
      details: [
        "Argent numérique = fichier copiable",
        "Pas de contrainte physique",
        "Besoin de consensus global",
        "Solution sans tiers de confiance"
      ],
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Solution Bitcoin",
      description: "Horodatage cryptographique et consensus majoritaire",
      details: [
        "Blockchain comme registre public",
        "Ordre chronologique des transactions",
        "Consensus par preuve de travail",
        "Chaîne la plus longue fait foi"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité",
      description: "Protection mathématique contre la fraude",
      details: [
        "Coût énergétique de modification",
        "Transparence totale du registre",
        "Validation par milliers de nœuds",
        "Immutabilité croissante dans le temps"
      ],
      color: "bg-blue-50 border-blue-200"
    }
  ];

  const attack51Process = [
    {
      step: "Accumulation de puissance",
      description: "Obtenir plus de 51% de la puissance de calcul totale",
      requirements: [
        "Investissement de plusieurs milliards de dollars",
        "Acquisition massive d'équipements ASIC",
        "Accès à d'énormes quantités d'électricité",
        "Infrastructure technique considérable"
      ],
      difficulty: "Extrêmement coûteux",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      step: "Création de chaîne secrète",
      description: "Miner une chaîne alternative en secret",
      requirements: [
        "Miner sans diffuser les blocs trouvés",
        "Maintenir l'avance sur la chaîne publique",
        "Consommer énormément d'énergie",
        "Risquer de perdre tous les efforts"
      ],
      difficulty: "Techniquement complexe",
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: "Diffusion et réorganisation",
      description: "Révéler la chaîne plus longue pour remplacer l'historique",
      requirements: [
        "Chaîne secrète plus longue que publique",
        "Diffusion simultanée à tout le réseau",
        "Annulation des transactions confirmées",
        "Récupération des bitcoins déjà dépensés"
      ],
      difficulty: "Détection quasi-immédiate",
      icon: <Network className="w-6 h-6" />
    }
  ];

  const attack51Costs = [
    {
      category: "Coûts d'équipement",
      description: "Matériel nécessaire pour 51% du hash rate",
      estimation: "15-30 milliards USD",
      details: [
        "~3 millions d'ASICs dernière génération",
        "Coût unitaire : 5 000-10 000 USD",
        "Approvisionnement quasi-impossible",
        "Délais de production de plusieurs années"
      ]
    },
    {
      category: "Coûts énergétiques",
      description: "Électricité pour maintenir l'attaque",
      estimation: "500-800 millions USD/an",
      details: [
        "~75 TWh d'électricité supplémentaire",
        "Équivalent à un petit pays",
        "Infrastructure électrique dédiée",
        "Impact environnemental massif"
      ]
    },
    {
      category: "Coûts d'opportunité",
      description: "Perte de revenus légitimes du minage",
      estimation: "2-4 milliards USD/an",
      details: [
        "Récompenses de blocs perdues",
        "Frais de transactions non collectés",
        "Dévaluation des équipements",
        "Perte de crédibilité du secteur"
      ]
    }
  ];

  const defenses = [
    {
      defense: "Coût économique prohibitif",
      mechanism: "L'attaque coûte plus cher que les gains possibles",
      effectiveness: "Très élevée",
      explanation: "Détruire Bitcoin réduirait à zéro la valeur des bitcoins volés"
    },
    {
      defense: "Détection rapide",
      mechanism: "Surveillance constante par la communauté",
      effectiveness: "Élevée",
      explanation: "Réorganisations importantes immédiatement visibles"
    },
    {
      defense: "Réaction du réseau",
      mechanism: "Changement d'algorithme de minage si nécessaire",
      effectiveness: "Modérée",
      explanation: "Hard fork pour invalider l'équipement de l'attaquant"
    },
    {
      defense: "Décentralisation croissante",
      mechanism: "Distribution géographique et juridique du minage",
      effectiveness: "Élevée",
      explanation: "Plus difficile de coordonner une attaque globale"
    }
  ];

  const realWorldConsiderations = [
    {
      scenario: "État-nation hostile",
      probability: "Faible",
      reasoning: "Coût prohibitif même pour les grandes puissances",
      countermeasures: ["Sanctions économiques", "Hard fork de défense", "Diversification géographique"]
    },
    {
      scenario: "Cartel de mineurs",
      probability: "Très faible",
      reasoning: "Incitations économiques contradictoires",
      countermeasures: ["Pools décentralisées", "Surveillance communautaire", "Solo mining incentives"]
    },
    {
      scenario: "Attaque coordonnée",
      probability: "Négligeable",
      reasoning: "Coordination impossible à l'échelle requise",
      countermeasures: ["Détection précoce", "Réaction rapide", "Changements protocolaires"]
    }
  ];

  const historicalAttacks = [
    {
      network: "Bitcoin Gold",
      year: "2018",
      cost: "$18 millions volés",
      method: "51% attack avec hash rate loué",
      lesson: "Réseaux avec faible hash rate sont vulnérables"
    },
    {
      network: "Ethereum Classic",
      year: "2019-2020",
      cost: "$5+ millions volés",
      method: "Multiples attaques 51%",
      lesson: "Réorganisations profondes possibles sur petits réseaux"
    },
    {
      network: "Vertcoin",
      year: "2018",
      cost: "Montant non divulgué",
      method: "Hash rate loué via NiceHash",
      lesson: "Location de hash rate facilite les attaques"
    }
  ];

  const bitcoinResilience = [
    {
      factor: "Taille du réseau",
      current: "~500 EH/s de hash rate",
      implication: "Coût d'attaque astronomique",
      trend: "Croissance continue depuis 15 ans"
    },
    {
      factor: "Décentralisation",
      current: "Milliers de mineurs dans le monde",
      implication: "Aucun contrôle centralisé",
      trend: "Amélioration constante de la distribution"
    },
    {
      factor: "Incitations économiques",
      current: "Minage profitable = sécurité",
      implication: "Alignement des intérêts",
      trend: "Marché mature et stable"
    },
    {
      factor: "Surveillance communautaire",
      current: "Milliers d'yeux sur la blockchain",
      implication: "Détection immédiate d'anomalies",
      trend: "Outils de monitoring en amélioration"
    }
  ];

  const resources = [
    {
      title: "51% Attack Cost Calculator",
      type: "Outil de calcul",
      duration: "Temps réel",
      description: "Calculer le coût théorique d'une attaque 51%",
      icon: <Target className="w-5 h-5" />,
      url: "https://www.crypto51.app/"
    },
    {
      title: "Double Spending Analysis",
      type: "Papier académique",
      duration: "45 min",
      description: "Analyse mathématique du problème de double dépense",
      icon: <FileText className="w-5 h-5" />,
      url: "https://bitcoin.org/bitcoin.pdf"
    },
    {
      title: "Blockchain Reorganization Monitor",
      type: "Outil de surveillance",
      duration: "Temps réel",
      description: "Surveiller les réorganisations de la blockchain",
      icon: <Eye className="w-5 h-5" />,
      url: "https://forkmonitor.info/nodes/btc"
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
        <span className="text-foreground">Double dépense & attaque 51%</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Double dépense & attaque 51%</h1>
              <Badge variant="secondary" className="bg-red-100 text-red-700 w-fit">
                Leçon 6/6
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprendre les vulnérabilités théoriques et leur prévention
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
            Module 2 - Technique
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
              Le problème de la double dépense était considéré comme insoluble pour les monnaies 
              numériques jusqu'à l'invention de Bitcoin. L'attaque 51% représente la vulnérabilité 
              théorique la plus critique du réseau.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette leçon explore ces concepts fondamentaux et explique pourquoi Bitcoin 
              reste sécurisé malgré ces vulnérabilités théoriques.
            </p>
          </div>
        </div>
      </Card>

      {/* Double Spend Problem */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Le Problème de la Double Dépense</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          La révolution de Bitcoin a été de résoudre ce problème fondamental 
          des monnaies numériques sans recourir à une autorité centrale.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doubleSpendProblem.map((concept, index) => (
            <Card key={index} className={`p-6 border-2 ${concept.color} hover:shadow-lg transition-shadow`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {concept.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{concept.title}</h3>
                <p className="text-muted-foreground mb-4">{concept.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium mb-2">Éléments clés :</h4>
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

      {/* 51% Attack Process */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Processus d'une Attaque 51%</h2>
        <p className="text-muted-foreground mb-8">
          Comprendre le mécanisme théorique d'une attaque 51% pour mieux 
          saisir pourquoi elle est impraticable sur Bitcoin.
        </p>
        
        <div className="space-y-6">
          {attack51Process.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center">
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
                  
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Prérequis :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {step.requirements.map((req, idx) => (
                          <li key={idx}>• {req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-red-700">Difficulté :</h4>
                      <p className="text-sm text-red-600">{step.difficulty}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Attack Costs */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-orange-900">Coûts Prohibitifs d'une Attaque</h2>
        <p className="text-orange-800 mb-8">
          L'analyse économique révèle pourquoi une attaque 51% sur Bitcoin 
          est financièrement irrationnelle.
        </p>
        
        <div className="space-y-6">
          {attack51Costs.map((cost, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-lg">{cost.category}</h3>
                    <div className="text-2xl font-bold text-red-600">{cost.estimation}</div>
                  </div>
                  <p className="text-muted-foreground mb-4">{cost.description}</p>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-red-700">Détails :</h4>
                    <ul className="text-sm text-red-600 space-y-1">
                      {cost.details.map((detail, idx) => (
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

      {/* Defense Mechanisms */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Mécanismes de Défense</h2>
        <p className="text-muted-foreground mb-8">
          Bitcoin possède plusieurs layers de protection contre les attaques 51%.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {defenses.map((defense, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-green-600" />
                <h3 className="font-semibold text-lg">{defense.defense}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-blue-600">Mécanisme :</strong>
                  <p className="text-blue-700">{defense.mechanism}</p>
                </div>
                <div>
                  <strong className="text-green-600">Efficacité :</strong>
                  <p className="text-green-700">{defense.effectiveness}</p>
                </div>
                <div>
                  <strong className="text-gray-600">Explication :</strong>
                  <p className="text-gray-700">{defense.explanation}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Real World Considerations */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Scénarios du Monde Réel</h2>
        <p className="text-muted-foreground mb-8">
          Analyse des différents scénarios d'attaque et de leur probabilité.
        </p>
        
        <div className="space-y-4">
          {realWorldConsiderations.map((scenario, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-lg">{scenario.scenario}</h3>
                    <Badge 
                      variant={scenario.probability === "Négligeable" ? "secondary" : 
                              scenario.probability === "Très faible" ? "outline" : "destructive"}
                      className="text-xs"
                    >
                      {scenario.probability}
                    </Badge>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-700">Raisonnement :</strong>
                      <p className="text-gray-600">{scenario.reasoning}</p>
                    </div>
                    <div>
                      <strong className="text-blue-700">Contre-mesures :</strong>
                      <ul className="text-blue-600 space-y-1">
                        {scenario.countermeasures.map((measure, idx) => (
                          <li key={idx}>• {measure}</li>
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

      {/* Historical Attacks */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Attaques Historiques (Autres Réseaux)</h2>
        <p className="text-muted-foreground mb-8">
          Exemples d'attaques 51% réussies sur des réseaux plus petits, 
          illustrant pourquoi la taille compte.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {historicalAttacks.map((attack, index) => (
            <Card key={index} className="p-6">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg mb-2">{attack.network}</h3>
                <Badge variant="outline" className="text-xs mb-2">{attack.year}</Badge>
                <div className="text-red-600 font-semibold">{attack.cost}</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Méthode :</strong>
                  <p className="text-muted-foreground">{attack.method}</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3">
                  <strong className="text-yellow-700">Leçon :</strong>
                  <p className="text-yellow-600">{attack.lesson}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Bitcoin Resilience */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-900">Résilience de Bitcoin</h2>
        <p className="text-green-800 mb-8">
          Pourquoi Bitcoin devient de plus en plus résistant aux attaques avec le temps.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {bitcoinResilience.map((factor, index) => (
            <Card key={index} className="p-6 bg-white">
              <h3 className="font-semibold text-lg mb-3">{factor.factor}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-700">État actuel :</strong>
                  <p className="text-gray-600">{factor.current}</p>
                </div>
                <div>
                  <strong className="text-blue-700">Implication :</strong>
                  <p className="text-blue-600">{factor.implication}</p>
                </div>
                <div>
                  <strong className="text-green-700">Tendance :</strong>
                  <p className="text-green-600">{factor.trend}</p>
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
                <span>Bitcoin résout le <strong>problème de double dépense</strong> sans autorité centrale</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Une <strong>attaque 51%</strong> coûterait des dizaines de milliards de dollars</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>incitations économiques</strong> rendent l'attaque irrationnelle</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Bitcoin devient <strong>plus sécurisé</strong> avec le temps et l'adoption</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Outils et analyses pour approfondir ces concepts de sécurité.
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
              {nextLessonInfo.isNextModule ? "Module suivant" : "Prochaine leçon"}
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
            Continuer
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}