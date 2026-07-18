import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

export default function FooterProfile() {
  return (
    <section className="border-t border-(--border) py-8 rounded-2xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-heading font-bold text-(--text)">
            Prince Kumar
          </h2>

          <p className="text-(--text)/70 text-sm">Software Developer</p>

          <div className="text-xs mt-1 flex items-center justify-center gap-1 text-(--text)/60 md:justify-start">
            <FiMapPin className="text-xs" />
            <span>India</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/prince-kr-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--text)/80 transition-all hover:border-(--text)/30 hover:text-(--text)"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/prince-k07/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--text)/80 transition-all hover:border-(--text)/30 hover:text-(--text)"
          >
            <FiLinkedin size={20} />
          </a>

          <a
            href="https://x.com/kr_prince07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--text)/80 transition-all hover:border-(--text)/30 hover:text-(--text)"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}