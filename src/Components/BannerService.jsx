import { Container,Row, } from "react-bootstrap"


export const BannerService = ({title , height}) =>{
    const style ={
        height:`${height}px`
    }
    return(
        <Container fluid  style={style} className="banner text-center align-items-center justify-content-center d-flex">
            <h2 style={{color:"#fff"}} >{title}</h2>
        </Container>
    )
}

