import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';  
import AboutCard from "./AboutCard";
import EducationCard from "./EducationCard";

function AboutAndEducation() { return(
    <Container id="about">
        <h1 className="m-2" style={{textAlign:"center"}}>About & Education</h1> 
        <div>{"\u00A0"}</div>
        <Row>
        <Col md={6} className="m-2 m-md-0"><AboutCard/></Col>
        <Col md={6} className="m-2 m-md-0"><EducationCard/></Col>
        </Row> 
    </Container>
)}


export default AboutAndEducation;