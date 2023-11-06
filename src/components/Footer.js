import React from 'react';
import '../App.css';
import logo from '../img/logo_escuela.png';
import backgroundImage from '../img/fondofooter.png';
import facebookIcon from '../img/facebookcircle.png'; // Reemplaza con la ruta correcta del ícono de Facebook
import twitterIcon from '../img/twittercircle.png'; // Reemplaza con la ruta correcta del ícono de Twitter
import instagramIcon from '../img/instagramcircle.png'; // Reemplaza con la ruta correcta del ícono de Instagram

function Footer() {
  const letterSpacingStyle = {
    letterSpacing: '-1px',
  };

  const lineHeightStyle = {
    lineHeight: '1.2',
  };

  const footerBackgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <footer className="footer" style={footerBackgroundStyle}>
      <div className="footer-column">
        {/* Columna del logotipo */}
        {/* <img src={logo} alt="Logo" className="footer-logo" />
        <h1 style={letterSpacingStyle}>Escuela Nueva Zelandia</h1> */}
      </div>

      <div className="footer-column" style={lineHeightStyle}>
        {/* Columna de enlaces */}
        <ul className="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#events-component">Informaciones</a></li>
          <li><a href="#quienes-somos">Quiénes Somos</a></li>
          <li><a href="#nuestra-mision">Nuestra Misión</a></li>
          <li><a href="#vision">Visión</a></li>
          <li><a href="#sellos">Sellos</a></li>
          <li><a href="#valores">Valores</a></li>
          <li><a href="#documentos">Documentos Institucionales</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <div className="footer-column">
        {/* Columna de redes sociales */}
        <ul className="footer-social">
          <li>
            <a href="https://www.facebook.com/EscuelaNuevaZelancia" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/zelandia_nueva?lang=bg/" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nuevazelandiaescuela" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
