import React from "react";
import ProjectCard from "./ui/ProjectCard";
import projects from "../data/projects.json";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

function Projects() {
  return (
    <div className="mx-auto px-4 lg:px-6 py-4">
      <h1 className="font-heading font-medium text-2xl md:text-3xl">
        My Favorite Builds
      </h1>
      <div className="h-0.5 w-16 bg-(--text) mt-1"></div>
      <p className="font-sans text-(--muted)/80 text-sm md:text-base py-3 pb-8">
        A curated look at what I have built
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
      <div className="flex items-center justify-center py-6">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-1.5 text-sm font-medium transition-all hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
        >
          View All Projects
          <IoArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
