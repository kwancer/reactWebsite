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
        <Col md="6">
          <p>Welcome to my new website! I'm still working on it, so please bear with me.</p>
          <p>This website is built using React, and is hosted on Netlify. You can find out more about it <a href='/about'>here</a>.
          I have made a few projects, which you can find on my <a href="/projects">projects page</a>.
          If you want to know more about me, you can find information on my <a href="/aboutme">about page</a>. It includes things like my education and work history and my skills.
          My CV is available <a href="/cv">here</a>.
          Lastly, if you want to get in touch, you can find my contact details <a href="/contact">here</a>.</p>
        </Col>
      </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
