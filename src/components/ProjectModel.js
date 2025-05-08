import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative bg-white bg-opacity-90 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 w-[90vw] h-[80vh] mx-4 transform scale-95 animate-scaleIn overflow-auto"
        style={{
          backgroundImage: `url(${project.backgroundImages[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "fadeBackground 12s infinite",
        }}
      >
        <style>
          {`
            @keyframes fadeBackground {
              0% { background-image: url(${project.backgroundImages[0]}); }
              33% { background-image: url(${project.backgroundImages[1]}); }
              66% { background-image: url(${project.backgroundImages[2]}); }
              100% { background-image: url(${project.backgroundImages[0]}); }
            }
          `}
        </style>
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col md:flex-row gap-6 h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-1/3 h-64 md:h-[40vh] object-cover rounded-lg"
          />
          <div className="flex-1 flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h3>
            <p className="text-gray-700 text-lg md:text-xl mb-6 flex-1">
              {project.fullDescription}
            </p>
            <div className="mb-6">
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Tech Stack:
              </h4>
              <ul className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm md:text-base"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={project.link}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
