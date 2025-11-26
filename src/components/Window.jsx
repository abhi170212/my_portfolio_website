import React, { useState, useEffect, useRef } from 'react';

const Window = ({ title, onClose, children, isActive, onFocus, folderColor, zIndex }) => {
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [size, setSize] = useState({ width: 800, height: 600 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const headerRef = useRef(null);

  // Focus window when it becomes active
  useEffect(() => {
    if (isActive && windowRef.current) {
      windowRef.current.style.zIndex = zIndex || (isActive ? 1000 : 999);
    }
  }, [isActive, zIndex]);

  // Mouse down on header for dragging
  const handleHeaderMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return;
    
    onFocus();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  // Mouse down on resize handles
  const handleResizeMouseDown = (e, direction) => {
    e.stopPropagation();
    onFocus();
    setIsResizing(true);
    setResizeDirection(direction);
    setResizeStart({ x: e.clientX, y: e.clientY });
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (isFullscreen) {
      setPosition({ x: 150, y: 150 });
      setSize({ width: 800, height: 600 });
      setIsFullscreen(false);
    } else {
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setIsFullscreen(true);
    }
  };

  // Mouse move for dragging and resizing
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
      
      if (isResizing) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;
        
        setSize(prevSize => {
          let newWidth = prevSize.width;
          let newHeight = prevSize.height;
          let newX = position.x;
          let newY = position.y;
          
          switch (resizeDirection) {
            case 'right':
              newWidth = Math.max(400, prevSize.width + deltaX);
              break;
            case 'left':
              newWidth = Math.max(400, prevSize.width - deltaX);
              newX = position.x + deltaX;
              break;
            case 'bottom':
              newHeight = Math.max(300, prevSize.height + deltaY);
              break;
            case 'top':
              newHeight = Math.max(300, prevSize.height - deltaY);
              newY = position.y + deltaY;
              break;
            case 'bottom-right':
              newWidth = Math.max(400, prevSize.width + deltaX);
              newHeight = Math.max(300, prevSize.height + deltaY);
              break;
            case 'bottom-left':
              newWidth = Math.max(400, prevSize.width - deltaX);
              newHeight = Math.max(300, prevSize.height + deltaY);
              newX = position.x + deltaX;
              break;
            case 'top-right':
              newWidth = Math.max(400, prevSize.width + deltaX);
              newHeight = Math.max(300, prevSize.height - deltaY);
              newY = position.y + deltaY;
              break;
            case 'top-left':
              newWidth = Math.max(400, prevSize.width - deltaX);
              newHeight = Math.max(300, prevSize.height - deltaY);
              newX = position.x + deltaX;
              newY = position.y + deltaY;
              break;
            default:
              break;
          }
          
          setPosition({ x: newX, y: newY });
          return { width: newWidth, height: newHeight };
        });
        
        setResizeStart({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, resizeStart, resizeDirection, position]);

  return (
    <div
      ref={windowRef}
      className={`absolute border border-black ${folderColor} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: zIndex || (isActive ? 1000 : 999)
      }}
      onClick={onFocus}
    >
      {/* Resize Handles */}
      {!isFullscreen && (
        <>
          <div 
            className="absolute top-0 left-0 w-1.5 h-1.5 cursor-nw-resize bg-black"
            onMouseDown={(e) => handleResizeMouseDown(e, 'top-left')}
          ></div>
          <div 
            className="absolute top-0 right-0 w-1.5 h-1.5 cursor-ne-resize bg-black"
            onMouseDown={(e) => handleResizeMouseDown(e, 'top-right')}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-1.5 h-1.5 cursor-sw-resize bg-black"
            onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-left')}
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-1.5 h-1.5 cursor-se-resize bg-black"
            onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-right')}
          ></div>
          <div 
            className="absolute top-0 left-1.5 right-1.5 h-1.5 cursor-n-resize bg-black"
            onMouseDown={(e) => handleResizeMouseDown(e, 'top')}
          ></div>
          <div 
            className="absolute bottom-0 left-1.5 right-1.5 h-1.5 cursor-s-resize bg-black"
            onMouseDown={(e) => handleResizeMouseDown(e, 'bottom')}
          ></div>
          <div 
            className="absolute left-0 top-1.5 bottom-1.5 w-1.5 cursor-w-resize bg-black"
            onMouseDown={(e) => handleResizeMouseDown(e, 'left')}
          ></div>
          <div 
            className="absolute right-0 top-1.5 bottom-1.5 w-1.5 cursor-e-resize bg-black"
            onMouseDown={(e) => handleResizeMouseDown(e, 'right')}
          ></div>
        </>
      )}

      {/* Window Header with folder color and neobrutalism */}
      <div
        ref={headerRef}
        className={`${folderColor} border-b border-black p-3 flex justify-between items-center cursor-move`}
        onMouseDown={handleHeaderMouseDown}
      >
        <span className="font-black text-white uppercase tracking-wide text-lg">{title}</span>
        <div className="window-controls flex space-x-2">
          <button
            className="w-8 h-8 bg-gray-800 border border-black flex items-center justify-center hover:bg-black transition-colors"
            onClick={toggleFullscreen}
          >
            <span className="text-lg font-black text-white">{isFullscreen ? '❐' : '□'}</span>
          </button>
          <button
            className="w-8 h-8 bg-red-600 border border-black flex items-center justify-center hover:bg-red-700 transition-colors"
            onClick={onClose}
          >
            <span className="text-lg font-black text-white">×</span>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="p-6 overflow-auto h-[calc(100%-56px)] bg-white">
        {children}
      </div>
    </div>
  );
};

export default Window;