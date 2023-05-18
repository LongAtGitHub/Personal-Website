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
    <VerticalTimeline layout={"1-column-left"}>
      {/* Programming contest */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 Nov"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h6>
          <Badge bg="secondary">Python</Badge> 
        </h6>
        <h3 className="vertical-timeline-element-title">
          Macalester Local Programming Contest
        </h3>
        
        <p style={{textAlign:"justify"}}>
          Second runner up. Collaborated with a team of three to solve multiple programming
          challenges on Kattis with Python.
        </p>
        <div>{"\u00A0"}</div>
      </VerticalTimelineElement>

      {/* Preceptor */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 Aug - 2022 Dec"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h6>
          <Badge bg="secondary">Applied Math concepts</Badge> <Badge bg="secondary">Mathematica</Badge>{" "}
        </h6>
        <h3 className="vertical-timeline-element-title">
        Multivariable Calculus III Preceptor 
        </h3>
        <h5 className="vertical-timeline-element-subtitle"></h5>
        <p>
Hosted weekly office hours, offering personalized support to students struggling with course content.

        </p>
        <div>{"\u00A0"}</div>
      </VerticalTimelineElement>

      
    </VerticalTimeline>
  );
}

export default Timeline;
