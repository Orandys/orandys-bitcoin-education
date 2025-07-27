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
  Key,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Hash,
  Shield,
  ExternalLink,
  Copy,
  CheckCircle2,
  AlertTriangle,
  Network
} from "lucide-react";

interface TechnicalLessonFourProps {
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

export function TechnicalLessonFour({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: TechnicalLessonFourProps) {
  const keyPairConcepts = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Clé Privée",
      description: "Nombre secret qui prouve votre propriété des bitcoins",
      details: [
        "256 bits (64 caractères hexadécimaux)",
        "Générée aléatoirement",
        "Doit rester absolument secrète",
        "Permet de signer les transactions"
      ],
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <Unlock className="w-8 h-8" />,
      title: "Clé Publique",
      description: "Dérivée mathématiquement de la clé privée",
      details: [
        "Points sur courbe elliptique (secp256k1)",
        "Peut être partagée publiquement",
        "Permet de vérifier les signatures",
        "Base pour générer les adresses"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Adresse Bitcoin",
      description: "Hash de la clé publique, utilisée pour recevoir des paiements",
      details: [
        "Dérivée de la clé publique",
        "Plus courte et pratique",
        "Peut être partagée librement",
        "Formats : Legacy, SegWit, Taproot"
      ],
      color: "bg-blue-50 border-blue-200"
    }
  ];

  const cryptographyProcess = [
    {
      step: "Génération de la clé privée",
      description: "Nombre aléatoire de 256 bits",
      example: "K = 0x18e14a7b6a307f426a94f8114701e7c8e774e7f9a47e2c2035db29a206321725",
      security: "2^256 possibilités (plus que d'atomes dans l'univers visible)",
      icon: <Key className="w-6 h-6" />
    },
    {
      step: "Calcul de la clé publique",
      description: "Multiplication par point générateur sur courbe elliptique",
      example: "K * G = (x, y) où G est le point générateur",
      security: "Impossible de retrouver K à partir de la clé publique",
      icon: <Network className="w-6 h-6" />
    },
    {
      step: "Génération de l'adresse",
      description: "Hash160 (SHA256 + RIPEMD160) de la clé publique",
      example: "HASH160(clé_publique) + checksum = adresse",
      security: "Protection supplémentaire contre l'informatique quantique",
      icon: <Hash className="w-6 h-6" />
    },
    {
      step: "Signature numérique",
      description: "Création d'une preuve cryptographique avec la clé privée",
      example: "ECDSA signature de la transaction",
      security: "Prouve la propriété sans révéler la clé privée",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  const addressFormats = [
    {
      format: "Legacy (P2PKH)",
      prefix: "1...",
      example: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      description: "Format original Bitcoin",
      advantages: ["Compatible partout", "Simple", "Éprouvé"],
      disadvantages: ["Frais plus élevés", "Transactions plus lourdes"],
      usage: "~30% des transactions"
    },
    {
      format: "SegWit (P2SH-P2WPKH)",
      prefix: "3...",
      example: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
      description: "SegWit wrapped dans P2SH",
      advantages: ["Frais réduits", "Largement compatible"],
      disadvantages: ["Plus complexe", "Pas optimal"],
      usage: "~50% des transactions"
    },
    {
      format: "Native SegWit (Bech32)",
      prefix: "bc1q...",
      example: "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4",
      description: "SegWit natif version 0",
      advantages: ["Frais minimaux", "Efficace", "Détection d'erreurs"],
      disadvantages: ["Support encore limité"],
      usage: "~15% des transactions"
    },
    {
      format: "Taproot (Bech32m)",
      prefix: "bc1p...",
      example: "bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297",
      description: "Dernière innovation Bitcoin",
      advantages: ["Privacy améliorée", "Scripts complexes", "Efficacité"],
      disadvantages: ["Support très récent", "Complexité"],
      usage: "~5% des transactions"
    }
  ];

  const signatureProcess = [
    {
      phase: "Préparation",
      description: "Construction du message à signer",
      steps: [
        "Sérialisation de la transaction",
        "Ajout du SIGHASH type",
        "Hash SHA256 double du message"
      ],
      importance: "Assure l'intégrité des données signées"
    },
    {
      phase: "Signature ECDSA",
      description: "Création de la signature avec la clé privée",
      steps: [
        "Génération d'un nonce aléatoire k",
        "Calcul de r = (k * G).x",
        "Calcul de s = k^(-1) * (hash + r * clé_privée)"
      ],
      importance: "Prouve la possession de la clé privée"
    },
    {
      phase: "Vérification",
      description: "Validation de la signature par le réseau",
      steps: [
        "Récupération des paramètres (r, s)",
        "Vérification avec la clé publique",
        "Validation des contraintes ECDSA"
      ],
      importance: "Confirme l'authenticité sans révéler de secrets"
    }
  ];

  const securityPrinciples = [
    {
      principle: "Garde de la clé privée",
      description: "La clé privée ne doit jamais être partagée ou exposée",
      goodPractices: [
        "Stockage offline (cold storage)",
        "Hardware wallets pour clés importantes",
        "Jamais de stockage numérique non chiffré"
      ],
      risks: [
        "Vol = perte définitive des fonds",
        "Malware sur ordinateurs connectés",
        "Phishing et ingénierie sociale"
      ]
    },
    {
      principle: "Vérification des signatures",
      description: "Toujours vérifier l'authenticité des transactions",
      goodPractices: [
        "Utiliser des nœuds complets",
        "Vérifier les checksums d'adresses",
        "Confirmer les détails avant signature"
      ],
      risks: [
        "Transactions frauduleuses",
        "Attaques man-in-the-middle",
        "Adresses malveillantes"
      ]
    },
    {
      principle: "Gestion des adresses",
      description: "Utiliser de nouvelles adresses pour la privacy",
      goodPractices: [
        "Nouvelle adresse pour chaque transaction",
        "HD wallets avec dérivation automatique",
        "Éviter la réutilisation d'adresses"
      ],
      risks: [
        "Traçabilité des transactions",
        "Perte de confidentialité",
        "Analyse de blockchain"
      ]
    }
  ];

  const quantumThreat = {
    threat: "Ordinateurs quantiques suffisamment puissants",
    timeframe: "10-20 ans (estimation optimiste)",
    impact: "Pourraient casser ECDSA et retrouver clés privées",
    protection: "Adresses Bitcoin offrent une protection supplémentaire",
    solutions: [
      "Recherche sur signatures résistantes aux quantiques",
      "Possible upgrade du protocole Bitcoin",
      "Hash des clés publiques comme protection temporaire"
    ],
    recommendation: "Pas de panique immédiate, mais surveillance active"
  };

  const resources = [
    {
      title: "Elliptic Curve Cryptography Explained",
      type: "Article technique",
      duration: "45 min",
      description: "Comprendre les mathématiques derrière Bitcoin",
      icon: <FileText className="w-5 h-5" />,
      url: "https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/"
    },
    {
      title: "Bitcoin Address Generator",
      type: "Outil éducatif",
      duration: "15 min",
      description: "Voir la génération d'adresses en action",
      icon: <Play className="w-5 h-5" />,
      url: "https://www.bitaddress.org/"
    },
    {
      title: "Digital Signatures Deep Dive",
      type: "Vidéo technique",
      duration: "35 min",
      description: "Fonctionnement détaillé des signatures ECDSA",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.youtube.com/watch?v=Aq3a-_O2NcI"
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
        <span className="text-foreground">Public / Private key</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Key className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Public / Private Key</h1>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 w-fit">
                Leçon 4/6
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Les fondements cryptographiques de la propriété Bitcoin
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
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-orange-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              La cryptographie à clé publique est le pilier de la sécurité Bitcoin. 
              Cette technologie révolutionnaire permet de prouver la propriété 
              et d'autoriser des transactions sans révéler d'informations secrètes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre ces concepts est essentiel pour maîtriser la sécurité 
              Bitcoin et utiliser le réseau en toute confiance.
            </p>
          </div>
        </div>
      </Card>

      {/* Key Pair Concepts */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Cryptographie à Clé Publique</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Le système Bitcoin repose sur des paires de clés mathématiquement liées 
          qui permettent l'authentification sans partage de secrets.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyPairConcepts.map((concept, index) => (
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

      {/* Cryptography Process */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Processus Cryptographique</h2>
        <p className="text-muted-foreground mb-8">
          De la génération d'une clé privée à la signature d'une transaction, 
          voici le processus mathématique complet.
        </p>
        
        <div className="space-y-6">
          {cryptographyProcess.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center">
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
                  
                  <div className="grid lg:grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <strong className="text-blue-700">Exemple technique :</strong>
                      <code className="text-blue-600 text-xs block mt-1 font-mono break-all">
                        {step.example}
                      </code>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <strong className="text-green-700">Sécurité :</strong>
                      <p className="text-green-600 text-xs mt-1">{step.security}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Address Formats */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Formats d'Adresses Bitcoin</h2>
        <p className="text-blue-800 mb-8">
          Bitcoin a évolué avec différents formats d'adresses, chacun avec ses avantages spécifiques.
        </p>
        
        <div className="space-y-6">
          {addressFormats.map((format, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold">{format.format}</h3>
                    <Badge variant="outline" className="text-xs">{format.usage}</Badge>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-600 mb-1">Format: {format.prefix}</div>
                    <code className="text-sm font-mono break-all">{format.example}</code>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{format.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2 text-green-600">Avantages :</h4>
                      <ul className="space-y-1">
                        {format.advantages.map((adv, idx) => (
                          <li key={idx} className="text-green-700">+ {adv}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-600">Inconvénients :</h4>
                      <ul className="space-y-1">
                        {format.disadvantages.map((dis, idx) => (
                          <li key={idx} className="text-red-700">- {dis}</li>
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

      {/* Signature Process */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Processus de Signature Numérique</h2>
        <p className="text-muted-foreground mb-8">
          La signature numérique permet de prouver l'autorisation d'une transaction 
          sans révéler la clé privée.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {signatureProcess.map((phase, index) => (
            <Card key={index} className="p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-semibold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{phase.phase}</h3>
                <p className="text-muted-foreground mb-4">{phase.description}</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2 text-sm">Étapes :</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {phase.steps.map((step, idx) => (
                      <li key={idx}>• {step}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-medium text-green-700 text-sm">Importance :</h4>
                  <p className="text-green-600 text-xs">{phase.importance}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Security Principles */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Principes de Sécurité</h2>
        <p className="text-muted-foreground mb-8">
          Bonnes pratiques essentielles pour protéger vos clés et transactions.
        </p>
        
        <div className="space-y-6">
          {securityPrinciples.map((principle, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-lg mb-3">{principle.principle}</h3>
              <p className="text-muted-foreground mb-4">{principle.description}</p>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-green-600">Bonnes pratiques :</h4>
                  <ul className="space-y-2 text-sm">
                    {principle.goodPractices.map((practice, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-green-700">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 text-red-600">Risques à éviter :</h4>
                  <ul className="space-y-2 text-sm">
                    {principle.risks.map((risk, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-red-700">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Quantum Threat */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-yellow-900">Menace Quantique</h2>
        <div className="flex items-start gap-4 mb-6">
          <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg mb-2">{quantumThreat.threat}</h3>
            <p className="text-muted-foreground mb-4">{quantumThreat.impact}</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-3">Échéance :</h4>
            <p className="text-sm text-muted-foreground mb-2">{quantumThreat.timeframe}</p>
            <p className="text-sm text-blue-600">{quantumThreat.protection}</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Solutions en développement :</h4>
            <ul className="text-sm space-y-1">
              {quantumThreat.solutions.map((solution, idx) => (
                <li key={idx} className="text-muted-foreground">• {solution}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Recommandation :</h4>
            <p className="text-sm text-green-600">{quantumThreat.recommendation}</p>
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
                <span>La <strong>clé privée</strong> est le secret qui prouve la propriété des bitcoins</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La <strong>clé publique</strong> dérive mathématiquement de la clé privée (sens unique)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>signatures numériques</strong> prouvent l'autorisation sans révéler de secrets</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Différents <strong>formats d'adresses</strong> offrent des avantages spécifiques</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Approfondissez vos connaissances en cryptographie Bitcoin.
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
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}