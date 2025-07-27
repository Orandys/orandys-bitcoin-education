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
  Globe,
  Coins,
  AlertTriangle,
  TrendingDown,
  Cpu,
  ExternalLink,
  Calendar,
  ChevronRight
} from "lucide-react";
import { courseSections } from "./CourseNavigation";

interface LessonTwoPageProps {
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

export function LessonTwoPage({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: LessonTwoPageProps) {
  const digitalAttempts = [
    {
      name: "DigiCash",
      creator: "David Chaum",
      year: "1989",
      innovation: "Cryptographie pour l'anonymat",
      description: "Première monnaie numérique avec cryptographie avancée",
      failureReason: "Centralisation, dépendance aux banques",
      legacy: "Bases cryptographiques pour les futures monnaies",
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "E-gold",
      creator: "Douglas Jackson",
      year: "1996",
      innovation: "Adossement à l'or physique",
      description: "Monnaie numérique garantie par des réserves d'or",
      failureReason: "Problèmes légaux, blanchiment d'argent",
      legacy: "Démonstration de la demande pour l'or numérique",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      name: "Hashcash",
      creator: "Adam Back",
      year: "1997",
      innovation: "Preuve de travail (Proof of Work)",
      description: "Système anti-spam basé sur le calcul cryptographique",
      failureReason: "Pas conçu comme monnaie",
      legacy: "Mécanisme de consensus utilisé par Bitcoin",
      color: "bg-purple-50 border-purple-200"
    },
    {
      name: "B-money",
      creator: "Wei Dai",
      year: "1998",
      innovation: "Réseau décentralisé sans autorité",
      description: "Proposition théorique de monnaie décentralisée",
      failureReason: "Jamais implémenté",
      legacy: "Inspiration directe pour Bitcoin",
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Bit Gold",
      creator: "Nick Szabo",
      year: "1998",
      innovation: "Combinaison PoW + registre décentralisé",
      description: "Proposait un or numérique décentralisé",
      failureReason: "Problème de la double dépense non résolu",
      legacy: "Architecture proche de Bitcoin",
      color: "bg-orange-50 border-orange-200"
    },
    {
      name: "RPOW",
      creator: "Hal Finney",
      year: "2004",
      innovation: "Preuve de travail réutilisable",
      description: "Permettait de transférer des preuves de travail",
      failureReason: "Centralisation du serveur",
      legacy: "Pont entre Hashcash et Bitcoin",
      color: "bg-red-50 border-red-200"
    }
  ];

  const keyInnovations = [
    {
      innovation: "Cryptographie asymétrique",
      description: "Permet l'authentification sans révéler de secrets",
      inventors: "Diffie-Hellman, RSA",
      bitcoinUse: "Signatures numériques et adresses",
      year: "1976-1977"
    },
    {
      innovation: "Fonction de hachage",
      description: "Transforme n'importe quelle donnée en empreinte unique",
      inventors: "NSA (SHA), Rivest (MD5)",
      bitcoinUse: "Identifiants de blocs et transactions",
      year: "1990s"
    },
    {
      innovation: "Arbres de Merkle",
      description: "Structure de données pour vérifier l'intégrité",
      inventors: "Ralph Merkle",
      bitcoinUse: "Optimisation des vérifications",
      year: "1979"
    },
    {
      innovation: "Preuve de travail",
      description: "Mécanisme anti-spam par calcul coûteux",
      inventors: "Adam Back",
      bitcoinUse: "Consensus et sécurisation",
      year: "1997"
    }
  ];

  const problems = [
    {
      problem: "Double spending",
      description: "Comment empêcher de dépenser deux fois le même argent numérique ?",
      traditionalSolution: "Banque centrale qui valide chaque transaction",
      limitation: "Nécessite un tiers de confiance central",
      color: "bg-red-50"
    },
    {
      problem: "Consensus distribué",
      description: "Comment se mettre d'accord sans autorité centrale ?",
      traditionalSolution: "Algorithmes de consensus académiques",
      limitation: "Ne fonctionnent pas avec des acteurs malveillants",
      color: "bg-orange-50"
    },
    {
      problem: "Bootstrapping",
      description: "Comment donner une valeur initiale à une nouvelle monnaie ?",
      traditionalSolution: "Adossement à l'or ou garantie gouvernementale",
      limitation: "Recrée une dépendance centrale",
      color: "bg-yellow-50"
    },
    {
      problem: "Identité et anonymat",
      description: "Comment concilier authentification et vie privée ?",
      traditionalSolution: "Comptes nominatifs auprès d'institutions",
      limitation: "Perte de confidentialité totale",
      color: "bg-blue-50"
    }
  ];

  const timeline = [
    { year: "1976", event: "Cryptographie à clé publique", impact: "Bases de la sécurité numérique" },
    { year: "1989", event: "DigiCash", impact: "Première monnaie cryptographique" },
    { year: "1991", event: "Horodatage cryptographique", impact: "Preuves d'antériorité" },
    { year: "1997", event: "Hashcash", impact: "Preuve de travail anti-spam" },
    { year: "1998", event: "B-money & Bit Gold", impact: "Concepts de monnaie décentralisée" },
    { year: "2004", event: "RPOW", impact: "Preuves de travail transférables" },
    { year: "2008", event: "Bitcoin", impact: "Premier système fonctionnel" }
  ];

  const resources = [
    {
      title: "The Cypherpunks Mailing List Archives",
      type: "Archives historiques",
      duration: "Variable",
      description: "Discussions originales qui ont mené à Bitcoin",
      icon: <FileText className="w-5 h-5" />,
      url: "https://cypherpunks.venona.com/date/"
    },
    {
      title: "Digital Gold - Nathaniel Popper",
      type: "Livre",
      duration: "6h",
      description: "Histoire des tentatives de monnaie numérique",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://www.amazon.fr/Digital-Gold-Bitcoin-Millionaires-Reinvent/dp/0062362496"
    },
    {
      title: "The Genesis Files - Aaron van Wirdum",
      type: "Série d'articles",
      duration: "2h",
      description: "Analyse détaillée des précurseurs de Bitcoin",
      icon: <FileText className="w-5 h-5" />,
      url: "https://bitcoinmagazine.com/culture/genesis-files-how-david-chaums-ecash-spawned-cypherpunk-dream"
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
        <span className="text-foreground">Tentatives monétaires précédentes</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Cpu className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Tentatives monétaires précédentes</h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Les précurseurs de Bitcoin et leurs enseignements
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
            <span>Niveau débutant</span>
          </div>
          <Badge variant="outline">
            Module 1 - Introduction
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
              Bitcoin n'est pas apparu du néant. Il s'appuie sur plus de 30 années de recherches et 
              de tentatives pour créer une monnaie numérique fonctionnelle. Cette leçon explore 
              les systèmes précurseurs et les innovations qu'ils ont apportées.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre ces échecs et succès partiels nous aide à mieux saisir le génie de Bitcoin 
              et pourquoi il a réussi là où les autres ont échoué.
            </p>
          </div>
        </div>
      </Card>

      {/* Timeline */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-indigo-900">Chronologie des Innovations</h2>
        <p className="text-indigo-800 mb-8">
          Trois décennies d'innovations cryptographiques et monétaires ont pavé la voie à Bitcoin.
        </p>
        
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {item.year}
              </div>
              <div className="flex-1 bg-white rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-1">{item.event}</h3>
                <p className="text-sm text-muted-foreground">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Digital Currency Attempts */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Les Tentatives de Monnaie Numérique</h2>
        <p className="text-muted-foreground mb-8">
          Chaque tentative a apporté une innovation importante, mais aucune n'a résolu 
          tous les problèmes simultanément.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalAttempts.map((attempt, index) => (
            <Card key={index} className={`p-6 border-2 ${attempt.color} hover:shadow-lg transition-shadow`}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">{attempt.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {attempt.year}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">par {attempt.creator}</p>
                <p className="text-sm text-muted-foreground mb-3">{attempt.description}</p>
              </div>
              
              <div className="space-y-3 text-xs">
                <div className="bg-green-50 rounded-lg p-2">
                  <strong className="text-green-700">Innovation :</strong>
                  <p className="text-green-600">{attempt.innovation}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-2">
                  <strong className="text-red-700">Échec :</strong>
                  <p className="text-red-600">{attempt.failureReason}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <strong className="text-blue-700">Héritage :</strong>
                  <p className="text-blue-600">{attempt.legacy}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Key Innovations */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Innovations Cryptographiques Fondamentales</h2>
        <p className="text-muted-foreground mb-8">
          Bitcoin combine brillamment ces innovations développées indépendamment 
          au cours des décennies précédentes.
        </p>
        
        <div className="space-y-6">
          {keyInnovations.map((innovation, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold">{innovation.innovation}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{innovation.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-700">Inventeurs :</strong>
                      <p className="text-gray-600">{innovation.inventors} ({innovation.year})</p>
                    </div>
                    <div>
                      <strong className="text-purple-700">Usage dans Bitcoin :</strong>
                      <p className="text-purple-600">{innovation.bitcoinUse}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Technical Problems */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Les Défis Techniques Majeurs</h2>
        <p className="text-muted-foreground mb-8">
          Ces problèmes fondamentaux ont fait échouer toutes les tentatives 
          précédentes de monnaie numérique décentralisée.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className={`p-6 ${problem.color} border-2`}>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                <h3 className="font-semibold text-lg">{problem.problem}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{problem.description}</p>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-700">Solution traditionnelle :</strong>
                  <p className="text-gray-600">{problem.traditionalSolution}</p>
                </div>
                <div>
                  <strong className="text-red-700">Limitation :</strong>
                  <p className="text-red-600">{problem.limitation}</p>
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
                <span>Bitcoin s'appuie sur <strong>30 ans de recherches</strong> et d'innovations cryptographiques</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Chaque tentative précédente a échoué sur <strong>un ou plusieurs problèmes fondamentaux</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Le génie de Bitcoin est de <strong>combiner toutes ces innovations</strong> en un système cohérent</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Ces échecs ont fourni des <strong>leçons cruciales</strong> pour concevoir Bitcoin</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Explorez l'histoire fascinante des précurseurs de Bitcoin.
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
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}