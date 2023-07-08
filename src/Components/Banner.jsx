import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/carrousel/carousel1.jpg'
import carousel2 from '../assets/carrousel/carousel2.png'
import carousel3 from '../assets/carrousel/carousel3.png'
import voiture1 from '../assets/carrousel/voiture1.png'
import '../carousel.css'
export const Banner =() => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '500px' }} className='carousel-custom'>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            className="d-block w-100"
            src={carousel1}
            
            alt="First slide"
          />
          <div className="carousel-image-overlay"></div> {/* Superposition sombre */}
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-wrapper">
          <img
            className="d-block w-100"
            src={carousel3}
            style={{backgroundColor:"#68a4cc"}}
            alt="First slide"
          />
          <div className="carousel-image-overlay"></div> {/* Superposition sombre */}
        </div>

        <Carousel.Caption>
          <h3>Location de voiture pour mariage</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-wrapper">
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
          <div className="carousel-image-overlay"></div> {/* Superposition sombre */}
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
