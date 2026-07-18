import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";
import projects from "../data/projects.json";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

function Projects() {
  return (
    <div className="mx-auto px-4 lg:px-6 py-4">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-heading font-medium text-2xl md:text-3xl"
      >
        My Favorite Builds
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-0.5 bg-(--text) mt-1"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-sans text-(--muted)/80 text-sm md:text-base py-3 pb-8"
      >
        A curated look at what I have built
      </motion.p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 16,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="flex items-center justify-center py-6"
      >
        <motion.div
          whileHover={{
            y: -2,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-1.5 text-sm font-medium transition-all duration-300 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black"
          >
            View All Projects

            <motion.div
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IoArrowForward />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;