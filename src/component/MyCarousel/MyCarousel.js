import React from 'react';
import './MyCarousel.css';

import Carousel from 'react-bootstrap/Carousel';
import pic from './../../image/carousel1.jpg';
import pic2 from './../../image/carousel3.jpg';
import pic3 from './../../image/carousel4.jpg';
import pic4 from './../../image/carousel5.jpg';


function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic}
          alt="First slide"
        />
        <Carousel.Caption>
          <p id="carousel">One burger won’t make you fat!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block "
          src={pic2}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block "
          src={pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block "
          src={pic4}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;