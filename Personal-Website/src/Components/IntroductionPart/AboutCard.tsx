import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";


function AboutCard() {
  return (
    <Card style={{height:"50vh"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">An introduction of myself</Card.Subtitle>
        
        <p style={{textAlign:"justify"}}>
        Hello, my name is Long, and I am currently a rising Junior studying at
        Macalester College. My main area of interest lies in Software
        Development (I am also happy to chat about Statistics & Data Science !). Currently, I am
        focusing on honing my front-end skills to enhance my abilities in
        creating visually appealing and user-friendly websites and applications.
        </p>
        
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
