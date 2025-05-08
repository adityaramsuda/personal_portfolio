import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-5 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600 mb-4">
                A web app built with React and Node.js. [Add description].
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Project
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600 mb-4">
                A responsive portfolio site using Tailwind CSS. [Add
                description].
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
