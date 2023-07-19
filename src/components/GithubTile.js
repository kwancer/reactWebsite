import Card from 'react-bootstrap/Card';

function GithubTile({project}) {
  return (
    <Card>
      <Card.Body>
        {/* <Card.Text>
          <iframe src={project.homepage} width="100%" height="200px" borderradius = "10px" />
        </Card.Text> */}
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{project.updated_at}</Card.Subtitle>
        <Card.Text>
          {project.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={project.html_url}>See Code on GitHub</Card.Link>
        <Card.Link href={project.homepage}>See live</Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default GithubTile;