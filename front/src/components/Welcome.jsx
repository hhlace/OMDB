import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default () => (
  <Carousel controls={false} indicators={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/paCF_o4FGwg/1660x900"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/atsUqIm3wxo/1660x900"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/Mh3lD6MyoIA/1660x900"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  );

