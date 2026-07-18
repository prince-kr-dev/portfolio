import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-0 sm:px-6 md:px-14 lg:px-18 xl:px-28">
        <div className="mx-auto px-4 lg:px-6 py-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="py-4 pb-16"
          >
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(-1)}
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-1.5 text-sm font-medium transition-all hover:bg-zinc-900 hover:text-white dark:border-zinc-700 hover:cursor-pointer dark:hover:bg-white dark:hover:text-black"
            >
              <motion.div
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowLeftLong />
              </motion.div>

              Back to Home
            </motion.button>
          </motion.div>

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
            initial={{ opacity: 0, y: 10 }}
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
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 16,
                  delay: index * 0.12,
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
        </div>
      </div>
    </motion.div>
  );
}

export default AllProjects;