import React from 'react';
import { FaReact, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiVisualstudio } from 'react-icons/si';

const IconTest = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Icon Test</h1>
      <div className="flex items-center space-x-4">
        <FaReact className="text-3xl text-blue-500" />
        <span>React Icon</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaJs className="text-3xl text-yellow-500" />
        <span>JavaScript Icon</span>
      </div>
      <div className="flex items-center space-x-4">
        <SiNextdotjs className="text-3xl text-black" />
        <span>Next.js Icon</span>
      </div>
      <div className="flex items-center space-x-4">
        <SiVisualstudio className="text-3xl text-blue-600" />
        <span>VS Code Icon</span>
      </div>
    </div>
  );
};

export default IconTest;