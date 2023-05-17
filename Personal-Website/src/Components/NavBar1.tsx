import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { MyColors } from './MyColors';


function NavBar1() {
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
      <Navbar bg="dark" variant="dark" style={{backgroundColor:MyColors.gray200}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt= ""
              src= "src\Image\apple-icon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Personal Website
          </Navbar.Brand>
          <Nav className="me-auto ms-5" >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience" >Experience</Nav.Link>
            <Nav.Link href="#contacts" onClick={handleClickScroll}>Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 
  );
}

export default NavBar1;