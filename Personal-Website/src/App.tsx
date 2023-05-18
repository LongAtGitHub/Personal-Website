import React from "react";
import NavBar1 from "./Components/IntroductionPart/NavBar1";
import Home from "./Components/IntroductionPart/Home";
import WaveC from "./Components/IntroductionPart/WaveC";
import { MyColors } from "./Components/MyColors";
import AboutAndEducation from "./Components/IntroductionPart/AboutAndEducation";
import Projects from "./Components/ProjectPart/Projects";
import MyFooter from "./Components/Footer/MyFooter";
import Experience from "./Components/ExperiencePart/Experience";



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
        <div style={{height:"15vh"}}>{"\u00A0"}</div>
        <AboutAndEducation/>
        <div style={{height:"10vh"}}>{"\u00A0"}</div>
        <Projects/>
        <div style={{height:"10vh"}}>{"\u00A0"}</div>
        <Experience/>
      </div>
      <MyFooter/>
      
    </>
  );
}

export default App;
