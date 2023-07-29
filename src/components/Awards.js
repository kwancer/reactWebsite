import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Awards = () => {
    const awards = [
        {
            title: "Future Talent Award",
            description: "Recipient of the Institute of Engineering and Technology Future Talent Awards supported by the David Family Foundation"
        },
        {
            title: "Clive Whybrow Award",
            description: "Winner of the prestigious Clive Whybrow Award for excelling in Mathematics"
        },
        {
            title: "NEMO Award",
            description: "Second Place in the North-Essex Mathematical Olympiad"
        },
        {
            title: "Physics and Mathematics Olympiads",
            description: "Bronze Award winner in the British Physics Olympiad and the UK Senior Mathematics Challenge"
        },
        {
            title: "DOFE Bronze Award",
            description: "Completed the Duke of Edinburgh Bronze Award"
        }
    ]

    return (
        <div>
        <hr></hr>
        <h2>Award</h2>
        <p>Here you can find out more about my key awards.</p>
        <Container>
        <Row md={2} s={1} style={{marginLeft: "5%", marginRight: "5%"}}>
        {awards.map((award, index) => (
          <Col key={index}>
              <hr></hr>
                    <h5><b>{award.title}</b></h5>
                    <p>{award.description}</p>
            </Col>
        ))}
        </Row>
        </Container>
    </div>
    )
}

export default Awards