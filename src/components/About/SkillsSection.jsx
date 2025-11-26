import React from 'react';

const SkillsSection = () => {
  return (
    <div className="w-full">
      <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6">
        <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">Skills & Expertise</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {['React', 'Node.js', 'Python', 'JavaScript', 'UI/UX Design', 'MongoDB', 'SQL', 'AWS'].map((skill, index) => (
            <span key={index} className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-500 text-white px-4 py-2 font-bold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;