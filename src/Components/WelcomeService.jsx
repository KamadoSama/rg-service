import { Container,Row } from "react-bootstrap"

export const WelcomeService =  () =>{
    
    const styleh3 ={
        color: '#787575',
        
        fontStyle: 'normal',
      
        lineHeight: 'normal'
    }
    return (
        <Container fluid className="text-center mt-5 mb-5 ">
             
        <Row className="justify-content-center">
           {/* <h2 style={styleh2}>BIENVENUE</h2> */}
               <div className=" w-25" style={{height:'1px ',background: '#D9D9D9'}}></div>
       </Row>
       <Row>
           <p style={styleh3}>Nous avons plusieurs packs afin de vous assister dans la réalisation de votre mariage en.</p>
       </Row>
        
       </Container>
    )
}

