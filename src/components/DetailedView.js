import Button from 'react-bootstrap/Button';
import SlideShow from './SlideShow.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInfoCircle, FaLink } from 'react-icons/fa'; // Importing icons from React Icons

function DetailedView({ project, goBack }) {
    return (
      <div>
        <Container>
        <Row style={{color: "#6c757d", marginLeft: "5%", marginRight: "5%", marginTop: "2%", padding: "5px", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <h2 style={{ color: "#007bff", fontWeight: "bold" }}>{project.title}</h2>
                <p><em>{project.date}</em></p>
            </Row>
            <Row xs={1} md={2} style={{color: "#6c757d", marginLeft: "5%", marginRight: "5%", marginTop: "2%", padding: "5px", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <Col>
                    <hr></hr>
                    <h3 style={{ color: "#007bff", display: "flex", alignItems: "center", fontWeight: "bold", textAlign: "left" }}>
                        <FaInfoCircle style={{ marginRight: "10px" }} /> Description
                    </h3>
                    <hr></hr>
                    <p>{project.projectText}</p>
                </Col>
                <Col style={{height: "500px"}}>
                    <SlideShow images={project.images} />
                </Col>
            </Row>
            <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
                <Col>
                <hr></hr>
                <h3 style={{ color: "#007bff", display: "flex", alignItems: "center", fontWeight: "bold", textAlign: "left" }}>
                    <FaLink style={{ marginRight: "10px" }} /> More Details
                </h3>
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