import Card from 'react-bootstrap/Card';

function Tile({project, onClick}) {
  return (
    <Card style={{borderWidth : "2px" }}>
      <Card.Img variant="top"  src={project.images[0].src} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{project.date}</Card.Subtitle>
        <Card.Text>
          {project.text}
        </Card.Text>
        <Card.Link onClick={onClick}>Read More</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Tile;