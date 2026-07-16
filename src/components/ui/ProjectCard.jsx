import React from "react";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function ProjectCard({ project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-md transition-all duration-300 hover:border-(--text) hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt="Dev Wrapped"
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-102 sm:h-60"
        />
      </div>

      <div className="flex flex-1 flex-col space-y-1 p-4">
        <div>
          <h3 className="text-xl font-bold font-heading text-(--text) transition-colors duration-300">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-7 font-sans text-(--text)/80">
            {project.subtitle}
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-sans text-xs text-(--muted)">
            {project.description}
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-(--border) bg-(--bg) px-3 py-1 text-xs font-medium uppercase tracking-wide text-(--muted) transition-all duration-300 hover:bg-(--text)/10 hover:text-(--muted) hover:cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <FcLike size={24} className="m-1 mt-2 hover:cursor-pointer" />
          <div className="flex gap-3 pt-2">
            <a
              href={project.liveDemo}
              className="w-fit flex items-center justify-between gap-1 rounded-md text-xs bg-(--text) text-(--bg) px-2 py-1 text-center font-semibold transition-all duration-300 hover:bg-(--text)/80"
            >
              <FiGlobe /> Visit Site
            </a>
            <a
              href={project.repository}
              className="w-fit flex items-center justify-between gap-1 rounded-md text-xs bg-(--text) text-(--bg) px-2 py-1 text-center font-semibold transition-all duration-300 hover:bg-(--text)/80"
            >
              <FaGithub /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
