import { Container ,Row } from "react-bootstrap"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export const Welcome = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1900, 
          easing: 'ease', 
          once: true 
        });
      }, []);
    
   
    const styleh2 = {
        color:'#787575',
        fontWeight:'700'
    }
    const styleh3 ={
        color: '#787575',
        
        fontStyle: 'normal',
      
        lineHeight: 'normal'
    }
    return(
        <Container data-aos="fade-right" fluid className="text-center mt-5 mb-5 ">
             
            <Row className="justify-content-center">
                    <h2 style={styleh2}>BIENVENUE</h2>
                    <div className=" w-25" style={{height:'1px ',background: '#D9D9D9'}}></div>
            </Row>
            <Row>
                <p style={styleh3}>Ut officia veniam pariatur Lorem amet pariatur ipsum tempor ut anim. Sunt pariatur minim velit cupidatat.</p>
            </Row>
           
        </Container>
    )
}