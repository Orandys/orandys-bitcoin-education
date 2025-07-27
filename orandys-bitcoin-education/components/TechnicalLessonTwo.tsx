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
  Send,
  Wallet,
  Key,
  Lock,
  Hash,
  Network,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  Calculator
} from "lucide-react";

interface TechnicalLessonTwoProps {
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

export function TechnicalLessonTwo({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: TechnicalLessonTwoProps) {
  const transactionComponents = [
    {
      icon: <Send className="w-8 h-8" />,
      title: "Inputs",
      description: "Références aux bitcoins que vous voulez dépenser",
      details: [
        "Hash de la transaction précédente",
        "Index de l'output à dépenser",
        "Script de déverrouillage (signature)",
        "Séquence number"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Outputs",
      description: "Destinataires et montants des bitcoins",
      details: [
        "Montant en satoshis",
        "Script de verrouillage (adresse)",
        "Conditions de dépense",
        "Changement vers expéditeur"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Métadonnées",
      description: "Informations techniques de la transaction",
      details: [
        "Version du protocole",
        "Nombre d'inputs/outputs",
        "Lock time",
        "Hash unique (TXID)"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const utxoExample = {
    scenario: "Alice veut envoyer 0.5 BTC à Bob",
    aliceUTXOs: [
      { amount: "0.3 BTC", txid: "abc123...", index: 0 },
      { amount: "0.4 BTC", txid: "def456...", index: 1 },
      { amount: "0.1 BTC", txid: "ghi789...", index: 0 }
    ],
    transaction: {
      inputs: [
        { from: "abc123...:0", amount: "0.3 BTC" },
        { from: "def456...:1", amount: "0.4 BTC" }
      ],
      outputs: [
        { to: "Bob's address", amount: "0.5 BTC" },
        { to: "Alice's change address", amount: "0.195 BTC" }
      ],
      fee: "0.005 BTC"
    }
  };

  const validationSteps = [
    {
      step: "Vérification des signatures",
      description: "Les nœuds vérifient que les signatures correspondent aux clés publiques",
      importance: "Prouve que l'expéditeur possède les bitcoins",
      failure: "Transaction rejetée si signature invalide"
    },
    {
      step: "Vérification des UTXO",
      description: "Vérification que les inputs existent et ne sont pas déjà dépensés",
      importance: "Empêche la double dépense",
      failure: "Transaction rejetée si UTXO introuvable ou déjà utilisé"
    },
    {
      step: "Vérification des montants",
      description: "La somme des outputs ne peut pas excéder la somme des inputs",
      importance: "Empêche la création d'argent ex nihilo",
      failure: "Transaction rejetée si les mathématiques ne concordent pas"
    },
    {
      step: "Vérification des scripts",
      description: "Exécution et validation des scripts de verrouillage/déverrouillage",
      importance: "Respect des conditions de dépense",
      failure: "Transaction rejetée si script échoue"
    },
    {
      step: "Vérification des frais",
      description: "Les frais doivent être positifs et raisonnables",
      importance: "Incitation pour les mineurs et prévention du spam",
      failure: "Transaction peut être ignorée si frais trop faibles"
    }
  ];

  const scriptTypes = [
    {
      type: "Pay-to-Public-Key-Hash (P2PKH)",
      description: "Format standard pour les adresses Bitcoin classiques",
      usage: "~40% des transactions",
      script: "OP_DUP OP_HASH160 <pubkey_hash> OP_EQUALVERIFY OP_CHECKSIG",
      advantages: ["Simple", "Largement supporté", "Signature unique"],
      example: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
    },
    {
      type: "Pay-to-Script-Hash (P2SH)",
      description: "Permet des conditions de dépense complexes",
      usage: "~50% des transactions",
      script: "OP_HASH160 <script_hash> OP_EQUAL",
      advantages: ["Flexible", "Multisig", "Scripts complexes"],
      example: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"
    },
    {
      type: "Pay-to-Witness-Public-Key-Hash (P2WPKH)",
      description: "Version SegWit du P2PKH",
      usage: "~10% des transactions",
      script: "0 <pubkey_hash>",
      advantages: ["Frais réduits", "Capacité accrue", "Malléabilité résolue"],
      example: "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4"
    }
  ];

  const feeCalculation = [
    {
      factor: "Taille de la transaction",
      description: "Plus la transaction est grande (en bytes), plus les frais sont élevés",
      calculation: "Nombre d'inputs + outputs + signatures",
      optimization: "Utiliser moins d'inputs, adresses SegWit",
      impact: "Transaction typique : 225 bytes"
    },
    {
      factor: "Congestion du réseau",
      description: "Plus le mempool est plein, plus les frais augmentent",
      calculation: "Offre et demande pour l'espace dans les blocs",
      optimization: "Transiger pendant les heures creuses",
      impact: "Frais peuvent varier de 1 à 100+ sat/vB"
    },
    {
      factor: "Priorité désirée",
      description: "Frais plus élevés = confirmation plus rapide",
      calculation: "Satoshis par byte virtuel (sat/vB)",
      optimization: "Ajuster selon l'urgence",
      impact: "Confirmation en 10 min vs plusieurs heures"
    }
  ];

  const transactionStates = [
    {
      state: "Unconfirmed",
      description: "Transaction diffusée mais pas encore dans un bloc",
      duration: "0-30+ minutes selon les frais",
      risks: ["Peut être remplacée (RBF)", "Pas définitive", "Double dépense possible"],
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      state: "1 Confirmation",
      description: "Transaction incluse dans un bloc",
      duration: "~10 minutes",
      risks: ["Réorganisation possible", "Attaque 51% théorique"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      state: "3-6 Confirmations",
      description: "Transaction bien établie dans la chaîne",
      duration: "30-60 minutes",
      risks: ["Risque très faible", "Accepté par la plupart des services"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      state: "6+ Confirmations",
      description: "Transaction considérée comme définitive",
      duration: "60+ minutes",
      risks: ["Pratiquement irréversible", "Sécurité maximale"],
      color: "bg-green-50 border-green-200"
    }
  ];

  const commonErrors = [
    {
      error: "Insufficient funds",
      cause: "Somme des UTXO disponibles inférieure au montant + frais",
      solution: "Réduire le montant ou attendre de recevoir plus de fonds",
      prevention: "Vérifier le solde avant de créer la transaction"
    },
    {
      error: "Fee too low",
      cause: "Frais inférieurs au minimum requis par le réseau",
      solution: "Augmenter les frais ou utiliser Replace-by-Fee (RBF)",
      prevention: "Utiliser un estimateur de frais fiable"
    },
    {
      error: "Invalid signature",
      cause: "Signature ne correspond pas à la clé privée des UTXO",
      solution: "Vérifier les clés privées et refaire la signature",
      prevention: "Utiliser un wallet bien testé"
    },
    {
      error: "Double spend",
      cause: "Tentative de dépenser des UTXO déjà utilisés",
      solution: "Attendre que la première transaction soit confirmée",
      prevention: "Synchroniser le wallet avant de transiger"
    }
  ];

  const resources = [
    {
      title: "Bitcoin Transaction Explorer",
      type: "Outil en ligne",
      duration: "Temps réel",
      description: "Explorer et analyser les transactions Bitcoin",
      icon: <Network className="w-5 h-5" />,
      url: "https://blockstream.info/"
    },
    {
      title: "Mastering Bitcoin - Chapter 6",
      type: "Livre technique",
      duration: "2h",
      description: "Transactions en détail par Andreas Antonopoulos",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch06.asciidoc"
    },
    {
      title: "Bitcoin Script Playground",
      type: "Outil interactif",
      duration: "30 min",
      description: "Expérimenter avec les scripts Bitcoin",
      icon: <Play className="w-5 h-5" />,
      url: "https://siminchen.github.io/bitcoinIDE/build/editor.html"
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
        <span className="text-foreground">Transactions</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Send className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Transactions</h1>
              <Badge variant="secondary" className="bg-green-100 text-green-700 w-fit">
                Leçon 2/6
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comment fonctionnent les transferts de bitcoins
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>30 min</span>
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
      <Card className="p-6 sm:p-8 mb-8 border-l-4 border-l-green-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Les transactions Bitcoin sont les éléments fondamentaux qui permettent le transfert 
              de valeur sur le réseau. Cette leçon décortique leur structure, leur validation 
              et leur cycle de vie complet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre les transactions est essentiel pour maîtriser Bitcoin et développer 
              des applications qui interagissent avec le réseau.
            </p>
          </div>
        </div>
      </Card>

      {/* Transaction Components */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Anatomie d'une Transaction</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Chaque transaction Bitcoin est composée de trois éléments principaux qui définissent 
          l'origine, la destination et les conditions du transfert.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {transactionComponents.map((component, index) => (
            <Card key={index} className={`p-6 border-2 ${component.color} hover:shadow-lg transition-shadow`}>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {component.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{component.title}</h3>
                <p className="text-muted-foreground mb-4">{component.description}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium mb-2">Contient :</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {component.details.map((detail, idx) => (
                    <li key={idx}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* UTXO Example */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-900">Exemple Pratique : Modèle UTXO</h2>
        <p className="text-green-800 mb-8">
          Bitcoin utilise le modèle UTXO (Unspent Transaction Outputs) : 
          chaque transaction consomme des outputs non dépensés et en crée de nouveaux.
        </p>
        
        <div className="bg-white rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">{utxoExample.scenario}</h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Alice's UTXOs */}
            <div>
              <h4 className="font-medium mb-3">UTXOs d'Alice</h4>
              <div className="space-y-2">
                {utxoExample.aliceUTXOs.map((utxo, index) => (
                  <div key={index} className="bg-blue-50 rounded p-3 text-sm">
                    <div className="font-semibold">{utxo.amount}</div>
                    <div className="text-xs text-gray-600">{utxo.txid}:{utxo.index}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Transaction */}
            <div>
              <h4 className="font-medium mb-3">Transaction créée</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-red-600 mb-1">Inputs</div>
                  {utxoExample.transaction.inputs.map((input, index) => (
                    <div key={index} className="bg-red-50 rounded p-2 text-xs">
                      <div>{input.amount}</div>
                      <div className="text-gray-600">{input.from}</div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <div className="text-sm font-medium text-green-600 mb-1">Outputs</div>
                  {utxoExample.transaction.outputs.map((output, index) => (
                    <div key={index} className="bg-green-50 rounded p-2 text-xs">
                      <div>{output.amount}</div>
                      <div className="text-gray-600">{output.to}</div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-yellow-50 rounded p-2 text-xs">
                  <div className="font-medium">Frais: {utxoExample.transaction.fee}</div>
                </div>
              </div>
            </div>
            
            {/* Result */}
            <div>
              <h4 className="font-medium mb-3">Résultat</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-100 rounded p-3">
                  <div className="font-semibold">✓ Bob reçoit 0.5 BTC</div>
                  <div className="text-xs">Nouvel UTXO créé</div>
                </div>
                <div className="bg-blue-100 rounded p-3">
                  <div className="font-semibold">↩ Alice récupère 0.195 BTC</div>
                  <div className="text-xs">Monnaie rendue</div>
                </div>
                <div className="bg-orange-100 rounded p-3">
                  <div className="font-semibold">⚡ Mineurs reçoivent 0.005 BTC</div>
                  <div className="text-xs">Frais de transaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Validation Steps */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Processus de Validation</h2>
        <p className="text-muted-foreground mb-8">
          Chaque transaction doit passer par une série de vérifications rigoureuses 
          avant d'être acceptée par le réseau.
        </p>
        
        <div className="space-y-4">
          {validationSteps.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
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
                      <strong className="text-red-600">En cas d'échec :</strong>
                      <p className="text-red-700">{step.failure}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Script Types */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Types de Scripts Bitcoin</h2>
        <p className="text-muted-foreground mb-8">
          Bitcoin utilise un système de scripts pour définir les conditions de dépense des bitcoins.
        </p>
        
        <div className="space-y-6">
          {scriptTypes.map((scriptType, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-xs">{scriptType.usage}</Badge>
                    <h3 className="text-lg font-semibold">{scriptType.type}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{scriptType.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-xs font-mono text-gray-600 mb-1">Script:</div>
                    <code className="text-sm font-mono">{scriptType.script}</code>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Avantages :</h4>
                      <ul className="text-muted-foreground space-y-1">
                        {scriptType.advantages.map((advantage, idx) => (
                          <li key={idx}>• {advantage}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Exemple d'adresse :</h4>
                      <code className="text-xs bg-blue-50 p-2 rounded block">{scriptType.example}</code>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Fee Calculation */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-orange-900">Calcul des Frais de Transaction</h2>
        <p className="text-orange-800 mb-8">
          Les frais Bitcoin dépendent de plusieurs facteurs et sont essentiels pour la priorité de traitement.
        </p>
        
        <div className="space-y-6">
          {feeCalculation.map((factor, index) => (
            <Card key={index} className="p-6 bg-white">
              <h3 className="font-semibold text-lg mb-3">{factor.factor}</h3>
              <div className="grid lg:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div><strong>Description :</strong> {factor.description}</div>
                  <div><strong>Calcul :</strong> {factor.calculation}</div>
                </div>
                <div className="space-y-2">
                  <div><strong>Optimisation :</strong> {factor.optimization}</div>
                  <div><strong>Impact :</strong> {factor.impact}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Transaction States */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">États et Confirmations</h2>
        <p className="text-muted-foreground mb-8">
          Le niveau de sécurité d'une transaction dépend du nombre de confirmations reçues.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {transactionStates.map((state, index) => (
            <Card key={index} className={`p-6 border-2 ${state.color}`}>
              <h3 className="font-semibold text-lg mb-3">{state.state}</h3>
              <p className="text-muted-foreground mb-3">{state.description}</p>
              <div className="space-y-2 text-sm">
                <div><strong>Durée :</strong> {state.duration}</div>
                <div>
                  <strong>Risques :</strong>
                  <ul className="mt-1 ml-4">
                    {state.risks.map((risk, idx) => (
                      <li key={idx}>• {risk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Common Errors */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Erreurs Courantes</h2>
        <p className="text-muted-foreground mb-8">
          Les problèmes les plus fréquents lors de la création et diffusion de transactions.
        </p>
        
        <div className="space-y-4">
          {commonErrors.map((error, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-500 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{error.error}</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div><strong className="text-red-600">Cause :</strong> {error.cause}</div>
                      <div><strong className="text-green-600">Solution :</strong> {error.solution}</div>
                    </div>
                    <div>
                      <div><strong className="text-blue-600">Prévention :</strong> {error.prevention}</div>
                    </div>
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
                <span>Les transactions Bitcoin utilisent le <strong>modèle UTXO</strong> : consommation d'outputs non dépensés</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Chaque transaction doit être <strong>validée cryptographiquement</strong> par le réseau</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>frais de transaction</strong> dépendent de la taille et de la congestion du réseau</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Plus de <strong>confirmations</strong> = plus de sécurité pour la transaction</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Outils et références pour approfondir votre compréhension des transactions Bitcoin.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
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
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 w-full sm:w-auto"
          >
            Leçon suivante
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}