import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FaUser, FaLink, FaBriefcase, FaTools, FaAward } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{color: "#6c757d", display: "flex", alignItems: "center" ,paddingTop: '20px' }}>
        <Row className="justify-content-md-center">
          <Col md="5" className="justify-content-md-center" style={{ padding: "5px", marginLeft: "1%", marginRight: "1%", marginTop: "2%", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <Row className="justify-content-md-center">
              <Col md={{ span: 4 }}>
                <Image src="me.png" rounded fluid />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <>
                  <br></br>
                  <h2 style={{ color: "#007bff", fontWeight: "bold" }}>Krzysztof Wancerski</h2>
                  <p><em>Engineering Student @ Imperial College London</em></p>
                </>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="10">
                <h4 style={{ color: '#28a745' }}><FaUser /> Profile</h4>
                <p>Hi, I'm Krzysztof. I'm a third year student at Imperial College London, studying MEng Design Engineering. I'm interested in the intersection of design and technology, and how we can use technology to improve the world around us.</p>
              </Col>
            </Row>
            <h4 style={{ color: '#17a2b8' }}><FaLink /> Quick Links</h4>
            <Row className="justify-content-md-center">
              <Button href='/projects/design-engineering' variant="primary" style={{ fontSize: '20px', margin: '10px', padding: '10px 20px', width: '80%' }}><b>Design Engineering Portfolio</b></Button>
            </Row>
            <Row className="justify-content-md-center">
              <Button href='/CV.pdf' variant="primary" style={{ fontSize: '20px', margin: '10px', padding: '10px 20px', width: '80%' }}><b>Current CV</b></Button>
            </Row>
            <Row className="justify-content-md-center">
              <Button href='/contact' variant="primary" style={{ fontSize: '20px', margin: '10px', padding: '10px 20px', width: '80%' }}><b>Get in Touch</b></Button>
            </Row>
          </Col>
          <Col md="6" className="justify-content-md-center" style={{marginTop: "10px"}}>
            <h4 style={{ color: '#ffc107' }}><FaBriefcase /> Experience</h4>
            <p style={{ textAlign: 'left' }}><b>Undergraduate Teaching Assistant</b> (2022-present)
              <ul>
                <li>Supported first-year students in Computing and Mathematics through individual and group sessions.</li>
                <li>Led programming and software version control sessions, improving class performance.</li>
              </ul>
            </p>
            <p style={{ textAlign: 'left' }}><b>Academic Tutor (Self-employed)</b> (2022-present)
              <ul>
                <li>Taught Mathematics, Computer Science, and Physics to GCSE and A-level students, managing 10+ hours/week.</li>
              </ul>
            </p>
            <p style={{ textAlign: 'left' }}><b>R&D Intern</b> - Eppendorf Cryotech Ltd. (Jul-Sep 2022)
              <ul>
                <li>Tested ultra-low temperature freezers using data loggers and oscilloscopes.</li>
                <li>Collaborated with Marketing, Procurement, and Operations for data collection.</li>
              </ul>
            </p>
            {/* <h4 style={{ color: '#dc3545' }}><FaTools /> Skills</h4>
            <p style={{ textAlign: 'left' }}><b>Design:</b> Adobe Creative Suite, Sketch, Figma<br></br>
              <b>Engineering:</b> SolidWorks, MATLAB, Python, Embedded Systems (Arduino, microPython)<br></br>
              <b>Programming:</b> HTML, CSS, JavaScript, React, Node.js, C++<br></br>
              <b>Soft Skills:</b> Communication, Adaptability, Time Management, Creativity, Leadership, Groupwork<br></br>
              <b>Languages:</b> Polish (Fluent), English (Fluent), German (B1)
            </p> */}
            <h4 style={{ color: '#6f42c1' }}><FaAward /> Awards</h4>
            <p style={{ textAlign: 'left' }}><b>Institute of Engineering and Technology Future Talent Award (2022)</b> - receiver of a yearly bursary and IET membership<br></br>
            <b>Dean’s List - Imperial College London (Year 1 & 2) </b>- Ranked in the top 10% of the cohort<br></br>
            <b>Bronze Medalist </b>- British Physics Olympiad and UK Senior Mathematics Challenge</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
