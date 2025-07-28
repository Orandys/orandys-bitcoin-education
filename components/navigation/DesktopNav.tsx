import { Button } from "../ui/button";
import { Home, Mail } from "lucide-react";
// import { motion } from "motion";
import { courseSections } from "../data/course-sections";
import { getShortTitle } from "../utils/navigation-helpers";

interface DesktopNavProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  onHomeClick: () => void;
  onContactClick: () => void;
}

export function DesktopNav({ activeSection, onSectionChange, onHomeClick, onContactClick }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={onHomeClick}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
      >
        <Home className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Accueil</span>
      </Button>
      
      <div className="w-px h-6 bg-gray-300 mx-2" />
      
      {courseSections.map((section) => (
        <div
          key={section.id}
        >
          <Button
            variant={activeSection === section.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onSectionChange(section.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              activeSection === section.id 
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/20" 
                : "hover:bg-gray-100 text-gray-700"
            }`}
            title={section.title}
          >
            <div className={`transition-colors duration-200 ${
              activeSection === section.id ? "text-white" : "text-gray-600"
            }`}>
              {section.icon}
            </div>
            <span className="text-sm font-medium hidden xl:inline">
              {getShortTitle(section.title)}
            </span>
          </Button>
        </div>
      ))}
      
      <div className="w-px h-6 bg-gray-300 mx-2" />
      
      <div
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={onContactClick}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-all duration-200"
        >
          <Mail className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium hidden xl:inline">Contact</span>
        </Button>
      </div>
    </nav>
  );
}