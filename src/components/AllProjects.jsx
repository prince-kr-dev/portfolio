import React, { useEffect } from "react";
import ProjectCard from "./ui/ProjectCard";
import projects from "../data/projects.json";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function AllProjects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto w-full max-w-6xl px-0 sm:px-6 md:px-14 lg:px-18 xl:px-28">
        <div className="mx-auto px-4 lg:px-6 py-6">
          <div className="py-4 pb-16">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-1.5 text-sm font-medium transition-all hover:bg-zinc-900 hover:text-white dark:border-zinc-700 hover:cursor-pointer dark:hover:bg-white dark:hover:text-black"
            >
              <FaArrowLeftLong className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </button>
          </div>
          <h1 className="font-heading font-medium text-2xl md:text-3xl">
            My Favorite Builds
          </h1>
          <div className="h-0.5 w-16 bg-(--text) mt-1"></div>
          <p className="font-sans text-(--muted)/80 text-sm md:text-base py-3 pb-8">
            A curated look at what I have built
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
