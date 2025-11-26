import React from 'react';

const AboutSidebar = ({ folders, openWindows, setOpenWindows, setActiveWindowId, windowCounter, setWindowCounter }) => {
  const handleNavigationClick = (item) => {
    if (item.name !== "About") {
      // Check if window already exists
      const existingWindow = openWindows.find(window => window.title === item.name);
      if (!existingWindow) {
        // Create new window with z-index above all existing windows
        const maxZ = openWindows.length > 0 
          ? Math.max(...openWindows.map(w => w.zIndex)) 
          : 1000;
        const windowId = `${item.name}-${Date.now()}`;
        const newWindow = {
          id: windowId,
          title: item.name,
          content: item.content,
          folder: item,
          zIndex: maxZ + 1 // Place above all existing windows
        };
        setOpenWindows(prevWindows => [...prevWindows, newWindow]);
        setActiveWindowId(windowId);
        setWindowCounter(prev => prev + 1);
      } else {
        // Focus existing window and bring it to front
        setActiveWindowId(existingWindow.id);
        // Update z-index to bring to front
        setOpenWindows(prev => {
          const maxZ = Math.max(...prev.map(w => w.zIndex), 1000);
          return prev.map(window => 
            window.id === existingWindow.id 
              ? {...window, zIndex: maxZ + 1} 
              : window
          );
        });
      }
    }
  };

  return (
    <div className="md:w-1/3 bg-blue-100 border-4 border-black rounded-xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <h3 className="text-2xl font-bold mb-4 border-b-4 border-black pb-2 text-center">Navigation</h3>
      <div className="space-y-4">
        {folders.map((item, index) => (
          <div 
            key={index} 
            className={`border-4 rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-200 cursor-pointer transform hover:-translate-y-1 ${
              item.name === "About" 
                ? "bg-blue-300 border-blue-500" 
                : "bg-white border-black"
            }`}
            onClick={() => handleNavigationClick(item)}
          >
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-3 ${item.color.replace('bg-', 'bg-')}`}></div>
              <span className="font-bold text-black">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Stats Summary */}
      <div className="mt-6 bg-blue-200 border-4 border-black rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h4 className="font-bold text-black mb-2 border-b-2 border-black pb-1">Quick Stats</h4>
        <div className="flex justify-between">
          <span className="font-bold">Projects:</span>
          <span className="font-black text-blue-600">50+</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Experience:</span>
          <span className="font-black text-blue-600">5+ yrs</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSidebar;