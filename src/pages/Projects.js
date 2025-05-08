import React, { useState } from "react";
import ProjectModal from "../components/ProjectModel";
import { projects } from "../utils/constants.util";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-16 bg-white flex flex-col min-h-screen"
    >
      <div className="container mx-auto px-4 flex-1">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Projects;
