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
                    <hr></hr>
                    <h3>Description</h3>
                    <hr></hr>
                    <p>{project.projectText}</p>
                </Col>
                <Col>
                    <SlideShow images={project.images} />
                </Col>
            </Row>
            <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
                <Col>
                <hr></hr>
                <h3>More Details</h3>
                <hr></hr>
                <Row xs={1} md={2}>
                    {project.links.map((link, index) => (
                        <Col key={index}>
                            <div>
                                <a href={link.src} style={{ textDecoration: 'underline' }}><h4>{link.desc}</h4></a>
                                {link.src.includes('youtube') ? (
                                    <iframe 
                                        title="YouTube video player" 
                                        src={link.src.replace('watch?v=', 'embed/')} 
                                        width="100%" 
                                        height="500px" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        style={{borderRadius: "10px"}} 
                                    />
                                ) : (
                                    <iframe 
                                        title={link.desc} 
                                        src={link.src} 
                                        width="100%" 
                                        height="500px" 
                                        style={{borderRadius: "10px"}} 
                                    />
                                )}
                            </div>
                        </Col>
                    ))}
                </Row>
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