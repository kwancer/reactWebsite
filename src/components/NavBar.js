import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Krzysztof Wancerski</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <NavDropdown title="About Me" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/aboutme/education">Education</NavDropdown.Item>
              <NavDropdown.Item href="/aboutme/experience">
                Experience
              </NavDropdown.Item>
              <NavDropdown.Item href="/aboutme/other">Other</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/aboutme">
                About Me
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
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