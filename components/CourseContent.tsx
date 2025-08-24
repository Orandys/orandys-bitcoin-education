import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CourseSection } from "./CourseNavigation";
import {
  Play,
  FileText,
  Video,
  ExternalLink,
  Clock,
  CheckCircle
} from "lucide-react";

interface CourseContentProps {
  section: CourseSection;
  onHomeClick?: () => void;
  onLessonClick?: (lessonIndex: number) => void;
}

function getFormatIcon(format: string) {
  if (format.toLowerCase().includes('vidéo')) return <Video className="w-4 h-4" />;
  if (format.toLowerCase().includes('pdf')) return <FileText className="w-4 h-4" />;
  if (format.toLowerCase().includes('interactive')) return <Play className="w-4 h-4" />;
  return <FileText className="w-4 h-4" />;
}

function getFormatColor(format: string) {
  if (format.toLowerCase().includes('vidéo')) return 'bg-red-100 text-red-700';
  if (format.toLowerCase().includes('pdf')) return 'bg-blue-100 text-blue-700';
  if (format.toLowerCase().includes('interactive')) return 'bg-green-100 text-green-700';
  return 'bg-gray-100 text-gray-700';
}

export function CourseContent({ section, onHomeClick, onLessonClick }: CourseContentProps) {
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
        <span className="text-foreground">{section.title}</span>
      </div>

      {/* Section Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-xl flex items-center justify-center shadow-lg">
            {section.icon}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold">{section.title}</h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">{section.description}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{section.lessons.length} leçons</span>
          </div>
          <Badge variant="secondary" className="bg-orange-100 text-orange-700">
            Formation Orandys
          </Badge>
        </div>
      </div>

      {/* Educational Context */}
      <Card className="p-4 sm:p-6 mb-8 bg-blue-50 border-blue-200">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Objectifs Pédagogiques</h3>
            <p className="text-sm text-blue-700 leading-relaxed">
              Ce module contribue aux objectifs Orandys : compréhension rigoureuse, approche pratique, 
              et développement de l'esprit critique. Contenu structuré avec références académiques sérieuses.
            </p>
          </div>
        </div>
      </Card>

      {/* Lessons Grid */}
      <div className="grid gap-4 sm:gap-6">
        {section.lessons.map((lesson, index) => (
          <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow border-l-4 border-l-orange-400">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-lg flex items-center justify-center font-semibold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{lesson.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                    {lesson.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Ressources Pédagogiques
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {lesson.resources}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <Badge 
                    variant="secondary" 
                    className={`flex items-center gap-2 w-fit ${getFormatColor(lesson.format)}`}
                  >
                    {getFormatIcon(lesson.format)}
                    {lesson.format}
                  </Badge>
                  
                  <Button 
                    size="sm" 
                    onClick={() => onLessonClick && onLessonClick(index)}
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 w-full sm:w-auto justify-center"
                  >
                    <Play className="w-4 h-4" />
                    Commencer
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

    </div>
  );
}