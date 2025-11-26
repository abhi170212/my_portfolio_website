import React from 'react';

const ProfileSection = ({ setDragImage }) => {
  return (
    <div className="mb-8 text-center border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-100 p-6">
      <div 
        className="w-32 h-32 rounded-full bg-blue-500 border-4 border-black shadow-[4px_4px_0_0_#000] mx-auto mb-4 cursor-move"
        onMouseDown={(e) => {
          e.preventDefault();
          setDragImage({
            x: e.clientX - 16,
            y: e.clientY - 16,
            visible: true
          });
        }}
      >
        <img 
          src="https://res.cloudinary.com/dxetvbkik/image/upload/v1764097978/ChatGPT_Image_Nov_26_2025_12_42_37_AM_mixy5d.png" 
          alt="Profile" 
          className="w-full h-full object-cover rounded-full opacity-70"
        />
      </div>
      <div className="flex items-center justify-center mb-2">
        <img 
          src="https://flagcdn.com/w40/in.png" 
          alt="India Flag" 
          className="w-8 h-5 mr-2 border border-black"
        />
        <h1 className="text-2xl font-bold border-b-4 border-black inline-block pb-1">Abhishek K. Singh</h1>
      </div>
      <h2 className="text-3xl font-extrabold border-b-4 border-black inline-block pb-1 uppercase tracking-wider">The Full Stack Developer</h2>
    </div>
  );
};

export default ProfileSection;