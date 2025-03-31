import { useState } from "react"
import Nav from "./components/Nav"
import PopupModel from "./components/PopupModel"

function App() {
  let [showModel, setShowmodel] = useState(false);

  return (
    <>
      {showModel && <PopupModel setShowmodel={setShowmodel}/>}
      <Nav setShowmodel={setShowmodel}/>
    </>
  )
}

export default App
