import Button from 'react-bootstrap/Button';
import SlideShow from './SlideShow.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DetailedView({ project, goBack }) {
    return (
      <div>
        <Container>
            <Row>
                <h1>{project.title}</h1>
                <p>{project.date}</p>
            </Row>
            <Row>
                <Col>
                    <h2>Description</h2>
                    <hr></hr>
                    <p>{project.projectText}</p>
                </Col>
                <Col>
                    <SlideShow images={project.images} />
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col>
                <h2>Extra Resources</h2>
                <hr></hr>
                {project.links.map((link) => (
                        <>
                        <a href='link.src'><h3>{link.desc}</h3></a>
                        <iframe title={link.desc} src={link.src} width="80%" height="600px" borderradius = "10px" />
                        </>
                    ))}
                <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant='primary' onClick={goBack} style={{width: "100%", marginBottom: "30px"}}>Go Back</Button>
                </Col>
            </Row>
        </Container>        
      </div>
    );
  }

export default DetailedView;