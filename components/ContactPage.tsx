import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Logo } from "./ui/logo";
import {
  Mail,
  BookOpen,
  Globe,
  Users,
  Target,
  Lightbulb,
  Calendar,
  Podcast,
  FileText,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

export function ContactPage() {
  const projects = [
    {
      id: "orandys-advanced",
      title: "Orandys Advanced",
      description: "Modules avancés sur Lightning Network, DeFi Bitcoin et développement d'applications",
      status: "En développement",
      progress: 60,
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
      features: ["Lightning Network", "Smart Contracts", "DApps Bitcoin"],
      timeline: "Q2 2025"
    },
    {
      id: "bitcoin-podcast",
      title: "Podcast Bitcoin Éducatif",
      description: "Série de podcasts avec des experts pour approfondir chaque module d'Orandys",
      status: "Planifié",
      progress: 25,
      icon: <Podcast className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      features: ["Interviews experts", "Cas pratiques", "Actualités"],
      timeline: "Q3 2025"
    },
    {
      id: "cypherpunk-history",
      title: "Histoire des Cypherpunks",
      description: "Documentaire interactif sur les pionniers de la cryptographie et les origines du mouvement Bitcoin",
      status: "En développement",
      progress: 45,
      icon: <FileText className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-600 to-pink-500",
      features: ["Chronologie interactive", "Portraits pionniers", "Archives historiques"],
      timeline: "Q1 2026"
    }
  ];

  const team = [
    {
      name: "Équipe Orandys",
      role: "Questions générales, suggestions et support",
      email: "orandys.bitcoin@gmail.com",
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const objectives = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Démocratiser Bitcoin",
      description: "Rendre les concepts Bitcoin accessibles à tous, sans prérequis technique"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Éducation Rigoureuse",
      description: "Fournir des informations vérifiées et à jour sur la technologie Bitcoin"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Communauté Active",
      description: "Créer un espace d'apprentissage collaboratif et bienveillant"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Impact Global",
      description: "Contribuer à l'adoption mondiale de Bitcoin par l'éducation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-4 bg-white rounded-full shadow-xl shadow-orange-500/20"
              >
                <Logo size="large" />
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                À Propos d'Orandys
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Plateforme éducative dédiée à l'apprentissage de Bitcoin, 
                de ses fondements techniques aux enjeux géopolitiques contemporains.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                6 Modules Complets
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Contenu Vérifié
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                Accès Libre
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Objectifs */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Orandys s'engage à fournir une éducation Bitcoin complète, accessible et rigoureuse 
                pour permettre à chacun de comprendre les enjeux monétaires et technologiques du futur.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full">
                        {objective.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{objective.title}</h3>
                    <p className="text-sm text-gray-600">{objective.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projets en Cours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
                <h2 className="text-3xl font-bold">Projets en Cours</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez les initiatives en développement pour enrichir l'écosystème éducatif Bitcoin
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl text-white ${project.color}`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">{project.title}</h3>
                          <Badge 
                            variant={project.status === "En développement" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Progression</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="pt-2">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              {project.timeline}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-8 h-8 text-orange-500" />
                <h2 className="text-3xl font-bold">Contactez l'Équipe</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une question ? Une suggestion ? N'hésitez pas à nous contacter pour améliorer l'expérience Orandys
              </p>
            </div>

            <div className="flex justify-center">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="max-w-md"
                >
                  <Card className="p-8 bg-white border-0 shadow-xl shadow-orange-500/10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="p-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg"
                        >
                          {member.icon}
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-gray-600 mb-6">{member.role}</p>
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white border-0"
                        onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        {member.email}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}