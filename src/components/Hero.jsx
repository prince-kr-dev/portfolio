import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import banner from "../assets/banner.webp";
import profile from "../assets/profile.webp";
import ThemeToggle from "./ui/ThemeToggle";

export default function Hero() {
  return (
    <section className="bg-bg text-text">
      {/* Banner */}
      <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
        <img src={banner} alt="Banner" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Theme Toggle */}
        <div className="absolute top-5 right-5 z-20">
          <ThemeToggle />
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-5">
          <h2 className="text-center italic text-white text-lg sm:text-2xl font-light">
            Building scalable solutions, turning ideas to products.
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Avatar */}
        <div className="-mt-14 sm:-mt-16 md:-mt-20 relative z-10">
          <img
            src={profile}
            alt="Profile"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[6px] border-(--bg) object-cover"
          />
        </div>

        <div className="pt-6 pb-12">
          {/* Name + Social */}
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold font-heading text-text">
              Prince Kumar
            </h1>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-muted transition-all duration-300 ease-out hover:bg-(--bg) hover:border-(--text)/20 hover:text-text hover:shadow-md hover:scale-105 active:scale-95"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-muted transition-all duration-300 ease-out hover:bg-(--bg) hover:border-(--text)/20 hover:text-text hover:shadow-md hover:scale-105 active:scale-95"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-muted transition-all duration-300 ease-out hover:bg-(--bg) hover:border-(--text)/20 hover:text-text hover:shadow-md hover:scale-105 active:scale-95"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted font-heading">
            <span className="opacity-80">Software Developer</span>

            <span>•</span>

            <span className="opacity-80">India</span>

            <span className="w-2 h-2 rounded-full bg-(--success) animate-pulse"></span>
          </div>

          <p className="mt-4 max-w-4xl text-sm md:text-base leading-normal font-sans text-(--muted) font-medium">
            I am <span className="font-bold text-(--text)">Prince Kumar</span>,
            a passionate full-stack developer who enjoys building end-to-end web
            applications from responsive user interfaces to scalable backend
            systems. I love turning ideas into{" "}
            <span className="font-bold text-(--text)">real-world products</span>
            , continuously learning modern technologies, and solving practical
            problems. My approach is simple:{" "}
            <span className="font-bold text-(--text)">
              build, learn, iterate, and grow
            </span>{" "}
            with every project.
          </p>
        </div>
        <div className="w-full flex items-center justify-center mb-8"><FaChevronDown  className="text-(--muted)/70 animate-bounce"/></div>
      </div>
    </section>
  );
}
