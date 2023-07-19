import { AiTwotoneMail, AiFillLinkedin} from 'react-icons/ai';
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
            <Row>
                <Col>
                    <h1>Contact</h1>
                    <p><AiTwotoneMail /> <a href="mailto: krzysztofwancerski@gmail.com">krzysztofwancerski@gmail.com</a></p>
                    <p><AiFillLinkedin /> <a href='https://www.linkedin.com/in/kwancerski/'>My LinkedIn</a></p>
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

export default Contact;