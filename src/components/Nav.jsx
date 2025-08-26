import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/P-dark.png";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Projects from "./Projects";

function Nav({setShowmodel}) {
  return (
    <>
      <div className="h-16 w-full flex justify-between items-center px-5 md:px-20 lg:px-45 fixed z-10">
        <img className="rounded-full h-12 w-12 md:h-15 md:w-15" src={logo} alt="" />
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
          <Link to={"/blog"} className="hover:text-white transition-all">
            Blog
          </Link>
        </div>
        <button onClick={()=>setShowmodel(true)}><i className="ri-command-line text-2xl font-light p-2 rounded backdrop-blur-md bg-white/10 hover:cursor-pointer transition-all"></i></button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default Nav;
