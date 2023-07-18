import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tile from './components/Tile.js';
import projectsData from './data/projects.json';
import React, { useState } from 'react';
import GithubProjects from './components/GithubProjects.js';
import DetailedView from './components/DetailedView.js';
import CardGroup from 'react-bootstrap/CardGroup';

function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const openDetailedView = (project) => {
    setSelectedProject(project);
  };
  const goBack = () => {
    setSelectedProject(null);
  };
  const maxItemsPerGroup = 4; // Maximum number of items in each CardGroup
  return (
    <div className="App">
      <NavBar />
      {selectedProject ? (
        <DetailedView project={selectedProject} goBack={goBack} />
      ) : (
        <>
        <h1>Projects</h1>
        <h2>Key Projects</h2>
        <CardGroup style={{marginLeft: "5%" , marginRight: "5%" }}>
        {chunkArray(projects, maxItemsPerGroup).map((group, index) => (
          <CardGroup key={index}>
            {group.map((project) => (
              <Tile project={project} key={project.id} onClick={() => openDetailedView(project)} />
            ))}
          </CardGroup>
        ))}
        </CardGroup>
        <h2>Latest Coding Projects</h2>
        <GithubProjects />
        </>
      )}
    </div>
  );
}

// Function to split array into chunks
function chunkArray(arr, size) {
const chunkedArr = [];
for (let i = 0; i < arr.length; i += size) {
  chunkedArr.push(arr.slice(i, i + size));
}
return chunkedArr;
}

export default Projects;