import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import { projectList } from "../Data/Constants";

function Projects() {
  return (
    <>
      <div className="pt-30 md:pt-35 px-5 md:px-20 lg:px-45">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          Projects
        </h1>
        <p className="text-lg font-light mt-2">
          A collection of finest project that i have built
        </p>
        <div className="flex justify-between flex-wrap mt-15 gap-y-5">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              preview={project.preview}
              github={project.github}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
