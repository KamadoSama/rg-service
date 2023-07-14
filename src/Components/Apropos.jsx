import { Container, Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import carousel4 from '../assets/carrousel/carousel4.png' 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const Apropos = ()=> {
  useEffect(() => {
    AOS.init({
      duration: 1900, 
      easing: 'ease', 
      once: true 
    });
  }, []);
  return (
    <Container fluid className='apropos p-1 d-flex align-items-center justify-content-center'  id="apropos" >
       <Row data-aos="fade-left" className="p-3" style={{width:"80%"}} md={2} xs={1} >
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
                  <img src={carousel4}  alt='à propos'  className="img-fluid"/>
              </Col>
          </Row>
    </Container>
  );
}

