import React from 'react';
import { FaReact, FaNode, FaPython, FaJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiMongodb, SiPostgresql } from 'react-icons/si';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Icon mapping for technologies
  const getTechnologyIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('react')) return <FaReact className="text-blue-500" />;
    if (techLower.includes('node')) return <FaNode className="text-green-700" />;
    if (techLower.includes('javascript')) return <FaJs className="text-yellow-500" />;
    if (techLower.includes('python')) return <FaPython className="text-blue-400" />;
    if (techLower.includes('django')) return <SiDjango className="text-green-800" />;
    if (techLower.includes('mongodb')) return <SiMongodb className="text-green-500" />;
    if (techLower.includes('postgresql')) return <SiPostgresql className="text-blue-600" />;
    if (techLower.includes('database')) return <FaDatabase className="text-green-500" />;
    if (techLower.includes('next')) return <SiNextdotjs className="text-black" />;
    return null;
  };

  // Project-specific details
  const projectDetails = {
    1: {
      features: [
        "User authentication and authorization system",
        "Product catalog with search and filtering capabilities",
        "Shopping cart and checkout functionality",
        "Payment integration with Stripe",
        "Order management and tracking system"
      ],
      backendEngineering: [
        "RESTful API built with Node.js and Express",
        "MongoDB database with Mongoose ODM",
        "JWT-based authentication and session management",
        "Cloud storage integration for product images",
        "Real-time inventory management system"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Optimizing database queries for large product catalogs",
        "Ensuring responsive design across all devices",
        "Managing concurrent user sessions"
      ]
    },
    2: {
      features: [
        "Real-time task collaboration with WebSocket",
        "Drag-and-drop interface for task management",
        "User roles and permission system",
        "Notification system for task updates",
        "Progress tracking and reporting dashboard"
      ],
      backendEngineering: [
        "Firebase Realtime Database for data synchronization",
        "Cloud Functions for serverless backend logic",
        "Authentication with Firebase Auth",
        "Push notifications with Firebase Cloud Messaging",
        "Data validation and security rules"
      ],
      challenges: [
        "Implementing real-time data synchronization",
        "Managing offline capabilities",
        "Ensuring data consistency across clients",
        "Optimizing Firestore queries for cost efficiency"
      ]
    },
    3: {
      features: [
        "Responsive design for all device sizes",
        "Interactive portfolio showcase",
        "Dynamic content management system",
        "Contact form with email integration",
        "Performance optimized with lazy loading"
      ],
      backendEngineering: [
        "Static site generation with React and Vite",
        "Headless CMS integration for content management",
        "SEO optimization and meta tag generation",
        "Performance monitoring and analytics",
        "Deployment automation with CI/CD pipelines"
      ],
      challenges: [
        "Achieving perfect cross-browser compatibility",
        "Optimizing load times and Core Web Vitals",
        "Implementing complex animations smoothly",
        "Creating a maintainable component architecture"
      ]
    }
  };

  const details = projectDetails[project.id] || {
    features: ["Feature 1", "Feature 2", "Feature 3"],
    backendEngineering: ["Backend detail 1", "Backend detail 2", "Backend detail 3"],
    challenges: ["Challenge 1", "Challenge 2", "Challenge 3"]
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-amber-50 border-4 border-black shadow-[12px_12px_0_0_#000] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg">
        {/* Modal Header */}
        <div className="border-b-4 border-black p-4 flex justify-between items-center">
          <h2 className="text-2xl font-black uppercase">{project.title}</h2>
          <button 
            onClick={onClose}
            className="text-2xl font-black border-2 border-black w-8 h-8 flex items-center justify-center bg-red-500 text-white hover:bg-red-600 rounded-full transition-colors"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Project Images Carousel */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-black pl-2">Project Screenshots</h3>
            <div className="border-2 border-black rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex mt-4 gap-2">
              {[1, 2, 3].map((index) => (
                <div key={index} className="border-2 border-black rounded-lg overflow-hidden w-24 h-24">
                  <img 
                    src={project.image} 
                    alt={`${project.title} ${index}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-black pl-2">About This Project</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-black pl-2">Key Features</h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              {details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Backend Engineering */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-black pl-2">Engineered Backend</h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              {details.backendEngineering.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-black pl-2">Challenges & Solutions</h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              {details.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-black pl-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => {
                const icon = getTechnologyIcon(tech);
                return (
                  <span 
                    key={index} 
                    className="text-sm font-bold bg-blue-100 border-2 border-black px-3 py-1 rounded flex items-center gap-2"
                  >
                    <span>{tech}</span>
                    {icon && (
                      <span className="text-lg">
                        {icon}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            <a 
              href={project.githubUrl} 
              className="font-bold border-2 border-black px-6 py-3 bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded"
            >
              View Source Code
            </a>
            <a 
              href={project.liveUrl} 
              className="font-bold border-2 border-black px-6 py-3 bg-green-500 text-white hover:bg-green-400 transition-colors rounded"
            >
              Live Demo
            </a>
            <button 
              onClick={onClose}
              className="font-bold border-2 border-black px-6 py-3 bg-red-500 text-white hover:bg-red-600 transition-colors rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;