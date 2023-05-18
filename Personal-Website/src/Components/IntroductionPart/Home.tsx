import Container from "react-bootstrap/Container";
import WaveC from "./WaveC";
import { MyColors } from "../MyColors";
import React from "react";

function Home() {
  return (
  
    <div style={{ height: "50vh", width: "100hw" }}>
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
      </Container>
      </div>
  );
}

export default Home;
