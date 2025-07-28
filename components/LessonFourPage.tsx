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
  User,
  Shield,
  Eye,
  EyeOff,
  Lock,
  Key,
  Globe,
  ExternalLink,
  MessageSquare,
  Code,
  Calendar
} from "lucide-react";

interface LessonFourPageProps {
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

export function LessonFourPage({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange: _onSectionChange }: LessonFourPageProps) {
  const cypherpunkPrinciples = [
    {
      icon: <EyeOff className="w-8 h-8" />,
      title: "Privacy by design",
      description: "La vie privée doit être intégrée dans la technologie",
      quote: "Privacy is necessary for an open society in the electronic age",
      application: "Cryptographie forte, anonymat, pseudonymat",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Décentralisation",
      description: "Éviter les points de contrôle uniques",
      quote: "The Net interprets censorship as damage and routes around it",
      application: "Réseaux peer-to-peer, consensus distribué",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code is law",
      description: "Les règles doivent être imposées par le code, pas par les institutions",
      quote: "Cypherpunks write code",
      application: "Smart contracts, protocoles auto-exécutants",
      color: "bg-green-50 border-green-200"
    }
  ];

  const keyCypherpunks = [
    {
      name: "David Chaum",
      contribution: "Paiements numériques anonymes",
      innovation: "DigiCash (1989) - première monnaie numérique",
      quote: "As society becomes more and more complex, individuals have more and more of a need for privacy",
      impact: "Bases cryptographiques de la monnaie numérique",
      period: "1980s-1990s"
    },
    {
      name: "Tim May",
      contribution: "Crypto-anarchisme et manifeste Cypherpunk",
      innovation: "Prédictions sur les cryptomonnaies décentralisées",
      quote: "Crypto anarchy is the cyberspatial realization of anarcho-capitalism",
      impact: "Vision politique de la décentralisation",
      period: "1990s"
    },
    {
      name: "Wei Dai",
      contribution: "B-money (1998)",
      innovation: "Première proposition de monnaie décentralisée",
      quote: "I hope this is a step toward making crypto-anarchy a practical as well as theoretical possibility",
      impact: "Inspiration directe pour Bitcoin",
      period: "1990s"
    },
    {
      name: "Nick Szabo",
      contribution: "Smart contracts et Bit Gold",
      innovation: "Concept d'or numérique décentralisé",
      quote: "Trusted third parties are security holes",
      impact: "Architecture conceptuelle de Bitcoin",
      period: "1990s-2000s"
    },
    {
      name: "Adam Back",
      contribution: "Hashcash et preuve de travail",
      innovation: "Mécanisme anti-spam par calcul",
      quote: "The ability to prove work is fundamental to digital scarcity",
      impact: "Mécanisme de consensus de Bitcoin",
      period: "1997-2008"
    },
    {
      name: "Hal Finney",
      contribution: "RPOW et premiers tests Bitcoin",
      innovation: "Preuve de travail réutilisable",
      quote: "Running bitcoin",
      impact: "Premier utilisateur et développeur Bitcoin",
      period: "2004-2009"
    }
  ];

  const satoshiMystery = [
    {
      aspect: "Identité",
      evidence: "Pseudonyme utilisé dans toutes communications",
      theories: ["Individu unique", "Groupe de développeurs", "Organisation gouvernementale"],
      clues: "Style d'écriture britannique, horaires de travail européens"
    },
    {
      aspect: "Compétences",
      evidence: "Expertise multiple en cryptographie, économie, informatique",
      theories: ["Académique expérimenté", "Développeur professionnel", "Polymath autodidacte"],
      clues: "Code de qualité professionnelle, compréhension des systèmes monétaires"
    },
    {
      aspect: "Motivations",
      evidence: "Timing de création pendant la crise financière 2008",
      theories: ["Idéalisme libertarian", "Recherche académique", "Disruption systémique"],
      clues: "Message genesis block, écrits sur la souveraineté monétaire"
    },
    {
      aspect: "Disparition",
      evidence: "Dernier message public en avril 2011",
      theories: ["Protection de l'anonymat", "Mission accomplie", "Contraintes externes"],
      clues: "Transfert progressif du développement à l'équipe"
    }
  ];

  const timeline = [
    {
      date: "31 octobre 2008",
      event: "Publication du White Paper",
      description: "\"Bitcoin: A Peer-to-Peer Electronic Cash System\"",
      significance: "Première description complète du système Bitcoin",
      context: "2 mois après l'effondrement de Lehman Brothers"
    },
    {
      date: "3 janvier 2009", 
      event: "Genesis Block",
      description: "Premier bloc miné avec message sur les banques",
      significance: "Lancement effectif du réseau Bitcoin",
      context: "\"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks\""
    },
    {
      date: "12 janvier 2009",
      event: "Première transaction",
      description: "10 BTC envoyés à Hal Finney",
      significance: "Première validation pratique du système",
      context: "Test entre créateur et premier adopter"
    },
    {
      date: "22 mai 2010",
      event: "Bitcoin Pizza Day",
      description: "10 000 BTC pour 2 pizzas",
      significance: "Première transaction commerciale documentée",
      context: "Établissement d'une valeur économique"
    },
    {
      date: "23 avril 2011",
      event: "Dernier message public",
      description: "Dernier post de Satoshi sur le forum",
      significance: "Fin de l'implication publique du créateur",
      context: "Passage de témoin à la communauté"
    }
  ];

  const innovations = [
    {
      problem: "Double spending",
      previousSolutions: "Serveurs centraux, tiers de confiance",
      satoshiSolution: "Blockchain avec preuve de travail",
      innovation: "Consensus décentralisé sans autorité centrale"
    },
    {
      problem: "Consensus distribué",
      previousSolutions: "Algorithmes académiques (Paxos, PBFT)",
      satoshiSolution: "Proof of Work avec incitations économiques",
      innovation: "Consensus résistant aux acteurs malveillants"
    },
    {
      problem: "Bootstrapping value",
      previousSolutions: "Adossement à l'or, garantie gouvernementale",
      satoshiSolution: "Coût énergétique de production + rareté programmée",
      innovation: "Valeur émergente par utilité et rareté"
    },
    {
      problem: "Identité vs anonymat",
      previousSolutions: "Comptes nominatifs ou anonymat total",
      satoshiSolution: "Pseudonymat avec clés cryptographiques",
      innovation: "Identité vérifiable sans révélation d'informations"
    }
  ];

  const legacy = [
    {
      category: "Technique",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-500",
      contributions: [
        {
          title: "Blockchain",
          description: "Structure de données immuable et transparente",
          impact: "Applications au-delà de la monnaie: supply chain, votation, etc."
        },
        {
          title: "Consensus PoW",
          description: "Mécanisme de consensus décentralisé",
          impact: "Sécurisation de réseaux sans autorité centrale"
        },
        {
          title: "Cryptomonnaies",
          description: "Monnaies programmables décentralisées",
          impact: "Écosystème de milliers de cryptomonnaies"
        }
      ]
    },
    {
      category: "Économique",
      icon: <Target className="w-6 h-6" />,
      color: "bg-green-500",
      contributions: [
        {
          title: "Politique monétaire fixe",
          description: "Offre limitée et prévisible",
          impact: "Alternative à l'inflation monétaire traditionnelle"
        },
        {
          title: "Désintermédiation financière",
          description: "Transactions sans intermédiaires",
          impact: "Remise en question du système bancaire"
        },
        {
          title: "Réserve de valeur numérique",
          description: "Or numérique décentralisé",
          impact: "Nouvelle classe d'actifs pour portefeuilles"
        }
      ]
    },
    {
      category: "Social",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500",
      contributions: [
        {
          title: "Inclusion financière",
          description: "Accès universel aux services financiers",
          impact: "Banking des populations non-bancarisées"
        },
        {
          title: "Résistance à la censure",
          description: "Transactions non-censurables",
          impact: "Liberté financière dans régimes autoritaires"
        },
        {
          title: "Souveraineté individuelle",
          description: "Contrôle total de ses fonds",
          impact: "Émancipation de la dépendance institutionnelle"
        }
      ]
    }
  ];

  const resources = [
    {
      title: "The Book of Satoshi - Phil Champagne",
      type: "Livre",
      duration: "6h",
      description: "Collection complète des écrits de Satoshi Nakamoto",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://www.amazon.fr/Book-Satoshi-Collected-Writings-Nakamoto/dp/0996061304"
    },
    {
      title: "Cypherpunks Mailing List Archives",
      type: "Archives historiques",
      duration: "Variable",
      description: "Discussions originales des années 1990-2000",
      icon: <MessageSquare className="w-5 h-5" />,
      url: "https://cypherpunks.venona.com/date/"
    },
    {
      title: "The Cypherpunk Revolution - Documentary",
      type: "Documentaire",
      duration: "60 min",
      description: "Histoire du mouvement cypherpunk et de ses figures",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.youtube.com/watch?v=9vM0iOMEPmY"
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
        <span className="text-foreground">Satoshi Nakamoto et les Cypherpunks</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <User className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Satoshi Nakamoto et les Cypherpunks</h1>
              <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 w-fit">
                Leçon 4/4
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              L'héritage intellectuel et les acteurs clés derrière Bitcoin
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
            Module 1 - Introduction
          </Badge>
        </div>
      </div>

      {/* Introduction */}
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-indigo-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Bitcoin n'est pas né du génie isolé d'un individu, mais s'inscrit dans un mouvement 
              intellectuel plus large : les Cypherpunks. Ces visionnaires ont posé les bases 
              conceptuelles et techniques qui ont rendu Bitcoin possible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette leçon explore l'héritage des Cypherpunks, le mystère de Satoshi Nakamoto, 
              et les innovations révolutionnaires qu'il a synthétisées pour créer Bitcoin.
            </p>
          </div>
        </div>
      </Card>

      {/* Cypherpunk Principles */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Principes Fondamentaux des Cypherpunks</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Le mouvement Cypherpunk des années 1990 a établi les principes philosophiques 
          et techniques qui guident Bitcoin aujourd'hui.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cypherpunkPrinciples.map((principle, index) => (
            <Card key={index} className={`p-6 border-2 ${principle.color} hover:shadow-lg transition-shadow`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {principle.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{principle.title}</h3>
                <p className="text-muted-foreground mb-4">{principle.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-medium mb-2">Citation emblématique :</h4>
                <p className="text-sm text-muted-foreground italic mb-3">"{principle.quote}"</p>
                <h4 className="font-medium mb-2">Application Bitcoin :</h4>
                <p className="text-sm text-muted-foreground">{principle.application}</p>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Key Cypherpunks */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Figures Clés du Mouvement Cypherpunk</h2>
        <p className="text-muted-foreground mb-8">
          Ces pionniers ont développé les concepts et technologies qui ont directement 
          inspiré la création de Bitcoin.
        </p>
        
        <div className="space-y-6">
          {keyCypherpunks.map((person, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{person.name}</h3>
                      <Badge variant="outline" className="text-xs mt-1">{person.period}</Badge>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <div><strong>Contribution :</strong> {person.contribution}</div>
                      <div><strong>Innovation :</strong> {person.innovation}</div>
                    </div>
                    <div>
                      <div><strong>Impact sur Bitcoin :</strong> {person.impact}</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm italic">"{person.quote}"</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Satoshi Mystery */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">Le Mystère Satoshi Nakamoto</h2>
        <p className="text-gray-800 mb-8">
          L'identité de Satoshi Nakamoto reste l'un des plus grands mystères de l'ère numérique. 
          Analysons les indices et théories autour de cette figure énigmatique.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {satoshiMystery.map((aspect, index) => (
            <Card key={index} className="p-6 bg-white">
              <h3 className="font-semibold text-lg mb-3">{aspect.aspect}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Preuves :</strong>
                  <p className="text-muted-foreground">{aspect.evidence}</p>
                </div>
                <div>
                  <strong>Théories :</strong>
                  <ul className="text-muted-foreground ml-4">
                    {aspect.theories.map((theory, idx) => (
                      <li key={idx}>• {theory}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Indices :</strong>
                  <p className="text-muted-foreground">{aspect.clues}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Timeline */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Chronologie de Satoshi</h2>
        <p className="text-muted-foreground mb-8">
          Les moments clés de l'implication publique de Satoshi Nakamoto dans le projet Bitcoin.
        </p>
        
        <div className="space-y-4">
          {timeline.map((event, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-indigo-300 to-purple-300 mt-2"></div>
                )}
              </div>
              <Card className="flex-1 p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <Badge variant="outline" className="text-xs w-fit">
                    {event.date}
                  </Badge>
                  <h3 className="font-semibold">{event.event}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong className="text-green-600">Signification :</strong>
                    <p className="text-green-700">{event.significance}</p>
                  </div>
                  <div>
                    <strong className="text-blue-600">Contexte :</strong>
                    <p className="text-blue-700">{event.context}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Card>

      {/* Innovations */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Innovations de Satoshi</h2>
        <p className="text-muted-foreground mb-8">
          Satoshi a brillamment synthétisé des technologies existantes pour résoudre 
          des problèmes considérés comme insolubles.
        </p>
        
        <div className="space-y-6">
          {innovations.map((innovation, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-lg mb-4">{innovation.problem}</h3>
              <div className="grid lg:grid-cols-3 gap-4 text-sm">
                <div className="bg-red-50 rounded-lg p-3">
                  <strong className="text-red-700">Solutions précédentes :</strong>
                  <p className="text-red-600 mt-1">{innovation.previousSolutions}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <strong className="text-green-700">Solution Satoshi :</strong>
                  <p className="text-green-600 mt-1">{innovation.satoshiSolution}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <strong className="text-blue-700">Innovation :</strong>
                  <p className="text-blue-600 mt-1">{innovation.innovation}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Legacy */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Héritage et Impact</h2>
        <p className="text-muted-foreground mb-8">
          L'œuvre de Satoshi et des Cypherpunks continue d'influencer le développement 
          technologique et social au-delà de Bitcoin.
        </p>
        
        <div className="space-y-8">
          {legacy.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${category.color} text-white rounded-lg flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.contributions.map((contribution, idx) => (
                  <Card key={idx} className="p-6">
                    <h4 className="font-semibold mb-2">{contribution.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{contribution.description}</p>
                    <div className="text-xs text-green-600 bg-green-50 rounded-lg p-2">
                      <strong>Impact :</strong> {contribution.impact}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
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
                <span>Bitcoin s'inscrit dans l'<strong>héritage des Cypherpunks</strong> et leurs principes de décentralisation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Satoshi Nakamoto a <strong>synthétisé brillamment</strong> 30 ans de recherches cryptographiques</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>L'<strong>anonymat de Satoshi</strong> protège Bitcoin de l'influence de son créateur</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>L'héritage dépasse Bitcoin et influence <strong>tout l'écosystème blockchain</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Plongez plus profondément dans l'histoire des Cypherpunks et de Satoshi Nakamoto.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
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
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 w-full sm:w-auto"
          >
            Continuer
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}