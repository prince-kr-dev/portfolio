import Footer from "./Footer";
import BlogCard from "./BlogCard";

import { blogPosts } from "../Data/Constants";

function Blog() {
  return (
    <>
      <div className="pt-30 md:pt-35 px-5 md:px-20 lg:px-45">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          Blogs
        </h1>
        <p className="text-lg font-light mt-2">
          A platform where I openly share my thoughts, ideas, and experiences.
        </p>
        <div className="flex justify-between flex-wrap mt-15 gap-y-5">
          {blogPosts.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              url={blog.url}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
