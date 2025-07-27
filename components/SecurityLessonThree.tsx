import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Users,
  Lightbulb,
  TrendingDown,
  Calendar,
  Coins,
  BarChart3,
  DollarSign,
  Timer,
  ExternalLink,
  Calculator
} from "lucide-react";

interface SecurityLessonThreeProps {
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

export function SecurityLessonThree({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo}: SecurityLessonThreeProps) {
  const halvingConcepts = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Halving",
      description: "Division par deux de la récompense de bloc",
      details: [
        "Événement programmé tous les 210 000 blocs",
        "Réduction automatique de l'inflation",
        "Mécanisme déflationniste intégré",
        "Aucune intervention humaine requise"
      ],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Émission",
      description: "Création contrôlée de nouveaux bitcoins",
      details: [
        "Récompense actuelle : 6.25 BTC par bloc",
        "Diminution progressive jusqu'à 0",
        "Limite absolue : 21 millions BTC",
        "Dernière émission vers 2140"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Prédictibilité",
      description: "Calendrier monétaire transparent et immuable",
      details: [
        "Règles inscrites dans le protocole",
        "Pas de modification possible",
        "Transparence totale",
        "Confiance mathématique"
      ],
      color: "bg-green-50 border-green-200"
    }
  ];

  const halvingHistory = [
    {
      event: "Genesis Block",
      date: "3 janvier 2009",
      block: "0",
      reward: "50 BTC",
      supply: "0 BTC",
      context: "Lancement de Bitcoin par Satoshi Nakamoto",
      price: "~0 USD",
      significance: "Naissance du réseau"
    },
    {
      event: "Premier Halving",
      date: "28 novembre 2012",
      block: "210 000",
      reward: "25 BTC",
      supply: "10.5M BTC",
      context: "Premier test du mécanisme déflationniste",
      price: "~12 USD",
      significance: "Validation du concept"
    },
    {
      event: "Deuxième Halving",
      date: "9 juillet 2016",
      block: "420 000",
      reward: "12.5 BTC",
      supply: "15.75M BTC",
      context: "Adoption institutionnelle naissante",
      price: "~650 USD",
      significance: "Maturité économique"
    },
    {
      event: "Troisième Halving",
      date: "11 mai 2020",
      block: "630 000",
      reward: "6.25 BTC",
      supply: "18.375M BTC",
      context: "COVID-19 et politiques monétaires expansionnistes",
      price: "~8 700 USD",
      significance: "Reconnaissance comme réserve de valeur"
    },
    {
      event: "Quatrième Halving",
      date: "~20 avril 2024",
      block: "840 000",
      reward: "3.125 BTC",
      supply: "19.6875M BTC",
      context: "Adoption institutionnelle massive",
      price: "~65 000 USD",
      significance: "Maturité comme classe d'actifs"
    },
    {
      event: "Cinquième Halving",
      date: "~2028",
      block: "1 050 000",
      reward: "1.5625 BTC",
      supply: "20.34M BTC",
      context: "Projection future",
      price: "TBD",
      significance: "Vers la maturité monétaire"
    }
  ];

  const supplySchedule = [
    {
      period: "2009-2012",
      blocks: "0 - 210 000",
      reward: "50 BTC",
      newBitcoins: "10 500 000 BTC",
      cumulativeSupply: "10 500 000 BTC",
      inflationRate: "∞ → 25%",
      phase: "Bootstrap"
    },
    {
      period: "2012-2016",
      blocks: "210 000 - 420 000",
      reward: "25 BTC",
      newBitcoins: "5 250 000 BTC",
      cumulativeSupply: "15 750 000 BTC",
      inflationRate: "25% → 12.5%",
      phase: "Croissance"
    },
    {
      period: "2016-2020",
      blocks: "420 000 - 630 000",
      reward: "12.5 BTC",
      newBitcoins: "2 625 000 BTC",
      cumulativeSupply: "18 375 000 BTC",
      inflationRate: "12.5% → 6.25%",
      phase: "Expansion"
    },
    {
      period: "2020-2024",
      blocks: "630 000 - 840 000",
      reward: "6.25 BTC",
      newBitcoins: "1 312 500 BTC",
      cumulativeSupply: "19 687 500 BTC",
      inflationRate: "6.25% → 3.125%",
      phase: "Maturité"
    },
    {
      period: "2024-2028",
      blocks: "840 000 - 1 050 000",
      reward: "3.125 BTC",
      newBitcoins: "656 250 BTC",
      cumulativeSupply: "20 343 750 BTC",
      inflationRate: "3.125% → 1.56%",
      phase: "Consolidation"
    },
    {
      period: "2028+",
      blocks: "1 050 000+",
      reward: "< 3.125 BTC",
      newBitcoins: "< 656 250 BTC",
      cumulativeSupply: "→ 21 000 000 BTC",
      inflationRate: "→ 0%",
      phase: "Déflation"
    }
  ];

  const economicImplications = [
    {
      aspect: "Rareté programmée",
      description: "Réduction progressive de l'offre nouvelle",
      mechanism: "Halving automatique tous les 4 ans",
      effects: [
        "Pression déflationniste croissante",
        "Incitation à la thésaurisation",
        "Appréciation potentielle du prix",
        "Différenciation vs monnaies fiat"
      ],
      historicalEvidence: "Chaque halving associé à des bull runs"
    },
    {
      aspect: "Transition fee-based",
      description: "Passage d'un modèle subside vers frais de transaction",
      mechanism: "Réduction progressive des récompenses de bloc",
      effects: [
        "Importance croissante des frais",
        "Nécessité d'adoption pour viabilité",
        "Optimisation des transactions",
        "Développement de solutions L2"
      ],
      historicalEvidence: "Frais représentent 1-10% des revenus mineurs"
    },
    {
      aspect: "Cycles de marché",
      description: "Patterns récurrents liés aux halvings",
      mechanism: "Anticipation et réaction du marché",
      effects: [
        "Cycles haussiers post-halving",
        "Accumulation pré-halving",
        "Volatilité accrue",
        "Attention médiatique cyclique"
      ],
      historicalEvidence: "ATH ~1-2 ans après chaque halving"
    },
    {
      aspect: "Sécurité économique",
      description: "Maintien de la sécurité malgré réduction des récompenses",
      mechanism: "Augmentation du prix compensant la baisse d'émission",
      effects: [
        "Hash rate maintenu ou en croissance",
        "Efficacité énergétique accrue",
        "Professionnalisation du minage",
        "Consolidation de l'industrie"
      ],
      historicalEvidence: "Hash rate global en croissance continue"
    }
  ];

  const miningTransition = [
    {
      era: "Era of Subsidies (2009-2024)",
      characteristic: "Récompenses de bloc dominantes",
      minerRevenue: "90-99% subsidy, 1-10% frais",
      securityModel: "Sécurité payée par inflation",
      challenges: ["Volatilité des revenus", "Dépendance au prix BTC"],
      advantages: ["Revenus prévisibles", "Croissance rapide du réseau"]
    },
    {
      era: "Transition Era (2024-2140)",
      characteristic: "Équilibre subsidy/frais évolutif",
      minerRevenue: "Proportion frais croissante",
      securityModel: "Hybride inflation + utilisation",
      challenges: ["Adaptation économique", "Nécessité d'adoption"],
      advantages: ["Diversification revenus", "Modèle plus durable"]
    },
    {
      era: "Fee-only Era (post-2140)",
      characteristic: "Revenus uniquement via frais",
      minerRevenue: "100% frais de transaction",
      securityModel: "Sécurité payée par l'utilisation",
      challenges: ["Viabilité économique", "Maintien hash rate"],
      advantages: ["Modèle purement utilitaire", "Pas d'inflation"]
    }
  ];

  const futureChallenges = [
    {
      challenge: "Security Budget",
      description: "Maintenir la sécurité avec des récompenses décroissantes",
      timeline: "2024-2140",
      risks: [
        "Baisse du hash rate si prix stagne",
        "Centralisation du minage",
        "Vulnérabilité aux attaques"
      ],
      solutions: [
        "Croissance du prix Bitcoin",
        "Augmentation de l'utilisation",
        "Optimisations protocolaires",
        "Solutions de seconde couche"
      ],
      probability: "Modéré - dépend de l'adoption"
    },
    {
      challenge: "Fee Market Development",
      description: "Développer un marché des frais robuste",
      timeline: "2020-2040",
      risks: [
        "Frais insuffisants pour sécurité",
        "Volatilité excessive des coûts",
        "Exclusion des petites transactions"
      ],
      solutions: [
        "Lightning Network adoption",
        "Optimisations des transactions",
        "Batching et agrégation",
        "Développement d'applications"
      ],
      probability: "Probable - évolution nécessaire"
    },
    {
      challenge: "Mining Centralization",
      description: "Concentration géographique et économique",
      timeline: "En cours",
      risks: [
        "Contrôle par quelques acteurs",
        "Vulnérabilité réglementaire",
        "Censure des transactions"
      ],
      solutions: [
        "Décentralisation géographique",
        "Innovation technologique",
        "Pools décentralisées",
        "Home mining renaissance"
      ],
      probability: "En cours - vigilance requise"
    }
  ];

  const comparisons = [
    {
      system: "Bitcoin",
      type: "Programmable",
      inflation: "Décroissante vers 0%",
      control: "Algorithme",
      predictability: "Parfaite",
      maxSupply: "21M BTC",
      characteristics: ["Déflationniste", "Transparent", "Immuable"]
    },
    {
      system: "Dollar USD",
      type: "Discrétionnaire",
      inflation: "~2-8% selon FED",
      control: "Banque centrale",
      predictability: "Faible",
      maxSupply: "Illimitée",
      characteristics: ["Inflationniste", "Opaque", "Manipulable"]
    },
    {
      system: "Euro",
      type: "Discrétionnaire",
      inflation: "~2% cible BCE",
      control: "Banque centrale",
      predictability: "Modérée",
      maxSupply: "Illimitée",
      characteristics: ["Inflationniste", "Politique", "Variable"]
    },
    {
      system: "Or",
      type: "Naturelle",
      inflation: "~1-3% selon extraction",
      control: "Physique/économique",
      predictability: "Modérée",
      maxSupply: "Finie (inconnue)",
      characteristics: ["Historique", "Physique", "Lente"]
    }
  ];

  const resources = [
    {
      title: "Bitcoin Halving Countdown",
      type: "Tracker temps réel",
      duration: "Temps réel",
      description: "Suivi en temps réel du prochain halving",
      icon: <Timer className="w-5 h-5" />,
      url: "https://www.bitcoinhalving.com/"
    },
    {
      title: "Supply Schedule Calculator",
      type: "Outil de projection",
      duration: "5 min",
      description: "Calculer l'évolution future de l'offre Bitcoin",
      icon: <Calculator className="w-5 h-5" />,
      url: "https://en.bitcoin.it/wiki/Controlled_supply"
    },
    {
      title: "Stock-to-Flow Model",
      type: "Modèle économique",
      duration: "30 min",
      description: "Modèle prédictif basé sur la rareté",
      icon: <BarChart3 className="w-5 h-5" />,
      url: "https://digitalik.net/btc/s2fx"
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
          Sécurité & régulation
        </Button>
        <span>/</span>
        <span className="text-foreground">Halving & émission</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <TrendingDown className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Halving & émission</h1>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 w-fit">
                Leçon 3/3
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              La politique monétaire programmable de Bitcoin
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
            <span>Niveau important</span>
          </div>
          <Badge variant="outline">
            Module 3 - Sécurité
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
              Le halving Bitcoin est l'un des mécanismes les plus innovants de l'économie numérique. 
              Cette réduction programmée de l'émission monétaire crée une rareté croissante unique 
              dans l'histoire des systèmes monétaires.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre ce processus est essentiel pour saisir la proposition de valeur 
              à long terme de Bitcoin en tant que réserve de valeur numérique.
            </p>
          </div>
        </div>
      </Card>

      {/* Halving Concepts */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Concepts du Halving</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Le halving combine rareté programmée, prédictibilité absolue et transition 
          économique pour créer une politique monétaire unique.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {halvingConcepts.map((concept, index) => (
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

      {/* Halving History */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Historique des Halvings</h2>
        <p className="text-muted-foreground mb-8">
          Chaque halving marque une étape importante dans l'évolution économique 
          et technologique de Bitcoin.
        </p>
        
        <div className="space-y-4">
          {halvingHistory.map((event, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <h3 className="font-semibold text-lg">{event.event}</h3>
                    <Badge variant="outline" className="text-xs w-fit">
                      {event.date}
                    </Badge>
                  </div>
                  
                  <div className="grid lg:grid-cols-3 gap-4 text-sm mb-4">
                    <div className="space-y-2">
                      <div>
                        <strong className="text-blue-600">Bloc :</strong>
                        <p className="text-blue-700">{event.block}</p>
                      </div>
                      <div>
                        <strong className="text-green-600">Récompense :</strong>
                        <p className="text-green-700">{event.reward}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <strong className="text-purple-600">Supply :</strong>
                        <p className="text-purple-700">{event.supply}</p>
                      </div>
                      <div>
                        <strong className="text-orange-600">Prix :</strong>
                        <p className="text-orange-700">{event.price}</p>
                      </div>
                    </div>
                    <div>
                      <strong className="text-gray-600">Contexte :</strong>
                      <p className="text-gray-700">{event.context}</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <strong className="text-yellow-700">Significance :</strong>
                    <p className="text-yellow-600">{event.significance}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Supply Schedule */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Calendrier d'Émission</h2>
        <p className="text-blue-800 mb-8">
          Evolution programmée de l'offre Bitcoin avec des phases distinctes 
          selon l'âge du réseau.
        </p>
        
        <div className="space-y-4">
          {supplySchedule.map((period, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{period.period}</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {period.phase}
                </Badge>
              </div>
              
              <div className="grid lg:grid-cols-6 gap-4 text-sm">
                <div>
                  <strong className="text-gray-700">Blocs :</strong>
                  <p className="text-gray-600">{period.blocks}</p>
                </div>
                <div>
                  <strong className="text-green-700">Récompense :</strong>
                  <p className="text-green-600">{period.reward}</p>
                </div>
                <div>
                  <strong className="text-blue-700">Nouveaux BTC :</strong>
                  <p className="text-blue-600">{period.newBitcoins}</p>
                </div>
                <div>
                  <strong className="text-purple-700">Supply Total :</strong>
                  <p className="text-purple-600">{period.cumulativeSupply}</p>
                </div>
                <div>
                  <strong className="text-orange-700">Inflation :</strong>
                  <p className="text-orange-600">{period.inflationRate}</p>
                </div>
                <div>
                  <strong className="text-pink-700">Phase :</strong>
                  <p className="text-pink-600">{period.phase}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Economic Implications */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Implications Économiques</h2>
        <p className="text-muted-foreground mb-8">
          Le halving génère des effets économiques profonds qui transforment 
          progressivement Bitcoin d'une expérience en réserve de valeur mature.
        </p>
        
        <div className="space-y-6">
          {economicImplications.map((implication, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-lg mb-3">{implication.aspect}</h3>
              <p className="text-muted-foreground mb-4">{implication.description}</p>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <strong className="text-blue-600">Mécanisme :</strong>
                    <p className="text-blue-700 text-sm">{implication.mechanism}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <strong className="text-green-700">Effets :</strong>
                    <ul className="text-green-600 text-sm space-y-1 mt-1">
                      {implication.effects.map((effect, idx) => (
                        <li key={idx}>• {effect}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <strong className="text-purple-700">Evidence historique :</strong>
                    <p className="text-purple-600 text-sm">{implication.historicalEvidence}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Mining Transition */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Transition du Modèle de Minage</h2>
        <p className="text-muted-foreground mb-8">
          Evolution du modèle économique des mineurs de subventions vers frais de transaction.
        </p>
        
        <div className="space-y-6">
          {miningTransition.map((era, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg">{era.era}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{era.characteristic}</p>
              
              <div className="grid lg:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div>
                    <strong className="text-green-600">Revenus mineurs :</strong>
                    <p className="text-green-700">{era.minerRevenue}</p>
                  </div>
                  <div>
                    <strong className="text-blue-600">Modèle sécuritaire :</strong>
                    <p className="text-blue-700">{era.securityModel}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <strong className="text-red-600">Défis :</strong>
                    <ul className="text-red-700 space-y-1">
                      {era.challenges.map((challenge, idx) => (
                        <li key={idx}>• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong className="text-green-600">Avantages :</strong>
                    <ul className="text-green-700 space-y-1">
                      {era.advantages.map((advantage, idx) => (
                        <li key={idx}>• {advantage}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Future Challenges */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-yellow-900">Défis Futurs</h2>
        <p className="text-yellow-800 mb-8">
          Les principales préoccupations liées à la réduction progressive des récompenses de bloc.
        </p>
        
        <div className="space-y-6">
          {futureChallenges.map((challenge, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center">
                  !
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{challenge.challenge}</h3>
                  <Badge variant="outline" className="text-xs">{challenge.timeline}</Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{challenge.description}</p>
              
              <div className="grid lg:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div>
                    <strong className="text-red-600">Risques :</strong>
                    <ul className="text-red-700 space-y-1">
                      {challenge.risks.map((risk, idx) => (
                        <li key={idx}>• {risk}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <strong className="text-green-600">Solutions :</strong>
                    <ul className="text-green-700 space-y-1">
                      {challenge.solutions.map((solution, idx) => (
                        <li key={idx}>• {solution}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <strong className="text-blue-700">Probabilité :</strong>
                    <p className="text-blue-600 text-xs">{challenge.probability}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Monetary Systems Comparison */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Comparaison des Systèmes Monétaires</h2>
        <p className="text-muted-foreground mb-8">
          Bitcoin vs autres systèmes monétaires : une approche radicalement différente.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {comparisons.map((system, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  system.system === 'Bitcoin' ? 'bg-orange-500 text-white' : 'bg-gray-500 text-white'
                }`}>
                  {system.system === 'Bitcoin' ? <Coins className="w-6 h-6" /> : <DollarSign className="w-6 h-6" />}
                </div>
                <h3 className="font-semibold text-lg">{system.system}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <strong>Type :</strong>
                    <p className="text-muted-foreground">{system.type}</p>
                  </div>
                  <div>
                    <strong>Inflation :</strong>
                    <p className="text-muted-foreground">{system.inflation}</p>
                  </div>
                  <div>
                    <strong>Contrôle :</strong>
                    <p className="text-muted-foreground">{system.control}</p>
                  </div>
                  <div>
                    <strong>Supply max :</strong>
                    <p className="text-muted-foreground">{system.maxSupply}</p>
                  </div>
                </div>
                
                <div>
                  <strong>Prédictibilité :</strong>
                  <p className="text-muted-foreground">{system.predictability}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <strong>Caractéristiques :</strong>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {system.characteristics.map((char, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {char}
                      </Badge>
                    ))}
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
                <span>Le <strong>halving</strong> réduit automatiquement l'inflation Bitcoin tous les 4 ans</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>L'<strong>émission</strong> est plafonnée à 21 millions de bitcoins maximum</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Cette <strong>rareté programmée</strong> distingue Bitcoin des monnaies traditionnelles</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La <strong>transition vers les frais</strong> représente un défi long terme</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Outils pour suivre et comprendre l'évolution de l'offre Bitcoin.
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
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 w-full sm:w-auto"
          >
            Continuer
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}