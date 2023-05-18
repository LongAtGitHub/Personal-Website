import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MyColors } from '../MyColors';
import GitHubLogo from './GitHubLogo.svg';
import LinkedInLogo from './LinkedInLogo.svg';
import EmailLogo from './EmailLogo.svg';

function MyFooter() {
  return (
    <footer style ={{backgroundColor: MyColors.footer, color:"white"}} >
      <Container >
        <div>{"\u00A0"}</div>
        <div style ={{fontSize: "large" }}>&copy; 2023 Long Truong. All rights reserved.</div>
        <div>{"\u00A0"}</div>
        <span>Contact Number (US): </span><a href="tel:(+1) 612-513-2854"> (+1) 612-513-2854</a>
        <br></br>
        <span>Contact Number (VN): </span><a href="tel: (+84) 911936365"> (+84) 911936365</a>
        <div>{"\u00A0"}</div>
        <a href='https://github.com/LongAtGitHub' target="_blank"><img src={GitHubLogo} alt="GitHub Logo" width={"50vh"} style={{marginRight:"5vh"}} /></a>
        <a href="https://www.linkedin.com/in/long-truong-1b0a6a22a/" target="_blank"><img src={LinkedInLogo} alt="LinkedIn Logo" width={"50vh"} style= {{marginRight:"5vh"}}/></a>
        <a href="mailto:ltruong@macalester.edu" target="_blank"><img src={EmailLogo} alt="Email Logo" width={"50vh"} style= {{marginRight:"5vh"}}/></a>
        <div>{"\u00A0"}</div>

      </Container>
      
    </footer>
  );
}

export default MyFooter;