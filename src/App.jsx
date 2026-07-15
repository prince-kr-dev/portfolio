import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto w-full max-w-6xl px-0 sm:px-6 md:px-14 lg:px-18 xl:px-28">
        <Hero />
        <TechStack/>
      </div>
    </div>
  );
}

export default App;
