import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import budgetMate from "../assets/budgetMate.png";
import hookImg from "../assets/react-hook.png";
import routerImg from "../assets/react-router.png";
import leetanalyzer from "../assets/leetanalyzer.png";
import BlogCard from "./BlogCard";
import Contact from "./Contact";
import Footer from "./Footer";
import Marquee from "./Marquee";
import Skills from "./Skills";
import resume from "../assets/Prince_Kumar_Resume.pdf";
import TypingSkills from "./TypingSkills";

const projects = [
  {
    image: budgetMate,
    title: "BudgetMate",
    description: "DevTinder Backend - connecting coders beyond the code.",
    preview: "https://budget-mate-net.vercel.app/",
    github: "https://github.com/prince-kr-dev/BudgetMate",
  },
  {
    image: leetanalyzer,
    title: "LeetAnalyze",
    description: "A LeetCode analyzer and Comparator",
    preview: "https://leet-analyze.vercel.app/",
    github: "https://github.com/prince-kr-dev/leet-analyze?tab=readme-ov-file",
  },
];

const blogs = [
  {
    image: hookImg,
    date: "Feb 27, 2025",
    title: "React Hooks Explained: useState, useEffect, and useContext",
    url: "https://medium.com/@princekr.kush007/react-hooks-explained-usestate-useeffect-and-usecontext-for-beginners-d8b8772a51e7",
  },
  {
    image: routerImg,
    date: "Mar 12, 2025",
    title: "React Router: Navigation Made Easy, All about react router",
    url: "https://medium.com/@princekr.kush007/react-router-made-easy-for-beginners-70962130c2b1",
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
          <TypingSkills/>
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
          <div className="flex justify-between flex-wrap mt-5">
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

        {/* Blogs Section */}
        <div className="pt-12 pb-5 flex flex-col gap-3">
          <h1 className="text-md font-semibold text-heading">Writing</h1>
          <h1 className="text-xl md:text-2xl font-semibold">Latest Posts</h1>
          <div className="flex justify-between flex-wrap mt-5">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                date={blog.date}
                title={blog.title}
                url={blog.url}
              />
            ))}
          </div>

          <Link
            to={"/blog"}
            className="text-sm font-medium border w-fit px-3 py-1 rounded-md hover:bg-black-hover transition-all flex items-center gap-2 m-auto"
          >
            See all posts
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
