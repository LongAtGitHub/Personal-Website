import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { MyColors } from "../MyColors";
import { Badge, Button } from "react-bootstrap";
function Timeline() {
  return (
    <VerticalTimeline>
      {/* 3D Map Project */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 Jan - 2023 May"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h6>
          <Badge bg="secondary">Unity</Badge> <Badge bg="secondary">C#</Badge>
        </h6>
        <h3 className="vertical-timeline-element-title">
          Macalester Local Programming Contest
        </h3>
        {/* <h5 className="vertical-timeline-element-subtitle">
              3D Navigation App
            </h5> */}
        <p>
          Collaborated with a team of three to solve multiple programming
          challenges on Kattis with Python, successfully solving 3 out of 7
          questions Demonstrated strong problem-solving skills, particularly in
          the area of graph/ tree Data Structure, by successfully completing a
          challenging graph-based question
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

      {/* 3D Simulation App */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 Jan - 2023 May"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
