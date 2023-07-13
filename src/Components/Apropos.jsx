import { Container, Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import carousel4 from '../assets/carrousel/carousel4.png' 
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Apropos = ()=> {
  return (
    <TrackVisibility partialVisibility once >
      {
        ({isVisible}) =>(
          <Container fluid className='apropos p-1 d-flex align-items-center'  id="apropos" >
            <div className={isVisible ? "animate__animated animate__bounceInLeft" : "" }>
            <Row className="p-3" md={2} xs={1} >
              
              <Col>
            
                <h2 className='mb-2 ' >A propos </h2>
                <p>
                        Chez RGService, notre passion est de créer des <br /> 
                        expériences uniques et de fournir des services <br />
                        de qualité inégalée. Fondée par Marius Flan, <br />
                        notre entreprise est spécialisée dans <br />
                        l'organisation d'événements de mariage, la <br />
                        location de véhicules de mariage et les services <br />
                        informatiques. Forts de notre expérience de 5 années <br />
                        dans l'industrie, nous sommes engagés à satisfaire <br />
                        nos clients et à surpasser leurs attentes.
                    </p>
                    <Button variant="primary" className='mt-2' >Contactez-nous</Button>
            </Col>
            
              <Col className='mt-2'>
                  <img src={carousel4}   className="img-fluid"/>
              </Col>
          </Row>
            </div>
          
          </Container>
        )
      }
    </TrackVisibility>
  );
}

