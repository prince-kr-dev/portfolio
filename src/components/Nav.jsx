import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/P-dark.png";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function Nav({ setShowmodel }) {
  return (
    <>
      <div className="backdrop-blur-sm bg-white/5 h-16 w-full flex justify-between items-center px-5 md:px-20 lg:px-45 fixed z-10 shadow-4xl">
        <img
          className="rounded-full h-12 w-12 md:h-15 md:w-15"
          src={logo}
          alt=""
        />
        <div className="backdrop-blur-md bg-white/5 text-md font-medium text-gray-400 gap-5 hidden md:flex py-3 px-10 rounded-full overflow-hidden">
          <Link to={"/"} className="hover:text-white transition-all">
            Home
          </Link>
          <Link to={"/projects"} className="hover:text-white transition-all">
            Projects
          </Link>
          <Link to={"/about"} className="hover:text-white transition-all">
            About
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <a
            href="https://portfolio-prince-sooty.vercel.app/"
            target="_blank"
            className="hover:text-white p-2 rounded backdrop-blur-md bg-green-500/50 hover:cursor-pointer animate-pulse [animation-duration:0.9s] transition-all font-medium hover:bg-green-600"
          >
            V2.0
          </a>

          <button onClick={() => setShowmodel(true)}>
            <i className="ri-command-line text-2xl font-light p-2 rounded backdrop-blur-md bg-white/10 hover:cursor-pointer transition-all"></i>
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Nav;
