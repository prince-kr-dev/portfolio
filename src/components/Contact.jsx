import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="w-full bg-light-black p-4 flex flex-col gap-3 rounded-2xl mt-15">
        <h1 className="text-2xl font-medium my-2">
          <span className="bg-gray-600 px-2 py-1 rounded-full mr-3">
            <i className="ri-rocket-fill"></i>
          </span>
          Let's work together
        </h1>
        <p className="text-lg font-light text-gray-400">
          Feel free to reach out! Whether you have a project idea, collaboration
          proposal, or just want to say hello, drop me a message. Let’s build
          something amazing together!
        </p>
        <a
          href={"https://t.me/prince_kr007"} target="_blank"
          className="text-sm font-medium border w-fit px-3 py-1 rounded-md hover:bg-black-hover transition-all flex items-center gap-2"
        >
          Say hello
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </a>
      </div>
    </>
  );
}

export default Contact;
