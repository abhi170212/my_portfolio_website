import React from 'react';

const AboutMeSection = () => {
  return (
    <div className="mb-8 w-full">
      <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6">
        <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">About Me</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="font-bold text-gray-800">Passionate software developer with over 5 years of experience creating innovative digital solutions</li>
          <li className="font-bold text-gray-800">Expertise in full-stack development, UI/UX design, and project management</li>
          <li className="font-bold text-gray-800">Specialize in modern web technologies including React, Node.js, and Python</li>
          <li className="font-bold text-gray-800">Strong focus on creating user-centered applications that solve real-world problems</li>
          <li className="font-bold text-gray-800">Experience working with startups and established tech companies</li>
          <li className="font-bold text-gray-800">Active contributor to open-source projects and mentor for junior developers</li>
          <li className="font-bold text-gray-800">Continuous learner exploring the latest trends in technology and design</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeSection;