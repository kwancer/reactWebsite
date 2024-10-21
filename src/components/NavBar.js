import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaProjectDiagram, FaEnvelope, FaFileAlt, FaChalkboardTeacher } from 'react-icons/fa';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Krzysztof Wancerski"
            src="/me.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top rounded"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">Krzysztof Wancerski</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={<span><FaProjectDiagram /> Projects</span>} id="collasible-nav-dropdown-projects">
              <NavDropdown.Item href="/projects/design-engineering">Design Engineering</NavDropdown.Item>
              <NavDropdown.Item href="/projects/coding">Coding</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact"><FaEnvelope /> Contact</Nav.Link>
            <Nav.Link href="/CV.pdf"><FaFileAlt /> See my CV</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/tutoring"><FaChalkboardTeacher /> GCSE & A-Level Tutoring</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
