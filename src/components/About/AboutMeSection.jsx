import React from 'react';
import { FaRocket, FaLaptopCode, FaWrench, FaBullseye, FaBuilding, FaSeedling, FaBook, FaTrophy } from 'react-icons/fa';

const AboutMeSection = () => {
  return (
    <div className="mb-8 w-full font-roboto">
      <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6">
        <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-bold text-gray-800 text-lg"><FaRocket className="inline mr-2 text-blue-500" /> Passionate software developer with over 5 years of experience creating innovative digital solutions</li>
              <li className="font-bold text-gray-800 text-lg"><FaLaptopCode className="inline mr-2 text-blue-500" /> Expertise in full-stack development, UI/UX design, and project management</li>
              <li className="font-bold text-gray-800 text-lg"><FaWrench className="inline mr-2 text-blue-500" /> Specialize in modern web technologies including React, Node.js, and Python</li>
              <li className="font-bold text-gray-800 text-lg"><FaBullseye className="inline mr-2 text-blue-500" /> Strong focus on creating user-centered applications that solve real-world problems</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-bold text-gray-800 text-lg"><FaBuilding className="inline mr-2 text-blue-500" /> Experience working with startups and established tech companies</li>
              <li className="font-bold text-gray-800 text-lg"><FaSeedling className="inline mr-2 text-blue-500" /> Active contributor to open-source projects and mentor for junior developers</li>
              <li className="font-bold text-gray-800 text-lg"><FaBook className="inline mr-2 text-blue-500" /> Continuous learner exploring the latest trends in technology and design</li>
              <li className="font-bold text-gray-800 text-lg"><FaTrophy className="inline mr-2 text-blue-500" /> Committed to writing clean, efficient, and maintainable code</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-100 border-2 border-dashed border-blue-300 rounded-lg">
          <p className="font-bold text-gray-800 text-lg text-center italic">
            "I believe in the power of technology to transform ideas into reality and am dedicated to pushing the boundaries of what's possible in web development."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;