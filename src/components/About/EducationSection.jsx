import React from 'react';

const EducationSection = () => {
  return (
    <div className="mb-8 w-full">
      <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6">
        <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">Education</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="font-bold text-gray-800">CGPA: 7.6</li>
          <li className="font-bold text-gray-800">
            University: 
            <a 
              href="https://www.lpu.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 ml-2"
            >
              Lovely Professional University
            </a>
          </li>
          <li className="font-bold text-gray-800">Passing Year: 2026</li>
        </ul>
      </div>
    </div>
  );
};

export default EducationSection;