import React from 'react';
import {
  Code, Palette, Atom, Wind, Layout, Brackets, Server, ArrowRightCircle,
  Database, Share2, GitFork, Github, SquareCode, Wrench, Rocket, Cloud
} from 'lucide-react';

const Skills = () => {
  // Define the skills in a categorized object.
  const categorizedSkills = {
    'Frontend Development': ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Material UI', 'JavaScript'],
    'Backend Development': ['Node.js', 'Express.js', 'MongoDB'],
    'Core Concepts & Languages': ['C', 'C++', 'Data Structures', 'OOPs'],
    'Tools & Platforms': ['VS Code', 'Postman', 'Vercel', 'Render', 'Git', 'GitHub'],
  };

  // Map each skill to a relevant icon from Lucide React.
  const skillIcons = {
    'HTML': <Code size={20} />,
    'CSS': <Palette size={20} />,
    'React': <Atom size={20} />,
    'Tailwind CSS': <Wind size={20} />,
    'Material UI': <Layout size={20} />,
    'C': <Brackets size={20} />,
    'C++': <Brackets size={20} />,
    'JavaScript': <Code size={20} />,
    'Node.js': <Server size={20} />,
    'Express.js': <ArrowRightCircle size={20} />,
    'MongoDB': <Database size={20} />,
    'Data Structures': <Share2 size={20} />,
    'Git': <GitFork size={20} />,
    'GitHub': <Github size={20} />,
    'VS Code': <SquareCode size={20} />,
    'Postman': <Wrench size={20} />,
    'Vercel': <Rocket size={20} />,
    'Render': <Cloud size={20} />,
  };

  return (
    <div className="flex flex-col items-center justify-center grid-background text-white font-sans">
      
      {/* Container for all skill categories */}
      <div className="w-full max-w-5xl overflow-hidden rounded-xl p-1 shadow-lg flex flex-col gap-8">
        {Object.entries(categorizedSkills).map(([category, skillList]) => (
          <div key={category} className="flex flex-col items-center sm:items-start w-full">
            <h4 className="text-lg md:text-md font-medium text-[#aa94ff] mb-4">{category}</h4>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full">
              {skillList.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-6 py-2 bg-light-black bg-opacity-30 rounded-full flex-shrink-0
                             text-sm md:text-base font-medium shadow-md
                             transition-transform duration-300 transform hover:scale-103 border hover:border-purple-600 hover:cursor-pointer"
                >
                  {skillIcons[skill] || <Code size={20} />}
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
