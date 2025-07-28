import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Users, 
  Lightbulb,
  TrendingUp,
  Shield,
  Zap,
  Coins,
  Building,
  Globe,
  BarChart3,
  PieChart,
  Calculator,
  Database,
  Activity,
  Star,
  Truck,
  Network,
  Settings,
  FileText,
  ArrowUpDown,
} from "lucide-react";

interface ApplicationsLessonTwoProps {
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

export function ApplicationsLessonTwo({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange: _onSectionChange }: ApplicationsLessonTwoProps) {
  const storeOfValueCharacteristics = [
    {
      characteristic: "Rareté",
      description: "Offre limitée qui ne peut être arbitrairement augmentée",
      traditional: {
        asset: "Or",
        details: "Stock limité, extraction coûteuse et difficile",
        pros: ["Rareté naturelle", "Histoire millénaire", "Reconnaissance universelle"],
        cons: ["Production continue", "Réserves inconnues", "Recyclage possible"],
        icon: <Coins className="w-5 h-5" />,
        color: "bg-yellow-50 text-yellow-700"
      },
      bitcoin: {
        asset: "Bitcoin",
        details: "21 millions maximum, algorithme programmé",
        pros: ["Cap absolu 21M", "Transparent", "Vérifiable", "Impossible à modifier"],
        cons: ["Actif récent", "Adoption encore limitée", "Volatilité"],
        icon: <Database className="w-5 h-5" />,
        color: "bg-orange-50 text-orange-700"
      }
    },
    {
      characteristic: "Durabilité", 
      description: "Résistance au temps et aux dégradations",
      traditional: {
        asset: "Or",
        details: "Métal inoxydable, propriétés physiques stables",
        pros: ["Indestructible", "Propriétés constantes", "Pas d'obsolescence"],
        cons: ["Stockage physique", "Coûts de garde", "Risques vol/perte"],
        icon: <Shield className="w-5 h-5" />,
        color: "bg-yellow-50 text-yellow-700"
      },
      bitcoin: {
        asset: "Bitcoin",
        details: "Réseau décentralisé, cryptographie robuste",
        pros: ["Pas de dégradation", "Copie parfaite", "Réseau global"],
        cons: ["Dépendance technologique", "Clés privées vulnérables", "Évolution protocol"],
        icon: <Network className="w-5 h-5" />,
        color: "bg-orange-50 text-orange-700"
      }
    },
    {
      characteristic: "Divisibilité",
      description: "Capacité à être divisé en unités plus petites",
      traditional: {
        asset: "Or",
        details: "Divisible physiquement mais coûts de transformation",
        pros: ["Théoriquement divisible", "Unités standardisées", "Marchés liquides"],
        cons: ["Coûts division", "Perte matière", "Minimum pratique"],
        icon: <Calculator className="w-5 h-5" />,
        color: "bg-yellow-50 text-yellow-700"
      },
      bitcoin: {
        asset: "Bitcoin", 
        details: "Divisible jusqu'à 100 millions de satoshis",
        pros: ["Division parfaite", "Sans coût", "Précision absolue", "Micro-transactions"],
        cons: ["Limites techniques", "Frais réseau minimum", "UX complexe petites sommes"],
        icon: <Activity className="w-5 h-5" />,
        color: "bg-orange-50 text-orange-700"
      }
    },
    {
      characteristic: "Transportabilité",
      description: "Facilité de transport et de transfert",
      traditional: {
        asset: "Or",
        details: "Lourd, coûteux à transporter, sécurité requise",
        pros: ["Valeur dense", "Reconnaissable", "Liquidité mondiale"],
        cons: ["Poids important", "Coûts transport", "Assurance", "Frontières"],
        icon: <Truck className="w-5 h-5" />,
        color: "bg-yellow-50 text-yellow-700"
      },
      bitcoin: {
        asset: "Bitcoin",
        details: "Transfert numérique instantané global",
        pros: ["Instantané", "Global", "Pas de frontières", "Coût minimal"],
        cons: ["Connexion internet", "Complexité technique", "Frais réseau"],
        icon: <Zap className="w-5 h-5" />,
        color: "bg-orange-50 text-orange-700"
      }
    },
    {
      characteristic: "Acceptation",
      description: "Reconnaissance et adoption comme réserve de valeur",
      traditional: {
        asset: "Or",
        details: "Acceptation millénaire, réserves banques centrales",
        pros: ["Histoire longue", "Banques centrales", "Bijouterie", "Industrie"],
        cons: ["Usage limité", "Pas de yield", "Storage costs", "Réglementations"],
        icon: <Globe className="w-5 h-5" />,
        color: "bg-yellow-50 text-yellow-700"
      },
      bitcoin: {
        asset: "Bitcoin",
        details: "Adoption croissante entreprises et institutions",
        pros: ["Croissance rapide", "Entreprises publiques", "Fonds", "Pays"],
        cons: ["Adoption récente", "Volatilité", "Régulations incertaines"],
        icon: <TrendingUp className="w-5 h-5" />,
        color: "bg-orange-50 text-orange-700"
      }
    }
  ];

  const bitcoinAdvantages = [
    {
      category: "Rareté Programmée",
      icon: <Database className="w-8 h-8" />,
      color: "bg-blue-500",
      benefits: [
        {
          title: "Cap Absolu 21 Millions",
          description: "Limite mathématique impossible à modifier sans consensus",
          impact: "Protection absolue contre inflation monétaire",
          proof: "Code open-source vérifiable par tous",
          example: "vs Or : production annuelle ~2%, stocks inconnus"
        },
        {
          title: "Halving Programmé", 
          description: "Réduction émission tous les 4 ans automatiquement",
          impact: "Rareté croissante dans le temps",
          proof: "Mécanisme automatique depuis 2009",
          example: "2024: 3.125 BTC/bloc vs 50 BTC initial"
        },
        {
          title: "Vérifiabilité Totale",
          description: "Chaque bitcoin traçable et vérifiable",
          impact: "Impossible de contrefaire ou falsifier",
          proof: "Blockchain publique, auditabilité complète",
          example: "vs Or : tests chimiques requis, contrefaçons possibles"
        }
      ]
    },
    {
      category: "Décentralisation & Sécurité",
      icon: <Network className="w-8 h-8" />,
      color: "bg-purple-500",
      benefits: [
        {
          title: "Résistance à la Censure",
          description: "Aucune autorité centrale ne peut bloquer/confisquer",
          impact: "Protection contre politique monétaire arbitraire",
          proof: "13+ ans de fonctionnement sans interruption",
          example: "vs Or : confiscations historiques (USA 1933, etc.)"
        },
        {
          title: "Sécurité Cryptographique",
          description: "Protection SHA-256, signatures ECDSA",
          impact: "Sécurité équivalente à infrastructure internet",
          proof: "Aucun hack du protocole Bitcoin en 13 ans",
          example: "Plus sûr que coffres-forts physiques"
        },
        {
          title: "Consensus Global",
          description: "Modifications requièrent accord massif du réseau",
          impact: "Stabilité règles monétaires garantie",
          proof: "Échecs tentatives modification (SegWit2x, etc.)",
          example: "vs Monnaies : banques centrales décident unilatéralement"
        }
      ]
    },
    {
      category: "Supériorité Digitale",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-green-500",
      benefits: [
        {
          title: "Transfert Instantané",
          description: "Envoi global en 10 minutes en moyenne",
          impact: "Liquidité immédiate, arbitrage efficace",
          proof: "Millions de transactions réussies quotidiennement",
          example: "vs Or : jours/semaines pour transferts physiques"
        },
        {
          title: "Divisibilité Parfaite",
          description: "100 millions de satoshis par bitcoin",
          impact: "Adapté à toute taille de transaction",
          proof: "Precision jusqu'à 8 décimales",
          example: "Peut acheter café (0.00001 BTC) ou immeuble (10 BTC)"
        },
        {
          title: "Stockage Sans Coût",
          description: "Pas de frais de garde, assurance, ou stockage",
          impact: "Possession directe sans intermédiaires",
          proof: "Hardware wallet $100 = self-custody illimitée",
          example: "vs Or : 1-2% annuel frais stockage professionnel"
        }
      ]
    }
  ];

  const bitcoinDisadvantages = [
    {
      category: "Volatilité",
      icon: <ArrowUpDown className="w-8 h-8" />,
      color: "bg-red-500",
      challenges: [
        {
          title: "Fluctuations Prix Importantes",
          description: "Variations ±20% communes sur périodes courtes",
          impact: "Difficulté utilisation comme unité de compte stable",
          mitigation: "Horizon investissement long terme (4+ ans)",
          data: "Volatilité décroissante avec adoption et maturité",
          example: "2022: -77% pic à creux, 2023: +156% creux à pic"
        },
        {
          title: "Corrélation Assets Risqués",
          description: "Tend à suivre actions tech en périodes stress",
          impact: "Pas toujours décorrélé comme l'or traditionnel",
          mitigation: "Diversification, allocation modérée (5-10%)",
          data: "Corrélation variable, tends vers zéro long terme",
          example: "Mars 2020: chute avec marchés actions, puis découplage"
        },
        {
          title: "Cycles Prix Extrêmes",
          description: "Bulles et corrections importantes cycliques",
          impact: "Tests psychologiques pour détenteurs",
          mitigation: "DCA (Dollar Cost Averaging), patience",
          data: "Cycles ~4 ans liés aux halvings",
          example: "2017-2018: +2000% puis -84%, 2021-2022: +300% puis -77%"
        }
      ]
    },
    {
      category: "Adoption & Reconnaissance",
      icon: <Users className="w-8 h-8" />,
      color: "bg-orange-500", 
      challenges: [
        {
          title: "Adoption Institutionnelle Limitée",
          description: "Majorité institutions n'ont pas encore adopté",
          impact: "Liquidité limitée vs marchés traditionnels",
          mitigation: "Croissance adoption accélérée récemment",
          data: "ETF Bitcoin approuvés 2024, adoption croissante",
          example: "Seulement ~1% portfolio institutions vs 10-20% or"
        },
        {
          title: "Régulations Incertaines",
          description: "Cadre légal en évolution dans la plupart des pays",
          impact: "Risques réglementaires et fiscaux",
          mitigation: "Clarifications progressives, conformité",
          data: "Tendance vers régulation plutôt qu'interdiction",
          example: "El Salvador adopte, UE réglemente MiCA, USA ETF"
        },
        {
          title: "Compréhension Grand Public",
          description: "Technologie complexe, mécompréhension commune",
          impact: "Barrière adoption, préjugés négatifs",
          mitigation: "Éducation, amélioration UX, démocratisation",
          data: "Connaissance Bitcoin >80% mais compréhension <20%",
          example: "Confusion avec 'crypto' ou monnaies de banques centrales"
        }
      ]
    },
    {
      category: "Risques Techniques",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-gray-500",
      challenges: [
        {
          title: "Complexité Self-Custody",
          description: "Gestion clés privées requiert compétences techniques",
          impact: "Risque perte fonds par erreur utilisateur",
          mitigation: "Hardware wallets, backup multiples, éducation",
          data: "~20% Bitcoin perdus à jamais (estimations)",
          example: "Perte seed phrase = perte définitive bitcoin"
        },
        {
          title: "Évolution Technologique",
          description: "Protocole évolue, risques bugs ou changements",
          impact: "Incertitude technique long terme",
          mitigation: "Développement conservateur, tests extensifs",
          data: "99.98% uptime sur 13 ans",
          example: "Mises à jour soft forks backwards-compatible"
        },
        {
          title: "Menaces Quantiques Futures",
          description: "Ordinateurs quantiques pourraient casser cryptographie",
          impact: "Obsolescence possible à très long terme",
          mitigation: "Recherche cryptographie post-quantique",
          data: "Horizon 15-30 ans selon experts",
          example: "Migration possible vers nouveaux algorithmes"
        }
      ]
    }
  ];

  const corporateCaseStudies = [
    {
      company: "MicroStrategy",
      ceo: "Michael Saylor",
      investment: "$4.6B+",
      bitcoinHeld: "~130,000 BTC",
      strategy: "Treasury reserve asset",
      rationale: "Protection contre dépréciation dollar, réserve de valeur supérieure",
      timeline: [
        { date: "Août 2020", action: "Premier achat $250M", price: "$11,500", reasoning: "Alternative cash" },
        { date: "Sept 2020", action: "Achat additionnel $175M", price: "$10,500", reasoning: "Renforcement position" },
        { date: "2021", action: "Levée dette pour Bitcoin", price: "$30,000-50,000", reasoning: "Conviction long terme" },
        { date: "2022-2023", action: "Pas de vente en bear market", price: "$16,000-40,000", reasoning: "HODLing stratégique" }
      ],
      results: {
        bookValue: "$4.6B investi",
        marketValue: "Variable selon prix BTC",
        impact: "Stock performance lié à Bitcoin",
        adoption: "Catalyst adoption corporate"
      },
      lessons: [
        "Bitcoin comme hedge macro-économique",
        "Conviction long terme essentielle", 
        "Communication transparente importante",
        "First-mover advantage institutional"
      ],
      icon: <Building className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      company: "Tesla",
      ceo: "Elon Musk", 
      investment: "$1.5B",
      bitcoinHeld: "~40,000 BTC",
      strategy: "Treasury + payments acceptance",
      rationale: "Diversification trésorerie, adoption mainstream",
      timeline: [
        { date: "Fév 2021", action: "Achat $1.5B", price: "$35,000-45,000", reasoning: "Diversification cash" },
        { date: "Mars 2021", action: "Accepte paiements Bitcoin", price: "$50,000-60,000", reasoning: "Adoption mainstream" },
        { date: "Mai 2021", action: "Suspend paiements Bitcoin", price: "$40,000-50,000", reasoning: "Préoccupations environnement" },
        { date: "Q2 2021", action: "Vente partielle 10%", price: "$45,000", reasoning: "Test liquidité" }
      ],
      results: {
        bookValue: "~$1.3B net après vente partielle",
        marketValue: "Gains/pertes selon volatilité BTC",
        impact: "Catalyst adoption paiements",
        adoption: "Légitimation Bitcoin mainstream"
      },
      lessons: [
        "Impact communication CEO massive",
        "Préoccupations ESG importantes",
        "Paiements Bitcoin complexes à implémenter",
        "Volatilité affecte résultats trimestriels"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      company: "Square (Block)",
      ceo: "Jack Dorsey",
      investment: "$220M",
      bitcoinHeld: "~8,000 BTC", 
      strategy: "Strategic investment + ecosystem building",
      rationale: "Inclusion financière, internet natif money",
      timeline: [
        { date: "Oct 2020", action: "Premier achat $50M", price: "$11,000", reasoning: "Alignment mission inclusion" },
        { date: "Fév 2021", action: "Achat additionnel $170M", price: "$45,000", reasoning: "Conviction renforcée" },
        { date: "2021-2024", action: "Développement écosystème", price: "Variable", reasoning: "Bitcoin infrastructure" }
      ],
      results: {
        bookValue: "$220M investi",
        marketValue: "Performance liée prix Bitcoin",
        impact: "CashApp adoption Bitcoin",
        adoption: "Infrastructure Bitcoin (mining, Lightning)"
      },
      lessons: [
        "Vision long terme infrastructure",
        "Integration produits existants",
        "Investissement cohérent avec mission",
        "Building vs buying approch"
      ],
      icon: <Star className="w-6 h-6" />,
      color: "bg-green-500"
    }
  ];

  // Définissez les interfaces pour les différents types de données
interface CorporateData {
  year: string;
  count: string;
  totalBTC: string;
  value: string;
  leaders: string[];
}

interface FundData {
  year: string;
  count: string;
  aum: string;
  type: string;
  access: string;
}

interface GovernmentData {
  year: string;
  count: string;
  status: string;
  examples: string;
}

type AdoptionData = CorporateData | FundData | GovernmentData;

// Fonctions de garde de type
function isCorporateData(data: AdoptionData): data is CorporateData {
  return (data as CorporateData).totalBTC !== undefined;
}

function isFundData(data: AdoptionData): data is FundData {
  return (data as FundData).aum !== undefined;
}

function isGovernmentData(data: AdoptionData): data is GovernmentData {
  return (data as GovernmentData).status !== undefined;
}

// Mettez à jour votre tableau adoptionMetrics
const adoptionMetrics = [
  {
    category: "Entreprises Publiques",
    description: "Sociétés cotées avec Bitcoin en treasury",
    data: [
      { year: "2020", count: "2", totalBTC: "70,000", value: "$1.2B", leaders: ["MicroStrategy", "Square"] },
      { year: "2021", count: "12", totalBTC: "200,000", value: "$8.5B", leaders: ["Tesla", "Coinbase", "Marathon"] },
      { year: "2022", count: "25", totalBTC: "250,000", value: "$6.8B", leaders: ["El Salvador", "MicroStrategy"] },
      { year: "2023", count: "35", totalBTC: "280,000", value: "$12.1B", leaders: ["ETF applications", "BlackRock"] },
      { year: "2024", count: "50+", totalBTC: "350,000+", value: "$20B+", leaders: ["ETF approvals", "Adoption massive"] }
    ] as CorporateData[],
    icon: <Building className="w-5 h-5" />
  },
  {
    category: "Fonds & ETF",
    description: "Véhicules d'investissement Bitcoin",
    data: [
      { year: "2020", count: "5", aum: "$2B", type: "Trusts privés", access: "Investisseurs accredited" },
      { year: "2021", count: "15", aum: "$8B", type: "Trusts + futures ETF", access: "Public limité" },
      { year: "2022", count: "20", aum: "$12B", type: "Expansion produits", access: "Institutionnel focus" },
      { year: "2023", count: "30", aum: "$18B", type: "ETF applications", access: "Préparation retail" },
      { year: "2024", count: "45+", aum: "$60B+", type: "Spot ETF approved", access: "Retail mainstream" }
    ] as FundData[],
    icon: <PieChart className="w-5 h-5" />
  },
  {
    category: "Gouvernements & États",
    description: "Adoption officielle par entités gouvernementales",
    data: [
      { year: "2020", count: "0", status: "Expérimentation", examples: "Recherches banques centrales" },
      { year: "2021", count: "1", status: "Adoption officielle", examples: "El Salvador legal tender" },
      { year: "2022", count: "2", status: "Intérêt croissant", examples: "RCA legal tender, Ukraine donations" },
      { year: "2023", count: "5", status: "Régulations claires", examples: "UE MiCA, Suisse framework" },
      { year: "2024", count: "10+", status: "Adoption accélérée", examples: "ETF USA, réserves stratégiques" }
    ] as GovernmentData[],
    icon: <Globe className="w-5 h-5" />
  }
];

// Dans votre composant, modifiez la section du rendu du tableau :
<Card className="p-6 sm:p-8 mb-8">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6">Métriques d'Adoption Institutionnelle</h2>
  <p className="text-muted-foreground mb-8">
    Évolution de l'adoption de Bitcoin comme réserve de valeur par différents types d'acteurs.
  </p>
  
  <div className="space-y-8">
    {adoptionMetrics.map((metric, index) => (
      <Card key={index} className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center">
            {metric.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{metric.category}</h3>
            <p className="text-sm text-muted-foreground">{metric.description}</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Année</th>
                <th className="text-left p-2">Nombre</th>
                <th className="text-left p-2">Valeur/Volume</th>
                <th className="text-left p-2">Détails/Leaders</th>
              </tr>
            </thead>
            <tbody>
              {metric.data.map((item, i) => {
                let valueColumn = '';
                let detailsColumn = '';

                if (isCorporateData(item)) {
                  valueColumn = item.value;
                  detailsColumn = item.leaders.join(', ');
                } else if (isFundData(item)) {
                  valueColumn = item.aum;
                  detailsColumn = item.type;
                } else if (isGovernmentData(item)) {
                  valueColumn = item.status;
                  detailsColumn = item.examples;
                }

                return (
                  <tr key={i} className="border-b">
                    <td className="p-2 font-medium">{item.year}</td>
                    <td className="p-2">{item.count}</td>
                    <td className="p-2">{valueColumn}</td>
                    <td className="p-2 text-xs">{detailsColumn}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    ))}
  </div>
</Card>

  const comparisonTable = [
    {
      characteristic: "Offre maximale",
      gold: "Inconnue (production continue)",
      fiat: "Illimitée (impression selon BC)",
      bitcoin: "21 millions (cap absolu)",
      advantage: "bitcoin"
    },
    {
      characteristic: "Vérifiabilité",
      gold: "Tests chimiques requis",
      fiat: "Confiance institution",
      bitcoin: "Vérifiable par tous",
      advantage: "bitcoin"
    },
    {
      characteristic: "Transportabilité",
      gold: "Lourd, coûteux, lent",
      fiat: "Digital mais censurable",
      bitcoin: "Instantané, global, libre",
      advantage: "bitcoin"
    },
    {
      characteristic: "Divisibilité",
      gold: "Limitée, coûteuse",
      fiat: "Centimes minimum",
      bitcoin: "8 décimales parfaites",
      advantage: "bitcoin"
    },
    {
      characteristic: "Durabilité",
      gold: "Indestructible physique",
      fiat: "Papier dégradable",
      bitcoin: "Copie parfaite infinie",
      advantage: "tie"
    },
    {
      characteristic: "Histoire/Adoption",
      gold: "Millénaire, universelle",
      fiat: "Siècles, gouvernementale",
      bitcoin: "15 ans, croissante",
      advantage: "gold"
    },
    {
      characteristic: "Volatilité",
      gold: "Modérée (10-20%)",
      fiat: "Faible court terme",
      bitcoin: "Élevée (50-200%)",
      advantage: "fiat"
    },
    {
      characteristic: "Yield/Rendement",
      gold: "Aucun (coûts stockage)",
      fiat: "Taux intérêt (inflation-)",
      bitcoin: "Appréciation (volatile)",
      advantage: "fiat"
    }
  ];

  const practicalImplementation = [
    {
      profile: "Particulier Débutant",
      allocation: "5-10% patrimoine",
      strategy: "DCA mensuel, self-custody progressif",
      tools: ["Exchange régulé", "Hardware wallet", "DCA automatique"],
      timeframe: "4+ ans minimum",
      risks: "Volatilité, erreurs techniques",
      education: "Bases Bitcoin, sécurité, fiscalité",
      example: "500€/mois pendant 3 ans = potentiel 18,000€ + croissance"
    },
    {
      profile: "Investisseur Expérimenté", 
      allocation: "10-25% portfolio",
      strategy: "Timing cycles, diversification crypto",
      tools: ["Trading avancé", "DeFi exposure", "Derivatives hedge"],
      timeframe: "Cycles multiples 8-12 ans",
      risks: "Concentration, over-trading",
      education: "Analyse technique, macro, narratives",
      example: "Accumulation bear market, distribution bull market"
    },
    {
      profile: "Entreprise PME",
      allocation: "5-15% trésorerie",
      strategy: "Protection inflation, modernisation",
      tools: ["Custody institutionnel", "Comptabilité crypto", "Hedging"],
      timeframe: "Long terme 5+ ans",
      risks: "Volatilité résultats, régulation",
      education: "Comptabilité, fiscalité, governance",
      example: "100k€ trésorerie excess → 10k€ Bitcoin mensuel"
    },
    {
      profile: "Institution Financière",
      allocation: "1-5% AUM",
      strategy: "Produit client, diversification",
      tools: ["Prime brokerage", "ETF allocation", "Regulated custody"],
      timeframe: "Produit permanent",
      risks: "Réputation, régulation, opérationnel",
      education: "Compliance, custody, product design",
      example: "ETF Bitcoin allocation, structured products"
    }
  ];

  const futureOutlook = [
    {
      category: "Adoption Institutionnelle",
      timeline: "2024-2027",
      probability: "Élevée (>80%)",
      drivers: [
        "ETF Bitcoin mainstream adoption",
        "Pension funds allocation (1-3%)",
        "Insurance companies reserves",
        "Sovereign wealth funds diversification"
      ],
      impact: "Stabilité prix accrue, légitimité renforcée",
      metrics: "1-5% allocation globale = $2-10T demand potential"
    },
    {
      category: "Intégration Monétaire",
      timeline: "2025-2030",
      probability: "Modérée (40-60%)",
      drivers: [
        "Central Bank Digital Currencies adoption",
        "Cross-border payment efficiency",
        "Emerging market currency hedging",
        "International trade settlement"
      ],
      impact: "Usage quotidien, stabilité macro",
      metrics: "10% international trade = $5T+ annual flow"
    },
    {
      category: "Innovation Technologique",
      timeline: "2024-2028",
      probability: "Très élevée (>90%)",
      drivers: [
        "Lightning Network mainstream adoption",
        "Layer 2 scaling solutions",
        "Smart contracts on Bitcoin (RGB/Taro)",
        "Quantum-resistant cryptography"
      ],
      impact: "Utilité accrue, nouveaux use cases",
      metrics: "Millions transactions/seconde, microtransactions viables"
    },
    {
      category: "Régulation Harmonisée",
      timeline: "2025-2030",
      probability: "Élevée (70-80%)",
      drivers: [
        "Frameworks internationaux coordonnés",
        "Taxation clarifiée globalement",
        "AML/KYC standards harmonized",
        "Central bank cooperation"
      ],
      impact: "Barrières réglementaires réduites",
      metrics: "Compliance costs -50%, adoption +200%"
    }
  ];

  const educationalResources = [
    {
      title: "Bitcoin Treasury Calculator",
      type: "Outil interactif",
      description: "Simulateur impact allocation Bitcoin sur portfolio",
      features: ["Backtesting historique", "Allocation optimization", "Risk metrics", "Tax impact"],
      icon: <Calculator className="w-5 h-5" />,
      url: "https://bitcointreasuries.net/calculator"
    },
    {
      title: "Corporate Bitcoin Adoption Guide",
      type: "Guide pratique",
      description: "Framework complet adoption Bitcoin entreprise",
      features: ["Due diligence checklist", "Governance framework", "Risk management", "Implementation"],
      icon: <FileText className="w-5 h-5" />,
      url: "https://bitcointreasuries.net/guide"
    },
    {
      title: "Store of Value Comparison Matrix",
      type: "Analyse comparative",
      description: "Comparaison détaillée Bitcoin vs autres réserves valeur",
      features: ["Multi-criteria analysis", "Historical performance", "Correlation matrices", "Scenario planning"],
      icon: <BarChart3 className="w-5 h-5" />,
      url: "https://woobull.com/store-of-value-comparison/"
    },
    {
      title: "Bitcoin Volatility Tracker",
      type: "Monitoring temps réel",
      description: "Suivi volatilité et métriques risque Bitcoin",
      features: ["Real-time volatility", "Risk-adjusted returns", "Sharpe ratios", "Drawdown analysis"],
      icon: <Activity className="w-5 h-5" />,
      url: "https://charts.woobull.com/bitcoin-volatility/"
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
          Applications & géopolitique
        </Button>
        <span>/</span>
        <span className="text-foreground">Réserve de valeur</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Coins className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Réserve de valeur</h1>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 w-fit">
                Leçon 2/3
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Bitcoin comme or numérique : caractéristiques et implications
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-yellow-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Bitcoin est de plus en plus reconnu comme une réserve de valeur digitale, souvent comparé 
              à "l'or numérique". Cette reconnaissance s'appuie sur des caractéristiques fondamentales 
              qui en font un actif de préservation de richesse unique dans l'histoire monétaire.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ce chapitre explore en détail les propriétés qui font de Bitcoin une réserve de valeur, 
              compare ses avantages et inconvénients face aux alternatives traditionnelles, et analyse 
              les implications de son adoption croissante par particuliers, entreprises et institutions.
            </p>
          </div>
        </div>
      </Card>

      {/* Store of Value Definition */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Qu'est-ce qu'une Réserve de Valeur ?</h2>
        
        <div className="mb-6">
          <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
            <h3 className="text-lg font-semibold mb-3 text-blue-800">Définition</h3>
            <p className="text-blue-700 mb-4">
              Une réserve de valeur est un actif qui peut être conservé, récupéré et échangé à une date 
              future, sans se déprécier significativement. Elle permet de transférer du pouvoir d'achat 
              du présent vers le futur.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded p-4">
                <h4 className="font-medium text-blue-800 mb-2">Fonction principale</h4>
                <p className="text-sm text-blue-700">Préservation de la richesse dans le temps</p>
              </div>
              <div className="bg-blue-50 rounded p-4">
                <h4 className="font-medium text-blue-800 mb-2">Caractéristiques clés</h4>
                <p className="text-sm text-blue-700">Rareté, durabilité, acceptation, divisibilité</p>
              </div>
              <div className="bg-blue-50 rounded p-4">
                <h4 className="font-medium text-blue-800 mb-2">Exemples historiques</h4>
                <p className="text-sm text-blue-700">Or, argent, terres, œuvres d'art</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4 text-blue-800">Caractéristiques Comparatives</h3>
        <div className="space-y-6">
          {storeOfValueCharacteristics.map((characteristic, index) => (
            <Card key={index} className="p-6 bg-white">
              <h4 className="text-lg font-semibold mb-4">{characteristic.characteristic}</h4>
              <p className="text-muted-foreground mb-4">{characteristic.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Traditional Asset */}
                <Card className="p-4 border-2 border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center">
                      {characteristic.traditional.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-800">{characteristic.traditional.asset}</h5>
                      <p className="text-xs text-yellow-700">{characteristic.traditional.details}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <h6 className="text-xs font-medium text-green-800 mb-1">Avantages :</h6>
                      <ul className="text-xs text-green-700 space-y-1">
                        {characteristic.traditional.pros.map((pro, i) => (
                          <li key={i}>✓ {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-xs font-medium text-red-800 mb-1">Inconvénients :</h6>
                      <ul className="text-xs text-red-700 space-y-1">
                        {characteristic.traditional.cons.map((con, i) => (
                          <li key={i}>✗ {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Bitcoin */}
                <Card className="p-4 border-2 border-orange-200 bg-orange-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center">
                      {characteristic.bitcoin.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-800">{characteristic.bitcoin.asset}</h5>
                      <p className="text-xs text-orange-700">{characteristic.bitcoin.details}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <h6 className="text-xs font-medium text-green-800 mb-1">Avantages :</h6>
                      <ul className="text-xs text-green-700 space-y-1">
                        {characteristic.bitcoin.pros.map((pro, i) => (
                          <li key={i}>✓ {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-xs font-medium text-red-800 mb-1">Inconvénients :</h6>
                      <ul className="text-xs text-red-700 space-y-1">
                        {characteristic.bitcoin.cons.map((con, i) => (
                          <li key={i}>✗ {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Bitcoin Advantages */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Avantages de Bitcoin comme Réserve de Valeur</h2>
        <p className="text-muted-foreground mb-8">
          Les propriétés uniques qui rendent Bitcoin supérieur aux réserves de valeur traditionnelles.
        </p>
        
        <div className="space-y-8">
          {bitcoinAdvantages.map((category, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-blue-400">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.color} text-white rounded-lg flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.benefits.map((benefit, benefitIndex) => (
                  <Card key={benefitIndex} className="p-4 bg-gray-50">
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div className="bg-blue-50 rounded p-3">
                        <h5 className="text-xs font-medium text-blue-800 mb-1">Impact :</h5>
                        <p className="text-xs text-blue-700">{benefit.impact}</p>
                      </div>
                      <div className="bg-green-50 rounded p-3">
                        <h5 className="text-xs font-medium text-green-800 mb-1">Preuve :</h5>
                        <p className="text-xs text-green-700">{benefit.proof}</p>
                      </div>
                      <div className="bg-purple-50 rounded p-3">
                        <h5 className="text-xs font-medium text-purple-800 mb-1">Exemple :</h5>
                        <p className="text-xs text-purple-700">{benefit.example}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Bitcoin Disadvantages */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-red-900">Défis et Inconvénients de Bitcoin</h2>
        <p className="text-red-800 mb-8">
          Les obstacles actuels et leurs implications pour l'adoption de Bitcoin comme réserve de valeur.
        </p>
        
        <div className="space-y-8">
          {bitcoinDisadvantages.map((category, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.color} text-white rounded-lg flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.challenges.map((challenge, challengeIndex) => (
                  <Card key={challengeIndex} className="p-4 bg-gray-50">
                    <h4 className="font-semibold mb-2">{challenge.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                      <div className="bg-red-50 rounded p-3">
                        <h5 className="text-xs font-medium text-red-800 mb-1">Impact :</h5>
                        <p className="text-xs text-red-700">{challenge.impact}</p>
                      </div>
                      <div className="bg-blue-50 rounded p-3">
                        <h5 className="text-xs font-medium text-blue-800 mb-1">Mitigation :</h5>
                        <p className="text-xs text-blue-700">{challenge.mitigation}</p>
                      </div>
                      <div className="bg-green-50 rounded p-3">
                        <h5 className="text-xs font-medium text-green-800 mb-1">Données :</h5>
                        <p className="text-xs text-green-700">{challenge.data}</p>
                      </div>
                      <div className="bg-orange-50 rounded p-3">
                        <h5 className="text-xs font-medium text-orange-800 mb-1">Exemple :</h5>
                        <p className="text-xs text-orange-700">{challenge.example}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Corporate Case Studies */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Études de Cas : Adoption Corporate</h2>
        <p className="text-muted-foreground mb-8">
          Analyse détaillée des stratégies d'entreprises pionnières dans l'adoption de Bitcoin comme réserve de valeur.
        </p>
        
        <div className="space-y-8">
          {corporateCaseStudies.map((study, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-purple-400">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${study.color} text-white rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {study.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold">{study.company}</h3>
                    <Badge variant="outline">CEO: {study.ceo}</Badge>
                  </div>
                  
                  <div className="grid lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-800 mb-2">Investissement</h4>
                      <p className="text-sm text-blue-700 mb-1">{study.investment}</p>
                      <p className="text-xs text-blue-600">{study.bitcoinHeld}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-2">Stratégie</h4>
                      <p className="text-sm text-green-700 mb-1">{study.strategy}</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-medium text-purple-800 mb-2">Rationale</h4>
                      <p className="text-sm text-purple-700">{study.rationale}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Timeline d'adoption :</h4>
                    <div className="space-y-2">
                      {study.timeline.map((event, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                          <div className="text-xs font-medium text-gray-600 min-w-20">{event.date}</div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{event.action}</p>
                            <p className="text-xs text-gray-600">{event.reasoning}</p>
                          </div>
                          <div className="text-xs text-gray-500">{event.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-medium text-orange-800 mb-2">Résultats :</h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        {Object.entries(study.results).map(([key, value], i) => (
                          <li key={i}><span className="font-medium">{key}:</span> {value}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="font-medium text-indigo-800 mb-2">Leçons apprises :</h4>
                      <ul className="text-sm text-indigo-700 space-y-1">
                        {study.lessons.map((lesson, i) => (
                          <li key={i}>• {lesson}</li>
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

      {/* Comparison Table */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">Comparaison des Réserves de Valeur</h2>
        <p className="text-gray-700 mb-8">
          Analyse comparative objective entre Bitcoin et les réserves de valeur traditionnelles.
        </p>
        
        <Card className="p-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="text-left p-3 font-semibold">Caractéristique</th>
                <th className="text-left p-3 font-semibold text-yellow-700">Or</th>
                <th className="text-left p-3 font-semibold text-green-700">Monnaies Fiat</th>
                <th className="text-left p-3 font-semibold text-orange-700">Bitcoin</th>
                <th className="text-center p-3 font-semibold">Avantage</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{row.characteristic}</td>
                  <td className="p-3 text-yellow-800">{row.gold}</td>
                  <td className="p-3 text-green-800">{row.fiat}</td>
                  <td className="p-3 text-orange-800">{row.bitcoin}</td>
                  <td className="p-3 text-center">
                    <Badge 
                      variant={row.advantage === 'bitcoin' ? 'default' : row.advantage === 'tie' ? 'secondary' : 'outline'}
                      className={
                        row.advantage === 'bitcoin' ? 'bg-orange-500' : 
                        row.advantage === 'gold' ? 'bg-yellow-500' :
                        row.advantage === 'fiat' ? 'bg-green-500' : ''
                      }
                    >
                      {row.advantage === 'tie' ? '=' : row.advantage}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Card>

      {/* Adoption Metrics */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Métriques d'Adoption Institutionnelle</h2>
        <p className="text-muted-foreground mb-8">
          Évolution de l'adoption de Bitcoin comme réserve de valeur par différents types d'acteurs.
        </p>
        
        <div className="space-y-8">
          {adoptionMetrics.map((metric, index) => (
            <Card key={index} className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                  {metric.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{metric.category}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Année</th>
                      <th className="text-left p-2">Nombre</th>
                      <th className="text-left p-2">Valeur/Volume</th>
                      <th className="text-left p-2">Détails/Leaders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metric.data.map((item, i) => {
                      let valueColumn = '';
                      let detailsColumn = '';

                      if (isCorporateData(item)) {
                        valueColumn = item.value;
                        detailsColumn = item.leaders.join(', ');
                      } else if (isFundData(item)) {
                        valueColumn = item.aum;
                        detailsColumn = item.type;
                      } else if (isGovernmentData(item)) {
                        valueColumn = item.status;
                        detailsColumn = item.examples;
                      }

                      return (
                        <tr key={i} className="border-b">
                          <td className="p-2 font-medium">{item.year}</td>
                          <td className="p-2">{item.count}</td>
                          <td className="p-2">{valueColumn}</td>
                          <td className="p-2 text-xs">{detailsColumn}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Practical Implementation */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-900">Implémentation Pratique par Profil</h2>
        <p className="text-green-800 mb-8">
          Stratégies d'allocation Bitcoin adaptées à différents profils d'investisseurs et d'organisations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {practicalImplementation.map((profile, index) => (
            <Card key={index} className="p-6 bg-white">
              <h3 className="text-lg font-semibold mb-4">{profile.profile}</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded p-3">
                    <h4 className="text-sm font-medium text-blue-800 mb-1">Allocation</h4>
                    <p className="text-xs text-blue-700">{profile.allocation}</p>
                  </div>
                  <div className="bg-purple-50 rounded p-3">
                    <h4 className="text-sm font-medium text-purple-800 mb-1">Horizon</h4>
                    <p className="text-xs text-purple-700">{profile.timeframe}</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded p-3">
                  <h4 className="text-sm font-medium text-green-800 mb-1">Stratégie</h4>
                  <p className="text-xs text-green-700">{profile.strategy}</p>
                </div>
                
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="text-sm font-medium text-gray-800 mb-1">Outils recommandés</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    {profile.tools.map((tool, i) => (
                      <li key={i}>• {tool}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded p-3">
                    <h4 className="text-xs font-medium text-red-800 mb-1">Risques</h4>
                    <p className="text-xs text-red-700">{profile.risks}</p>
                  </div>
                  <div className="bg-yellow-50 rounded p-3">
                    <h4 className="text-xs font-medium text-yellow-800 mb-1">Éducation</h4>
                    <p className="text-xs text-yellow-700">{profile.education}</p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded p-3">
                  <h4 className="text-xs font-medium text-indigo-800 mb-1">Exemple concret</h4>
                  <p className="text-xs text-indigo-700">{profile.example}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Future Outlook */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-purple-900">Perspectives d'Avenir</h2>
        <p className="text-purple-800 mb-8">
          Scénarios d'évolution pour Bitcoin comme réserve de valeur dans les prochaines années.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {futureOutlook.map((outlook, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold">{outlook.category}</h3>
                <Badge variant="outline" className="text-xs">{outlook.timeline}</Badge>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">Probabilité:</span>
                  <Badge 
                    variant={outlook.probability.includes('Très élevée') ? 'default' : 
                            outlook.probability.includes('Élevée') ? 'secondary' : 'outline'}
                  >
                    {outlook.probability}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded p-3">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">Facteurs moteurs:</h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    {outlook.drivers.map((driver, i) => (
                      <li key={i}>• {driver}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded p-3">
                  <h4 className="text-sm font-medium text-green-800 mb-1">Impact attendu:</h4>
                  <p className="text-xs text-green-700">{outlook.impact}</p>
                </div>
                
                <div className="bg-purple-50 rounded p-3">
                  <h4 className="text-sm font-medium text-purple-800 mb-1">Métriques clés:</h4>
                  <p className="text-xs text-purple-700">{outlook.metrics}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Conclusion */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-900">Conclusion</h2>
            <p className="text-yellow-800 mb-4 leading-relaxed">
              Bitcoin présente des caractéristiques uniques qui en font une réserve de valeur digitale 
              supérieure à bien des égards aux alternatives traditionnelles. Sa rareté programmée, 
              sa décentralisation et sa transportabilité parfaite ouvrent de nouvelles possibilités 
              pour la préservation de richesse.
            </p>
            <p className="text-yellow-800 mb-4 leading-relaxed">
              Malgré les défis actuels liés à la volatilité et l'adoption encore limitée, les tendances 
              institutionnelles et l'innovation continue suggèrent une évolution vers une acceptation 
              mainstream comme composant portfolio diversifié.
            </p>
            <p className="text-yellow-800 leading-relaxed">
              L'adoption croissante par entreprises publiques, fonds d'investissement et même 
              gouvernements valide la thèse de Bitcoin comme "or numérique" pour l'ère digitale.
            </p>
          </div>
        </div>
      </Card>

      {/* Questions & Activities */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Questions & Activités</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-3">Questions de réflexion</h3>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>1. Quelles caractéristiques font de Bitcoin une réserve de valeur unique ?</li>
                <li>2. Comment Bitcoin se compare-t-il à l'or sur chaque critère ?</li>
                <li>3. Quelle allocation Bitcoin convient à votre profil de risque ?</li>
                <li>4. Quels sont les principaux risques à considérer ?</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-3">Activités pratiques</h3>
              <ul className="text-green-800 text-sm space-y-2">
                <li>• Calculer l'impact historique allocation 5% Bitcoin</li>
                <li>• Comparer stratégies DCA vs lump sum</li>
                <li>• Analyser corrélations Bitcoin vs autres actifs</li>
                <li>• Évaluer framework corporate pour adoption</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Educational Resources */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Éducatives</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {educationalResources.map((resource, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{resource.title}</h3>
                  <Badge variant="secondary" className="text-xs mb-2">
                    {resource.type}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {resource.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* References */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-gray-50 to-neutral-50 border-gray-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Références</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>• Nakamoto, S. (2008). <em>Bitcoin: A Peer-to-Peer Electronic Cash System</em></p>
          <p>• Antonopoulos, A. M. (2014). <em>Mastering Bitcoin: Unlocking Digital Cryptocurrencies</em></p>
          <p>• Ammous, S. (2018). <em>The Bitcoin Standard: The Decentralized Alternative to Central Banking</em></p>
          <p>• MicroStrategy. (2021). <em>MicroStrategy Adopts Bitcoin as Primary Treasury Reserve Asset</em></p>
          <p>• Tesla. (2021). <em>Tesla Invests $1.5 Billion in Bitcoin</em></p>
          <p>• Square. (2021). <em>Square Invests $220 Million in Bitcoin</em></p>
          <p>• Fidelity Digital Assets. (2022). <em>Bitcoin as a Store of Value</em></p>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <Button 
          variant="outline" 
          onClick={onBackToModule}
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au Module
        </Button>
        
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Leçon terminée</Badge>
          <CheckCircle className="w-5 h-5 text-green-500" />
        </div>
        
        {onNextLesson && nextLessonInfo && (
          <Button 
            onClick={onNextLesson}
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 w-full sm:w-auto"
          >
            {nextLessonInfo.isNextModule ? `${nextLessonInfo.moduleTitle}` : `Leçon suivante`}
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
