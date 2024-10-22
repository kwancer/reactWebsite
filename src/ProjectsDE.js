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
import { FaFolderOpen, FaProjectDiagram } from 'react-icons/fa';

function Projects() {
  const [projects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const openDetailedView = (project) => {
    setSelectedProject(project);
  };
  const goBack = () => {
    setSelectedProject(null);
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  React.useEffect(() => {
    if (selectedProject !== null) {
      setScrollPosition(window.scrollY);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, scrollPosition);
    }
  }, [selectedProject, scrollPosition]);

  return (
    <div className="App">
      <NavBar />
      {selectedProject ? (
        <DetailedView project={selectedProject} goBack={goBack} />
      ) : (
        <>
          <Row style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", padding: "20px", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ color: "#007bff", display: "flex", alignItems: "center", fontSize: "2em", fontWeight: "bold", textAlign: "left" }}>
              <FaFolderOpen style={{ marginRight: "10px" }} /> Portfolio
            </h2>
            <p style={{color: "#6c757d", textAlign: "left" }}>Below is my Design Engineering portfolio, containing some of the projects I'm most proud of. You can view it directly on this page or open it in a new tab.</p>
            <Col xs={12} md={8} lg={6} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <iframe
                src={process.env.PUBLIC_URL + "/folio.pdf"}
                style={{ width: "100%", height: "500px", border: "2px solid #007bff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                title="Portfolio"
              ></iframe>
            </Col>
            <Col xs={12} md={8} lg={6} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Button
                onClick={() => window.open(process.env.PUBLIC_URL + "/folio.pdf", "_blank")}
                style={{ marginTop: "10px", width: "100%", fontFamily: "'Cursive', sans-serif", fontSize: "1.2em", backgroundColor: "#007bff", borderColor: "#007bff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <FaFolderOpen style={{ marginRight: "10px" }} /> Open Portfolio in New Tab
              </Button>
            </Col>
          </Row>

          {/* More Projects Section */}
          <Row style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", padding: "5px" }}>
            <h2 style={{ color: "#007bff", display: "flex", alignItems: "center", fontSize: "2em", fontWeight: "bold", textAlign: "left" }}>
              <FaProjectDiagram style={{ marginRight: "10px" }} /> More Projects in Detail
            </h2>
            <p style={{ color: "#6c757d", textAlign: "left" }}>Below you can find other projects I have worked on, as well as more detail on the projects from my portfolio.</p>
          </Row>
          <Row xs={2} md={4} style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", padding: "5px", backgroundColor: "#ffffff" }}>
            {projects.map((project, index) => (
              <Col key={index} style={{ marginBottom: "20px" }}>
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