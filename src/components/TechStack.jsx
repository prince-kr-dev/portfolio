import React from "react";
import { skills } from "../data/skills";

function TechStack() {
  return (
    <div className="mx-auto px-4 lg:px-6">
      <h1 className="font-heading font-medium text-2xl md:text-3xl">
        My Tech Stack
      </h1>
      <div className="h-0.5 w-16 bg-(--text) mt-1"></div>
      <p className="font-sans text-(--muted)/80 text-sm md:text-base py-3 pb-8">
        The tools behind the code
      </p>

      <div className="grid grid-cols-4 gap-4 py-3 pb-16 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
        {skills.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            title={name}
            className="flex h-16 w-full items-center justify-center rounded-xl border border-(--border)/50 bg-(--surface) transition-all duration-300 hover:scale-102 hover:border-(--text)/50"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("svg").style.color = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("svg").style.color = "";
            }}
          >
            <Icon className="h-8 w-8 text-(--muted) transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
