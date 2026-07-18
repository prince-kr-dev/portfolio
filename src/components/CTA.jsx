import React from "react";
import { LuMessagesSquare } from "react-icons/lu";

function CTA() {
  return (
    <div className="mx-auto px-4 lg:px-6 flex flex-col items-center py-20 border-t border-(--border) rounded-2xl mt-8">
      <h1 className="font-heading font-medium text-2xl md:text-3xl">
        Have an idea? Let's talk
      </h1>
      <p className="font-sans text-(--muted)/80 text-sm text-center md:text-base mt-3">
        Available for full-time and freelance <br /> opportunities
      </p>

      <a
        href="https://www.linkedin.com/in/prince-k07/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-(--surface) px-8 py-2 text-(--text) font-medium font-sans text-base rounded-lg border border-(--border) hover:border-(--text)/60 mt-6 flex items-center justify-between gap-2 transition-all duration-200"
      >
        <LuMessagesSquare  className="h-6 w-6 text-(--text)/80" /> Drop a Message
      </a>
    </div>
  );
}

export default CTA;
