import Carousel from 'react-bootstrap/Carousel';
function UncontrolledExample({images}) {
  return (
    <Carousel>
        {images.map((image) => (
            <Carousel.Item>
                <img style={{width: "80%", margin: "5%", borderRadius: "10px"}} src={image.src} alt={image.desc} />
                <Carousel.Caption>
                    <h3>{image.desc}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default UncontrolledExample;