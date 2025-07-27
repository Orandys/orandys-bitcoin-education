import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import {
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
  Play
} from "lucide-react";

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
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-transform duration-300">
              <Logo size="large" />
            </div>
            <div className="text-left">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Orandys
              </h1>
              <p className="text-xl text-gray-600 mt-2 font-medium">
                Naviguer, apprendre, évoluer
              </p>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            2025 : Bitcoin s'impose. Apprenez, pratiquez, maîtrisez. La formation qui vous prépare à l'économie de demain.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Badge className="bg-slate-600 text-white px-4 py-2 text-sm font-medium shadow-md">
              Contenu Pédagogique
            </Badge>
            <Badge className="bg-stone-600 text-white px-4 py-2 text-sm font-medium shadow-md">
              Références Sérieuses
            </Badge>
            <Badge className="bg-gray-600 text-white px-4 py-2 text-sm font-medium shadow-md">
              Exercices Pratiques
            </Badge>
          </div>
          
          <Button 
            size="lg" 
            onClick={onStartLearning} 
            className="flex items-center gap-3 mx-auto text-lg px-10 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-xl shadow-orange-500/25 rounded-2xl transform hover:scale-105 transition-all duration-200"
          >
            <BookOpen className="w-6 h-6" />
            Commencer l'apprentissage
            <ArrowRight className="w-6 h-6" />
          </Button>
          
          <div className="flex items-center justify-center gap-6 mt-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">25+ leçons</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">Niveau débutant</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm">Contenu éducatif</span>
            </div>
          </div>
        </div>

        {/* Pedagogical Objectives */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Notre Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Orandys vise 5 objectifs clairs pour une compréhension complète et pratique de Bitcoin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pedagogicalObjectives.map((objective, index) => (
              <Card key={index} className={`p-4 border-2 ${objective.color} hover:shadow-lg transition-all duration-300 h-full`}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md mx-auto">
                      <div className="scale-75">
                        {objective.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs font-medium px-2 py-0.5 mb-2">
                        {index + 1}
                      </Badge>
                      <h3 className="text-sm font-bold mb-2">{objective.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-2 leading-relaxed text-xs flex-1">
                      {objective.description}
                    </p>
                    <p className="text-gray-600 italic text-xs">
                      {objective.details}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <Card className="p-8 mb-16 bg-gradient-to-br from-gray-50 to-white border-gray-200 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Pourquoi Choisir Orandys ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Program Overview */}
        <Card className="p-5 mb-12 bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 shadow-md">
          <div className="text-center mb-5">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Programme de Formation</h2>
            <p className="text-gray-700 text-sm">
              Un parcours structuré en 5 modules progressifs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { title: "Introduction & Monnaie", lessons: "4 leçons", icon: <BookOpen className="w-4 h-4" /> },
              { title: "Fondamentaux Techniques", lessons: "6 leçons", icon: <Cpu className="w-4 h-4" /> },
              { title: "Sécurité & Réseau", lessons: "3 leçons", icon: <Shield className="w-4 h-4" /> },
              { title: "Économie Bitcoin", lessons: "3 leçons", icon: <TrendingUp className="w-4 h-4" /> },
              { title: "Applications & Futur", lessons: "5 leçons", icon: <Globe className="w-4 h-4" /> }
            ].map((module, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-orange-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-lg flex items-center justify-center shadow-sm mb-2">
                    {module.icon}
                  </div>
                  <div className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded mb-2">
                    Module {index + 1}
                  </div>
                  <h3 className="font-bold mb-1 text-sm leading-tight">{module.title}</h3>
                  <p className="text-gray-600 text-xs">{module.lessons}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-orange-500 via-yellow-500 to-amber-500 rounded-3xl p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">Prêt à Explorer Bitcoin ?</h2>
            <p className="text-xl opacity-95 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez nous et faites confiance à Orandys pour comprendre la révolution Bitcoin
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onStartLearning}
              className="text-xl px-12 py-6 bg-white text-orange-600 hover:bg-gray-50 shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-200"
            >
              <Play className="w-7 h-7 mr-3" />
              Commencer Maintenant
            </Button>
            <div className="flex items-center justify-center gap-6 mt-8 text-white/90">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm">Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm">Complet</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}