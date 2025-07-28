import { useState } from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileMenu } from "./navigation/MobileMenu";

export { courseSections } from "./data/course-sections";
export type { CourseSection } from "./data/course-sections";

interface CourseNavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  onHomeClick: () => void;
  onContactClick: () => void;
}

export function CourseNavigation({ activeSection, onSectionChange, onHomeClick, onContactClick }: CourseNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    onHomeClick();
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    onContactClick();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <header 
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-18">
            
            {/* Logo & Brand */}
            <div 
              className="flex items-center gap-4"
            >
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleHomeClick}
                className="flex items-center gap-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 rounded-xl px-4 py-3 group"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <Logo size="large" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    Orandys
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">Formation Bitcoin</p>
                </div>
              </Button>
            </div>

            {/* Desktop Navigation */}
            <DesktopNav 
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
              onHomeClick={handleHomeClick}
              onContactClick={handleContactClick}
            />

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 transition-all duration-300"
              >
                <div className="transition-transform duration-300">
                  {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
                </div>
                <span className="text-sm font-semibold text-gray-700">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        onHomeClick={handleHomeClick}
        onContactClick={handleContactClick}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}