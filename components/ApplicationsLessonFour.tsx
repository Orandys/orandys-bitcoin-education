import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  FileText, 
  Video, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Users, 
  Lightbulb,
  Leaf,
  Zap,
  Factory,
  Sun,
  Wind,
  Droplets,
  BarChart3,
  Globe,
  ExternalLink,
  Cpu,
} from "lucide-react";

interface ApplicationsLessonFourProps {
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

export function ApplicationsLessonFour({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange: _onSectionChange }: ApplicationsLessonFourProps) {
  const energyStats = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Consommation Bitcoin",
      value: "121 TWh/an",
      description: "Consommation énergétique estimée du réseau Bitcoin (2023)",
      color: "bg-orange-50 border-orange-200",
      comparison: "≈ Argentine"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Part mondiale",
      value: "0.05%",
      description: "Pourcentage de la consommation énergétique mondiale",
      color: "bg-blue-50 border-blue-200",
      comparison: "< Netflix streaming"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Énergies renouvelables",
      value: "58%",
      description: "Part des énergies renouvelables dans le minage (2023)",
      color: "bg-green-50 border-green-200",
      comparison: "↗ En progression"
    }
  ];

  const renewableEnergies = [
    {
      type: "Énergie solaire",
      icon: <Sun className="w-6 h-6" />,
      percentage: "23%",
      description: "Utilisation de panneaux solaires pour le minage",
      advantages: ["Coût décroissant", "Disponibilité mondiale", "Écologique"],
      examples: ["Fermes solaires au Texas", "Projets au Maroc", "Installations en Australie"],
      color: "bg-yellow-500"
    },
    {
      type: "Énergie hydroélectrique",
      icon: <Droplets className="w-6 h-6" />,
      percentage: "21%",
      description: "Utilisation de l'eau pour générer l'électricité",
      advantages: ["Très stable", "Coût faible", "Disponible 24/7"],
      examples: ["Barrages en Chine", "Installations en Norvège", "Projets en Islande"],
      color: "bg-blue-500"
    },
    {
      type: "Énergie éolienne",
      icon: <Wind className="w-6 h-6" />,
      percentage: "14%",
      description: "Utilisation du vent pour le minage Bitcoin",
      advantages: ["Croissance rapide", "Coût compétitif", "Complémentaire"],
      examples: ["Parcs éoliens au Texas", "Projets offshore", "Installations en Patagonie"],
      color: "bg-green-500"
    }
  ];

  const environmentalBenefits = [
    {
      category: "Développement Énergétique",
      icon: <Factory className="w-8 h-8" />,
      color: "bg-blue-500",
      benefits: [
        {
          title: "Monétisation des excédents",
          description: "Valorisation de l'énergie non utilisée",
          impact: "Rentabilité accrue des projets renouvelables",
          example: "Fermes solaires vendant l'excédent au minage"
        },
        {
          title: "Financement de projets verts",
          description: "Capital pour nouvelles installations",
          impact: "Accélération de la transition énergétique",
          example: "Investissements dans l'éolien offshore"
        },
        {
          title: "Stabilisation du réseau",
          description: "Demande flexible pour équilibrer l'offre",
          impact: "Intégration facilitée des renouvelables",
          example: "Minage modulé selon la production solaire"
        }
      ]
    },
    {
      category: "Innovation Technologique",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-purple-500",
      benefits: [
        {
          title: "Efficacité énergétique",
          description: "Développement de puces plus performantes",
          impact: "Réduction de la consommation par transaction",
          example: "Puces ASIC nouvelle génération"
        },
        {
          title: "Refroidissement innovant",
          description: "Systèmes de refroidissement plus efficaces",
          impact: "Réduction des coûts énergétiques",
          example: "Refroidissement par immersion liquide"
        },
        {
          title: "Récupération de chaleur",
          description: "Utilisation de la chaleur générée",
          impact: "Valorisation des déchets énergétiques",
          example: "Chauffage de serres agricoles"
        }
      ]
    }
  ];

  const comparisonData = [
    {
      sector: "Système bancaire traditionnel",
      consumption: "260 TWh/an",
      description: "Banques, distributeurs, centres de données",
      efficiency: "Par transaction: ~700 kWh",
      color: "bg-red-50 border-red-200"
    },
    {
      sector: "Extraction de l'or",
      consumption: "240 TWh/an",
      description: "Mines, raffineries, transport",
      efficiency: "Par once: ~700 kWh",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      sector: "Bitcoin",
      consumption: "121 TWh/an",
      description: "Réseau décentralisé global",
      efficiency: "Par transaction: ~700 kWh",
      color: "bg-green-50 border-green-200"
    },
    {
      sector: "Streaming vidéo",
      consumption: "100 TWh/an",
      description: "Netflix, YouTube, centres de données",
      efficiency: "Par heure: ~0.0036 kWh",
      color: "bg-blue-50 border-blue-200"
    }
  ];

  const sustainabilityInitiatives = [
    {
      initiative: "Bitcoin Mining Council",
      description: "Promotion de la transparence et durabilité",
      impact: "Reporting sur l'usage d'énergies renouvelables",
      timeline: "2021-présent"
    },
    {
      initiative: "Crypto Climate Accord",
      description: "Engagement vers la neutralité carbone",
      impact: "100% énergies renouvelables d'ici 2030",
      timeline: "2021-2030"
    },
    {
      initiative: "Sustainable Bitcoin Protocol",
      description: "Standard pour le minage durable",
      impact: "Certification des opérations vertes",
      timeline: "2022-présent"
    },
    {
      initiative: "Carbon Offset Programs",
      description: "Compensation des émissions carbone",
      impact: "Neutralisation de l'empreinte carbone",
      timeline: "2020-présent"
    }
  ];

  const innovations = [
    {
      innovation: "Minage géothermique",
      description: "Utilisation de la chaleur terrestre",
      example: "Installations en Islande et au Salvador",
      potential: "Énergie constante 24/7"
    },
    {
      innovation: "Minage sur gaz naturel",
      description: "Valorisation du gaz brûlé",
      example: "Projets au Texas et au Dakota du Nord",
      potential: "Réduction des émissions de méthane"
    },
    {
      innovation: "Containers modulaires",
      description: "Installations mobiles et flexibles",
      example: "Déploiement rapide près des sources d'énergie",
      potential: "Optimisation géographique"
    },
    {
      innovation: "Stockage d'énergie",
      description: "Batteries couplées au minage",
      example: "Projets pilotes en Australie",
      potential: "Stabilisation du réseau électrique"
    }
  ];

  const futureProjections = [
    {
      year: "2025",
      renewableTarget: "70%",
      efficiency: "+50%",
      keyDevelopments: ["Déploiement massif ASIC 3nm", "Parcs solaires dédiés"]
    },
    {
      year: "2030",
      renewableTarget: "90%",
      efficiency: "+200%",
      keyDevelopments: ["Minage géothermique généralisé", "Neutralité carbone"]
    },
    {
      year: "2035",
      renewableTarget: "100%",
      efficiency: "+500%",
      keyDevelopments: ["Fusion nucléaire", "Minage spatial"]
    }
  ];

  const resources = [
    {
      title: "Cambridge Bitcoin Electricity Consumption Index",
      type: "Outil de monitoring",
      duration: "Temps réel",
      description: "Suivi en temps réel de la consommation énergétique",
      icon: <BarChart3 className="w-5 h-5" />,
      url: "https://ccaf.io/cbnsi/cbeci"
    },
    {
      title: "Bitcoin Mining Council - Sustainability Report",
      type: "Rapport",
      duration: "15 min",
      description: "Données officielles sur l'usage d'énergies renouvelables",
      icon: <FileText className="w-5 h-5" />,
      url: "https://bitcoinminingcouncil.com/bitcoin-mining-council-sustainability-survey/"
    },
    {
      title: "The B Word - Environmental Panel",
      type: "Vidéo",
      duration: "45 min",
      description: "Débat avec Elon Musk sur l'impact environnemental",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.youtube.com/watch?v=Zwx_7XAJ3p0"
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
        <span className="text-foreground">Écologie & énergie</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Leaf className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Écologie & énergie</h1>
              <Badge variant="secondary" className="bg-green-100 text-green-700 w-fit">
                Leçon 3/5
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Impact environnemental, énergies renouvelables et durabilité
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>20 min</span>
          </div>
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
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-green-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              L'impact environnemental de Bitcoin est l'un des sujets les plus débattus autour de cette 
              technologie. Ce chapitre explore en profondeur la consommation énergétique du réseau Bitcoin, 
              l'évolution vers les énergies renouvelables et les innovations pour une plus grande durabilité.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous analyserons les données factuelles, les comparaisons sectorielles et les initiatives 
              concrètes qui façonnent l'avenir environnemental de Bitcoin.
            </p>
          </div>
        </div>
      </Card>

      {/* Statistiques énergétiques */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Consommation Énergétique Actuelle</h2>
        <p className="text-muted-foreground mb-8">
          Données factuelles sur la consommation énergétique du réseau Bitcoin et sa place 
          dans le panorama énergétique mondial.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {energyStats.map((stat, index) => (
            <Card key={index} className={`p-6 border-2 ${stat.color}`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {stat.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{stat.title}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground mb-3">{stat.description}</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="text-xs">
                  {stat.comparison}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Énergies renouvelables */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Transition vers les Énergies Renouvelables</h2>
        <p className="text-muted-foreground mb-8">
          Le minage Bitcoin catalyse l'adoption d'énergies renouvelables grâce à sa flexibilité 
          et sa capacité à valoriser les excédents énergétiques.
        </p>
        
        <div className="space-y-6">
          {renewableEnergies.map((energy, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${energy.color} text-white rounded-lg flex items-center justify-center`}>
                      {energy.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{energy.type}</h3>
                      <div className="text-2xl font-bold text-primary">{energy.percentage}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{energy.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Avantages :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {energy.advantages.map((advantage, idx) => (
                          <li key={idx}>• {advantage}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Exemples concrets :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {energy.examples.map((example, idx) => (
                          <li key={idx}>• {example}</li>
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

      {/* Comparaison sectorielle */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Comparaison avec d'Autres Secteurs</h2>
        <p className="text-blue-800 mb-8">
          Contextualistion de la consommation énergétique de Bitcoin par rapport à d'autres secteurs économiques.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {comparisonData.map((sector, index) => (
            <Card key={index} className={`p-6 border-2 ${sector.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{sector.sector}</h3>
                <div className="text-xl font-bold text-primary">{sector.consumption}</div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{sector.description}</p>
              <div className="text-xs text-gray-600 bg-white rounded-lg p-2">
                <strong>Efficacité :</strong> {sector.efficiency}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Bénéfices environnementaux */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Bénéfices Environnementaux Inattendus</h2>
        <p className="text-muted-foreground mb-8">
          Bitcoin peut paradoxalement accélérer la transition énergétique en créant des incitations 
          économiques pour le développement d'énergies renouvelables.
        </p>
        
        <div className="space-y-8">
          {environmentalBenefits.map((benefit, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${benefit.color} text-white rounded-lg flex items-center justify-center`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.category}</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefit.benefits.map((item, idx) => (
                  <Card key={idx} className="p-6">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="space-y-2">
                      <div className="text-xs text-green-600 bg-green-50 rounded-lg p-2">
                        <strong>Impact :</strong> {item.impact}
                      </div>
                      <div className="text-xs text-blue-600 bg-blue-50 rounded-lg p-2">
                        <strong>Exemple :</strong> {item.example}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Initiatives de durabilité */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Initiatives de Durabilité</h2>
        <p className="text-muted-foreground mb-8">
          L'industrie Bitcoin s'organise pour améliorer sa durabilité environnementale 
          à travers diverses initiatives et standards.
        </p>
        
        <div className="space-y-4">
          {sustainabilityInitiatives.map((initiative, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                {index < sustainabilityInitiatives.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-green-300 to-emerald-300 mt-2"></div>
                )}
              </div>
              <Card className="flex-1 p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <h3 className="font-semibold">{initiative.initiative}</h3>
                  <Badge variant="outline" className="text-xs w-fit">
                    {initiative.timeline}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{initiative.description}</p>
                <div className="text-xs">
                  <strong className="text-green-600">Impact :</strong> {initiative.impact}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Card>

      {/* Innovations technologiques */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Innovations Technologiques</h2>
        <p className="text-muted-foreground mb-8">
          Les innovations technologiques révolutionnent l'efficacité énergétique 
          et la durabilité du minage Bitcoin.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {innovations.map((innovation, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold mb-3">{innovation.innovation}</h3>
              <p className="text-sm text-muted-foreground mb-4">{innovation.description}</p>
              <div className="space-y-2">
                <div className="text-xs text-blue-600 bg-blue-50 rounded-lg p-2">
                  <strong>Exemple :</strong> {innovation.example}
                </div>
                <div className="text-xs text-green-600 bg-green-50 rounded-lg p-2">
                  <strong>Potentiel :</strong> {innovation.potential}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Projections futures */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-900">Projections Futures</h2>
        <p className="text-green-800 mb-8">
          L'évolution attendue de la durabilité environnementale de Bitcoin dans les prochaines décennies.
        </p>
        
        <div className="space-y-6">
          {futureProjections.map((projection, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-lg flex items-center justify-center font-bold">
                  {projection.year}
                </div>
                <div className="flex-1 grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Énergies renouvelables</div>
                    <div className="text-lg font-semibold text-green-600">{projection.renewableTarget}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Amélioration efficacité</div>
                    <div className="text-lg font-semibold text-blue-600">{projection.efficiency}</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Développements clés :</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {projection.keyDevelopments.map((dev, idx) => (
                    <li key={idx}>• {dev}</li>
                  ))}
                </ul>
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
                <span>Bitcoin consomme <strong>0.05% de l'énergie mondiale</strong>, comparable à d'autres secteurs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>58% du minage</strong> utilise déjà des énergies renouvelables</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Bitcoin <strong>accélère</strong> le développement d'énergies propres</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>innovations continues</strong> améliorent l'efficacité énergétique</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Explorez les données et analyses officielles sur l'impact environnemental de Bitcoin.
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
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
