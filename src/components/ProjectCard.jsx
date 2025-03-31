

function ProjectCard({image , title, description , preview, github}){
    return(
        <>
            <div className="p-3 bg-light-black w-full md:w-90 lg:w-120 mb-3 flex flex-col gap-2 rounded-2xl">
                <div className="h-fit w-full rounded-t-xl overflow-hidden">
                    <img src={image} className=" hover:scale-103 transition-all" />
                </div>
                <h1 className="text-2xl font-semibold">{title}</h1>
                <h2 className="font-medium text-gray-400">{description}</h2>
                <div className="flex items-center gap-3">
                    <a className="border px-3 py-1 rounded-md text-md font-medium flex items-center gap-2 w-fit" href={preview} target="_blank"><i className="ri-global-line"></i>Preview</a>
                    <a className="border px-3 py-1 rounded-md text-md font-medium flex items-center gap-2 w-fit" href={github} target="_blank"><i className="ri-github-fill"></i>GitHub</a>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;