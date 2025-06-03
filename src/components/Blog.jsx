import Footer from "./Footer";
import BlogCard from "./BlogCard";
import hookImg from "../assets/react-hook.png";
import routerImg from "../assets/react-router.png";

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
          <BlogCard
            image={hookImg}
            date={"Feb 27, 2025"}
            title={"React Hooks Explained: useState, useEffect, and useContext"}
            url="https://medium.com/@princekr.kush007/react-hooks-explained-usestate-useeffect-and-usecontext-for-beginners-d8b8772a51e7"
          />
          <BlogCard
            image={routerImg}
            date={"Mar 12, 2025"}
            title={"React Router: Navigation Made Easy, All about react router"}
            url="https://medium.com/@princekr.kush007/react-router-made-easy-for-beginners-70962130c2b1"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
