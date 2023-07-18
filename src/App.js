import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row className="justify-content-md-center">
        <Col md="auto" style={{margin:"2%"}}>
          <Image src="https://i.pinimg.com/236x/05/d1/94/05d1948a0b051439f26a835c33b79823.jpg" rounded />
        </Col>
        <Col md="auto" style={{margin:"2%"}}>
          <>
          <h1>Krzysztof Wancerski</h1>
          <p>Imperial College London</p>
          </>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="6">
          <p>Hi, I'm Krzysztof. I'm a second year student at Imperial College London, studying MEng Design Engineering. I'm interested in the intersection of design and technology, and how we can use technology to improve the world around us.</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" style={{margin:"2%"}}>
          <hr></hr>
          <h2>About this page</h2>
          <p>This page is a work in progress. I'm using it to learn React, and to showcase some of my projects.</p>
        </Col>
      </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
