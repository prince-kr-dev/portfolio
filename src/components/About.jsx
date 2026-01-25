import Footer from "./Footer";
import profile from "../assets/profile.jpg";
import resume from "../assets/Prince_Kumar_Resume.pdf";
import Skills from "./Skills";

function About() {
  return (
    <>
      <div className="pt-30 md:pt-35 px-5 md:px-20 lg:px-45">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          About
        </h1>
        <p className="text-lg font-light mt-2">
          A glimpse into my journey, skills, and passion for web development!
        </p>
        <div className="mt-10 flex flex-col items-center gap-1">
          <img src={profile} className="h-60 w-60 rounded-full" />
          <h1 className="text-2xl font-medium">Prince Kumar</h1>
          <h2 className="text-sm font-light">Full Stack Developer</h2>
        </div>
        
        <div className="mt-10">
          <div className="mt-14 space-y-4">
            <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              👨‍🎓 Professional Summary
            </h1>
            <p className="text-md md:text-lg font-light text-gray-300 leading-relaxed">
              Full-Stack MERN Developer with hands-on experience in JavaScript,
              React.js, Node.js, and Express.js. Skilled in building dynamic and
              responsive web applications from front to back, using MongoDB for
              database management. I have a solid understanding of data
              structures and algorithms, which helps me write efficient and
              optimized code.
            </p>
          </div>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 text-xl font-medium border-2 w-fit px-2 py-0.5 md:px-3 md:py-1 rounded-sm hover:bg-black-hover transition-all flex items-center gap-2"
          >
            <i className="ri-file-text-line text-2xl"></i>
            My Resume
          </a>
          <h1 className="text-xl font-medium mb-3 mt-15">
            🛠️ Tech Stack & Tools
          </h1>
          <Skills />
          
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
