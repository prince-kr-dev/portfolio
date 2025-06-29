import Footer from "./Footer";
import profile from "../assets/profile.png";
import resume from "../assets/Prince_Kumar_Resume.pdf";

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
          <h2 className="text-sm font-light">Frontend Developer</h2>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-medium mb-3 mt-5">
            👨‍🎓 Education & Background
          </h1>
          <p className="text-md font-light text-gray-400">
            I am a pre-final year Computer Science student with a strong passion
            for web development. My academic journey has equipped me with
            problem-solving skills and a solid foundation in programming and
            software development.
          </p>
          <h1 className="text-xl font-medium mb-3 mt-5">
            💻 Skills & Expertise
          </h1>
          <p className="text-md font-light text-gray-400">
            I specialize in frontend development, where I enjoy creating responsive and visually appealing user interfaces. Additionally, I have a basic yet growing understanding of Data Structures and Algorithms (DSA), which helps me write efficient and optimized code.
          </p>
          <h1 className="text-xl font-medium mb-3 mt-5">
            🛠️ Tech Stack & Tools
          </h1>
          <div className="text-md font-light text-gray-400">
            I am proficient in the following technologies:
            <div className="pl-3 flex flex-col">
              <span>☻ <b className="font-semibold">Languages:</b> C, C++, and JavaScript</span>
              <span>☻ <b className="font-semibold">Frontend:</b> HTML, CSS, and React.js</span>
              <span>☻ <b className="font-semibold">Styling:</b> CSS3, Tailwind CSS </span>
              <span>☻ <b className="font-semibold">Version Control:</b> Git and GitHub</span>
            </div>
          </div>
          <a
            href={resume}
            download="Prince_Resume.pdf"
            className="mt-5 text-xl font-medium border-2 w-fit px-3 py-1 md:px-4 md:py-2 rounded-md hover:bg-black-hover transition-all flex items-center gap-2"
          >
            <i className="ri-file-text-line text-2xl"></i>
            My Resume
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
