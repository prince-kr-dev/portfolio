import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import AllProjects from "./components/AllProjects";

function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto w-full max-w-6xl px-0 sm:px-6 md:px-14 lg:px-18 xl:px-28">
        <Hero />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  );
}