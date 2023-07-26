import { Outlet } from 'react-router-dom';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
const AboutMe = () => {
    return (
        <div className='App'>
            <NavBar />
            <Container>
            <Row className="justify-content-md-center">
            <h1 style={{marginTop:"1%"}}>About Me</h1>
            <p>Find out more about me by clicking on one of the options below.</p>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={8}>
            <ButtonGroup aria-label="Basic example" style={{marginTop:"1%", width:"100%"}}>
            <Button href='/aboutme/education' variant="primary">Education</Button>
            <Button href='/aboutme/experience' variant="primary">Experience</Button>
            <Button href='/aboutme/other' variant="primary">Other</Button>
            </ButtonGroup>
            </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={8}>
            <Outlet />
            </Col>
            </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AboutMe;
