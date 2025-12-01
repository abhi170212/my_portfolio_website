import React, { useState, useEffect, useRef } from 'react';
import Window from './components/Window';
import AboutWindow from './components/About/AboutWindow';
import ProjectsWindow from './components/Projects/ProjectsWindow';
import SkillsWindow from './components/Skills/SkillsWindow';
import HobbiesWindow from './components/Hobbies/HobbiesWindow';
import './App.css';

function App() {
  const folders = [
    { name: "About", color: "bg-blue-500", content: "Learn more about my background and experience." },
    { name: "Projects", color: "bg-red-500", content: "Explore my portfolio of projects." },
    { name: "Skills", color: "bg-green-500", content: "Discover my technical expertise." },
    { name: "Certificates", color: "bg-yellow-500", content: "View my professional certifications." },
    { name: "Hobbies", color: "bg-purple-500", content: "Learn about my interests outside work." },
    { name: "Connect", color: "bg-pink-500", content: "Find out how to get in touch with me." }
  ];

  const skills = ["Django", "Python", "Javascript", "Nextjs", "React", "Mongodb", "Sql", "Nodejs"];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [showText, setShowText] = useState(true);
  const [textVisible, setTextVisible] = useState(true);
  const [dragImage, setDragImage] = useState({ x: 0, y: 0, visible: false });
  const dragImageRef = useRef(null);
  const [windowCounter, setWindowCounter] = useState(0);
  
  // Multilingual hello phrases
  const helloPhrases = [
    { text: "Hello", language: "English" },
    { text: "Bonjour", language: "French" },
    { text: "Hola", language: "Spanish" },
    { text: "Ciao", language: "Italian" },
    { text: "Hallo", language: "German" },
    { text: "こんにちは", language: "Japanese" },
    { text: "Привет", language: "Russian" },
    { text: "Olá", language: "Portuguese" },
    { text: "مرحبا", language: "العربية" },
    { text: "Merhaba", language: "Türkçe" }
  ];
  
  const [currentHelloIndex, setCurrentHelloIndex] = useState(0);
  const [helloVisible, setHelloVisible] = useState(true);
  
  // Split folders into columns of 4
  const folderColumns = [];
  for (let i = 0; i < folders.length; i += 4) {
    folderColumns.push(folders.slice(i, i + 4));
  }

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 1500); 

    return () => clearInterval(interval);
  }, []);
  
  
  useEffect(() => {
    const helloInterval = setInterval(() => {
      setHelloVisible(false); // Start disappearing animation
      setTimeout(() => {
        setCurrentHelloIndex((prevIndex) => (prevIndex + 1) % helloPhrases.length);
        setHelloVisible(true); // Reappear with new phrase
      }, 500); // Wait for disappear animation to complete
    }, 2000); // Change phrase every 2 seconds

    return () => clearInterval(helloInterval);
  }, []);
  
  // Define dynamic colors for the header text
  const headerColors = ['text-blue-400', 'text-red-600', 'text-green-400', 'text-pink-500'];
  const [headerColorIndex, setHeaderColorIndex] = useState(0);
  
  // Rotate through header colors
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setHeaderColorIndex((prevIndex) => (prevIndex + 1) % headerColors.length);
    }, 2000); // Change color every 2 seconds
    return () => clearInterval(colorInterval);
  }, []);

  // Handle mouse move for draggable image
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragImage.visible) {
        setDragImage(prev => ({
          ...prev,
          x: e.clientX - 16, // Offset to center the 32px image
          y: e.clientY - 16
        }));
      }
    };

    const handleMouseUp = () => {
      setDragImage(prev => ({ ...prev, visible: false }));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragImage.visible]);

  // Handle folder click to open window
  const handleFolderClick = (folder) => {
    // Trigger the smoke animation
    setTextVisible(false);
    
    // After animation completes, hide the text and open window
    setTimeout(() => {
      setShowText(false);
      
      const windowId = `${folder.name}-${Date.now()}`;
      const newWindow = {
        id: windowId,
        title: folder.name,
        content: folder.content,
        folder: folder,
        zIndex: 1000 // Base z-index for main windows
      };
      
      setOpenWindows(prev => [...prev, newWindow]);
      setActiveWindowId(windowId);
    }, 300); 
  };


  const closeWindow = (windowId) => {
    setOpenWindows(prev => prev.filter(window => window.id !== windowId));
    if (activeWindowId === windowId) {
      setActiveWindowId(null);
    }
    

    if (openWindows.length === 1) {
      setShowText(true);
      setTimeout(() => {
        setTextVisible(true);
      }, 50);
    }
  };


  const focusWindow = (windowId) => {
    setActiveWindowId(windowId);
  };


  // Render window content based on folder type
  const renderWindowContent = (folder) => {
    if (folder.name === "About") {
      return (
        <AboutWindow 
          folders={folders}
          openWindows={openWindows}
          setOpenWindows={setOpenWindows}
          setActiveWindowId={setActiveWindowId}
          windowCounter={windowCounter}
          setWindowCounter={setWindowCounter}
          setDragImage={setDragImage}
        />
      );
    }
    
    if (folder.name === "Projects") {
      return (
        <ProjectsWindow />
      );
    }
    
    if (folder.name === "Skills") {
      return (
        <SkillsWindow />
      );
    }
    
    if (folder.name === "Hobbies") {
      return (
        <HobbiesWindow />
      );
    }
    
    return (
      <>
        <h2 className="text-2xl font-black text-black mb-4 uppercase border-b-2 border-black pb-2">
          {folder.name}
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          {folder.content}
        </p>
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4">
          <p className="text-gray-700">
            This window features a minimal neobrutalism design with the same color as the folder. 
            You can drag it around by the header. The window has a fixed size of 800x600px.
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-50 p-4 md:p-8">
      {/* Draggable Image */}
      {dragImage.visible && (
        <img
          ref={dragImageRef}
          src="https://res.cloudinary.com/dxetvbkik/image/upload/v1764097978/ChatGPT_Image_Nov_26_2025_12_42_37_AM_mixy5d.png"
          alt="Draggable"
          className="fixed w-8 h-8 object-cover border-2 border-black shadow-lg opacity-70 pointer-events-none z-50"
          style={{
            left: dragImage.x,
            top: dragImage.y,
          }}
        />
      )}
      
     
      <div className="container mx-auto px-4 py-8">
        {/* Header with Name, Image, and bouncing quote above image */}
        <div className="flex items-center justify-center mb-8 pt-8">
          
          <div className="relative flex items-center">
            {/* Bouncing quote bubble above the image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black rounded-lg px-2 py-1 animate-bounce">
              <span className="text-xs font-black text-black">{skills[currentSkillIndex]}</span>
            </div>
            
            {/* Image Section */}
            <div className="w-20 h-20 border-4 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dxetvbkik/image/upload/v1764097978/ChatGPT_Image_Nov_26_2025_12_42_37_AM_mixy5d.png" 
                alt="Abhishek"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name and Tagline Section - Same line as image */}
          <div className="ml-4 flex flex-col justify-center">
            <h1 className={`text-3xl font-black uppercase tracking-tight border-4 border-black p-2 inline-block ${headerColors[headerColorIndex]}`}>
              Abhishek Kr. Singh
            </h1>
            <p className="text-sm font-bold text-gray-600 mt-1">Ideas → Code → Reality.</p>
          </div>
        </div>
        
        <div className="flex">
          {/* Folder Columns on Left */}
          <div className="flex gap-8">
            {folderColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-6">
                {column.map((folder, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-200"
                    onClick={() => handleFolderClick(folder)}
                  >
                    {/* Neobrutalism Folder */}
                    <div className={`${folder.color} w-16 h-12 border-4 border-black rounded relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none`}>
                      {/* Folder tab */}
                      <div className="absolute -top-2 left-1 right-1 h-3 border-4 border-black rounded-t bg-white"></div>
                      {/* Folder front */}
                      <div className="absolute top-1 left-0 right-0 bottom-0 border-t-4 border-black rounded"></div>
                    </div>
                    <span className="mt-2 text-sm font-black text-black uppercase tracking-wide">{folder.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Empty Content Area on Right */}
          <div className="flex-1 flex flex-col items-center justify-start pt-20 mr-42">
            {/* Animated Hello Text */}
            <div className="mb-4">
              <h1 className={`text-5xl font-bold transition-all duration-500 ease-in-out transform ${
                helloVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                {helloPhrases[currentHelloIndex].text}
              </h1>
            </div>
            
            <div className="text-center w-full">
              {showText && (
                <p className={`text-2xl font-bold text-gray-600 transition-all duration-300 ease-in ${
                  textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 scale-95'
                }`}>
                  Select a folder to view content
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Render Windows */}
      {openWindows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
          isActive={activeWindowId === window.id}
          onFocus={() => focusWindow(window.id)}
          folderColor={window.folder.color}
          zIndex={window.zIndex}
        >
          {renderWindowContent(window.folder)}
        </Window>
      ))}
    </div>
  );
}

export default App;