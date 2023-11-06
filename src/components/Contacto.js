import React, { useState } from 'react';
import '../App.css';
import facebook from '../img/facebookcirclegrande.png';
import instagram from '../img/instagramcirclegrande.png';
import twitter from '../img/twittercirclegrande.png';
import iconomapa from '../img/iconomapa.png';

function Contacto() {
  const direccion = "Gamero 2722";
  const telefono = "+56227103043";
  const comuna = " Independencia ";

  const [iconHovered, setIconHovered] = useState(null);

  const handleIconClick = (icon) => {
    if (iconHovered === icon) {
      setIconHovered(null);
    } else {
      setIconHovered(icon);
    }
  };

  return (
    <section id="contacto">
      <div className="content">
        <h2>Contacto</h2>
        <p>Para contactarnos, puedes hacerlo de las siguientes formas:</p>
        <ul>
          <li>Dirección: {direccion}, {comuna}</li>
          <li>Teléfono: {telefono}</li>
          <li>Correo electrónico: escuela@nzelandia.cl</li>
        </ul>
        <a
          href="https://maps.app.goo.gl/NmPEth5MXot9gXWN7"
          className="como-llegar-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cómo llegar (Mapa)
          <img src={iconomapa} alt="Mapa" className="map-icon" />
        </a>


        {/* Agregar el contenedor de redes sociales */}
        <div className="redes-sociales-container">
          <div className="redes-sociales">
            <div className="icon-container">
              <a
                href="https://www.instagram.com/nuevazelandiaescuela"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleIconClick('instagram')}
              >
                <img
                  src={instagram}
                  alt="Logo de Instagram"
                  className={`icon ${iconHovered === 'instagram' ? 'hovered' : ''}`}
                />
              </a>
            </div>

            <div className="icon-container">
              <a
                href="https://twitter.com/zelandia_nueva?lang=bg/"
                target="_blank"
                style={{ width: '40px' }} // Cambia el tamaño del logo ajustando el valor de 'width'

                rel="noopener noreferrer"
                onClick={() => handleIconClick('twitter')}
              >
                <img
                  src={twitter}
                  alt="Logo de Twitter"
                  className={`icon ${iconHovered === 'twitter' ? 'hovered' : ''}`}
                />
              </a>
            </div>

            <div className="icon-container">
              <a
                href="https://www.facebook.com/EscuelaNuevaZelancia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleIconClick('facebook')}
              >
                <img
                  src={facebook}
                  alt="Logo de Facebook"
                  className={`icon ${iconHovered === 'facebook' ? 'hovered' : ''}`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
