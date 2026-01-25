import { useState } from "react";
import Nav from "./components/Nav";
import PopupModel from "./components/PopupModel";
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
        {/* 🔴 Foreground Content */}
        {showModel && <PopupModel setShowmodel={setShowmodel} />}
        <Nav setShowmodel={setShowmodel} />
      </ClickSpark>
    </>
  );
}

export default App;
