import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <Navbar className="shadow" variant="dark" bg="dark" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">MERN Quizz</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
          <Nav.Link as={Link} to="/add">Add a quizz</Nav.Link>
          <Nav.Link href="https://github.com/jocarol/" target="_blank">About me</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Header;

