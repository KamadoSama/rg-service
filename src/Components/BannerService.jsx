import { Container,Row, } from "react-bootstrap"


export const BannerService = () =>{
    return(
        <Container fluid  style={{height:'400px'}} className="banner text-center align-items-center justify-content-center d-flex">
            <h2 style={{color:"#fff"}} >Organisation de mariage</h2>
        </Container>
    )
}