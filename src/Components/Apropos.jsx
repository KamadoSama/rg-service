import { Container, Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import carousel4 from '../assets/carrousel/carousel4.png' 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const Apropos = ()=> {
  useEffect(() => {
    AOS.init({
      duration: 1900, 
      easing: 'ease', 
      once: true 
    });
  }, []);
  return (
    <div data-aos="fade-left" className="about-us-section">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-6 text-center text-lg-left d-flex align-items-center"
                  >
                    <div className="content">
                      <h2 className="title mb-3">Qui sommes-nous ?</h2>
                      <div className="mb-3 mb-lg-5">
                        <p>
                        Chez RGService, notre passion est de créer des  
                        expériences uniques et de fournir des services 
                        de qualité inégalée. Découvrez l'équipe  qui vous accompagne au
                        quotidien dans l'organisation d'événements de mariage, la 
                        location de véhicules de mariage et les services 
                        informatiques.
                        </p>
                      </div>
                      <a href="">
                        <button
                          className="btn btn-primary btn-md btn-action mb-3"
                          title="En savoir +"
                        >
                          En savoir +
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 text-center text-lg-right">
                    <img
                      src={carousel4}
                      className="w-75"
                      alt="A propos de nous"
                    />
                  </div>
                </div>
              </div>
            </div>
    
  );
}

