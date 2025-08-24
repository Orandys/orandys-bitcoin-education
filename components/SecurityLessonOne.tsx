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
  Cpu,
  Globe,
  Shield,
  BarChart3,
  ExternalLink,
  Calculator
} from "lucide-react";

interface SecurityLessonOneProps {
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

export function SecurityLessonOne({
  onBackToModule,
  onHomeClick,
  onNextLesson,
  nextLessonInfo,
}: SecurityLessonOneProps) {
  const hashRateConcepts = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Hash Rate",
      description:
        "Puissance de calcul totale du réseau Bitcoin",
      details: [
        "Mesurée en hashes par seconde",
        "Actuellement ~500 EH/s",
        "Croissance exponentielle depuis 2009",
        "Indicateur de sécurité du réseau",
      ],
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité",
      description: "Plus de hash rate = plus de sécurité",
      details: [
        "Coût d'attaque proportionnel",
        "Immutabilité renforcée",
        "Confiance du marché accrue",
        "Décentralisation naturelle",
      ],
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Distribution",
      description:
        "Répartition géographique mondiale du minage",
      details: [
        "Milliers de mineurs actifs",
        "Distribution géographique",
        "Concurrence économique",
        "Résilience aux interventions",
      ],
      color: "bg-purple-50 border-purple-200",
    },
  ];

  const hashRateEvolution = [
    {
      period: "2009-2010",
      hashrate: "~0.001 TH/s",
      technology: "CPU (processeurs ordinaires)",
      miners: "Quelques centaines",
      security: "Faible mais suffisante",
      milestone: "Naissance du réseau",
    },
    {
      period: "2011-2012",
      hashrate: "~10 TH/s",
      technology: "GPU (cartes graphiques)",
      miners: "Quelques milliers",
      security: "Croissance rapide",
      milestone: "Première bulle spéculative",
    },
    {
      period: "2013-2015",
      hashrate: "~500 TH/s",
      technology: "FPGA puis premiers ASICs",
      miners: "Dizaines de milliers",
      security: "Professionnalisation",
      milestone: "Ère des ASICs",
    },
    {
      period: "2016-2017",
      hashrate: "~5 EH/s",
      technology: "ASICs 16nm optimisés",
      miners: "Centaines de milliers",
      security: "Très élevée",
      milestone: "Bull run et adoption",
    },
    {
      period: "2018-2020",
      hashrate: "~120 EH/s",
      technology: "ASICs 7nm ultra-efficaces",
      miners: "Millions",
      security: "Quasi-inattaquable",
      milestone: "Maturation industrielle",
    },
    {
      period: "2021-2024",
      hashrate: "~500 EH/s",
      technology: "ASICs 5nm/3nm nouvelle génération",
      miners: "Écosystème global",
      security: "Sécurité absolue",
      milestone: "Adoption institutionnelle",
    },
  ];

  const miningDistribution = [
    {
      region: "Amérique du Nord",
      percentage: "38%",
      countries: ["États-Unis", "Canada"],
      advantages: [
        "Électricité bon marché",
        "Stabilité politique",
        "Infrastructure",
      ],
      growth: "Forte croissance depuis 2021",
    },
    {
      region: "Asie",
      percentage: "35%",
      countries: ["Kazakhstan", "Russie", "Malaisie"],
      advantages: [
        "Coûts énergétiques bas",
        "Climat froid",
        "Proximité fabricants",
      ],
      growth: "Redistribution après réglementations",
    },
    {
      region: "Europe",
      percentage: "15%",
      countries: ["Islande", "Norvège", "Géorgie"],
      advantages: [
        "Énergies renouvelables",
        "Climat favorable",
        "Régulation claire",
      ],
      growth: "Croissance stable",
    },
    {
      region: "Autres",
      percentage: "12%",
      countries: ["Divers pays émergents"],
      advantages: [
        "Opportunités locales",
        "Énergie excédentaire",
      ],
      growth: "Fragmentation croissante",
    },
  ];

  const securityMetrics = [
    {
      metric: "Coût d'attaque 1h",
      calculation: "Hash rate × Coût électricité",
      current: "~25 millions USD",
      implication: "Attaque courte très coûteuse",
      trend: "Croissance continue",
    },
    {
      metric: "Coût réorganisation 6 blocs",
      calculation: "Probabilité × Coût énergétique",
      current: "~150 millions USD",
      implication: "Reverser 1h d'historique",
      trend: "Croissance exponentielle",
    },
    {
      metric: "Équipement pour 51%",
      calculation: "Matériel requis pour majorité",
      current: "~25 milliards USD",
      implication: "Investissement prohibitif",
      trend: "Barrière toujours plus haute",
    },
    {
      metric: "Consommation annuelle",
      calculation: "Hash rate × Efficacité ASICs",
      current: "~150 TWh/an",
      implication: "Équivalent à un pays moyen",
      trend: "Stabilisation relative",
    },
  ];

  const hashRateFactors = [
    {
      factor: "Prix du Bitcoin",
      impact: "Direct et positif",
      mechanism:
        "Prix élevé → Plus de revenus → Plus de mineurs",
      correlation: "~0.8 sur le long terme",
      example: "Bull run 2021 : prix ×10, hash rate ×4",
    },
    {
      factor: "Efficacité des ASICs",
      impact: "Positif avec délai",
      mechanism: "Nouveaux chips → Meilleur ratio J/TH",
      correlation: "Amélioration continue",
      example: "Passage 16nm → 7nm : efficiency ×3",
    },
    {
      factor: "Coût de l'électricité",
      impact: "Inverse et régional",
      mechanism: "Électricité chère → Minage non rentable",
      correlation: "Délocalisation géographique",
      example: "Migration Chine → USA (2021)",
    },
    {
      factor: "Régulation gouvernementale",
      impact: "Variable selon le pays",
      mechanism: "Interdiction → Exode des mineurs",
      correlation: "Volatilité temporaire",
      example: "Ban Chine 2021 : -50% hash rate temporaire",
    },
  ];

  const networkEffects = [
    {
      effect: "Spiral de sécurité positive",
      description:
        "Plus de hash rate attire plus d'utilisateurs",
      mechanism: [
        "Hash rate élevé → Confiance accrue",
        "Confiance → Adoption et prix",
        "Prix élevé → Rentabilité du minage",
        "Rentabilité → Plus de hash rate",
      ],
      result: "Cercle vertueux auto-renforçant",
    },
    {
      effect: "Décentralisation naturelle",
      description: "La concurrence favorise la distribution",
      mechanism: [
        "Concentration → Coûts élevés",
        "Coûts élevés → Recherche alternatives",
        "Alternatives → Nouvelles régions",
        "Distribution → Plus de résilience",
      ],
      result: "Auto-régulation vers l'équilibre",
    },
    {
      effect: "Innovation technologique",
      description: "La concurrence pousse l'innovation",
      mechanism: [
        "Concurrence → Besoin d'efficacité",
        "Efficacité → R&D en chips",
        "Nouveaux chips → Avantage compétitif",
        "Adoption → Nouvelle génération",
      ],
      result: "Amélioration continue de l'efficacité",
    },
  ];

  const futureProjections = [
    {
      timeline: "2025-2026",
      expectedHashRate: "~800 EH/s",
      keyFactors: [
        "ASICs 3nm généralisés",
        "Adoption institutionnelle",
      ],
      securityLevel: "Sécurité absolue renforcée",
      energyTrend: "Stabilisation de la consommation",
    },
    {
      timeline: "2027-2028",
      expectedHashRate: "~1.2 ZH/s",
      keyFactors: ["Halving 2028", "Technologie 2nm"],
      securityLevel: "Inattaquable même pour États",
      energyTrend: "Transition verte accélérée",
    },
    {
      timeline: "2030+",
      expectedHashRate: "> 2 ZH/s",
      keyFactors: ["Maturité du marché", "Intégration globale"],
      securityLevel: "Référence sécuritaire mondiale",
      energyTrend: "100% énergies renouvelables",
    },
  ];

  const resources = [
    {
      title: "Bitcoin Hash Rate Chart",
      type: "Données temps réel",
      duration: "Temps réel",
      description: "Suivi en direct du hash rate Bitcoin",
      icon: <BarChart3 className="w-5 h-5" />,
      url: "https://www.blockchain.com/explorer/charts/hash-rate",
    },
    {
      title: "Mining Profitability Calculator",
      type: "Outil de calcul",
      duration: "5 min",
      description:
        "Calculer la rentabilité selon hash rate et coûts",
      icon: <Calculator className="w-5 h-5" />,
      url: "https://www.asicminervalue.com/",
    },
    {
      title: "Network Security Analysis",
      type: "Rapport technique",
      duration: "30 min",
      description:
        "Analyse approfondie de la sécurité du réseau",
      icon: <Shield className="w-5 h-5" />,
      url: "https://bitcoinsecurity.guide/",
    },
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
        <span className="text-foreground">
          Puissance de calcul
        </span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Cpu className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">
                Puissance de calcul
              </h1>
              <Badge
                variant="secondary"
                className="bg-indigo-100 text-indigo-700 w-fit"
              >
                Leçon 1/3
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Le hash rate comme fondement de la sécurité
              Bitcoin
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
          <Badge variant="outline">Module 3 - Sécurité</Badge>
        </div>
      </div>

      {/* Introduction */}
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-indigo-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Introduction
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              La puissance de calcul (hash rate) de Bitcoin est
              l'épine dorsale de sa sécurité. Cette gigantesque
              force de calcul distribuée mondialement rend le
              réseau pratiquement inattaquable et constitue sa
              principale innovation sécuritaire.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre cette puissance et son évolution est
              essentiel pour saisir pourquoi Bitcoin est
              considéré comme le réseau le plus sécurisé au
              monde.
            </p>
          </div>
        </div>
      </Card>

      {/* Hash Rate Concepts */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
          Comprendre le Hash Rate
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Le hash rate représente la puissance de calcul
          collective dédiée à la sécurisation du réseau Bitcoin.
          Plus il est élevé, plus le réseau est sécurisé.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hashRateConcepts.map((concept, index) => (
            <Card
              key={index}
              className={`p-6 border-2 ${concept.color} hover:shadow-lg transition-shadow`}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {concept.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {concept.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {concept.description}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium mb-2">
                  Caractéristiques :
                </h4>
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

      {/* Hash Rate Evolution */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Évolution Historique du Hash Rate
        </h2>
        <p className="text-muted-foreground mb-8">
          Depuis 2009, le hash rate Bitcoin a connu une
          croissance exponentielle, reflet de l'adoption et de
          l'innovation technologique.
        </p>

        <div className="space-y-4">
          {hashRateEvolution.map((era, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <h3 className="font-semibold text-lg">
                      {era.period}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs w-fit"
                    >
                      {era.hashrate}
                    </Badge>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-600">
                        Technologie :
                      </strong>
                      <p className="text-blue-700">
                        {era.technology}
                      </p>
                    </div>
                    <div>
                      <strong className="text-green-600">
                        Mineurs :
                      </strong>
                      <p className="text-green-700">
                        {era.miners}
                      </p>
                    </div>
                    <div>
                      <strong className="text-purple-600">
                        Milestone :
                      </strong>
                      <p className="text-purple-700">
                        {era.milestone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Mining Distribution */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">
          Distribution Géographique du Minage
        </h2>
        <p className="text-blue-800 mb-8">
          La décentralisation géographique du minage renforce la
          résilience et la résistance à la censure du réseau
          Bitcoin.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {miningDistribution.map((region, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">
                  {region.region}
                </h3>
                <div className="text-2xl font-bold text-indigo-600">
                  {region.percentage}
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-700">
                    Pays principaux :
                  </strong>
                  <p className="text-gray-600">
                    {region.countries.join(", ")}
                  </p>
                </div>
                <div>
                  <strong className="text-green-700">
                    Avantages :
                  </strong>
                  <ul className="text-green-600 space-y-1">
                    {region.advantages.map((advantage, idx) => (
                      <li key={idx}>• {advantage}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <strong className="text-blue-700">
                    Tendance :
                  </strong>
                  <p className="text-blue-600">
                    {region.growth}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Security Metrics */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Métriques de Sécurité
        </h2>
        <p className="text-muted-foreground mb-8">
          Quantification de la sécurité Bitcoin à travers
          différents indicateurs basés sur la puissance de
          calcul.
        </p>

        <div className="space-y-6">
          {securityMetrics.map((metric, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">
                    {metric.metric}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div>
                        <strong className="text-blue-600">
                          Calcul :
                        </strong>
                        <p className="text-blue-700">
                          {metric.calculation}
                        </p>
                      </div>
                      <div>
                        <strong className="text-green-600">
                          Valeur actuelle :
                        </strong>
                        <p className="text-green-700 font-semibold">
                          {metric.current}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <strong className="text-purple-600">
                          Implication :
                        </strong>
                        <p className="text-purple-700">
                          {metric.implication}
                        </p>
                      </div>
                      <div>
                        <strong className="text-orange-600">
                          Tendance :
                        </strong>
                        <p className="text-orange-700">
                          {metric.trend}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Hash Rate Factors */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Facteurs Influençant le Hash Rate
        </h2>
        <p className="text-muted-foreground mb-8">
          Plusieurs facteurs économiques et techniques
          déterminent l'évolution de la puissance de calcul du
          réseau.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {hashRateFactors.map((factor, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-lg mb-3">
                {factor.factor}
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-blue-600">
                    Impact :
                  </strong>
                  <p className="text-blue-700">
                    {factor.impact}
                  </p>
                </div>
                <div>
                  <strong className="text-green-600">
                    Mécanisme :
                  </strong>
                  <p className="text-green-700">
                    {factor.mechanism}
                  </p>
                </div>
                <div>
                  <strong className="text-purple-600">
                    Corrélation :
                  </strong>
                  <p className="text-purple-700">
                    {factor.correlation}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <strong className="text-gray-700">
                    Exemple :
                  </strong>
                  <p className="text-gray-600">
                    {factor.example}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Network Effects */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Effets de Réseau
        </h2>
        <p className="text-muted-foreground mb-8">
          Le hash rate génère des effets de réseau
          auto-renforçants qui strengthent continuellement la
          sécurité de Bitcoin.
        </p>

        <div className="space-y-6">
          {networkEffects.map((effect, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-lg mb-3">
                {effect.effect}
              </h3>
              <p className="text-muted-foreground mb-4">
                {effect.description}
              </p>

              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-blue-600">
                    Mécanisme :
                  </h4>
                  <div className="space-y-2">
                    {effect.mechanism.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">
                          {idx + 1}
                        </div>
                        <span className="text-blue-700">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-green-700">
                    Résultat :
                  </h4>
                  <p className="text-green-600">
                    {effect.result}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Future Projections */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-purple-900">
          Projections Futures
        </h2>
        <p className="text-purple-800 mb-8">
          Évolution attendue du hash rate et implications pour
          la sécurité Bitcoin.
        </p>

        <div className="space-y-6">
          {futureProjections.map((projection, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  {projection.timeline}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold text-purple-700">
                    {projection.expectedHashRate}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Hash rate projeté
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div>
                    <strong className="text-blue-600">
                      Facteurs clés :
                    </strong>
                    <ul className="text-blue-700 space-y-1">
                      {projection.keyFactors.map(
                        (factor, idx) => (
                          <li key={idx}>• {factor}</li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <strong className="text-green-600">
                      Niveau sécuritaire :
                    </strong>
                    <p className="text-green-700">
                      {projection.securityLevel}
                    </p>
                  </div>
                  <div>
                    <strong className="text-orange-600">
                      Tendance énergétique :
                    </strong>
                    <p className="text-orange-700">
                      {projection.energyTrend}
                    </p>
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
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-900">
              Points Clés à Retenir
            </h3>
            <ul className="space-y-3 text-green-800">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Le <strong>hash rate</strong> est l'indicateur
                  principal de la sécurité Bitcoin
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Sa <strong>croissance exponentielle</strong>{" "}
                  rend Bitcoin de plus en plus inattaquable
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  La <strong>distribution géographique</strong>{" "}
                  améliore la résilience du réseau
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Les <strong>effets de réseau</strong> créent
                  des spirales de sécurité auto-renforçantes
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Ressources Complémentaires
        </h2>
        <p className="text-muted-foreground mb-6">
          Outils et analyses pour suivre et comprendre le hash
          rate Bitcoin.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  {resource.icon}
                </div>
                <div>
                  <Badge
                    variant="secondary"
                    className="text-xs mb-1"
                  >
                    {resource.type}
                  </Badge>
                  <div className="text-xs text-muted-foreground">
                    {resource.duration}
                  </div>
                </div>
              </div>
              <h3 className="font-semibold mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {resource.description}
              </p>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() =>
                  window.open(resource.url, "_blank")
                }
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
        <Button
          variant="outline"
          onClick={onBackToModule}
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au module
        </Button>

        {nextLessonInfo && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              {nextLessonInfo.isNextModule
                ? "Prochaine leçon (nouveau module)"
                : "Prochaine leçon"}
            </p>
            <p className="font-medium">
              {nextLessonInfo.title}
            </p>
            {nextLessonInfo.moduleTitle && (
              <p className="text-xs text-muted-foreground">
                {nextLessonInfo.moduleTitle}
              </p>
            )}
          </div>
        )}

        {onNextLesson && nextLessonInfo && (
          <Button
            onClick={onNextLesson}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}