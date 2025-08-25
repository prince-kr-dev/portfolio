import ScrollVelocity from "../Animations/ScrollVelocity";

function Marquee() {
  return (
    <>
      <div>
        <ScrollVelocity
          texts={["MERN Stack Developer | React.js | Node.js | MongoDB | Tailwind CSS | JavaScript | ", "Clean Code | Responsive Design | Debugging | Always Learning | "]}
          velocity={80}
          className="custom-scroll-text"
        />
      </div>
    </>
  );
}
export default Marquee;