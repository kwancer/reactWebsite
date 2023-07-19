import { Outlet } from 'react-router-dom';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';

const AboutMe = () => {
    return (
        <div className='App'>
            <NavBar />
            <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
            <h1>About Me</h1>
            <p>Find out more about me by clicking on one of the options below.</p>
            </Row>
            <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
                <hr></hr>
            <ButtonGroup aria-label="Basic example" style={{width:"60%", left:"20%"}}>
            <Button href='/aboutme/education' variant="primary">Education</Button>
            <Button href='/aboutme/experience' variant="primary">Experience</Button>
            <Button href='/aboutme/other' variant="primary">Other</Button>
            </ButtonGroup>
            </Row>
            <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
            <Outlet />
            </Row>
            <Footer />
        </div>
    )
}

export default AboutMe;
