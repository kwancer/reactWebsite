import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GithubTile from './GithubTile';
import Spin from './Spinner'
import CardGroup from 'react-bootstrap/CardGroup';

function GithubProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/kwancer/repos?sort=updated');
        const filtered = response.data.filter((project) => {return checkDescription(project.description)});
        setProjects(filtered);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  const maxItemsPerGroup = 4; // Maximum number of items in each CardGroup

  return (
    <div className="App">
      {isLoading ? (
        <Spin />
      ) : (
        <div>
          {chunkArray(projects, maxItemsPerGroup).map((group, index) => (
            <CardGroup key={index}>
              {group.map((project) => (
                <GithubTile project={project} key={project.id} />
              ))}
            </CardGroup>
          ))}
        </div>
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

function checkDescription(desc) {
  if (desc === null) {
    return false;
  }
  if (desc.includes('Showcased on my website.')) {
    return true;
  }
  return false;
}

export default GithubProjects;
