import React from "react";
import { Carousel } from "react-bootstrap";
import {
  img_carrusel_1,
  img_carrusel_2,
  img_carrusel_3,
} from "../main/imagenes";

function Carrusel() {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img_carrusel_1} alt="1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img_carrusel_2} alt="2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img_carrusel_3} alt="3" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Carrusel;
