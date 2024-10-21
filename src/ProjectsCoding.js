import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import GithubProjects from './components/GithubProjects.js';
import Footer from './components/Footer.js';
import Row from 'react-bootstrap/Row';

function Projects() {
  return (
    <div className="App">
      <NavBar />
        <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"2%"}}>
        <h1>Latest Coding Projects</h1>
        <p>These are some of my latest coding projects, they are automatically synced with my GitHub repos.</p>
        </Row>
        <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
        <GithubProjects />
        </Row>
      <Footer />
    </div>
  );
}

export default Projects;