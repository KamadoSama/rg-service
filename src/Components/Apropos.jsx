import { Container, Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import carousel4 from '../assets/carrousel/carousel4.jpg' 
export const Apropos = ()=> {
  return (
    <Container fluid className='p-1 apropos  d-flex align-items-center'  id="apropos" >
        <Row className='p-4' md={2} xs={1} >
          
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
                        dans l'industrie, nous sommes engagés à satisfaire nos clients et à surpasser leurs attentes.
                    </p>
                    <Button variant="primary" className='mt-2' >Contactez-nous</Button>
            </Col>
            <Col className='mt-2'>
                <img src={carousel4} style={{height:"80%", width:'80%' }} />
            </Col>
        </Row>
    </Container>
  );
}

