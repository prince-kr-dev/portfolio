import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TechStack() {
  return (
    <div className="mx-auto px-4 lg:px-6">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="font-heading font-medium text-2xl md:text-3xl"
      >
        My Tech Stack
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-0.5 bg-(--text) mt-1"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="font-sans text-(--muted)/80 text-sm md:text-base py-3 pb-8"
      >
        The tools behind the code
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-4 gap-4 py-3 pb-16 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8"
      >
        {skills.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.03,
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 18,
            }}
            title={name}
            className="flex h-16 w-full items-center justify-center rounded-xl border border-(--border)/50 bg-(--surface) transition-colors duration-300 hover:border-(--text)/50"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("svg").style.color = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("svg").style.color = "";
            }}
          >
            <Icon className="h-8 w-8 text-(--muted) transition-colors duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechStack;