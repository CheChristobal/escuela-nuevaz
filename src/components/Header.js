import React, { useState } from 'react';
import logo from '../img/logo_escuela.png';
import facebook from '../img/facebookcircle.png';
import instagram from '../img/instagramcircle.png';
import twitter from '../img/twittercircle.png';
import '../App.css'; // Asegúrate de importar tus estilos CSS

const Header = () => {
  const [iconHovered, setIconHovered] = useState(null);

  const handleIconClick = (icon) => {
    if (iconHovered === icon) {
      setIconHovered(null);
    } else {
      setIconHovered(icon);
    }
  };

  return (
    <div className="header" style={headerStyle}>
      <div className="logo-container">
        <div className="logo">
        </div>
      </div>
      <div className="text-container">
        <div className="logo-text" style={textStyle}>
        </div>
      </div>
      <div className="social-icons" style={socialIconsStyle}>
        <a
          href="https://www.instagram.com/nuevazelandiaescuela/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleIconClick('instagram')}
        >
          <img
            src={instagram}
            alt="Logo de Instagram"
            className={`icon ${iconHovered === 'instagram' ? 'hovered' : ''}`}
            style={iconStyle}
          />
        </a>
        <a
          href="https://twitter.com/zelandia_nueva?lang=bg/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleIconClick('twitter')}
        >
          <img
            src={twitter}
            alt="Logo de Twitter"
            className={`icon ${iconHovered === 'twitter' ? 'hovered' : ''}`}
            style={iconStyle}
          />
        </a>
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
            style={iconStyle}
          />
        </a>
      </div>
    </div>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  color: 'white',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const logoStyle = {
  width: '100px',
};

const socialIconsStyle = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  width: '50px',
  height: '50px',
};

const textStyle = {
  color: 'black',
  fontSize: '30px',
  marginLeft: '20px', // Ajusta la distancia a la derecha aquí
};

export default Header;
