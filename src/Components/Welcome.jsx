import { Container ,Row } from "react-bootstrap"
import TrackVisibility from 'react-on-screen';



export const Welcome = () =>{
   
    
   
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
        <Container fluid className="text-center mt-5 mb-5 ">
             
           <TrackVisibility once>
              
                {
                    ({isVisible}) =>(
                        
                        <div className={isVisible ? " animate__animated  animate__slideInLeft" : ""}>
                             
                            <Row className="justify-content-center">
                                <h2 style={styleh2}>BIENVENUE</h2>
                                <div className=" w-25" style={{height:'1px ',background: '#D9D9D9'}}></div>
                            </Row>
                            <Row>
                                <p style={styleh3}>Ut officia veniam pariatur Lorem amet pariatur ipsum tempor ut anim. Sunt pariatur minim velit cupidatat.</p>
                            </Row>
                        </div>
                        
                    )
                }
                
           </TrackVisibility>
           
        </Container>
    )
}