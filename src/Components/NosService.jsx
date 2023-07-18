
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import location from "../assets/location.png"
import event from "../assets/event.png"
import informatique from "../assets/Informatique.png"
export const NosService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1900,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <div data-aos="fade-right" className="benefits-section">
      <h2 className="title text-secondary font-weight-bold text-center">
        Nos prestations
      </h2>
      <hr className="title-subline mx-auto" />
      <p className="subtitle text-center">
        Nous vous accompagnons dans
      </p>
      <div className="container">
        <div className="row justify-content-center">
        <div className="row mt-4">
            <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  className="benefits-picto"
                  src={location}
                  alt="Location et vente de vehicule"
                 
                />
                <p className="service-name">Location et vente de vehicule</p>
            
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  className="benefits-picto"
                  src={event}
                  alt="La réalisation de vos événements"
                  
                />
                <p className="service-name">La réalisation de vos événements</p>
            
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  className="benefits-picto"
                  src={informatique}
                  alt="informatique"
                
                />
                <p className="service-name">Vos besions informatique</p>
            
            </div>
        </div>
      </div>
    </div>
    </div>

   
  );
};
