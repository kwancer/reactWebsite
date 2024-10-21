import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            <NavDropdown title="Projects" id="collasible-nav-dropdown-projects">
              <NavDropdown.Item href="/projects/design-engineering">Design Engineering</NavDropdown.Item>
              <NavDropdown.Item href="/projects/coding">Coding</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Me" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/aboutme/education">Education</NavDropdown.Item>
              <NavDropdown.Item href="/aboutme/experience">
                Experience
              </NavDropdown.Item>
              <NavDropdown.Item href="/aboutme/skills">Skills</NavDropdown.Item>
              <NavDropdown.Item href="/aboutme/awards">Awards</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/aboutme">
                About Me
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/CV.pdf">See my CV</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about">About this website</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;