import React from "react";

function Footer() {
  return (
    <footer className="mt-12 py-8  relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 text-white">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Let’s Connect
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/prince-kr-dev"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:scale-110 transition"
          >
            <i className="ri-github-line text-xl"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/prince-k07/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:scale-110 transition"
          >
            <i className="ri-linkedin-line text-xl"></i>
          </a>

          <a
            href="https://t.me/prince_kr007"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:scale-110 transition"
          >
            <i className="ri-telegram-line text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 mt-">
          <p className="text-md font-medium">© 2026 Prince Kumar</p>
          <p className="text-xs mt-1 font-medium">Built by Prince</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
