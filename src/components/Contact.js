import { AiTwotoneMail, AiFillLinkedin, AiFillGithub, AiFillHome } from 'react-icons/ai';
import NavBar from './NavBar';
import Footer from './Footer';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <div className="App">
            <NavBar />
            <Container>
                <Row style={{color: "#6c757d", marginLeft: "5%", marginRight: "5%", marginTop: "2%", padding: "5px", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <Col>
                        <h1 style={{ color: "#007bff", fontWeight: "bold" }}>Contact</h1>
                        <p style={{color: "#555" }}>Below are some key information on how to find me and reach me.</p>
                    </Col>
                </Row>
                <Row md={2} s={1} style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
                    <Col >
                        <hr style={{ borderTop: "2px solid #007bff" }} />
                        <h3 style={{ color: "#007bff" }}>Get in touch</h3>
                        <p style={{ color: "#555" }}>Here are some of my contact details:</p>
                        <h5><AiTwotoneMail style={{ color: "#007bff" }} /> <a href="mailto: krzysztofwancerski@gmail.com" style={{ color: "#007bff" }}>krzysztofwancerski@gmail.com</a></h5>
                        <p style={{ color: "#555" }}>My personal email address.</p>
                        <h5><AiTwotoneMail style={{ color: "#007bff" }} /> <a href="mailto: kw1022@ic.ac.uk" style={{ color: "#007bff" }}>kw1022@ic.ac.uk</a></h5>
                        <p style={{ color: "#555" }}>My Imperial College email address.</p>
                    </Col>
                    <Col>
                        <hr style={{ borderTop: "2px solid #28a745" }} />
                        <h3 style={{ color: "#28a745" }}>My Socials</h3>
                        <p style={{  color: "#555" }}>Here are some of my social media profiles:</p>
                        <h5><AiFillLinkedin style={{ color: "#28a745" }} /> <a href='https://www.linkedin.com/in/kwancerski/' style={{ color: "#28a745" }}>My LinkedIn</a></h5>
                        <p style={{ color: "#555" }}>My professional profile.</p>
                        <h5><AiFillGithub style={{ color: "#28a745" }} /><a href='https://github.com/kwancer' style={{ color: "#28a745" }}> My Github</a></h5>
                        <p style={{ color: "#555" }}>My coding profile.</p>
                        
                    </Col>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
                    <Col>
                        <hr style={{ borderTop: "2px solid #dc3545" }} />
                        <h3 style={{ color: "#dc3545" }}>My Location</h3>
                        <p style={{ color: "#555" }}>These are the places I call home.</p>
                        <h5 style={{ color: "#dc3545" }}><AiFillHome style={{ color: "#dc3545" }} /> London, UK</h5>
                        <p style={{ color: "#555" }}>My home during term time.</p>
                        <h5 style={{ color: "#dc3545" }}><AiFillHome style={{ color: "#dc3545" }} /> Warsaw, Poland & Colchester, UK</h5>
                        <p style={{ color: "#555" }}>My homes during the holidays.</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Contact;