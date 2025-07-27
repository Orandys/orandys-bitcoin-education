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
  Database,
  Network,
  Shield,
  Link,
  Copy,
  Server,
  ExternalLink,
  Hash,
  Globe,
  Lock
} from "lucide-react";

interface TechnicalLessonOneProps {
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

export function TechnicalLessonOne({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: TechnicalLessonOneProps) {
  const blockchainConcepts = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bloc",
      description: "Conteneur de transactions avec horodatage",
      details: [
        "Contient 1000-3000 transactions",
        "Hash du bloc précédent",
        "Horodatage précis",
        "Nonce pour la preuve de travail"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Chaîne",
      description: "Liaison cryptographique entre les blocs",
      details: [
        "Chaque bloc référence le précédent",
        "Modification impossible sans détection",
        "Ordre chronologique garanti",
        "Intégrité cryptographique"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Réseau",
      description: "Milliers de nœuds qui maintiennent la blockchain",
      details: [
        "15,000+ nœuds dans le monde",
        "Synchronisation automatique",
        "Redondance totale",
        "Résistance aux pannes"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const traditionalVsBlockchain = [
    {
      aspect: "Stockage",
      traditional: {
        method: "Base de données centralisée",
        location: "Serveurs de l'institution",
        control: "Administrateur unique",
        vulnerability: "Point de défaillance unique"
      },
      blockchain: {
        method: "Registre distribué",
        location: "Milliers d'ordinateurs",
        control: "Consensus du réseau",
        vulnerability: "Résilience extrême"
      }
    },
    {
      aspect: "Modification",
      traditional: {
        method: "Droits d'administrateur",
        location: "Interface de gestion",
        control: "Autorité centrale",
        vulnerability: "Modifications non détectables"
      },
      blockchain: {
        method: "Consensus cryptographique",
        location: "Validation par le réseau",
        control: "Règles mathématiques",
        vulnerability: "Immutabilité quasi-absolue"
      }
    },
    {
      aspect: "Vérification",
      traditional: {
        method: "Confiance en l'institution",
        location: "Audits périodiques",
        control: "Autorités de régulation",
        vulnerability: "Fraudes possibles"
      },
      blockchain: {
        method: "Vérification cryptographique",
        location: "Chaque participant",
        control: "Transparence totale",
        vulnerability: "Vérité mathématique"
      }
    }
  ];

  const blockStructure = [
    {
      component: "Block Header",
      description: "Métadonnées du bloc",
      size: "80 bytes",
      contains: ["Hash du bloc précédent", "Merkle Root", "Timestamp", "Difficulty", "Nonce"]
    },
    {
      component: "Transaction Counter",
      description: "Nombre de transactions",
      size: "1-9 bytes",
      contains: ["Nombre total de transactions dans le bloc"]
    },
    {
      component: "Transactions",
      description: "Liste des transactions",
      size: "Variable",
      contains: ["Toutes les transactions validées", "Inputs et Outputs", "Signatures", "Scripts"]
    }
  ];

  const networkTypes = [
    {
      type: "Full Nodes",
      description: "Nœuds complets qui stockent toute la blockchain",
      count: "~15,000",
      storage: "500+ GB",
      role: "Validation complète de toutes les règles",
      examples: ["Bitcoin Core", "Noeuds de minage", "Exchanges"]
    },
    {
      type: "SPV Nodes",
      description: "Nœuds légers qui vérifient partiellement",
      count: "Millions",
      storage: "< 100 MB",
      role: "Vérification des transactions personnelles",
      examples: ["Wallets mobiles", "Electrum", "Applications"]
    },
    {
      type: "Mining Nodes",
      description: "Nœuds qui créent de nouveaux blocs",
      count: "~20,000",
      storage: "500+ GB",
      role: "Sécurisation et extension de la blockchain",
      examples: ["Antpool", "F2Pool", "Mineurs individuels"]
    }
  ];

  const advantages = [
    {
      title: "Transparence",
      description: "Toutes les transactions sont publiques et vérifiables",
      impact: "Élimination de la corruption et des manipulations",
      example: "Voir en temps réel tous les mouvements de fonds"
    },
    {
      title: "Immutabilité",
      description: "Les données ne peuvent pas être modifiées rétroactivement",
      impact: "Confiance mathématique au lieu de confiance institutionnelle",
      example: "Historique inaltérable de toutes les transactions"
    },
    {
      title: "Décentralisation",
      description: "Aucun point de contrôle ou de défaillance unique",
      impact: "Résistance à la censure et aux interruptions",
      example: "Fonctionne même si 90% des nœuds s'arrêtent"
    },
    {
      title: "Accessibilité",
      description: "Ouvert à tous sans autorisation préalable",
      impact: "Inclusion financière mondiale",
      example: "N'importe qui peut participer avec internet"
    }
  ];

  const resources = [
    {
      title: "Bitcoin Whitepaper - Satoshi Nakamoto",
      type: "Document fondateur",
      duration: "30 min",
      description: "Le document original qui décrit la blockchain Bitcoin",
      icon: <FileText className="w-5 h-5" />,
      url: "https://bitcoin.org/bitcoin.pdf"
    },
    {
      title: "But How Does Bitcoin Actually Work?",
      type: "Vidéo explicative",
      duration: "26 min",
      description: "Explication visuelle du fonctionnement de la blockchain",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4"
    },
    {
      title: "Blockchain Demo - Anders Brownworth",
      type: "Outil interactif",
      duration: "15 min",
      description: "Démonstration interactive du hachage et des blocs",
      icon: <Play className="w-5 h-5" />,
      url: "https://andersbrownworth.com/blockchain/"
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
        <span className="text-foreground">Blockchain & registre distribué</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Database className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Blockchain & registre distribué</h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Les fondements techniques de la technologie Bitcoin
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
            <span>Niveau technique</span>
          </div>
          <Badge variant="outline">
            Module 2 - Technique
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
              La blockchain est l'innovation technique fondamentale qui rend Bitcoin possible. 
              Cette technologie révolutionnaire permet de maintenir un registre distribué 
              sans autorité centrale, résolvant des problèmes informatiques considérés 
              comme insolubles pendant des décennies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette leçon démystifie le fonctionnement de la blockchain Bitcoin et explique 
              comment elle garantit la sécurité et l'intégrité du réseau.
            </p>
          </div>
        </div>
      </Card>

      {/* Core Concepts */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Concepts Fondamentaux</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          La blockchain Bitcoin repose sur trois composants essentiels qui travaillent ensemble 
          pour créer un système de confiance décentralisé.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blockchainConcepts.map((concept, index) => (
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

      {/* Traditional vs Blockchain */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Système Traditionnel vs Blockchain</h2>
        <p className="text-muted-foreground mb-8">
          Comparaison détaillée entre les méthodes de stockage traditionnelles 
          et l'approche révolutionnaire de la blockchain.
        </p>
        
        <div className="space-y-6">
          {traditionalVsBlockchain.map((comparison, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">{comparison.aspect}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Traditional System */}
                <Card className="p-4 border-2 border-red-200 bg-red-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Server className="w-6 h-6 text-red-600" />
                    <h4 className="font-semibold text-red-800">Système Traditionnel</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div><strong>Méthode :</strong> {comparison.traditional.method}</div>
                    <div><strong>Localisation :</strong> {comparison.traditional.location}</div>
                    <div><strong>Contrôle :</strong> {comparison.traditional.control}</div>
                    <div className="text-red-600"><strong>Vulnérabilité :</strong> {comparison.traditional.vulnerability}</div>
                  </div>
                </Card>

                {/* Blockchain System */}
                <Card className="p-4 border-2 border-green-200 bg-green-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Network className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-green-800">Blockchain</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div><strong>Méthode :</strong> {comparison.blockchain.method}</div>
                    <div><strong>Localisation :</strong> {comparison.blockchain.location}</div>
                    <div><strong>Contrôle :</strong> {comparison.blockchain.control}</div>
                    <div className="text-green-600"><strong>Avantage :</strong> {comparison.blockchain.vulnerability}</div>
                  </div>
                </Card>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Block Structure */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-900">Structure d'un Bloc</h2>
        <p className="text-cyan-800 mb-8">
          Anatomie détaillée d'un bloc Bitcoin et de ses composants essentiels.
        </p>
        
        <div className="space-y-4">
          {blockStructure.map((component, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{component.component}</h3>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2">{component.size}</Badge>
                  <ul className="text-sm text-muted-foreground">
                    {component.contains.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Network Types */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Types de Nœuds dans le Réseau</h2>
        <p className="text-muted-foreground mb-8">
          Le réseau Bitcoin est composé de différents types de participants, 
          chacun jouant un rôle spécifique dans le maintien de la blockchain.
        </p>
        
        <div className="space-y-6">
          {networkTypes.map((nodeType, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold">{nodeType.type}</h3>
                      <p className="text-sm text-muted-foreground">{nodeType.description}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div><strong>Nombre :</strong> {nodeType.count}</div>
                      <div><strong>Stockage :</strong> {nodeType.storage}</div>
                    </div>
                    <div>
                      <div><strong>Rôle :</strong> {nodeType.role}</div>
                      <div><strong>Exemples :</strong> {nodeType.examples.join(", ")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Advantages */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Avantages de la Blockchain</h2>
        <p className="text-muted-foreground mb-8">
          Les bénéfices concrets que la technologie blockchain apporte 
          par rapport aux systèmes traditionnels.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-lg mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground mb-3">{advantage.description}</p>
              <div className="space-y-2 text-sm">
                <div className="bg-green-50 rounded-lg p-2">
                  <strong className="text-green-700">Impact :</strong>
                  <p className="text-green-600">{advantage.impact}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <strong className="text-blue-700">Exemple :</strong>
                  <p className="text-blue-600">{advantage.example}</p>
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
                <span>La blockchain est un <strong>registre distribué</strong> maintenu par des milliers de nœuds</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Chaque bloc contient un <strong>hash du bloc précédent</strong>, créant une chaîne inaltérable</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La <strong>décentralisation</strong> élimine les points de défaillance uniques</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La <strong>transparence cryptographique</strong> remplace la confiance institutionnelle</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Approfondissez votre compréhension technique de la blockchain Bitcoin.
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
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}