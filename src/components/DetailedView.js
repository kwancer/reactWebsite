import Button from 'react-bootstrap/Button';
import SlideShow from './SlideShow.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DetailedView({ project, goBack }) {
    return (
      <div>
        <Container>
        <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
                <h1>{project.title}</h1>
                <p><em>{project.date}</em></p>
            </Row>
            <Row xs={1} md={2} style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
                <Col>
                    <h2>Description</h2>
                    <hr></hr>
                    <p>{project.projectText}</p>
                </Col>
                <Col>
                    <SlideShow images={project.images} />
                </Col>
            </Row>
            <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
                <Col>
                <h2>Extra Resources</h2>
                <hr></hr>
                {project.links.map((link) => (
                        <>
                        <a href='link.src'><h3>{link.desc}</h3></a>
                        <iframe title={link.desc} src={link.src} width="80%" height="600px" borderradius = "10px" />
                        </>
                    ))}
                </Col>
            </Row>
        </Container>
        <div id="button_container">
        <Button variant='primary' size="lg" onClick={goBack} style={{width: "100%", padding:"8%", borderRadius:"1000px"}}><b >Back</b></Button>
        </div>
      </div>
    );
  }

export default DetailedView;