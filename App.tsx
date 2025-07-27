import { useState, useEffect } from 'react';
import { OrandysHome } from './components/OrandysHome';
import { CourseContent } from './components/CourseContent';
import { ContactPage } from './components/ContactPage';
import { CourseNavigation, courseSections } from './components/CourseNavigation';
import { LessonPage } from './components/LessonPage';
import { LessonTwoPage } from './components/LessonTwoPage';
import { LessonThreePage } from './components/LessonThreePage';
import { LessonFourPage } from './components/LessonFourPage';
import { TechnicalLessonOne } from './components/TechnicalLessonOne';
import { TechnicalLessonTwo } from './components/TechnicalLessonTwo';
import { TechnicalLessonThree } from './components/TechnicalLessonThree';
import { TechnicalLessonFour } from './components/TechnicalLessonFour';
import { TechnicalLessonFive } from './components/TechnicalLessonFive';
import { TechnicalLessonSix } from './components/TechnicalLessonSix';
import { SecurityLessonOne } from './components/SecurityLessonOne';
import { SecurityLessonTwo } from './components/SecurityLessonTwo';
import { SecurityLessonThree } from './components/SecurityLessonThree';
import { EconomicsLessonOne } from './components/EconomicsLessonOne';
import { EconomicsLessonTwo } from './components/EconomicsLessonTwo';
import { EconomicsLessonThree } from './components/EconomicsLessonThree';
import { ApplicationsLessonOne } from './components/ApplicationsLessonOne';
import { ApplicationsLessonTwo } from './components/ApplicationsLessonTwo';
import { ApplicationsLessonThree } from './components/ApplicationsLessonThree';
import { ApplicationsLessonFour } from './components/ApplicationsLessonFour';
import { ApplicationsLessonFive } from './components/ApplicationsLessonFive';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
const orandysLogo = '/orandys-logo.png';

type ViewType = 'home' | 'course' | 'lesson' | 'contact';

// Mapping des leçons pour simplifier le rendu
const lessonComponents = {
  introduction: [LessonPage, LessonTwoPage, LessonThreePage, LessonFourPage],
  technical: [TechnicalLessonOne, TechnicalLessonTwo, TechnicalLessonThree, TechnicalLessonFour, TechnicalLessonFive, TechnicalLessonSix],
  security: [SecurityLessonOne, SecurityLessonTwo, SecurityLessonThree],
  economics: [EconomicsLessonOne, EconomicsLessonTwo, EconomicsLessonThree],
  applications: [ApplicationsLessonTwo, ApplicationsLessonThree, ApplicationsLessonFour, ApplicationsLessonOne, ApplicationsLessonFive]
} as const;

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [activeSection, setActiveSection] = useState<string>('');
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);

  // Configuration du favicon et titre au démarrage
  useEffect(() => {
    document.title = 'Orandys - Formation Bitcoin';
    
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = orandysLogo;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = orandysLogo;
      document.head.appendChild(newLink);
    }
  }, []);

  // Scroll vers le haut lors des changements de vue
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, activeSection, currentLessonIndex]);

  const getCurrentSection = () => courseSections.find(section => section.id === activeSection);

  const getNextLessonInfo = () => {
    const currentSection = getCurrentSection();
    if (!currentSection) return null;

    // Prochaine leçon dans le module actuel
    if (currentLessonIndex < currentSection.lessons.length - 1) {
      return {
        title: currentSection.lessons[currentLessonIndex + 1].title,
        moduleTitle: currentSection.title,
        isNextModule: false
      };
    }

    // Premier cours du module suivant
    const currentSectionIndex = courseSections.findIndex(section => section.id === activeSection);
    if (currentSectionIndex < courseSections.length - 1) {
      const nextSection = courseSections[currentSectionIndex + 1];
      return {
        title: nextSection.lessons[0].title,
        moduleTitle: nextSection.title,
        isNextModule: true
      };
    }

    return null;
  };

  // Gestionnaires d'événements
  const handleStartLearning = () => {
    setActiveSection('introduction');
    setCurrentView('course');
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setCurrentView('course');
  };

  const handleHomeClick = () => {
    setCurrentView('home');
    setActiveSection('');
  };

  const handleContactClick = () => {
    setCurrentView('contact');
    setActiveSection('');
  };

  const handleLessonClick = (lessonIndex: number) => {
    setCurrentLessonIndex(lessonIndex);
    setCurrentView('lesson');
  };

  const handleBackToModule = () => setCurrentView('course');

  const handleNextLesson = () => {
    const currentSection = getCurrentSection();
    if (!currentSection) return;

    if (currentLessonIndex < currentSection.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else {
      const currentSectionIndex = courseSections.findIndex(section => section.id === activeSection);
      if (currentSectionIndex < courseSections.length - 1) {
        const nextSection = courseSections[currentSectionIndex + 1];
        setActiveSection(nextSection.id);
        setCurrentLessonIndex(0);
      }
    }
  };

  const renderLesson = () => {
    const currentSection = getCurrentSection();
    if (!currentSection) return <div>Section non trouvée</div>;

    const sectionLessons = lessonComponents[activeSection as keyof typeof lessonComponents];
    if (!sectionLessons) return <div>Module "{activeSection}" non implémenté</div>;

    const LessonComponent = sectionLessons[currentLessonIndex];
    if (!LessonComponent) return <div>Leçon non trouvée dans ce module</div>;

    const commonProps = {
      onBackToModule: handleBackToModule,
      onHomeClick: handleHomeClick,
      onNextLesson: handleNextLesson,
      nextLessonInfo: getNextLessonInfo(),
      onSectionChange: handleSectionChange
    };

    return <LessonComponent {...commonProps} />;
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <OrandysHome onStartLearning={handleStartLearning} />;
      case 'course':
        return (
          <CourseContent 
            section={getCurrentSection()!}
            onHomeClick={handleHomeClick}
            onLessonClick={handleLessonClick}
          />
        );
      case 'lesson':
        return renderLesson();
      case 'contact':
        return <ContactPage onHomeClick={handleHomeClick} onSectionChange={handleSectionChange} />;
      default:
        return <OrandysHome onStartLearning={handleStartLearning} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <CourseNavigation 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        onHomeClick={handleHomeClick}
        onContactClick={handleContactClick}
      />
      
      <main className="flex-1">
        {renderContent()}
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}