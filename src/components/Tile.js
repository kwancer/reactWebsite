import Card from 'react-bootstrap/Card';

function Tile({project, onClick}) {
  return (
    <Card style={{ height:"100%"}}>
      <Card.Img variant="top"  src={project.images[0].src} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{project.date}</Card.Subtitle>
        <Card.Text>
          {project.text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Card.Link onClick={onClick}>Read More</Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default Tile;