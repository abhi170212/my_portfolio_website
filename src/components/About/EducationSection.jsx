import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = () => {
  return (
    <div className="mb-8 w-full font-roboto">
      <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6">
        <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">Education</h3>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center w-32 h-32 flex items-center justify-center">
              <FaGraduationCap className="text-4xl text-blue-500" />
            </div>
          </div>
          <div className="md:w-2/3">
            <ul className="space-y-3">
              <li className="font-bold text-gray-800 text-lg">
                <span className="inline-block w-24 text-blue-600">CGPA:</span> 
                <span className="ml-2">7.6</span>
              </li>
              <li className="font-bold text-gray-800 text-lg">
                <span className="inline-block w-24 text-blue-600">University:</span> 
                <a 
                  href="https://www.lpu.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 ml-2 hover:underline"
                >
                  Lovely Professional University
                </a>
              </li>
              <li className="font-bold text-gray-800 text-lg">
                <span className="inline-block w-24 text-blue-600">Passing Year:</span> 
                <span className="ml-2">2026</span>
              </li>
              <li className="font-bold text-gray-800 text-lg">
                <span className="inline-block w-24 text-blue-600">Degree:</span> 
                <span className="ml-2">Bachelor of Technology</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-100 border-2 border-dashed border-blue-300 rounded-lg">
          <p className="font-bold text-gray-800 text-lg text-center">
            Focused on Computer Science and Engineering with specialization in Full Stack Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;