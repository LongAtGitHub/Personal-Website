import React from "react";
import Container from "react-bootstrap/esm/Container";
import Timeline from "./Timeline";

function Experience() {
    return (
        <Container id="experience">
           <h1 className="m-2" style={{textAlign:"center"}}>Experience</h1> 
           <Timeline/>
        </Container>  );
}

export default Experience;