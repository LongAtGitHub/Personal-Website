import React from "react";
import Timeline from "./Timeline";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container } from "react-bootstrap";
function Projects() {
    return (
    <Container>
       <h1 className="m-2" style={{textAlign:"center"}}>Projects</h1> 
       <Timeline/>
    </Container>  );
}

export default Projects;