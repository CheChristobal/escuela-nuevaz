import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css'; // Estilos personalizados para el carrusel
import imagen1 from '../img/imagencarusel1.jpg';
import imagen2 from '../img/carrusel2.jpg';
import imagen3 from '../img/carrusel3.jpg';
import imagen4 from '../img/carrusel4.jpg';
import imagen5 from '../img/carrusel5.jpg';

const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} interval={2000} infiniteLoop={true}>
        <div>
          <img src={imagen1} alt="Imagen 1" />
        </div>
        <div>
          <img src={imagen2} alt="Imagen 2" />
        </div>
        <div>
          <img src={imagen3} alt="Imagen 3" />
        </div>
        <div>
          <img src={imagen4} alt="Imagen 4" />
        </div>
        <div>
          <img src={imagen5} alt="Imagen 5" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
