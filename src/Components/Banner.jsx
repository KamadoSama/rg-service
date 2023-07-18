import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import carousel1 from "../assets/carrousel/carousel1.jpg";
import carousel3 from "../assets/carrousel/carousel3.png";
import "../carousel.css";

export const Banner = () => {
  return (
    
    <div className="home-banner bg-secondary w-100 position-relative d-flex">
      <img
        className="picture-right mw-100 mh-100"
        src={carousel1}
        alt="Intégrateur de Logiciels de Gestion/ERP"
        loading="lazy"
      />
      <div className="container align-self-center">
        <div className="content py-4 py-md-5">
          <h1 className="mb-0 d-flex flex-column">
            RGService - Votre Partenaire Événementiel et Informatique
          </h1>
          <p className="mt-4">
            RGService est votre solution tout-en-un pour des prestations de
            services exceptionnelles dans l'événementiel et l'informatique.
            <br />
            <br />
            Événementiel : Couverture médiatique de mariage, décoration créative
            et location de voitures de luxe pour des événements mémorables.
            <br />
            <br />
            Informatique : Maintenance, vente de marteriel informatique.
            <br />
            <br />
            
          </p>
          <a href="/contact">
            <button
              className="btn btn-primary btn-md btn-action mt-4"
              title="Contact"
            >
              Nous contacter
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
