import React, { useState, useMemo } from 'react';
import ProjectModal from './ProjectModal';

const ProjectsWindow = () => {
  // Sample project data - in a real app this would come from props or API
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      categories: ["full stack", "backend", "frontend", "javascript"],
      image: "https://res.cloudinary.com/dxetvbkik/image/upload/v1758225281/img_ukpodv.jpg",
      githubUrl: "#",
      liveUrl: "#",
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      categories: ["full stack", "frontend", "reactjs", "backend"],
      image: "https://res.cloudinary.com/dxetvbkik/image/upload/v1758225281/i4_fy06ju.jpg",
      githubUrl: "#",
      liveUrl: "#",
      status: "work-in-progress"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website with neobrutalism design",
      technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
      categories: ["frontend", "reactjs", "javascript"],
      image: "https://res.cloudinary.com/dxetvbkik/image/upload/v1764097978/ChatGPT_Image_Nov_26_2025_12_42_37_AM_mixy5d.png",
      githubUrl: "#",
      liveUrl: "#",
      status: "completed"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with real-time data visualization",
      technologies: ["Next.js", "Django", "PostgreSQL", "Chart.js"],
      categories: ["full stack", "nextjs", "django", "backend"],
      image: "https://res.cloudinary.com/dxetvbkik/image/upload/v1758225281/i_dfmlcf.jpg",
      githubUrl: "#",
      liveUrl: "#",
      status: "work-in-progress"
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      description: "Community-driven recipe sharing platform with user profiles and ratings",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      categories: ["full stack", "frontend", "backend", "javascript"],
      image: "https://res.cloudinary.com/dxetvbkik/image/upload/v1758225281/img_ukpodv.jpg",
      githubUrl: "#",
      liveUrl: "#",
      status: "completed"
    },
    {
      id: 6,
      title: "Fitness Tracker Application",
      description: "Mobile-first fitness tracking application with workout plans and progress monitoring",
      technologies: ["React Native", "Firebase", "Redux"],
      categories: ["frontend", "javascript", "reactjs"],
      image: "https://res.cloudinary.com/dxetvbkik/image/upload/v1758225281/i4_fy06ju.jpg",
      githubUrl: "#",
      liveUrl: "#",
      status: "work-in-progress"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter(project => 
      project.categories.includes(filter)
    );
  }, [filter]);

  // Get projects to display (first 3 or all if showAll is true)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Available filters
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "full stack", label: "Full Stack" },
    { id: "nextjs", label: "Next.js" },
    { id: "reactjs", label: "React.js" },
    { id: "django", label: "Django" },
    { id: "javascript", label: "JavaScript" }
  ];

  return (
    <div className="p-6 h-full overflow-auto bg-amber-50">
      <div className="flex flex-col h-full">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-black mb-4 uppercase border-b-4 border-black pb-2 inline-block">
            My Projects
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my skills in web development, 
            UI/UX design, and problem-solving. Click on any project to view detailed information.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {filters.map((filt) => (
            <button
              key={filt.id}
              className={`px-4 py-2 font-bold border-2 border-black text-sm ${
                filter === filt.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white hover:bg-gray-100'
              }`}
              onClick={() => {
                setFilter(filt.id);
                setShowAll(false); // Reset showAll when filter changes
              }}
            >
              {filt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="border-4 border-black shadow-[8px_8px_0_0_#000] bg-white p-6 transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-300 cursor-pointer relative"
              onClick={() => openModal(project)}
            >
              {/* Work-in-progress indicator */}
              {project.status === "work-in-progress" && (
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="mb-4 rounded-lg overflow-hidden border-2 border-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold mb-2 border-l-4 border-black pl-2">{project.title}</h3>

              {/* Project Description */}
              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-bold bg-blue-100 border-2 border-black px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-bold bg-gray-200 border-2 border-black px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4 mt-4">
                <button 
                  className="text-sm font-bold border-2 border-black px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle GitHub link
                  }}
                >
                  GitHub
                </button>
                <button 
                  className="text-sm font-bold border-2 border-black px-4 py-2 bg-green-500 text-white hover:bg-green-400 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle live demo link
                  }}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filteredProjects.length > 3 && (
          <div className="mt-8 text-center">
            <button
              className="font-bold border-2 border-black px-6 py-3 bg-blue-500 text-white hover:bg-blue-400 transition-colors"
              onClick={() => setShowAll(true)}
            >
              Show More Projects ({filteredProjects.length - 3} more)
            </button>
          </div>
        )}

        {/* Show Less Button when showing all */}
        {showAll && (
          <div className="mt-8 text-center">
            <button
              className="font-bold border-2 border-black px-6 py-3 bg-gray-500 text-white hover:bg-gray-400 transition-colors"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-100 p-6 inline-block">
            <h3 className="text-xl font-bold mb-2">Want to see more?</h3>
            <p className="mb-4">Check out my GitHub for additional projects and contributions.</p>
            <a 
              href="#" 
              className="font-bold border-2 border-black px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors inline-block"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default ProjectsWindow;