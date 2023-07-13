import { Container,Row, } from "react-bootstrap"
import { PackCard } from "./PackCard"
import pack_essential from "../assets/pack_essential.png"



export const Evenementiel =  () =>{
    const packContent = (
        <>
          Ce pack contient <strong>2 voitures pour les mariés</strong>,
          <strong>150 photos de mariage</strong> plus un album photo,
          <strong>une clé USB de 8 Go</strong> contenant un film de mariage captivant d'une durée de 1h30,
          <strong>une galerie privée en ligne</strong> où vous pourrez visualiser toutes vos photos de mariage.
        </>
      );
      
    const allPack = [
        {
            title: "Pack essential",
            image: pack_essential,
            prix: "270.000",
            description: packContent,
            color: "#0573bd"
        },
        {
            title: "Pack essential",
            image: pack_essential,
            prix: "270.000",
            description: packContent,
            color: "#1E3240"
        }
    ]
    const styleh3 ={
        color: '#787575',
        
        fontStyle: 'normal',
      
        lineHeight: 'normal'
    }
    return (
        <>
        <Container fluid  style={{height:'400px'}} className="banner text-center align-items-center justify-content-center d-flex">
            <h2 style={{color:"#fff"}} >Organisation de mariage</h2>
        </Container>
         <Container fluid className="text-center mt-5 mb-5 ">
             
         <Row className="justify-content-center">
            {/* <h2 style={styleh2}>BIENVENUE</h2> */}
                <div className=" w-25" style={{height:'1px ',background: '#D9D9D9'}}></div>
        </Row>
        <Row>
            <p style={styleh3}>Nous avons plusieurs packs afin de vous assister dans la réalisation de votre mariage en.</p>
        </Row>
         
      </Container>
        {
            allPack.map((pack,index)=>{
               return( <PackCard key={index} {...pack}  />)
            })
        }
        
      </>
    )
}

