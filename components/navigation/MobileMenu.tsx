import { Button } from "../ui/button";
import { Home, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { courseSections } from "../data/course-sections";
import { getShortTitle } from "../utils/navigation-helpers";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  onHomeClick: () => void;
  onContactClick: () => void;
  onClose: () => void;
}

export function MobileMenu({ 
  isOpen, 
  activeSection, 
  onSectionChange, 
  onHomeClick, 
  onContactClick,
  onClose 
}: MobileMenuProps) {
  const handleSectionChange = (sectionId: string) => {
    onSectionChange(sectionId);
    onClose();
  };

  const handleHomeClick = () => {
    onHomeClick();
    onClose();
  };

  const handleContactClick = () => {
    onContactClick();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg z-50 lg:hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-2">
                {/* Home Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleHomeClick}
                    className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                  >
                    <Home className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-700">Accueil</span>
                  </Button>
                </motion.div>

                {/* Separator */}
                <div className="flex items-center gap-3 py-2">
                  <div className="h-px bg-gray-300 flex-1" />
                  <span className="text-xs text-gray-500 font-medium">MODULES</span>
                  <div className="h-px bg-gray-300 flex-1" />
                </div>

                {/* Course Sections */}
                {courseSections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSectionChange(section.id)}
                      className={`w-full flex items-center justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === section.id 
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md" 
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className={`transition-colors duration-200 ${
                        activeSection === section.id ? "text-white" : "text-gray-600"
                      }`}>
                        {section.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-sm">
                          {getShortTitle(section.title)}
                        </div>
                        <div className={`text-xs mt-1 ${
                          activeSection === section.id ? "text-white/80" : "text-gray-500"
                        }`}>
                          {section.lessons.length} leçons
                        </div>
                      </div>
                      {activeSection === section.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      )}
                    </Button>
                  </motion.div>
                ))}

                {/* Separator */}
                <div className="flex items-center gap-3 py-2">
                  <div className="h-px bg-gray-300 flex-1" />
                </div>

                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: courseSections.length * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleContactClick}
                    className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-all duration-200"
                  >
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm">Contact</div>
                      <div className="text-xs mt-1 text-gray-500">À propos & projets</div>
                    </div>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}