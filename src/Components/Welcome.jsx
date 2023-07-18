import { Container ,Row ,Col} from "react-bootstrap"
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from "react-countup";
import { useEffect } from "react";
import client from "../assets/clients.png"
import projet from "../assets/projet.png"
import experience from "../assets/experience.png"


export const Welcome = () =>{
    
    useEffect(() => {
        AOS.init({
          duration: 800, 
          easing: 'ease', 
          once: true 
        });
      }, []);
    
   
    
    return(
        <div id="teaser-banner" className="py-5">
            <div className="container">
              <div className="row justify-content-around">
                <div
                  className="d-flex flex-column flex-md-row align-items-center justify-content-start col-sm-6 col-xl-3 text-secondary my-3 my-md-0"
                >
                  <img
                    className="d-block"
                    src={client}
                    alt="Utilisateurs clients"
                    style={{height:"80%"}}
                  />
                  <div className="text-center text-md-left mx-2">
                    <p className="h4 my-1 font-weight-bold">
                      + de <span > <CountUp isCounting start={0} end={4000} duration={4.5} /></span>
                    </p>
                    <p className="mb-0">utilisateurs clients</p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column flex-md-row align-items-center justify-content-start col-sm-6 col-xl-3 text-secondary my-3 my-md-0"
                >
                  <img
                    className="d-block"
                    src={experience}
                    alt="Années d'existence"
                  />
                  <div className="text-center text-md-left mx-2">
                    <p className="h4 my-1 font-weight-bold">
                      <span ><CountUp isCounting start={0} end={15} duration={4.5} /> </span> ans
                    </p>
                    <p className="mb-0">d'existence</p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column flex-md-row align-items-center justify-content-start col-sm-6 col-xl-3 text-secondary my-3 my-md-0"
                >
                  <img
                    className="d-block"
                    src={projet}
                    alt="Projets par an"
                  />
                  <div className="text-center text-md-left mx-2">
                    <p className="h4 my-1 font-weight-bold">
                      + de <span data-figure-animation-target="450"> <CountUp isCounting start={0} end={200} duration={4.5} /></span>
                    </p>
                    <p className="mb-0">projets/an</p>
                  </div>
                </div>
                </div>
            </div>
          </div>
        
        
    )
}