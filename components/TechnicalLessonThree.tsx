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
  Shield,
  Lock,
  Unlock,
  AlertTriangle,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  ExternalLink,
  Smartphone,
  HardDrive
} from "lucide-react";

interface TechnicalLessonThreeProps {
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

export function TechnicalLessonThree({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange: _onSectionChange }: TechnicalLessonThreeProps) {
  const seedPhraseBasics = [
    {
      icon: <Key className="w-8 h-8" />,
      title: "Seed Phrase",
      description: "Suite de 12 ou 24 mots qui génère toutes vos clés privées",
      details: [
        "Générée aléatoirement",
        "Standard BIP39",
        "2048 mots possibles",
        "Contrôle total du wallet"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Dérivation",
      description: "Processus mathématique qui crée des clés depuis la seed",
      details: [
        "Fonction déterministe",
        "Milliards d'adresses possibles",
        "Standard BIP32/BIP44",
        "Reproductible partout"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité",
      description: "Protection cryptographique de vos bitcoins",
      details: [
        "256 bits d'entropie",
        "Inviolable par force brute",
        "Backup complet",
        "Récupération universelle"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const securityLevels = [
    {
      level: "Critique",
      description: "Seed phrase stockée numériquement",
      risks: ["Malware", "Hack", "Perte de données", "Vol"],
      examples: ["Photo sur téléphone", "Fichier texte", "Email", "Cloud"],
      color: "bg-red-50 border-red-200",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />
    },
    {
      level: "Faible",
      description: "Seed phrase écrite mais mal protégée",
      risks: ["Vol physique", "Incendie", "Inondation", "Usure"],
      examples: ["Papier simple", "Carnet non sécurisé", "Post-it"],
      color: "bg-orange-50 border-orange-200",
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />
    },
    {
      level: "Bon",
      description: "Sauvegarde physique sécurisée",
      risks: ["Catastrophe naturelle", "Erreur humaine"],
      examples: ["Papier dans coffre", "Métal gravé", "Capsule étanche"],
      color: "bg-yellow-50 border-yellow-200",
      icon: <Shield className="w-6 h-6 text-yellow-600" />
    },
    {
      level: "Excellent",
      description: "Sauvegarde redondante et distribuée",
      risks: ["Événement cataclysmique multiple"],
      examples: ["Plusieurs coffres", "Métal + géolocalisation", "Multisig"],
      color: "bg-green-50 border-green-200",
      icon: <Shield className="w-6 h-6 text-green-600" />
    }
  ];

  const commonMistakes = [
    {
      mistake: "Stockage numérique",
      description: "Sauvegarder la seed phrase sur un appareil connecté",
      consequences: "Vol par malware, hack, fuite de données",
      correctMethod: "Écriture manuscrite sur support physique",
      severity: "Critique"
    },
    {
      mistake: "Partage de la seed",
      description: "Donner sa seed phrase à quelqu'un d'autre",
      consequences: "Vol total des fonds, perte de contrôle",
      correctMethod: "Ne jamais partager, même avec la famille",
      severity: "Critique"
    },
    {
      mistake: "Saisie sur site web",
      description: "Entrer sa seed phrase sur un site internet",
      consequences: "Phishing, vol immédiat des bitcoins",
      correctMethod: "Seuls les wallets légitimes demandent la seed",
      severity: "Critique"
    },
    {
      mistake: "Sauvegarde unique",
      description: "N'avoir qu'une seule copie de la seed phrase",
      consequences: "Perte définitive si destruction/perte",
      correctMethod: "Plusieurs copies en lieux différents",
      severity: "Élevé"
    },
    {
      mistake: "Mots dans l'ordre",
      description: "Laisser les mots dans l'ordre sur le même support",
      consequences: "Facilite le vol si découvert",
      correctMethod: "Diviser ou mélanger avec méthode personnelle",
      severity: "Moyen"
    },
    {
      mistake: "Pas de test",
      description: "Ne jamais vérifier que la sauvegarde fonctionne",
      consequences: "Découvrir l'erreur trop tard",
      correctMethod: "Tester la récupération avec petit montant",
      severity: "Élevé"
    }
  ];

  const storageMethods = [
    {
      method: "Papier + Plastification",
      durability: "5-20 ans",
      cost: "€",
      pros: ["Simple", "Bon marché", "Accessible"],
      cons: ["Fragile", "Lisible", "Périssable"],
      bestFor: "Débutants, petits montants"
    },
    {
      method: "Gravure sur métal",
      durability: "100+ ans",
      cost: "€€",
      pros: ["Très durable", "Résistant feu/eau", "Professionnel"],
      cons: ["Plus cher", "Outillage requis", "Visible"],
      bestFor: "Stockage long terme, gros montants"
    },
    {
      method: "Capsules cryptées",
      durability: "50+ ans",
      cost: "€€€",
      pros: ["Étanche", "Résistant", "Discret"],
      cons: ["Coûteux", "Complexe", "Spécialisé"],
      bestFor: "Stockage professionnel"
    },
    {
      method: "Multisig",
      durability: "Illimitée",
      cost: "€€€€",
      pros: ["Très sécurisé", "Redondant", "Partageable"],
      cons: ["Complexe", "Coûteux", "Technique"],
      bestFor: "Entreprises, gros patrimoines"
    }
  ];

  const recoveryProcess = [
    {
      step: "Obtenir un wallet compatible",
      description: "Télécharger un wallet qui supporte BIP39",
      importance: "Assure la compatibilité avec votre seed phrase",
      examples: ["Electrum", "Exodus", "Hardware wallets"]
    },
    {
      step: "Choisir 'Restaurer wallet'",
      description: "Sélectionner l'option de récupération au lieu de création",
      importance: "Évite de créer un nouveau wallet par erreur",
      examples: ["Restore from seed", "Import wallet", "Recover"]
    },
    {
      step: "Entrer la seed phrase",
      description: "Saisir les mots dans l'ordre exact",
      importance: "L'ordre est crucial pour la dérivation correcte",
      examples: ["12 ou 24 mots", "Espaces entre mots", "Minuscules"]
    },
    {
      step: "Vérifier les adresses",
      description: "Contrôler que les adresses correspondent",
      importance: "Confirme que la récupération est correcte",
      examples: ["Premières adresses", "Soldes attendus", "Historique"]
    },
    {
      step: "Sécuriser le nouveau wallet",
      description: "Appliquer les bonnes pratiques de sécurité",
      importance: "Protège contre les nouvelles vulnérabilités",
      examples: ["Nouveau PIN", "Backup vérifié", "Mise à jour"]
    }
  ];

  const passphraseExplanation = {
    concept: "Extension de sécurité optionnelle",
    description: "Mot de passe supplémentaire (25ème mot) qui modifie la dérivation",
    advantages: [
      "Sécurité supplémentaire si seed phrase volée",
      "Création de wallets cachés",
      "Protection contre coercition physique"
    ],
    risks: [
      "Perte définitive si passphrase oubliée",
      "Complexité accrue",
      "Pas toujours supportée"
    ],
    useCase: "Utilisateurs avancés avec gros montants"
  };

  const resources = [
    {
      title: "BIP39 Wordlist",
      type: "Standard officiel",
      duration: "5 min",
      description: "Liste officielle des 2048 mots pour seed phrases",
      icon: <FileText className="w-5 h-5" />,
      url: "https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md"
    },
    {
      title: "Wallet Recovery Test",
      type: "Outil pratique",
      duration: "15 min",
      description: "Tester la récupération avec de petits montants",
      icon: <Play className="w-5 h-5" />,
      url: "https://iancoleman.io/bip39/"
    },
    {
      title: "Hardware Wallet Guide",
      type: "Guide sécuritaire",
      duration: "30 min",
      description: "Bonnes pratiques pour wallets matériels",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://bitcoin.org/en/wallets/hardware/"
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
        <span className="text-foreground">Seed Phrase & sécurité</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Key className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Seed Phrase & sécurité</h1>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 w-fit">
                Leçon 3/6
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprendre et sécuriser la clé maîtresse de votre wallet
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
            <span>Niveau important</span>
          </div>
          <Badge variant="outline">
            Module 2 - Technique
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
              La seed phrase est l'élément le plus critique de votre sécurité Bitcoin. 
              Cette suite de mots génère mathématiquement toutes vos clés privées et 
              constitue donc la clé maîtresse de votre wallet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Maîtriser la gestion sécurisée de votre seed phrase est absolument essentiel 
              pour protéger vos bitcoins à long terme.
            </p>
          </div>
        </div>
      </Card>

      {/* Seed Phrase Basics */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Comprendre la Seed Phrase</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          La seed phrase est une innovation révolutionnaire qui simplifie la sauvegarde 
          tout en offrant une sécurité cryptographique maximale.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seedPhraseBasics.map((concept, index) => (
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

      {/* Security Levels */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-red-50 to-green-50 border-orange-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">Niveaux de Sécurité</h2>
        <p className="text-gray-800 mb-8">
          La sécurité de votre seed phrase détermine directement la sécurité de vos bitcoins. 
          Évaluez votre méthode actuelle et améliorez-la si nécessaire.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {securityLevels.map((level, index) => (
            <Card key={index} className={`p-6 border-2 ${level.color}`}>
              <div className="flex items-center gap-3 mb-4">
                {level.icon}
                <h3 className="font-semibold text-lg">{level.level}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{level.description}</p>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-red-600">Risques :</strong>
                  <ul className="mt-1 ml-4">
                    {level.risks.map((risk, idx) => (
                      <li key={idx}>• {risk}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-blue-600">Exemples :</strong>
                  <p className="text-blue-700 mt-1">{level.examples.join(", ")}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Common Mistakes */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Erreurs Courantes à Éviter</h2>
        <p className="text-muted-foreground mb-8">
          Ces erreurs sont malheureusement fréquentes et peuvent coûter très cher. 
          Assurez-vous de ne jamais les commettre.
        </p>
        
        <div className="space-y-6">
          {commonMistakes.map((mistake, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  !
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-lg">{mistake.mistake}</h3>
                    <Badge variant="destructive" className="text-xs">
                      {mistake.severity}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{mistake.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-red-600">Conséquences :</strong>
                      <p className="text-red-700 mt-1">{mistake.consequences}</p>
                    </div>
                    <div>
                      <strong className="text-green-600">Méthode correcte :</strong>
                      <p className="text-green-700 mt-1">{mistake.correctMethod}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Storage Methods */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Méthodes de Stockage</h2>
        <p className="text-muted-foreground mb-8">
          Choisissez la méthode de stockage adaptée à vos besoins et à la valeur 
          de vos bitcoins.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {storageMethods.map((method, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{method.method}</h3>
                <div className="text-right text-sm">
                  <div className="font-medium">{method.durability}</div>
                  <div className="text-muted-foreground">{method.cost}</div>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <strong className="text-green-600">Avantages :</strong>
                  <ul className="mt-1 ml-4">
                    {method.pros.map((pro, idx) => (
                      <li key={idx} className="text-green-700">+ {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-red-600">Inconvénients :</strong>
                  <ul className="mt-1 ml-4">
                    {method.cons.map((con, idx) => (
                      <li key={idx} className="text-red-700">- {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3">
                <strong className="text-blue-700">Idéal pour :</strong>
                <p className="text-blue-600">{method.bestFor}</p>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Recovery Process */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Processus de Récupération</h2>
        <p className="text-blue-800 mb-8">
          Savoir comment récupérer votre wallet est aussi important que savoir 
          le sauvegarder. Voici la procédure étape par étape.
        </p>
        
        <div className="space-y-4">
          {recoveryProcess.map((step, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
                  <p className="text-muted-foreground mb-3">{step.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-green-600">Importance :</strong>
                      <p className="text-green-700">{step.importance}</p>
                    </div>
                    <div>
                      <strong className="text-blue-600">Exemples :</strong>
                      <p className="text-blue-700">{step.examples.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Passphrase */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Passphrase (25ème mot)</h2>
        <p className="text-muted-foreground mb-8">
          Extension avancée pour sécurité renforcée - à utiliser avec précaution.
        </p>
        
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">{passphraseExplanation.concept}</h3>
              <p className="text-muted-foreground mb-4">{passphraseExplanation.description}</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-2 text-green-600">Avantages :</h4>
              <ul className="text-sm space-y-1">
                {passphraseExplanation.advantages.map((adv, idx) => (
                  <li key={idx} className="text-green-700">+ {adv}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-red-600">Risques :</h4>
              <ul className="text-sm space-y-1">
                {passphraseExplanation.risks.map((risk, idx) => (
                  <li key={idx} className="text-red-700">- {risk}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-blue-600">Recommandé pour :</h4>
              <p className="text-sm text-blue-700">{passphraseExplanation.useCase}</p>
            </div>
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
                <span>La seed phrase est la <strong>clé maîtresse</strong> qui génère toutes vos clés privées</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Ne jamais</strong> stocker la seed phrase numériquement ou la partager</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Créer <strong>plusieurs sauvegardes physiques</strong> en lieux différents</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Tester la récupération</strong> avant de faire confiance à la sauvegarde</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Outils et guides pour maîtriser la sécurité de votre seed phrase.
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
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}