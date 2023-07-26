import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const About = () => {
    return (
        <div className="App">
        <NavBar />
        <Container>
        <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
                <Col>
                    <h1>About this website</h1>
                    <p>Here you can find out more about this website, how it was made, and why it was made.</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <hr></hr>
                    <h2>How?</h2>
                    <p>
                        This website was written in React, using the Create-React-App framework. It is hosted on Netlify and the source code is available on GitHub.
                        I have used a lot of different technologies to make this website, including React, Bootstrap, Leaflet, and many more. I have also used a lot of different tools to make this website, including Visual Studio Code, GitHub, and Netlify.
                        The code for this website can be accessed on GitHub.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <hr></hr>
                    <h2>Why?</h2>
                    <p>
                    I have made this website to showcase my skills and projects. I have also made it to learn React and to practice web development in general. I have also made it to learn more about web hosting and to learn more about web design.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <hr></hr>
                    <h2>My Old Website</h2>
                    <p>
                    This is not my first website. I have made a website before, which was hosted on Replit.com. It was made using HTML, CSS, and JavaScript. It was a lot simpler than this website, but it was still a good learning experience. You can find it here.
                    </p>
                </Col>
            </Row>
        </Container>
        <Footer />
        </div>
    )
}

export default About;