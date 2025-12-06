import React from 'react';
import AboutSidebar from './AboutSidebar';
import ProfileSection from './ProfileSection';
import ImageGallery from './ImageGallery';
import AboutMeSection from './AboutMeSection';
import EducationSection from './EducationSection';
// Removed SkillsSection import
import { FaReact, FaNode, FaDatabase, FaPlayCircle, FaFilePdf } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiSqlite } from 'react-icons/si';

const AboutWindow = ({ 
  folders, 
  openWindows, 
  setOpenWindows, 
  setActiveWindowId, 
  windowCounter, 
  setWindowCounter, 
  setDragImage
}) => {
  // Daily skills data with icons
  const dailySkills = [
    { name: "ReactJS", icon: <FaReact className="text-blue-500 text-2xl" /> },
    { name: "Node JS", icon: <FaNode className="text-green-600 text-2xl" /> },
    { name: "Express JS", icon: <SiExpress className="text-black text-2xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-700 text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> }
  ];

  return (
    <div className="p-6 h-full overflow-auto bg-amber-50 font-roboto relative">
      {/* Football field texture overlay similar to Connect window */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="about-field" width="100" height="60" patternUnits="userSpaceOnUse">
              <rect width="100" height="60" fill="none" />
              <line x1="0" y1="30" x2="100" y2="30" stroke="#4B5563" strokeWidth="1" strokeDasharray="5,5" />
              <circle cx="50" cy="30" r="10" fill="none" stroke="#4B5563" strokeWidth="1" />
              <rect x="0" y="0" width="20" height="60" fill="none" stroke="#4B5563" strokeWidth="1" />
              <rect x="80" y="0" width="20" height="60" fill="none" stroke="#4B5563" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-field)" />
        </svg>
      </div>

      {/* Neobrutalism About Page with Blue Theme */}
      <div className="flex flex-col h-full relative z-10">
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
        
        {/* Video CV Section */}
        <div className="mb-8 w-full">
          <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6">
            <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">Video CV</h3>
            <div className="flex justify-center items-center h-64 bg-blue-100 border-2 border-dashed border-blue-300 rounded-lg">
              <div className="text-center">
                <FaPlayCircle className="text-5xl mb-4 text-blue-500 mx-auto" />
                <p className="text-lg font-bold text-gray-800 mb-4">Watch My Video Introduction</p>
                <button className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-500 text-white px-6 py-3 font-bold hover:bg-blue-600 transition-colors">
                  Play Video CV
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resume Section */}
        <div className="mb-8 w-full">
          <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6">
            <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">Resume</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-full flex flex-col items-center justify-center">
                  <FaFilePdf className="text-5xl mb-4 text-red-500" />
                  <p className="text-lg font-bold text-gray-800 mb-4">Download My Resume</p>
                  <button className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-500 text-white px-6 py-3 font-bold hover:bg-blue-600 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-full">
                  <h4 className="text-xl font-bold mb-3 border-l-4 border-black pl-2">Key Highlights</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="font-bold text-gray-800">5+ Years Full-Stack Development Experience</li>
                    <li className="font-bold text-gray-800">Led Development of 20+ Web Applications</li>
                    <li className="font-bold text-gray-800">Expert in Modern JavaScript Frameworks</li>
                    <li className="font-bold text-gray-800">Cloud Deployment & DevOps Specialist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Daily Skills Section */}
        <div className="mb-8 w-full">
          <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6">
            <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">Daily Skills</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {dailySkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center border-4 border-black shadow-[4px_4px_0_0_#000] bg-white px-6 py-4 font-bold hover:scale-105 transition-transform"
                >
                  <div className="mb-2">{skill.icon}</div>
                  <span className="text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Removed SkillsSection component */}
      </div>
    </div>
  );
};

export default AboutWindow;