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
  Scale,
  ExternalLink
} from "lucide-react";
import { 
  priceVsValueConcepts, 
  bitcoinValueFactors, 
  pricingModels, 
  marketCycles, 
  resources 
} from "./data/economics-lesson-one-data";

interface EconomicsLessonOneProps {
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

export function EconomicsLessonOne({ onBackToModule, onHomeClick, onNextLesson, nextLessonInfo, onSectionChange }: EconomicsLessonOneProps) {
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
          Économie & perception
        </Button>
        <span>/</span>
        <span className="text-foreground">Prix ≠ Valeur</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            <Scale className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Prix ≠ Valeur</h1>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 w-fit">
                Leçon 1/3
              </Badge>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprendre la différence fondamentale entre prix et valeur
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>40 min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Niveau essentiel</span>
          </div>
          <Badge variant="outline">
            Module 4 - Économie
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
              La distinction entre prix et valeur est fondamentale pour comprendre Bitcoin 
              et tout investissement. Le prix est ce que vous payez, la valeur est ce que vous obtenez. 
              Cette différence crée des opportunités mais aussi des pièges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Maîtriser cette distinction est essentiel pour développer une stratégie 
              d'investissement cohérente et résister aux fluctuations émotionnelles du marché.
            </p>
          </div>
        </div>
      </Card>

      {/* Price vs Value Concepts */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Prix vs Valeur : Concepts Fondamentaux</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Comprendre la différence entre ce que coûte un actif et ce qu'il vaut réellement 
          est la clé d'un investissement intelligent.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceVsValueConcepts.map((concept, index) => {
            const IconComponent = concept.icon;
            return (
              <Card key={index} className={`p-6 border-2 ${concept.color} hover:shadow-lg transition-shadow`}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <IconComponent className="w-8 h-8" />
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
            );
          })}
        </div>
      </Card>

      {/* Bitcoin Value Factors */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Facteurs de Valeur de Bitcoin</h2>
        <p className="text-muted-foreground mb-8">
          La valeur fondamentale de Bitcoin repose sur des propriétés uniques 
          qui le distinguent de tous les autres actifs.
        </p>
        
        <div className="space-y-8">
          {bitcoinValueFactors.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.factors.map((factor, factorIndex) => (
                  <Card key={factorIndex} className="p-4">
                    <h4 className="font-semibold mb-2">{factor.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{factor.explanation}</p>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-blue-600">Force :</span>
                        <span className="text-blue-700 font-medium">{factor.strength}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-600">Impact :</span>
                        <span className="text-green-700 font-medium">{factor.impact}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Pricing Models */}
      <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-900">Modèles de Valorisation</h2>
        <p className="text-blue-800 mb-8">
          Différentes approches pour estimer la valeur "juste" de Bitcoin, 
          chacune avec ses forces et limitations.
        </p>
        
        <div className="space-y-6">
          {pricingModels.map((model, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center">
                  📊
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{model.model}</h3>
                  <p className="text-sm text-muted-foreground">par {model.creator}</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <strong className="text-blue-600">Principe :</strong>
                    <p className="text-blue-700 text-sm">{model.principle}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <strong className="text-gray-700">Formule :</strong>
                    <code className="text-gray-600 text-sm block mt-1">{model.formula}</code>
                  </div>
                  <div>
                    <strong className="text-green-600">Prédictions :</strong>
                    <p className="text-green-700 text-sm">{model.predictions}</p>
                  </div>
                  <div>
                    <strong className="text-purple-600">Précision :</strong>
                    <p className="text-purple-700 text-sm">{model.accuracy}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <strong className="text-red-600">Limitations :</strong>
                    <ul className="text-red-700 text-sm space-y-1 mt-1">
                      {model.limitations.map((limitation, idx) => (
                        <li key={idx}>• {limitation}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <strong className="text-blue-700">Usage recommandé :</strong>
                    <p className="text-blue-600 text-sm">{model.useCase}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Market Cycles */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Cycles de Marché</h2>
        <p className="text-muted-foreground mb-8">
          Les marchés suivent des cycles psychologiques prévisibles où prix et valeur 
          divergent puis convergent de manière récurrente.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {marketCycles.map((phase, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{phase.phase}</h3>
                  <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <strong className="text-blue-600">Caractéristiques :</strong>
                  <ul className="text-blue-700 space-y-1 mt-1">
                    {phase.characteristics.map((char, idx) => (
                      <li key={idx}>• {char}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <strong className="text-purple-600">Sentiment :</strong>
                  <p className="text-purple-700">{phase.sentiment}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <strong className="text-green-600">Opportunités :</strong>
                    <ul className="text-green-700 space-y-1 mt-1">
                      {phase.opportunities.map((opp, idx) => (
                        <li key={idx}>• {opp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong className="text-red-600">Risques :</strong>
                    <ul className="text-red-700 space-y-1 mt-1">
                      {phase.risks.map((risk, idx) => (
                        <li key={idx}>• {risk}</li>
                      ))}
                    </ul>
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
                <span>Le <strong>prix</strong> fluctue avec les émotions, la <strong>valeur</strong> dépend des fondamentaux</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Bitcoin possède des <strong>propriétés uniques</strong> qui créent de la valeur intrinsèque</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Les <strong>modèles de valorisation</strong> sont des guides, pas des vérités absolues</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Comprendre les <strong>cycles de marché</strong> aide à prendre de meilleures décisions</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Ressources Complémentaires</h2>
        <p className="text-muted-foreground mb-6">
          Outils et analyses pour approfondir la compréhension de la valorisation Bitcoin.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
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
            );
          })}
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