import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/carrousel/carousel1.jpg'
import carousel3 from '../assets/carrousel/carousel3.png'
import '../carousel.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
          <Carousel.Caption > 
           <TrackVisibility>
            {
              ({isVisible})=> (
                <div className={ isVisible ? "animate__animated animate__slideInLeft  " : ""}>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              )
            }
           </TrackVisibility>
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
        
        <TrackVisibility>
            {
              (isVisible)=> (
                <div className={ isVisible ? "animate__animated animate__slideInLeft  " : ""}>
                   <h3>Location de voiture pour mariage</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              )
            }
           </TrackVisibility>
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
        <TrackVisibility>
            {
              (isVisible)=> (
                <div className={ isVisible ? "animate__animated animate__slideInLeft  " : ""}>
                <h3>Third slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              )
            }
           </TrackVisibility>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

