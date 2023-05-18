import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { MyColors } from "../MyColors";
import { Badge, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 

// All icon tsx
import javaLogo from "./SvgFolder/java-icon.svg"
import cppLogo from "./SvgFolder/cpp-icon.svg"
import jsLogo from "./SvgFolder/javascript-icon.svg"
import reactJsLogo from "./SvgFolder/reactjs-icon.svg"
import unityLogo from "./SvgFolder/unity-icon.svg"


function Timeline() {
  const LogoCppComponent = () => 
  <div className="m-2"><img src={cppLogo} alt="cppLogo" /></div>;
  const LogoReactJSComponent = () => 
  <div className="m-2"><img src={reactJsLogo} alt="reactJsLogo" /></div>;
  const LogoUnityComponent = () => 
  <div className=""><img src={unityLogo} alt="unityLogo" /></div>;
  const LogoJSComponent = () => 
  <div className="m-2"><img src={jsLogo} alt="jsLogo" /></div>;
  const LogoJavaComponent = () => 
  <div className="m-2"><img src={javaLogo} alt="javaLogo" /></div>;
  
  return (
    
    
    <VerticalTimeline>
      {/* This personal website */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 May"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={<LogoReactJSComponent/>}
      >
        <h6>
          <Badge bg="secondary">ReactJS</Badge> <Badge bg="secondary">TypeScript</Badge> <Badge bg="secondary">React Bootstrap</Badge>
        </h6>
        <h3 className="vertical-timeline-element-title">The Personal Website</h3>
        <p>
          A personal website created with React + TypeScript to showcase my skills and experience. You are viewing it directly 😀.
        </p>
        <div>{"\u00A0"}</div>
        <Button
          variant="primary"
          href="https://github.com/LongAtGitHub/Personal-Website"
          target="_blank"
        >
          Show project code
        </Button>{" "}
       
      </VerticalTimelineElement>



      {/* 3D Map Project */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 Jan - 2023 May"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={<LogoUnityComponent/>}
      >
        <h6>
          <Badge bg="secondary">Unity</Badge> <Badge bg="secondary">C#</Badge>
        </h6>
        <h3 className="vertical-timeline-element-title">The Olin Rice Map</h3>
        {/* <h5 className="vertical-timeline-element-subtitle">
            3D Navigation App
          </h5> */}
        <p>
          A 3D Interactive App to navigate around the Science Building of
          Macalester College - Olin Rice.
        </p>
        <div>{"\u00A0"}</div>
        <Button
          variant="primary"
          href="https://github.com/TenDayoe/OlinRice3dMap"
          target="_blank"
        >
          Visit Project
        </Button>{" "}
      </VerticalTimelineElement>

      {/* 3D Simulation Solar System App */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 Jan - 2023 May"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={<LogoCppComponent/>}
      >
        <h6>
          <Badge bg="secondary">C++</Badge> <Badge bg="secondary">OpenGL</Badge>{" "}
          <Badge bg="secondary">MinVR</Badge>
        </h6>
        <h3 className="vertical-timeline-element-title">
          Solar System Planets Simulation
        </h3>
        <h5 className="vertical-timeline-element-subtitle"></h5>
        <p>
          A 3D Simulation of the Solar System. We created this app with various
          Computer Graphics techniques like VAOs, VBOs, Vertex, Fragment
          Shaders, and UV texturing
        </p>
        <div>{"\u00A0"}</div>
        <Button
          variant="primary"
          href="https://github.com/tridinhbui/universe-planets-tri-long"
          target="_blank"
        >
          Visit Project
        </Button>{" "}
      </VerticalTimelineElement>

      {/*Caro Game */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 November"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={<LogoJavaComponent/>}
      >
        <h6>
          <Badge bg="secondary">Java</Badge>{" "}
          <Badge bg="secondary">Kilt Graphics UI</Badge>{" "}
        </h6>
        <h3 className="vertical-timeline-element-title">Caro Game with Bot</h3>
        <h5 className="vertical-timeline-element-subtitle"></h5>
        <p>
          Implemented a Caro game in Java vs Bot using the Minimax algorithm for
          optimal decision making
        </p>
        <div>{"\u00A0"}</div>
        <Button
          variant="primary"
          href="https://github.com/mac-comp128-f22-alhashim/project-quang-long-andy-final-project"
          target="_blank"
        >
          Visit Project
        </Button>{" "}
      </VerticalTimelineElement>

      {/*Weather App*/}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 November"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={<LogoJSComponent/>}
      >
        <h6>
          <Badge bg="secondary">JavaScript</Badge>{" "}
        </h6>
        <h3 className="vertical-timeline-element-title">Weather App</h3>
        <h5 className="vertical-timeline-element-subtitle"></h5>
        <p>
          Developed a real-time weather app using vanilla JavaScript with API
          calls from OpenWeatherMap that displays user's current weather
          location
        </p>
        <div>{"\u00A0"}</div>
        <Button
          variant="primary"
          href="https://longatgithub.github.io/Weather-App/"
          target="_blank"
        >
          View App Instantly
        </Button>{" "}
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
