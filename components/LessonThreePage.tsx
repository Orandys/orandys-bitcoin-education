import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
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
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building,
  Printer,
  AlertTriangle,
  ExternalLink,
  BarChart3
} from "lucide-react";

interface LessonThreePageProps {
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

export function LessonThreePage({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: LessonThreePageProps) {
  const monetaryProblems = [
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Création monétaire illimitée",
      description: "Les banques centrales peuvent imprimer de l'argent sans limite",
      example: "En 2020, la Fed a créé 3 000 milliards de dollars",
      consequences: ["Inflation", "Dévaluation", "Inégalités"],
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Taux d'intérêt artificiels",
      description: "Manipulation des taux par les autorités monétaires",
      example: "Taux négatifs en Europe et au Japon",
      consequences: ["Bulles spéculatives", "Mal-investissement", "Épargne découragée"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Système bancaire fractionnaire",
      description: "Les banques prêtent plus d'argent qu'elles n'en possèdent",
      example: "Réserves obligatoires de seulement 1-10%",
      consequences: ["Risque systémique", "Instabilité", "Crises bancaires"],
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  const inflationData = [
    {
      period: "1971-1980",
      event: "Fin des accords de Bretton Woods",
      inflation: "7.1% par an",
      cause: "Fin de la convertibilité dollar-or",
      impact: "Début de l'inflation structurelle"
    },
    {
      period: "2008-2010",
      event: "Crise financière mondiale",
      inflation: "Déflation puis QE",
      cause: "Plans de sauvetage et QE1",
      impact: "Bulles d'actifs et inégalités"
    },
    {
      period: "2020-2022",
      event: "Pandémie COVID-19",
      inflation: "8.5% pic aux USA",
      cause: "Stimuli massifs et création monétaire",
      impact: "Retour de l'inflation après 40 ans"
    },
    {
      period: "2023-2024",
      event: "Lutte contre l'inflation",
      inflation: "3-5% persistante",
      cause: "Hausses de taux agressives",
      impact: "Récession économique et tensions"
    }
  ];

  const centralBankPowers = [
    {
      power: "Création monétaire",
      description: "Capacité d'émettre de la nouvelle monnaie",
      mechanism: "Achat d'obligations, prêts aux banques",
      impact: "Inflation, dévaluation, redistribution",
      democraticControl: "Faible - indépendance proclamée"
    },
    {
      power: "Fixation des taux",
      description: "Détermination du coût de l'argent",
      mechanism: "Taux directeur, opérations d'open market",
      impact: "Cycles économiques, bulles, investissements",
      democraticControl: "Nulle - décisions technocratiques"
    },
    {
      power: "Supervision bancaire",
      description: "Régulation du système financier",
      mechanism: "Réserves obligatoires, stress tests",
      impact: "Stabilité systémique, moral hazard",
      democraticControl: "Indirecte - via gouvernements"
    },
    {
      power: "Prêteur en dernier ressort",
      description: "Sauvetage des institutions en difficulté",
      mechanism: "Liquidités d'urgence, rachats d'actifs",
      impact: "Socialisation des pertes, aléa moral",
      democraticControl: "Inexistante - décisions d'urgence"
    }
  ];

  const economicCycles = [
    {
      phase: "Expansion artificielle",
      description: "Crédit facile et taux bas stimulent l'économie",
      characteristics: ["Croissance du PIB", "Baisse du chômage", "Optimisme général"],
      duration: "5-10 ans",
      indicators: ["Prix des actifs en hausse", "Endettement croissant", "Investissements spéculatifs"]
    },
    {
      phase: "Surchauffe",
      description: "L'expansion atteint ses limites, tensions inflationnistes",
      characteristics: ["Inflation accélérée", "Pénuries sectorielles", "Bulles spéculatives"],
      duration: "1-2 ans",
      indicators: ["Taux réels négatifs", "Surinvestissement", "Déconnexion prix/réalité"]
    },
    {
      phase: "Correction",
      description: "Resserrement monétaire pour combattre l'inflation",
      characteristics: ["Hausse des taux", "Ralentissement", "Éclatement des bulles"],
      duration: "1-2 ans",
      indicators: ["Faillites d'entreprises", "Chute des marchés", "Crédit restreint"]
    },
    {
      phase: "Récession",
      description: "Ajustement économique et purge des excès",
      characteristics: ["Contraction du PIB", "Hausse du chômage", "Déflation des actifs"],
      duration: "1-3 ans",
      indicators: ["Liquidations forcées", "Faillites bancaires", "Destruction de richesse"]
    }
  ];

  const consequences = [
    {
      category: "Inégalités",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-red-500",
      effects: [
        {
          title: "Effet Cantillon",
          description: "Les premiers à recevoir la nouvelle monnaie en bénéficient",
          example: "Banques et institutions financières favorisées"
        },
        {
          title: "Inflation des actifs",
          description: "Les riches possèdent des actifs qui s'apprécient",
          example: "Actions, immobilier hors de portée de la classe moyenne"
        },
        {
          title: "Érosion des salaires",
          description: "Les revenus du travail ne suivent pas l'inflation",
          example: "Pouvoir d'achat en baisse pour les employés"
        }
      ]
    },
    {
      category: "Instabilité",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-orange-500",
      effects: [
        {
          title: "Cycles boom-bust",
          description: "Alternance entre expansion artificielle et récession",
          example: "Crise de 2008, bulle dot-com, crise de 1929"
        },
        {
          title: "Mal-investissement",
          description: "Allocation incorrecte des ressources due aux signaux faussés",
          example: "Surinvestissement immobilier, startups surévaluées"
        },
        {
          title: "Risque systémique",
          description: "Interconnexion des institutions crée des contagions",
          example: "Too big to fail, sauvetages publics nécessaires"
        }
      ]
    }
  ];

  const alternatives = [
    {
      name: "Étalon-or",
      period: "1870-1971",
      principle: "Monnaie adossée à l'or physique",
      advantages: ["Stabilité des prix", "Discipline budgétaire", "Confiance"],
      inconvenients: ["Rigidité", "Déflations", "Contraintes gouvernementales"],
      status: "Abandonné"
    },
    {
      name: "Monnaies concurrentes",
      period: "Théorique",
      principle: "Libre choix entre plusieurs monnaies",
      advantages: ["Innovation", "Concurrence", "Choix du consommateur"],
      inconvenients: ["Complexité", "Instabilité", "Coordination difficile"],
      status: "Expérimental"
    },
    {
      name: "Cryptomonnaies",
      period: "2009-présent",
      principle: "Monnaies décentralisées algorithmiques",
      advantages: ["Décentralisation", "Transparence", "Innovation"],
      inconvenients: ["Volatilité", "Adoption limitée", "Régulation"],
      status: "Émergent"
    }
  ];

  const resources = [
    {
      title: "The Creature from Jekyll Island - G. Edward Griffin",
      type: "Livre",
      duration: "8h",
      description: "Histoire de la création de la Réserve Fédérale américaine",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://www.amazon.fr/Creature-Jekyll-Island-Federal-Reserve/dp/091298645X"
    },
    {
      title: "Austrian Business Cycle Theory",
      type: "Article académique",
      duration: "45 min",
      description: "Théorie autrichienne des cycles économiques",
      icon: <FileText className="w-5 h-5" />,
      url: "https://mises.org/library/austrian-theory-business-cycle"
    },
    {
      title: "Hidden Secrets of Money - Mike Maloney",
      type: "Série documentaire",
      duration: "6h",
      description: "Histoire et fonctionnement du système monétaire actuel",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.youtube.com/watch?v=DyV0OfU3-FU&list=PLE88E9ICdipidHkTehs1VbFzgwrq1jkUJ"
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
          Introduction & origines
        </Button>
        <span>/</span>
        <span className="text-foreground">Politique monétaire actuelle</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Building className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Politique monétaire actuelle</h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprendre les mécanismes et problèmes du système monétaire moderne
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
            <span>Niveau intermédiaire</span>
          </div>
          <Badge variant="outline">
            Module 1 - Introduction
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
              Le système monétaire actuel, basé sur les monnaies fiduciaires et les banques centrales, 
              présente des mécanismes complexes qui influencent profondément nos économies. 
              Cette leçon analyse les rouages de ce système et ses conséquences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre ces mécanismes est essentiel pour saisir pourquoi Bitcoin propose 
              une alternative radicalement différente à ce modèle établi.
            </p>
          </div>
        </div>
      </Card>

      {/* Problèmes structurels */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Problèmes Structurels du Système Actuel</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Le système monétaire moderne repose sur des mécanismes qui créent des distorsions 
          économiques et sociales profondes.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {monetaryProblems.map((problem, index) => (
            <Card key={index} className={`p-6 border-2 ${problem.color} hover:shadow-lg transition-shadow`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {problem.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground mb-4">{problem.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-medium mb-2">Exemple concret :</h4>
                <p className="text-sm text-muted-foreground italic mb-3">{problem.example}</p>
                <h4 className="font-medium mb-2">Conséquences :</h4>
                <div className="flex flex-wrap gap-1">
                  {problem.consequences.map((consequence, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">{consequence}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Historique de l'inflation */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Historique de l'Inflation Moderne</h2>
        <p className="text-muted-foreground mb-8">
          L'évolution de l'inflation depuis l'abandon de l'étalon-or révèle 
          les dysfonctionnements du système monétaire actuel.
        </p>
        
        <div className="space-y-4">
          {inflationData.map((period, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                {index < inflationData.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-red-300 to-orange-300 mt-2"></div>
                )}
              </div>
              <Card className="flex-1 p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <Badge variant="outline" className="text-xs w-fit">
                    {period.period}
                  </Badge>
                  <h3 className="font-semibold">{period.event}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <div><strong className="text-red-600">Inflation :</strong> {period.inflation}</div>
                    <div><strong className="text-orange-600">Cause :</strong> {period.cause}</div>
                  </div>
                  <div>
                    <div><strong className="text-gray-700">Impact :</strong> {period.impact}</div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Card>

      {/* Pouvoirs des banques centrales */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Pouvoirs des Banques Centrales</h2>
        <p className="text-blue-800 mb-8">
          Les banques centrales exercent des pouvoirs considérables sur l'économie, 
          souvent sans véritable contrôle démocratique.
        </p>
        
        <div className="space-y-6">
          {centralBankPowers.map((power, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="grid lg:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{power.power}</h3>
                  <p className="text-sm text-muted-foreground">{power.description}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div><strong>Mécanisme :</strong> {power.mechanism}</div>
                  <div><strong>Impact :</strong> {power.impact}</div>
                </div>
                <div className="text-sm">
                  <div><strong>Contrôle démocratique :</strong></div>
                  <div className="text-red-600">{power.democraticControl}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Cycles économiques */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Cycles Économiques Artificiels</h2>
        <p className="text-muted-foreground mb-8">
          L'intervention monétaire crée des cycles boom-bust récurrents 
          qui déstabilisent l'économie et détruisent la richesse.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {economicCycles.map((cycle, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{cycle.phase}</h3>
                  <Badge variant="outline" className="text-xs">{cycle.duration}</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{cycle.description}</p>
              <div className="space-y-3 text-xs">
                <div>
                  <strong>Caractéristiques :</strong>
                  <ul className="mt-1 ml-4">
                    {cycle.characteristics.map((char, idx) => (
                      <li key={idx}>• {char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Indicateurs :</strong>
                  <ul className="mt-1 ml-4">
                    {cycle.indicators.map((indicator, idx) => (
                      <li key={idx}>• {indicator}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Conséquences sociales */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Conséquences Sociales et Économiques</h2>
        <p className="text-muted-foreground mb-8">
          Le système monétaire actuel génère des effets pervers qui touchent 
          particulièrement les classes moyennes et populaires.
        </p>
        
        <div className="space-y-8">
          {consequences.map((consequence, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${consequence.color} text-white rounded-lg flex items-center justify-center`}>
                  {consequence.icon}
                </div>
                <h3 className="text-xl font-semibold">{consequence.category}</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {consequence.effects.map((effect, idx) => (
                  <Card key={idx} className="p-6">
                    <h4 className="font-semibold mb-2">{effect.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{effect.description}</p>
                    <div className="text-xs text-blue-600 bg-blue-50 rounded-lg p-2">
                      <strong>Exemple :</strong> {effect.example}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Alternatives historiques */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Alternatives Monétaires</h2>
        <p className="text-muted-foreground mb-8">
          Face aux problèmes du système actuel, différentes alternatives 
          ont été proposées ou expérimentées à travers l'histoire.
        </p>
        
        <div className="space-y-6">
          {alternatives.map((alternative, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold">{alternative.name}</h3>
                    <Badge variant="outline" className="text-xs">{alternative.period}</Badge>
                    <Badge className={`text-xs ${
                      alternative.status === 'Abandonné' ? 'bg-red-500' :
                      alternative.status === 'Émergent' ? 'bg-green-500' : 'bg-orange-500'
                    }`}>
                      {alternative.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{alternative.principle}</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Avantages :</h4>
                      <ul className="text-muted-foreground space-y-1">
                        {alternative.advantages.map((advantage, idx) => (
                          <li key={idx}>+ {advantage}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Inconvénients :</h4>
                      <ul className="text-muted-foreground space-y-1">
                        {alternative.inconvenients.map((inconvenient, idx) => (
                          <li key={idx}>- {inconvenient}</li>
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

      {/* Key Insights */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <div className="flex items-start gap-4">
          <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-900">Points Clés à Retenir</h3>
            <ul className="space-y-3 text-green-800">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Le système monétaire actuel permet une <strong>création monétaire illimitée</strong> par les banques centrales</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Cette création monétaire génère des <strong>cycles boom-bust</strong> et de l'instabilité économique</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>inégalités se creusent</strong> par l'effet Cantillon et l'inflation des actifs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Il existe un besoin d'<strong>alternatives monétaires</strong> plus stables et équitables</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Approfondissez votre compréhension des mécanismes monétaires modernes.
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