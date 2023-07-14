import nosService from '../assets/nosService.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Container , Row , Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
export const NosService = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1900, 
          easing: 'ease', 
          once: true 
        });
      }, []);
    return(
        <Container fluid className='p-1  nosService  d-flex align-items-center justify-content-center'  id="apropos" >
             <Row data-aos="fade-right" style={{width:"90%"}} md={2} xs={1}>
                        <Col className="col-md-6">
                            <img src={nosService} alt="Services" className="img-fluid" />
                        </Col>
                        <Col className="col-md-6">
                            <h2>Nos Services</h2>
                            <p>
                                Chez RGService, nous sommes fiers de vous offrir une gamme complète de services pour répondre à vos besoins spécifiques. Avec notre expertise et notre engagement envers la satisfaction du client, nous sommes là pour vous accompagner à chaque étape. Voici quelques-uns de nos services clés :
                            (Organisation d'événements de mariage, Location de véhicules de mariage, Services informatiques )
                            </p>  
                            <p>
                                Que vous planifiez un mariage, que vous ayez besoin d'une assistance informatique ou que vous souhaitiez louer du matériel pour votre événement, notre équipe dévouée est là pour vous fournir des solutions adaptées à vos besoins. Contactez-nous dès aujourd'hui pour discuter de la manière dont nous pouvons vous aider à réaliser vos projets avec succès.
                            </p>
                        <Button variant="primary" href='/evenementiel' className='mt-2' >En savoir plus</Button>
                        
                        </Col>
                    
                    </Row>       
        </Container >
    )
} 