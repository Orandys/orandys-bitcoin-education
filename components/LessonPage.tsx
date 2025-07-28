import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const commodityMoneyImage = 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80'; // Placeholder for commodity money
const metallicMoneyImage = 'https://images.unsplash.com/photo-1528200489338-0b6edf96ca33?w=400&q=80'; // Placeholder for metallic money  
const paperMoneyImage = 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80'; // Placeholder for paper money
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
  DollarSign,
  Coins,
  TrendingUp,
  Shield,
  Timer,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { courseSections } from "./CourseNavigation";

interface LessonPageProps {
  onBackToModule: () => void;
  onHomeClick: () => void;
  onNextLesson?: () => void;
  nextLessonInfo?: {
    title: string;
    moduleTitle?: string;
    isNextModule?: boolean;
  } | null;
  onSectionChange?: (sectionId: string) => void;
}

export function LessonPage({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: LessonPageProps) {
  const moneyFunctions = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Unité de compte",
      description: "Mesurer et comparer la valeur des biens et services",
      example: "Un café coûte 3€, une voiture 30 000€",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Moyen d'échange",
      description: "Faciliter les transactions commerciales",
      example: "J'achète du pain avec des euros",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Réserve de valeur",
      description: "Stocker la richesse dans le temps",
      example: "Épargner 1000€ pour plus tard",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const monetaryEvolution = [
    {
      period: "Préhistoire",
      system: "Troc direct",
      description: "Échange direct de biens contre biens",
      limitations: ["Coïncidence des besoins", "Indivisibilité", "Stockage difficile"],
      example: "J'échange 2 poules contre 1 chèvre",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format"
    },
    {
      period: "Antiquité",
      system: "Monnaies-marchandises",
      description: "Utilisation de biens précieux comme monnaie",
      limitations: ["Transport lourd", "Détérioration", "Standardisation"],
      example: "Coquillages, sel, bétail comme monnaie",
      image: commodityMoneyImage
    },
    {
      period: "Moyen Âge",
      system: "Monnaies métalliques",
      description: "Pièces d'or et d'argent frappées",
      limitations: ["Rognage", "Contrefaçon", "Stockage sécurisé"],
      example: "Pièces d'or du roi validées par son effigie",
      image: metallicMoneyImage
    },
    {
      period: "Renaissance",
      system: "Papier-monnaie",
      description: "Billets représentant l'or stocké",
      limitations: ["Confiance en l'émetteur", "Faux billets", "Conversion or"],
      example: "Billet de banque échangeable contre de l'or",
      image: paperMoneyImage
    },
    {
      period: "XXe siècle",
      system: "Monnaie fiduciaire",
      description: "Billets sans contrepartie or",
      limitations: ["Inflation", "Contrôle central", "Impression illimitée"],
      example: "Euro, dollar sans équivalent or",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format"
    },
    {
      period: "XXIe siècle",
      system: "Monnaie numérique",
      description: "Argent entièrement dématérialisé",
      limitations: ["Dépendance technologique", "Surveillance", "Centralisation"],
      example: "Cartes bancaires, virements, cryptomonnaies",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format"
    }
  ];

  const currentProblems = [
    {
      problem: "Inflation",
      description: "Perte de pouvoir d'achat avec le temps",
      cause: "Création monétaire excessive",
      impact: "1€ en 2000 = 0.70€ aujourd'hui",
      color: "bg-red-50 border-red-200"
    },
    {
      problem: "Centralisation",
      description: "Contrôle total par les banques centrales",
      cause: "Monopole de création monétaire",
      impact: "Décisions unilatérales affectant tous",
      color: "bg-orange-50 border-orange-200"
    },
    {
      problem: "Surveillance",
      description: "Traçabilité complète des transactions",
      cause: "Numérisation des paiements",
      impact: "Perte de confidentialité financière",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      problem: "Exclusion",
      description: "2 milliards de personnes sans compte bancaire",
      cause: "Barrières géographiques et économiques",
      impact: "Impossibilité d'épargner ou investir",
      color: "bg-gray-50 border-gray-200"
    }
  ];

  const resources = [
    {
      title: "L'Histoire de l'argent - Mike Maloney",
      type: "Série documentaire",
      duration: "4h30",
      description: "Histoire complète du système monétaire mondial",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.youtube.com/watch?v=DyV0OfU3-FU"
    },
    {
      title: "Eureka - L'histoire de l'argent",
      type: "Chaîne YouTube",
      duration: "25 min",
      description: "Vulgarisation excellente de l'évolution monétaire par Eureka",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.youtube.com/@Heu7reka"
    },
    {
      title: "The Ascent of Money - Niall Ferguson",
      type: "Livre",
      duration: "6h",
      description: "Histoire financière de l'humanité et évolution monétaire",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://en.wikipedia.org/wiki/The_Ascent_of_Money"
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
        <span className="text-foreground">À quoi sert l'argent ?</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <DollarSign className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">À quoi sert l'argent ?</h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprendre les fonctions fondamentales de la monnaie
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>15 min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Niveau débutant</span>
          </div>
          <Badge variant="outline">
            Module 1 - Introduction
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
              L'argent est si omniprésent dans nos vies qu'on oublie souvent de se demander : 
              pourquoi existe-t-il ? Cette leçon explore les fonctions essentielles de la monnaie 
              et les problèmes qu'elle résout dans nos sociétés.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre ces bases est crucial pour saisir pourquoi Bitcoin a été créé et 
              quels problèmes monétaires actuels il cherche à résoudre.
            </p>
          </div>
        </div>
      </Card>

      {/* Main Content: Les 3 fonctions de l'argent */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Les 3 Fonctions Essentielles de l'Argent</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Depuis des millénaires, toute forme de monnaie efficace remplit ces trois rôles fondamentaux 
          qui facilitent les échanges humains et permettent le développement économique.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moneyFunctions.map((func, index) => (
            <Card key={index} className={`p-6 border-2 ${func.color} hover:shadow-lg transition-shadow`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {func.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{func.title}</h3>
                <p className="text-muted-foreground mb-4">{func.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium mb-2">Exemple concret :</h4>
                <p className="text-sm text-muted-foreground italic">{func.example}</p>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Evolution Timeline */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Évolution Historique de la Monnaie</h2>
        <p className="text-muted-foreground mb-8">
          L'humanité a développé successivement différents systèmes monétaires, 
          chacun résolvant les limitations du précédent.
        </p>
        
        <div className="space-y-6">
          {monetaryEvolution.map((era, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                {index < monetaryEvolution.length - 1 && (
                  <div className="w-0.5 h-20 bg-gradient-to-b from-blue-300 to-purple-300 mt-2"></div>
                )}
              </div>
              <Card className="flex-1 p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="lg:w-32 lg:h-24 w-full h-40 flex-shrink-0">
                    <ImageWithFallback
                      src={era.image}
                      alt={`${era.system} - ${era.period}`}
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs w-fit">
                        {era.period}
                      </Badge>
                      <h3 className="font-semibold">{era.system}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{era.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <h4 className="font-medium mb-1">Exemple :</h4>
                        <p className="text-muted-foreground italic">{era.example}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Limitations :</h4>
                        <ul className="text-muted-foreground space-y-1">
                          {era.limitations.map((limitation, idx) => (
                            <li key={idx}>• {limitation}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Card>

      {/* Current Problems */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-red-900">Problèmes du Système Monétaire Actuel</h2>
        <p className="text-red-800 mb-8">
          Malgré son évolution, notre système monétaire moderne présente des défis majeurs 
          qui affectent des milliards de personnes.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {currentProblems.map((issue, index) => (
            <Card key={index} className={`p-6 border-2 ${issue.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg">{issue.problem}</h3>
              </div>
              <p className="text-muted-foreground mb-3">{issue.description}</p>
              <div className="space-y-2 text-sm">
                <div><strong className="text-red-600">Cause :</strong> {issue.cause}</div>
                <div><strong className="text-orange-600">Impact :</strong> {issue.impact}</div>
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
                <span>L'argent remplit <strong>3 fonctions essentielles</strong> : unité de compte, moyen d'échange et réserve de valeur</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Chaque système monétaire a <strong>évolué</strong> pour résoudre les limitations du précédent</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Le système actuel présente des <strong>problèmes majeurs</strong> : inflation, centralisation, surveillance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Ces problèmes motivent la recherche de <strong>nouvelles solutions monétaires</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Approfondissez vos connaissances sur l'histoire et les fonctions de la monnaie.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
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

      {/* Next Module Info */}
      {onSectionChange && (() => {
        const currentModuleIndex = courseSections.findIndex(section => section.id === 'introduction');
        const nextModule = currentModuleIndex < courseSections.length - 1 ? courseSections[currentModuleIndex + 1] : null;
        
        if (!nextModule) return null;

        return (
          <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-lg flex items-center justify-center">
                {nextModule.icon}
              </div>
              <div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-2">
                  Module suivant
                </Badge>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{nextModule.title}</h3>
              </div>
            </div>
            
            <p className="text-blue-800 mb-6">{nextModule.description}</p>
            
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-blue-900">Ce que vous apprendrez :</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {nextModule.lessons.slice(0, 4).map((lesson, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-blue-700">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{lesson.title}</span>
                  </div>
                ))}
                {nextModule.lessons.length > 4 && (
                  <div className="text-sm text-blue-600 italic">
                    ... et {nextModule.lessons.length - 4} autres leçons
                  </div>
                )}
              </div>
            </div>
            
            <Button 
              onClick={() => onSectionChange(nextModule.id)}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
            >
              Découvrir le module
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        );
      })()}

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
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}