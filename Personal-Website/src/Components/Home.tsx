import Container from "react-bootstrap/Container";
import WaveC from "./SupportingComps/WaveC";
import { MyColors } from "./MyColors";

function Home() {
  return (
    <div style={{ height: "100vh", width: "100hw" }}>
      <Container>
        <h1
          style={{ textAlign: "center", marginTop: "10vh", fontSize: "15vh" }}
        >
          Long Truong
        </h1>
        <p
          style={{
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
      <div>
        <WaveC myColor={MyColors.lightWhite} />
      </div>
      <div
        style={{ backgroundColor: MyColors.lightWhite, height: "50%" }}
      ></div>
    </div>
  );
}

export default Home;
