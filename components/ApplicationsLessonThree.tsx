import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import { 
  FileText, 
  Video, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Users, 
  Lightbulb,
  AlertTriangle,
  TrendingDown,
  Shield,
  Activity,
  BarChart3,
  DollarSign,
  Zap,
  ExternalLink,
  Settings
} from "lucide-react";

interface ApplicationsLessonThreeProps {
  onBackToModule: () => void;
  onHomeClick: () => void;
  onNextLesson?: () => void;
  nextLessonInfo?: {
    title: string;
    moduleTitle?: string;
    isNextModule?: boolean;
  } | null;
}

export function ApplicationsLessonThree({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo }: ApplicationsLessonThreeProps) {
  const critiques = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Volatilité",
      description: "Fluctuations rapides et importantes du prix",
      example: "En 2017, Bitcoin est passé de 1 000$ à 20 000$ puis a chuté à 3 000$ en 2018",
      color: "bg-red-50 border-red-200",
      solutions: ["Stablecoins", "Contrats à terme", "Solutions de couverture"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Utilisation illégale",
      description: "Blanchiment d'argent, financement du terrorisme",
      example: "Silk Road utilisait Bitcoin pour faciliter les transactions sur le marché noir",
      color: "bg-orange-50 border-orange-200",
      solutions: ["Régulation KYC/AML", "Surveillance blockchain", "Conformité"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Impact environnemental",
      description: "Consommation d'énergie du minage",
      example: "En 2021, le minage consommait environ 121 TWh d'électricité par an",
      color: "bg-green-50 border-green-200",
      solutions: ["Énergies renouvelables", "Efficacité énergétique", "Compensation carbone"]
    }
  ];

  const limitations = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Scalabilité",
      description: "Capacité limitée de traitement des transactions",
      example: "7 transactions par seconde vs 24 000 pour Visa",
      color: "bg-blue-50 border-blue-200",
      solutions: ["Lightning Network", "Sidechains", "Optimisations"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Adoption limitée",
      description: "Acceptation restreinte comme moyen d'échange",
      example: "Peu de commerçants acceptent Bitcoin directement",
      color: "bg-purple-50 border-purple-200",
      solutions: ["Éducation", "Amélioration UX", "Régulation claire"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Complexité technique",
      description: "Utilisation complexe pour les non-techniques",
      example: "Gestion des clés privées, compréhension des adresses",
      color: "bg-yellow-50 border-yellow-200",
      solutions: ["Interfaces simplifiées", "Support technique", "Éducation"]
    }
  ];

  const caseStudies = [
    {
      period: "2017-2018",
      title: "Bulle spéculative",
      description: "Montée explosive puis chute brutale du prix",
      impact: "Impact sur la perception publique et la confiance",
      lesson: "Importance de l'éducation des investisseurs et de la régulation"
    },
    {
      period: "2013",
      title: "Fermeture de Silk Road",
      description: "Marché noir fermé par les autorités",
      impact: "Association de Bitcoin avec les activités criminelles",
      lesson: "Nécessité de distinguer la technologie de ses usages"
    },
    {
      period: "2021",
      title: "Débat environnemental",
      description: "Critiques sur la consommation énergétique",
      impact: "Remise en question de la durabilité",
      lesson: "Innovation vers des solutions plus vertes"
    }
  ];

  const resources = [
    {
      title: "BCE - Rapport sur les cryptomonnaies",
      type: "Rapport",
      duration: "20 min",
      description: "Position officielle de la Banque Centrale Européenne",
      icon: <FileText className="w-5 h-5" />,
      url: "https://www.ecb.europa.eu/pub/pdf/scpops/ecb.op223~cf862aaef6.en.pdf"
    },
    {
      title: "Bitcoin Mining Council - Sustainability Report",
      type: "Étude",
      duration: "15 min",
      description: "Données sur l'utilisation d'énergies renouvelables",
      icon: <BarChart3 className="w-5 h-5" />,
      url: "https://bitcoinminingcouncil.com/bitcoin-mining-council-sustainability-survey/"
    },
    {
      title: "Isabella - Critique de Bitcoin",
      type: "Vidéo",
      duration: "12 min",
      description: "Arguments contre l'adoption de Bitcoin",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.youtube.com/watch?v=YQ_xWvX1n9g"
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
        <span className="text-foreground">Critiques et limites</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Critiques et limites</h1>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 w-fit">
                Leçon 2/5
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprendre les défis et limitations actuels de Bitcoin
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>25 min</span>
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
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-blue-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Bien que Bitcoin offre de nombreux avantages, il est également confronté à plusieurs 
              critiques et limites. Ce chapitre explore en détail les critiques et les limites de Bitcoin, 
              leurs implications pour les utilisateurs, les investisseurs et les institutions financières.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il est essentiel de comprendre ces défis pour tirer parti des avantages de Bitcoin 
              tout en minimisant ses risques et en évaluant objectivement son potentiel.
            </p>
          </div>
        </div>
      </Card>

      {/* Main Content: Les critiques principales */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Les Principales Critiques de Bitcoin</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Bitcoin fait face à plusieurs critiques récurrentes qui remettent en question 
          son adoption massive et sa durabilité à long terme.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {critiques.map((critique, index) => (
            <Card key={index} className={`p-6 border-2 ${critique.color}`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {critique.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{critique.title}</h3>
                <p className="text-muted-foreground mb-4">{critique.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-medium mb-2">Exemple concret :</h4>
                <p className="text-sm text-muted-foreground italic">{critique.example}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Solutions proposées :</h4>
                <div className="flex flex-wrap gap-1">
                  {critique.solutions.map((solution, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">{solution}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Limites techniques et pratiques */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Limites Techniques et Pratiques</h2>
        <p className="text-muted-foreground mb-8">
          Au-delà des critiques, Bitcoin présente des limites intrinsèques qui affectent 
          son utilisation quotidienne et son potentiel de croissance.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {limitations.map((limitation, index) => (
            <Card key={index} className={`p-6 border-2 ${limitation.color}`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {limitation.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{limitation.title}</h3>
                <p className="text-muted-foreground mb-4">{limitation.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-medium mb-2">Exemple concret :</h4>
                <p className="text-sm text-muted-foreground italic">{limitation.example}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Solutions en développement :</h4>
                <div className="flex flex-wrap gap-1">
                  {limitation.solutions.map((solution, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">{solution}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Études de cas historiques */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Études de Cas Historiques</h2>
        <p className="text-muted-foreground mb-8">
          Analysons des événements concrets qui ont illustré les critiques et limites de Bitcoin, 
          et les leçons qui en ont été tirées.
        </p>
        
        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                {index < caseStudies.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-orange-300 to-yellow-300 mt-2"></div>
                )}
              </div>
              <Card className="flex-1 p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <Badge variant="outline" className="text-xs w-fit">
                    {study.period}
                  </Badge>
                  <h3 className="font-semibold">{study.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{study.description}</p>
                <div className="space-y-1 text-xs">
                  <div><strong className="text-orange-600">Impact :</strong> {study.impact}</div>
                  <div><strong className="text-green-600">Leçon apprise :</strong> {study.lesson}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Card>

      {/* Solutions et évolutions */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Solutions et Évolutions</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-blue-900">Volatilité</h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Stablecoins pour les paiements</li>
              <li>• Instruments de couverture</li>
              <li>• Maturation du marché</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-blue-900">Environnement</h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Transition vers les énergies vertes</li>
              <li>• Amélioration de l'efficacité</li>
              <li>• Projets de compensation carbone</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-blue-900">Scalabilité</h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Lightning Network</li>
              <li>• Sidechains et layers 2</li>
              <li>• Optimisations protocolaires</li>
            </ul>
          </div>
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
                <span>Les <strong>critiques de Bitcoin</strong> sont souvent fondées mais évoluent avec le temps et les innovations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>limites techniques</strong> font l'objet de recherches actives et de solutions innovantes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>L'<strong>analyse objective</strong> nécessite de peser les avantages contre les inconvénients</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>L'<strong>évolution continue</strong> de l'écosystème Bitcoin adresse progressivement ces défis</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Explorez différents points de vue sur les critiques et limites de Bitcoin.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
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
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
