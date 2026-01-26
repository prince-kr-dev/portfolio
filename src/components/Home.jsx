import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import budgetMate from "../assets/budgetMate.png";
import talentPrepAI from "../assets/talentPrepAI.png";
import docSense from "../assets/docSense.png"
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";
import resume from "../assets/Prince_Kumar_Resume.pdf";

const projects = [
  {
    image: docSense,
    title: "DocSense AI",
    description: "DocSense AI is an intelligent platform that lets you chat with your PDFs",
    preview: "https://docsence-ai.vercel.app/",
    github: "https://github.com/prince-kr-dev/docsence-ai",
  },
  {
    image: talentPrepAI,
    title: "TalentPrep AI",
    description: "AI mock interview Q&A generator",
    preview: "https://talent-prep-ai.vercel.app/",
    github: "https://github.com/prince-kr-dev/talent-prep-ai",
  },
];

function Home() {
  return (
    <>
      <div className="pt-10 md:pt-20 px-7 md:px-20 lg:px-45">
        {/* Hero Section */}
        <div className="pt-20 flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Hi, I'm <span className="text-heading">Prince Kumar</span>
          </h1>
          <h2 className="text-md md:text-2xl font-light md:font-medium my-4 md:my-6">
            I craft fantastic things with code. I also write about those things.
          </h2>

          <div className="flex items-center gap-3">
            <Link
              to={"/about"}
              className="text-md md:text-lg font-medium border-2 w-fit px-3 py-1 md:px-4 md:py-1 rounded-sm hover:bg-black-hover transition-all flex items-center gap-2"
            >
              More
              <i className="ri-arrow-right-s-line text-xl"></i>
            </Link>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md md:text-lg font-medium border-2 w-fit px-3 py-1 md:px-4 md:py-1 rounded-sm hover:bg-black-hover transition-all flex items-center gap-2"
            >
              <i className="ri-file-text-line text-xl"></i>
              Resume
            </a>
          </div>

          <h1 className="text-2xl font-semibold mt-10 md:mt-20">Teck Stack</h1>
          <Skills />
        </div>

        {/* Projects Section */}
        <div className="pt-12 pb-5 flex flex-col gap-3">
          <h1 className="text-md font-semibold text-heading">
            Highlighted Projects
          </h1>
          <h1 className="text-xl md:text-2xl font-semibold">
            What I've been working on
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {projects.map((project, index) => (
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

          <Link
            to={"/projects"}
            className="text-sm font-medium border w-fit px-3 py-1 rounded-md hover:bg-black-hover transition-all flex items-center gap-2 m-auto"
          >
            See all projects
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </Link>
        </div>

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
