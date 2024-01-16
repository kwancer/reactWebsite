import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row className="justify-content-md-center" style={{marginTop:"1%"}}>
        <Col md={{ span: 2 }}>
          <Image src="me.jpg" rounded fluid />
        </Col>
        </Row>
        <Row className="justify-content-md-center" >
        <Col md="auto">
          <>
          <br></br>
          <h1>Krzysztof Wancerski</h1>
          <p><em>Student @ Imperial College London</em></p>
          </>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="6">
          <p>Hi, I'm Krzysztof. I'm a second year student at Imperial College London, studying MEng Design Engineering. I'm interested in the intersection of design and technology, and how we can use technology to improve the world around us.</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Button href='/projects' variant="primary" style={{ fontSize: '20px', margin: '10px', padding: '10px 20px', width: '50%' }}><b>My Portfolio</b></Button>
      </Row>
      <Row className="justify-content-md-center">
        <Button href='/aboutme' variant="primary" style={{ fontSize: '20px', margin: '10px', padding: '10px 20px', width: '50%' }}><b>My Experience</b></Button>
      </Row>
      <Row className="justify-content-md-center">
        <Button href='/contact' variant="primary" style={{ fontSize: '20px', margin: '10px', padding: '10px 20px', width: '50%' }}><b>Get in Touch</b></Button>
      </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
