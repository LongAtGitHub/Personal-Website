import Container from "react-bootstrap/Container";
import WaveC from "./WaveC";
import { MyColors } from "../MyColors";
import React from "react";

import GitHubLogo from '../../Image/GitHubLogo.svg';
import LinkedInLogo from '../../Image/LinkedInLogo.svg';
import EmailLogo from '../../Image/EmailLogo.svg';
import Email2Logo from '../../Image/Email2Logo.svg'

function Home() {
  return (
  
    <div style={{ height: "50vh", width: "100hw" }} id="home">
      <Container>
        <div style ={{height:"10vh"}}></div>
        <h1
          style={{ textAlign: "center", fontSize: "15vh" }}
        >
          Long Truong
        </h1>
        <p style={{
            textAlign: "center",
            marginTop: "3vh",
            fontSize: "5vh",
            marginLeft: "2hw",
            marginRight: "1hw",
          }}
        >
          "A journey of a thousand miles begins with a single step"{" "}
        </p>
        <div>{"\u00A0"}</div><div>{"\u00A0"}</div>
        <div style={{display:"flex", justifyContent:"center"}}>
          <a href='https://github.com/LongAtGitHub' target="_blank"><img src={GitHubLogo} alt="GitHub Logo" width={"50vh"} style={{marginRight:"5vh"}} /></a>
          <a href="https://www.linkedin.com/in/long-truong-1b0a6a22a/" target="_blank"><img src={LinkedInLogo} alt="LinkedIn Logo" width={"50vh"} style= {{marginRight:"5vh"}}/></a>
          <a href="mailto:ltruong@macalester.edu" target="_blank"><img src={EmailLogo} alt="Email Logo" width={"50vh"} style= {{marginRight:"5vh"}}/></a>
        </div>
        <div>{"\u00A0"}</div>
      </Container>
      </div>
  );
}

export default Home;
