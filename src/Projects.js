import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tile from './components/Tile.js';
import projectsData from './data/projects.json';
import React, { useState } from 'react';
import GithubProjects from './components/GithubProjects.js';
import DetailedView from './components/DetailedView.js';
import Footer from './components/Footer.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  const [projects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const openDetailedView = (project) => {
    setSelectedProject(project);
  };
  const goBack = () => {
    setSelectedProject(null);
  };
  return (
    <div className="App">
      <NavBar />
      {selectedProject ? (
        <DetailedView project={selectedProject} goBack={goBack} />
      ) : (
        <>
        <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
        <h1>Projects</h1>
        <p>Below you can find the projects I am most proud of. They are both personal projects and projects I have worked on as part of my degree. In the section above are projects I have added manually with a rich and detailed description and below are projects from my GitHub account which are synced automatically.</p>
        </Row>
        <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
        <hr></hr>
        <h2>Key Projects</h2>
        <p>These are some of my key projects. Click on a project to find out more.</p>
        </Row>
        <Row xs={2} md={4} style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
        {projects.map((project, index) => (
          <Col key={index}>
              <Tile project={project} key={project.id} onClick={() => openDetailedView(project)} />
            </Col>
        ))}
        </Row>
        <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"2%"}}>
        <hr></hr>
        <h2>Latest Coding Projects</h2>
        <p>These are some of my latest coding projects, they are automatically synced with my GitHub repos.</p>
        </Row>
        <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
        <GithubProjects />
        </Row>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Projects;