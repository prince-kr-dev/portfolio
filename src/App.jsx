import { useState } from "react";
import Nav from "./components/Nav";
import PopupModel from "./components/PopupModel";
import Squares from "./Animations/Squares";
import DarkVeil from "./Animations/DarkVeil";
import ClickSpark from "./Animations/ClickSpark";

function App() {
  let [showModel, setShowmodel] = useState(false);

  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        {/* 🔵 Dot Grid Full-Screen Background */}
        <div className="fixed inset-0 -z-10">
          <div className="fixed inset-0 -z-10">
            <DarkVeil />
          </div>
          <Squares
            speed={0.5}
            squareSize={40}
            direction="right" // up, down, left, right, diagonal
            borderColor="rgba(255, 255, 255, 0.1)"
            hoverFillColor="#222"
          />
        </div>

        {/* 🔴 Foreground Content */}
        {showModel && <PopupModel setShowmodel={setShowmodel} />}
        <Nav setShowmodel={setShowmodel} />
      </ClickSpark>
    </>
  );
}

export default App;
