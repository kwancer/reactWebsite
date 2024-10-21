import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaGraduationCap, FaChalkboardTeacher, FaEnvelope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';

const Tutoring = () => {
    return (
        <div className="App">
            <NavBar />
            <Container style={{ paddingTop: '20px' }}>
                <Row className="justify-content-md-center" style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", padding: "5px", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <Col md={8}>
                        <h1 style={{ color: "#007bff", fontWeight: "bold" }}>GCSE & A-level Tutoring</h1>
                        <p style={{ fontSize: '18px' }}>
                            I offer <b>1:1 tutoring</b> for GCSE and A-level students in <b>Maths, Physics, and Computer Science</b>. I have experience tutoring students of all abilities, from those who are struggling to those who are aiming for top grades. I am also able to offer support with university applications, including personal statement writing and interview preparation.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <hr />
                        <h2 style={{ color: '#28a745' }}><FaGraduationCap /> Qualifications</h2>
                        <p style={{ fontSize: '16px' }}>
                            I am a <b>third year student at Imperial College London</b>, studying MEng Design Engineering. I achieved <b>A*A*A*A*</b> in my A-levels in Maths, Physics, Computer Science, Design and Technology. I have experience tutoring students in these subjects, and have helped students to achieve top grades in their exams.
                        </p>
                    </Col>
                    <Col md={6}>
                        <hr />
                        <h2 style={{ color: '#ffc107' }}><FaChalkboardTeacher /> Experience</h2>
                        <p style={{ fontSize: '16px' }}>
                            I have been tutoring students for <b>over 2 years</b>, and have helped over 10 students to achieve top grades in their exams. I have experience tutoring students of all abilities, from those who are struggling to those who are aiming for top grades. I have also helped students with university applications, including personal statement writing and interview preparation.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <hr />
                        <h2 style={{ color: '#17a2b8' }}><FaEnvelope /> Get in Touch</h2>
                        <p style={{ fontSize: '16px' }}>
                            If you are interested in tutoring, please get in touch by sending me an email at <a href="mailto:krzysztofwancerski@gmail.com">krzysztofwancerski@gmail.com</a>.
                        </p>
                    </Col>
                    <Col md={6}>
                        <hr />
                        <h2 style={{ color: '#dc3545' }}><FaMapMarkerAlt /> Location</h2>
                        <p style={{ fontSize: '16px' }}>
                            I offer tutoring in <b>Southfields, Wimbledon, Putney, and surrounding areas</b>. I am also able to offer <b>online tutoring</b> via Google Meet and a digital whiteboard.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    {/* Testimonials */}
                    <Col md={8}>
                        <hr />
                        <h2 style={{ color: '#6f42c1' }}><FaStar /> Testimonials</h2>
                        <Carousel>
                            <Carousel.Item>
                                <div style={{ paddingBottom: '20px' }}>
                                    <h3>BTEC Engineering</h3>
                                    <p>"I highly recommend Krzysztof as a math tutor. He supported my 17-year-old son in preparing for his engineering college exams with exceptional dedication and expertise. Krzysztof was highly organised, using a clear and structured approach to each lesson. He managed to encourage and motivate my son throughout their sessions. His explanations were clear, and he provided thorough instructions, along with additional materials for independent study between lessons. Krzysztof also supplied previous exam papers, which were invaluable. Although the results are not yet released, I am confident that his efforts and techniques have had a very positive impact on my son's performance."</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={{ paddingBottom: '20px' }}>
                                    <h3>GCSE Physics</h3>
                                    <p>"Krzysztof is a fantastic tutor. He clicks with my boys and gets them to problem-solve and think for themselves: very good teacher!"</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={{ paddingBottom: '20px' }}>
                                    <h3>A-level Maths</h3>
                                    <p>"Krzysztof is a brilliant tutor. He helped me to improve my grades in Maths, and I am very grateful for his help."</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Tutoring;
