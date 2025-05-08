import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React.js",
            "Tailwind CSS",
            "JavaScript",
            "HTML/CSS",
            "Git/GitHub",
            "Node.js",
            "TypeScript",
            "MongoDB",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
