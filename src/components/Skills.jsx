import React from "react";

const Skills = () => {
  const categorizedSkills = {
    "Frontend Development": ["HTML", "CSS", "React", "Tailwind CSS", "Material UI", "JavaScript"],
    "Backend Development": ["Node.js", "Express.js", "MongoDB"],
    "Database": ["MongoDB", "MySQL"],
    "Core Concepts & Languages": ["C", "C++", "Python", "Data Structures", "OOPs"],
    "Tools & Platforms": ["VS Code", "Postman", "Vercel", "Render", "Git", "GitHub"],
  };

  return (
    <div className="text-white">
      <div className="flex flex-col gap-8">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-[#aa94ff] mb-3">
              {category}
            </h3>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-300">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="hover:text-white border hover:border-gray-400 border-gray-400/20 px-2 py-0.5 rounded-lg transition-all cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
