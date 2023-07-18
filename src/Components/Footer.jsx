import React from 'react';
import logo_fg_white from "../assets/logo.png"
import { GeoAltFill ,TelephoneFill,Envelope,Facebook,Instagram, Whatsapp} from 'react-bootstrap-icons';

import { Container,Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-light py-3">
    <div className="container pl-3">
      <div className="row d-flex flew-wrap justify-content-between">
        <div className="col-md-12">
          <div
            className="text-right text-lg-left d-flex flex-column flex-lg-row justify-content-between"
          >
            <div className="mb-5">
              <img
                src={logo_fg_white}
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div>
              <div className="column">
                <div className="h3">RGService</div>
                <hr className="title-subline mb-4" />
                <div
                  className="d-flex flex-row justify-content-center justify-content-lg-start"
                >
                  <i ><GeoAltFill size={19} /></i>
                  <span>
                    Yopougon-Micao
                  </span>
                </div>
                <div
                  className="d-flex flex-row justify-content-center justify-content-lg-start mt-2"
                >
                  <a href="tel:+225 07 47 42 44 06" title="Telephone">
                    <i ><TelephoneFill size={19} /></i>
                    <span
                      id="footer-phone-number"
                      className="text-primary font-weight-bold"
                    >
                      +225 07 47 42 44 06
                    </span>
                  </a>
                </div>
                <div
                  className="d-flex flex-row justify-content-center justify-content-lg-start mt-2"
                >
                  <a href="mailto:com@evogest.fr" title="Adresse e-mail">
                    <p id="footer-email" className="text-dark">
                      <i ><Envelope size={19} /></i>
                      tahoarthur52@gmail.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="column mt-4 mt-lg-0">
                <div className="h3">Liens rapides</div>
                <hr className="title-subline mb-4" />
                <div className="d-flex flex-column">
                  <a href="/" title="Accueil">Accueil</a>
                  <a href="/evenementiel" title="evenemtiel"
                    > Service </a>
                  <a href="/#apropos" title="à propod"
                    >Qui sommes nous</a>
                  <a href="/contact" title="Contact">Contact</a>
                  <hr className="separator" />
                </div>
              </div>
            </div>
            <div className="mt-1 mt-lg-0">
              <div className="column mt-4 mt-lg-0">
                <div className="h3">Suivez-nous</div>
                <hr className="title-subline mb-4" />
                <div
                  className="social-icons d-flex justify-content-center justify-content-lg-start"
                >
                  <a
                    className="new-window"
                    href="https://www.facebook.com/profile.php?id=100090473206020"
                    title="Instagram"
                  >
                    <i ><Instagram size={19} /></i>
                  </a>
                  <a
                    className="new-window"
                    href="https://www.facebook.com/profile.php?id=100090473206020"
                    title="Facebook"
                  >
                    <i >< Facebook size={21} /></i>
                  </a>
                  <a
                    className="new-window"
                    href="https://api.whatsapp.com/send/?phone=2250747424406"
                    title="Whatsapp"
                  >
                    <i className="fab fa-facebook-f">< Whatsapp size={21} /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright mt-4">
      <div className="container">
        Copyright 2023 - <span>RGService</span> - Tous droits réservés
      </div>
    </div>
  </footer>
    
  );
};