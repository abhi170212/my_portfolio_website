import React from 'react';

const SkillsSection = () => {
  return (
    <div className="w-full font-roboto">
      <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6">
        <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">Skills & Expertise</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {['React', 'Node.js', 'Python', 'JavaScript', 'UI/UX Design', 'MongoDB', 'SQL', 'AWS'].map((skill, index) => (
            <div 
              key={index} 
              className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-500 text-white px-4 py-3 font-bold text-center hover:scale-105 transition-transform"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;