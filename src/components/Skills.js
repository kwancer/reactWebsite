import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Skills = () => {
    const skills = [
        {
            title: "Programming",
            description: "good familiarity with Python, JavaScript, HTML, CSS and C++ (Arduino). Version control using Git and the command line."
        },
        {
            title: "Technical Ability",
            description: "experience with Solidworks, Fusion 360, Adobe CC, MATLAB, Wolfram Alpha, JSDoc, node.js, microPython, ESP32/ESP8266, Arduino IDE, and MS Office."
        },
        {
            title: "Languages",
            description: "Polish (native), English (native), German (basic)."
        },
        {
            title: "Communication and Collaboration",
            description: "experience with working in teams, both in person and remotely, and with communicating with clients and customers."
        },
        {
            title: "Excellent analytical and numerical skills",
            description: "numerous awards, outstanding GCSE & A-level grades."
        }
    ]

    return (
        <div>
        <hr></hr>
        <h2>Skills</h2>
        <p>Here you can find out more about my key skills.</p>
        <Container>
        <Row md={2} s={1} style={{marginLeft: "5%", marginRight: "5%"}}>
        {skills.map((skill, index) => (
          <Col key={index}>
              <hr></hr>
                    <h5><b>{skill.title}</b></h5>
                    <p>{skill.description}</p>
            </Col>
        ))}
        </Row>
        </Container>
    </div>
    )
}

export default Skills