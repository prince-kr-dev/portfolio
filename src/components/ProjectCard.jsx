function ProjectCard({ image, title, description, preview, github }) {
    return (
      <div className="group bg-light-black rounded-2xl overflow-hidden flex flex-col transition hover:-translate-y-1">
        
        {/* Image */}
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
    
        {/* Content */}
        <div className="p-4 flex flex-col gap-3 flex-1">
          <h1 className="text-xl md:text-2xl font-semibold">
            {title}
          </h1>
    
          <p className="text-sm font-medium md:text-base text-gray-400 flex-1">
            {description}
          </p>
    
          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href={preview}
              target="_blank"
              rel="noreferrer"
              className="border px-3 py-1 rounded-md text-sm md:text-md font-medium flex items-center gap-2 hover:bg-black-hover transition"
            >
              <i className="ri-global-line"></i>
              Preview
            </a>
    
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="border px-3 py-1 rounded-md text-sm md:text-md font-medium flex items-center gap-2 hover:bg-black-hover transition"
            >
              <i className="ri-github-fill"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  