import { AiTwotoneMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import NavBar from './NavBar';
import Footer from './Footer';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Contact = () => {
    return (
        <div className="App">
        <NavBar />
        <Container>
            <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
                <Col>
                    <h1>Contact</h1>
                </Col>
            </Row>
            <Row md={2} s={1} style={{marginLeft: "5%", marginRight: "5%"}}>
                <Col>
                    <hr></hr>
                    <h3>Get in touch</h3>
                    <p>Here are some of my contact details:</p>
                    <h5><AiTwotoneMail /> <a href="mailto: krzysztofwancerski@gmail.com">krzysztofwancerski@gmail.com</a></h5>
                    <p>My personal email address.</p>
                    <h5><AiTwotoneMail /> <a href="mailto: kw1022@ic.ac.uk">kw1022@ic.ac.uk</a></h5>
                    <p>My Imperial College email address.</p>
                </Col>
                <Col>
                    <hr></hr>
                    <h3>My Socials</h3>
                    <p>Here are some of my social media profiles:</p>
                    <h5><AiFillLinkedin /> <a href='https://www.linkedin.com/in/kwancerski/'>My LinkedIn</a></h5>
                    <p>My professional profile.</p>
                    <h5><AiFillGithub /><a href='https://github.com/kwancer' > My Github</a></h5>
                    <p>My coding profile.</p>
                </Col>
            </Row>
            <Row style={{marginLeft: "5%", marginRight: "5%"}}>
                <Col>
                    <hr></hr>
                    <h3>My Location</h3>
                    <p>These are the places I call home.</p>
                    <h5>London, UK</h5>
                    <p>My home during term time.</p>
                    <h5>Warsaw, Poland & Colchester, UK</h5>
                    <p>My homes during the holidays.</p>
                </Col>
            </Row>
        </Container>
        <Footer />
        </div>
    )
}

export default Contact;