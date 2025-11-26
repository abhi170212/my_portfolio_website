import React from 'react';
import AboutSidebar from './AboutSidebar';
import ProfileSection from './ProfileSection';
import ImageGallery from './ImageGallery';
import AboutMeSection from './AboutMeSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';

const AboutWindow = ({ 
  folders, 
  openWindows, 
  setOpenWindows, 
  setActiveWindowId, 
  windowCounter, 
  setWindowCounter, 
  setDragImage
}) => {
  return (
    <div className="p-6 h-full overflow-auto bg-amber-50">
      {/* Neobrutalism About Page with Blue Theme */}
      <div className="flex flex-col h-full">
        {/* Profile Section with Sidebar */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 flex-grow">
          {/* Stunning Neobrutalism Sidebar with Navigation */}
          <AboutSidebar 
            folders={folders}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
            setActiveWindowId={setActiveWindowId}
            windowCounter={windowCounter}
            setWindowCounter={setWindowCounter}
          />
          
          {/* Main Content Area */}
          <div className="md:w-2/3 flex flex-col">
            <ProfileSection setDragImage={setDragImage} />
            <ImageGallery />
          </div>
        </div>

        <AboutMeSection />
        <EducationSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default AboutWindow;