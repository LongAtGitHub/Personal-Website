import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "./CardResponsive.css"

function EducationCard() {
  return (
    <Card className="card-responsive" >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Education</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            Macalester College Class Year 2025 - Computer Science Major
        </Card.Subtitle>
        <Card.Text>
            <div>GPA: 3.9/4.0</div>
            <div>Dean's List Fall 2022</div>
            <div>
              Course Taken: 
              <ul>
              <li>COMP 128 - Data Structure</li>
              <li>COMP 225 - Software Development</li>
              <li>COMP 240 - Computer System</li> 
              <li>COMP 465 - Interactive Computer Graphics</li>
              </ul>
              
            </div>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
