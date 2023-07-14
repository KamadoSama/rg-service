import { Banner } from "./Banner";
import { Apropos } from "./Apropos";
import { Welcome } from "./Welcome";
import { AlaUne } from "./ALaUne";
import { useEffect } from "react";

import { NosService } from "./NosService";

export const Accueil = () =>{
    useEffect(()=>{
        document.title = "accueil"
    },[])
    return(
        <>
            <Banner />
            <Welcome />
            <Apropos />
            <NosService />
                
                
                
{/*                 
                <Row className='p-4' md={2} xs={1} >
                    <Col className='mt-2'>
                        <img  style={{height:"80%", width:'80%' }} />
                    </Col>
                    <Col>
                        
                        <h2 className='mb-2 ' >Nos Services </h2>
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
                            <Button variant="primary" className='mt-2' >En savoir plus</Button>
                    </Col>
                
                </Row> */}
                
            
            <AlaUne />
        </>
    )
}