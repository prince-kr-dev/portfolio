import ProjectCard from "./ProjectCard";
import portfolio from "../assets/portfolio.png";
import crypto from "../assets/crypto.png";
import music from "../assets/music.png";
import weather1 from "../assets/react-weather.png";
import weather2 from "../assets/weather.png";
import translator from "../assets/translator.png";
import Footer from "./Footer";

function Projects() {
  return (
    <>
      <div className="pt-30 md:pt-35 px-5 md:px-20 lg:px-45">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          Projects
        </h1>
        <p className="text-lg font-light mt-2">
          A collection of finest project that i have built
        </p>
        <div className="flex justify-between flex-wrap mt-15 gap-y-5">
          <ProjectCard
            image={portfolio}
            title={"Portfolio"}
            description={"My own digital home on th internet"}
            preview={"https://portfolio-iota-prince.vercel.app/"}
            github={"https://github.com/prince-kr-dev/portfolio"}
            />
          <ProjectCard
            image={weather1}
            title={"Weather App by React"}
            description={"Live weather forecasting by react"}
            preview={"https://weather-io-iota.vercel.app/"}
            github={"https://github.com/prince-kr-dev/weather.io"}
            />
          <ProjectCard
            image={crypto}
            title={"Cryptoland Home page"}
            description={"A Crypto landing page"}
            preview={"https://crypto-land-omega.vercel.app/"}
            github={"https://github.com/prince-kr-dev/crypto-land"}
            />
          <ProjectCard
            image={weather2}
            title={"Weather App"}
            description={"Weather forecast using API"}
            preview={"https://weather-io-iota.vercel.app/"}
            github={"https://github.com/prince-kr-dev/weather.io"}
            />
          <ProjectCard
            image={translator}
            title={"Translator"}
            description={"A translator ENG to HIN with Dictionary"}
            preview={"https://github.com/prince-kr-dev/translate.io"}
            github={"https://github.com/prince-kr-dev/translate.io"}
            />
          <ProjectCard
            image={music}
            title={"Music Player"}
            description={"Music Player with playlist featues"}
            preview={"https://prince-kr-dev.github.io/music-flowww/"}
            github={"https://github.com/prince-kr-dev/music-flowww"}
            />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Projects;
