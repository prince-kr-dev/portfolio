function BlogCard({image,date,title,url}){
    return(
        <>
            <div className="p-3 bg-light-black w-full md:w-90 lg:w-120 mb-3 flex flex-col gap-2 rounded-2xl">
                <div className="h-fit w-full rounded-t-xl overflow-hidden">
                    <img src={image} className="h-full w-full hover:scale-103 transition-all" />
                </div>
                <h1 className="text-sm font-medium text-gray-400">{date}</h1>
                <h2 className="font-medium text-xl">{title}</h2>
                <div className="flex items-center gap-3">
                    <a className="underline text-sm font-light flex items-center gap-2 w-fit" href={url} target="_blank">Read full blog...</a>
                </div>
            </div>
        </>
    );
}

export default BlogCard;