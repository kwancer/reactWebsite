import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tile from './components/Tile.js';
import projectsData from './data/projects.json';
import React, { useState } from 'react';
import DetailedView from './components/DetailedView.js';
import Footer from './components/Footer.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


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
        {/* add a portfolio section here */}
        <Row style={{ marginLeft: "5%", marginRight: "5%", marginTop: "1%" }}>
          <h1>Portfolio</h1>
          <p>Below is my Design Engineering portfolio, containing some of the projects I'm most proud of. You can view it directly on this page or open it in a new tab.</p>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <iframe
              src={process.env.PUBLIC_URL + "/folio.pdf"}
              style={{ width: "60%", height: "500px" }}
              title="Portfolio"
            ></iframe>
          </div>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Button
              onClick={() => window.open(process.env.PUBLIC_URL + "/folio.pdf", "_blank")}
              style={{ marginTop: "10px", width: "60%", fontFamily: "'Cursive', sans-serif", fontSize: "1.2em" }}
            >
              Open Portfolio in New Tab
            </Button>
          </div>
        </Row>
        <hr></hr>
        <Row style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
        <h1>More Projects in Detail</h1>
        <p>Below you can find other proejcts I have worked on, as well as more detail on the projects from my portfolio.</p>
        </Row>
        <Row xs={1} md={4} style={{marginLeft: "5%", marginRight: "5%", marginTop:"1%"}}>
        {projects.map((project, index) => (
          <Col key={index}>
              <Tile project={project} key={project.id} onClick={() => openDetailedView(project)} />
            </Col>
        ))}
        </Row>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Projects;