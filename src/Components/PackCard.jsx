import { Container,Row, Col } from "react-bootstrap"
import "../packCard.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// import pack_essentiel from "../assets/pack_essential.png"

export const PackCard = ({title,image,prix,description,color}) =>{
    useEffect(() => {
        AOS.init({
          duration: 1900, // Durée de l'animation en millisecondes
          easing: 'ease', // Type de transition d'animation
          once: true // Permet d'animer les éléments uniquement la première fois qu'ils deviennent visibles
        });
      }, []);
      
    const packColor = {
        backgroundColor:`${color}`
    }
    return(
        <Container className="pack_container mb-5" style={packColor}>
        <Row data-aos="fade-left" md={2} xs={1} className="h-100">
          <Col className="text-center position-relative">
            <h5 style={{ position: 'absolute', right: '50%', color: '#fff', top: '4%' }}>{title}</h5>
            <div className="img-contain d-flex justify-content-center align-items-end p-4 h-100">
              <div data-aos="fade-left" className="en_dessous"></div>
              <div data-aos="fade-left" className="au_dessus">
                <img style={{ borderRadius: "40px" }} src={image} alt="pack essential" height="100%" width="100%" />
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div  className="info-contain p-1 text-center" style={{ height: '70%', width: "88%", backgroundColor: "#fff" }}>
              <p>{description}</p>
              <p className="price">Prix : {prix} FCFA</p>
                <p>Contactez-nous pour en savoir plus.
                    +2250787160692
                </p>
                <div className="d-flex flex-row-reverse " style={{paddingRight:'4%'}} >
                    <div>
                    <a href="">
                        <svg width="65" height="65" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="whatsapp">
                            <ellipse id="Ellipse 24" cx="18.5" cy="19.6646" rx="17.9945" ry="19.6646" fill="#0573bd"/>
                            <g id="&#240;&#159;&#166;&#134; icon &#34;What&#39;s App&#34;">
                            <path id="Vector" d="M23.2004 14.2872C21.8809 12.8417 20.1236 12.0468 18.2561 12.0468C14.4014 12.0468 11.2648 15.4745 11.2648 19.687C11.2648 21.0326 11.586 22.3473 12.1969 23.5071L11.2049 27.4648L14.9116 26.4014C15.9319 27.0105 17.0814 27.3306 18.2529 27.3306H18.2561C22.1076 27.3306 25.3135 23.9028 25.3135 19.6904C25.3135 17.6496 24.5199 15.7326 23.2004 14.2872ZM18.2561 26.0435C17.2105 26.0435 16.187 25.7372 15.2958 25.159L15.0848 25.0213L12.8866 25.6511L13.4724 23.3075L13.3338 23.0665C12.7512 22.0547 12.4457 20.8881 12.4457 19.687C12.4457 16.1869 15.0533 13.3373 18.2592 13.3373C19.8118 13.3373 21.2699 13.9981 22.3658 15.1992C23.4618 16.4003 24.1357 17.9937 24.1326 19.6904C24.1326 23.1939 21.4589 26.0435 18.2561 26.0435ZM21.4431 21.2873C21.2699 21.1909 20.4102 20.7297 20.2496 20.6678C20.0889 20.6024 19.9724 20.5714 19.8559 20.7642C19.7394 20.9569 19.4056 21.3836 19.3016 21.5144C19.2009 21.6418 19.0969 21.659 18.9237 21.5626C17.8971 21.0016 17.2231 20.5611 16.546 19.2912C16.3665 18.9539 16.7255 18.978 17.0594 18.2484C17.1161 18.1211 17.0877 18.0109 17.0436 17.9146C16.9995 17.8182 16.65 16.8787 16.5051 16.4967C16.3634 16.125 16.2185 16.1766 16.1114 16.1697C16.0107 16.1628 15.8941 16.1628 15.7776 16.1628C15.6611 16.1628 15.4722 16.211 15.3115 16.4003C15.1509 16.593 14.7006 17.0542 14.7006 17.9937C14.7006 18.9333 15.3273 19.8418 15.4123 19.9692C15.5005 20.0965 16.6437 22.0238 18.3978 22.8532C19.5063 23.3763 19.9409 23.421 20.4952 23.3315C20.8322 23.2765 21.5281 22.8704 21.673 22.423C21.8179 21.9756 21.8179 21.5936 21.7738 21.5144C21.7328 21.4284 21.6163 21.3802 21.4431 21.2873Z" fill="#fff"/>
                            </g>
                            </g>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
           
          </Col>
        </Row>
      </Container>
      
    )
}