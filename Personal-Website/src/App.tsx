import React from "react";
import NavBar1 from "./Components/NavBar1";
import Home from "./Components/Home";
import WaveC from "./Components/SupportingComps/WaveC";
import { MyColors } from "./Components/MyColors";
import AboutAndEducation from "./Components/AboutAndEducation";


function App() {
  return (
    // NavBar and Home Components
    <>
      <div style={{ backgroundColor: MyColors.lightWhite }}>
        <NavBar1 />
        <div style={{height:"10vh"}}>{"\u00A0"}</div>
        <Home />
        <div style={{height:"5vh"}}>{"\u00A0"}</div>
        <WaveC />
      </div>

      <div style={{ backgroundColor: MyColors.gray200 }}>
      <div style={{height:"20vh"}}>{"\u00A0"}</div>
        <AboutAndEducation/>
      </div>
    </>
  );
}

export default App;
