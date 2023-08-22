import React, { useState } from 'react';
import '../App.css';
import FloatingButton from './FloatingButton'; // Asegúrate de ajustar la ruta correcta
import Logo from '../components/Logo'; // Asegúrate de ajustar la ruta correcta para el archivo del logotipo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'activo' : ''}`}>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="hamburguesa" onClick={toggleMenu}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>
      <ul className={`menu ${menuOpen ? 'abierto' : ''}`}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#quienes-somos">Quiénes Somos</a></li>
        <li><a href="#alumnos-destacados">Alumnos destacados</a></li>
        <li><a href="#nuestra-mision">Nuestra Misión</a></li>
        <li><a href="#vision">Visión</a></li>
        <li><a href="#sellos">Sellos</a></li>
        <li><a href="#valores">Valores</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <FloatingButton />
      </ul>
      <style jsx>{`
        .navbar {
            list-style: none;
            display: flex;
            justify-content: space-between; /* Alinea el logotipo y la hamburguesa en los extremos */
            align-items: center; /* Centra verticalmente los elementos */
            background-color: #285599;
            padding: 1rem;
            border-bottom: 3px solid red;
            border-top: 3px solid red;

        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .hamburguesa {
          display: none; /* Oculta la hamburguesa en pantallas grandes */
          cursor: pointer;
        }

        .barra {
          width: 30px;
          height: 3px;
          background-color: white;
          margin: 6px 0;
        }

        .menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .menu li {
          margin: 0 1rem;
        }

        .menu a {
          text-decoration: none;
          color: white;
        }

        .menu li:hover {
            transform: scale(1.2); /* Agrega un efecto de escala al hacer hover */
          }

        /* Media query para tablet y pantallas más pequeñas */
        @media (max-width: 768px) {
          .hamburguesa {
            display: block; /* Muestra la hamburguesa en tablet y pantallas más pequeñas */
          }

          .menu {
            display: none; /* Oculta el menú en un principio */
            flex-direction: column;
            position: absolute;
            top: 70px; /* Ajusta la posición vertical del menú desplegado */
            right: 0;
            background-color: #285599;
            width: 100%;
            text-align: center;
          }

          .menu.abierto {
            display: flex; /* Muestra el menú al hacer clic en la hamburguesa */
          }

          .menu li {
            margin: 1rem 0;
          }

          
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
