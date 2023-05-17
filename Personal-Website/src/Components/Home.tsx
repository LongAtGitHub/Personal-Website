import Container from "react-bootstrap/Container";
import WaveC from "./SupportingComps/WaveC";
import { MyColors } from "./MyColors";

function Home() {
  return (
    <div style={{ height: "100vh", width: "100hw", backgroundColor:MyColors.lightWhite }}>
      <Container>
        <h1
          style={{ textAlign: "center", fontSize: "15vh" }}
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
      
        <WaveC myColor={MyColors.gray200} />
        <div style={{ backgroundColor: MyColors.gray200, height: "30%" }}>
          {"\u00A0"}
        </div>
    </div>
  );
}

export default Home;
