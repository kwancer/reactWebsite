import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const About = () => {
    return (
        <div className="App">
        <NavBar />
        <Container>
            <Row>
                <Col>
                    <h1>About</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>This website was written in React.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer />
                </Col>
                </Row>
        </Container>
        </div>
    )
}

export default About;