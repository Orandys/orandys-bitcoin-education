import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Coins, 
  TrendingUp, 
  Shield, 
  Globe, 
  Clock, 
  Users, 
  ArrowRight, 
  BookOpen, 
  Target, 
  Lightbulb, 
  Wrench, 
  GraduationCap, 
  Brain,
  Cpu,
  User,
  Play
} from "lucide-react";
const orandysLogo = '/orandys-logo.png';

interface OrandysHomeProps {
  onStartLearning: () => void;
}

export function OrandysHome({ onStartLearning }: OrandysHomeProps) {
  const pedagogicalObjectives = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Comprendre le fonctionnement de Bitcoin",
      description: "Expliquer simplement mais rigoureusement les briques essentielles du protocole",
      details: "réseau, minage, transactions, cryptographie, etc.",
      color: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Comprendre les bases de l'argent",
      description: "Faire réfléchir à ce qu'est la monnaie et pourquoi Bitcoin a émergé",
      details: "distinction avec le système monétaire traditionnel",
      color: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Donner les outils pour manipuler Bitcoin",
      description: "Permettre à l'utilisateur de pratiquer concrètement",
      details: "créer un portefeuille, recevoir/envoyer une transaction, lire un explorateur",
      color: "bg-green-100 text-green-700 border-green-200"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Stimuler la curiosité",
      description: "Donner envie d'approfondir vers des modules plus avancés",
      details: "scalabilité, vie privée, rôle géopolitique...",
      color: "bg-yellow-100 text-yellow-700 border-yellow-200"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Rendre le contenu enseignable",
      description: "Structuration claire adaptée au contexte pédagogique",
      details: "validation des acquis, langage accessible, illustrations pertinentes, références sérieuses",
      color: "bg-orange-100 text-orange-700 border-orange-200"
    }
  ];

  const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Approche rigoureuse",
      description: "Références académiques sérieuses et contenu de qualité"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Pédagogie adaptée",
      description: "Contenu structuré et accessible pour un apprentissage efficace"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessible à tous",
      description: "Langage clair, illustrations pertinentes, pas de prérequis techniques"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Vision globale",
      description: "Comprendre Bitcoin dans son contexte économique et géopolitique"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-orange-50/30 min-h-screen">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-2xl shadow-orange-500/20 ring-4 ring-orange-100/50 transform hover:scale-105 transition-all duration-500">
                <img 
                  src={orandysLogo} 
                  alt="Orandys Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse" />
            </div>
            <div className="text-left">
              <h1 className="text-8xl font-black bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                Orandys
              </h1>
              <p className="text-2xl text-gray-600 mt-3 font-semibold tracking-wide">
                Naviguer, apprendre, évoluer
              </p>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-2xl text-gray-800 leading-relaxed font-light mb-4">
              <span className="font-semibold text-orange-600">2025 : Bitcoin s'impose.</span>
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Apprenez, pratiquez, maîtrisez. La formation qui vous prépare à l'économie de demain.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full">
              Contenu Pédagogique
            </Badge>
            <Badge className="bg-gradient-to-r from-stone-600 to-stone-700 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full">
              Références Sérieuses
            </Badge>
            <Badge className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full">
              Exercices Pratiques
            </Badge>
          </div>
          
          <div className="relative mb-8">
            <Button 
              size="lg" 
              onClick={onStartLearning} 
              className="flex items-center gap-4 mx-auto text-xl px-12 py-6 bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 hover:from-orange-600 hover:via-orange-700 hover:to-yellow-600 text-white shadow-2xl shadow-orange-500/30 rounded-3xl transform hover:scale-105 hover:shadow-3xl transition-all duration-300 font-semibold"
            >
              <BookOpen className="w-7 h-7" />
              Commencer l'apprentissage
              <ArrowRight className="w-7 h-7" />
            </Button>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur-xl opacity-20 -z-10" />
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-8 text-gray-600">
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium">25+ leçons</span>
            </div>
            <div className="w-2 h-2 bg-orange-300 rounded-full" />
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Users className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium">Niveau débutant</span>
            </div>
            <div className="w-2 h-2 bg-orange-300 rounded-full" />
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <GraduationCap className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium">Contenu éducatif</span>
            </div>
          </div>
        </div>

        {/* Pedagogical Objectives */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">Notre Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Orandys vise 5 objectifs clairs pour une compréhension complète et pratique de Bitcoin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pedagogicalObjectives.map((objective, index) => (
              <Card key={index} className={`p-6 border-2 ${objective.color} hover:shadow-xl hover:scale-105 transition-all duration-500 h-full rounded-2xl backdrop-blur-sm`}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mx-auto ring-2 ring-white/50">
                      <div className="scale-90">
                        {objective.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs font-semibold px-3 py-1 mb-3 rounded-full border-2">
                        {index + 1}
                      </Badge>
                      <h3 className="text-sm font-bold mb-3 leading-tight">{objective.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed text-sm flex-1 font-medium">
                      {objective.description}
                    </p>
                    <p className="text-gray-600 italic text-xs leading-relaxed">
                      {objective.details}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <Card className="p-10 mb-20 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 border-gray-200 shadow-xl rounded-3xl">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">Pourquoi Choisir Orandys ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ring-4 ring-orange-100/50">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-3 text-xl text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Program Overview */}
        <Card className="p-8 mb-16 bg-gradient-to-br from-orange-50 via-yellow-50/50 to-amber-50/30 border-orange-200 shadow-xl rounded-3xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">Programme de Formation</h2>
            <p className="text-gray-700 text-lg font-medium">
              Un parcours structuré en 5 modules progressifs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Introduction & Monnaie", lessons: "4 leçons", icon: <BookOpen className="w-5 h-5" /> },
              { title: "Fondamentaux Techniques", lessons: "6 leçons", icon: <Cpu className="w-5 h-5" /> },
              { title: "Sécurité & Réseau", lessons: "3 leçons", icon: <Shield className="w-5 h-5" /> },
              { title: "Économie Bitcoin", lessons: "3 leçons", icon: <TrendingUp className="w-5 h-5" /> },
              { title: "Applications & Futur", lessons: "5 leçons", icon: <Globe className="w-5 h-5" /> }
            ].map((module, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-500 text-white rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:rotate-6 transition-transform duration-300">
                    {module.icon}
                  </div>
                  <div className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1.5 rounded-full mb-3 shadow-sm">
                    Module {index + 1}
                  </div>
                  <h3 className="font-bold mb-2 text-sm leading-tight text-gray-800">{module.title}</h3>
                  <p className="text-gray-600 text-sm font-medium">{module.lessons}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-orange-500 via-orange-600 via-yellow-500 to-amber-500 rounded-3xl p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-8 drop-shadow-lg">Prêt à Explorer Bitcoin ?</h2>
            <p className="text-2xl opacity-95 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Rejoignez nous et faites confiance à Orandys pour comprendre la révolution Bitcoin
            </p>
            <div className="relative">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={onStartLearning}
                className="text-2xl px-16 py-8 bg-white text-orange-600 hover:bg-gray-50 shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 font-bold"
              >
                <Play className="w-8 h-8 mr-4" />
                Commencer Maintenant
              </Button>
              <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-30 -z-10" />
            </div>
            <div className="flex items-center justify-center gap-10 mt-10 text-white/90">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <span className="text-lg font-medium">Gratuit</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <span className="text-lg font-medium">Complet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}