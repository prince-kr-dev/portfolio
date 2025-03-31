import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="pt-20 pb-5 px-15 md:px-30 lg:px-50">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 text-lg font-light text-gray-400">
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
          <div className="flex flex-col gap-2 text-lg font-light text-gray-400">
            <a href={"https://www.linkedin.com/in/prince-k07/"} target="_blank" className="hover:text-white transition-all">
              LinkedIn
            </a>
            <a href={"https://github.com/prince-kr-dev"} target="_blank" className="hover:text-white transition-all">
              GitHub
            </a>
            <a href={"https://t.me/prince_kr007"} target="_blank" className="hover:text-white transition-all">
              Telegram
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm py-2 font-light flex gap-3">
        <p>©2025 Prince...</p>
        <p><i>Patna, India</i></p>
      </div>
    </>
  );
}

export default Footer;