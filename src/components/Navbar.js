import React, { useState } from 'react';
import '../App.css';
import FloatingButton from './FloatingButton'; // Asegúrate de ajustar la ruta correcta
import Logo from '../components/Logo'; // Asegúrate de ajustar la ruta correcta para el archivo del logotipo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [conocenosOpen, setConocenosOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleConocenos = () => {
    setConocenosOpen(!conocenosOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'abierto' : ''}`}>
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
        <li><a href="#events-component">Eventos</a></li>
        <li className={`dropdown ${conocenosOpen ? 'abierto' : ''}`}>
          <a href="#" onClick={toggleConocenos}>Conócenos</a>
          <ul className={`submenu ${conocenosOpen ? 'abierto' : ''}`}>
            <li><a href="#quienes-somos">Quiénes Somos</a></li>
            <li><a href="#nuestra-mision">Nuestra Misión</a></li>
            <li><a href="#vision">Visión</a></li>
            <li><a href="#sellos">Sellos</a></li>
            <li><a href="#valores">Valores</a></li>
            
          </ul>
        </li>
        <li><a href="#contacto">Contacto</a></li>
        <FloatingButton />
      </ul>
      <style jsx>{`
        .navbar {
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          display: none;
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

        /* Estilos del menú desplegable */
        .dropdown {
          position: relative;
        }

        .submenu {
          display: none;
          list-style: none;
          margin: 0;
          padding: 0;
          position: absolute;
          top: 100%; /* Coloca el menú debajo del elemento padre */
          left: 0;
          background-color: #285599;
          z-index: 1; /* Asegura que esté por encima de otros elementos */
          padding: 0.5rem; /* Agregar un poco de padding */
        }

        .submenu li {
          margin: 0.5rem 0; /* Ajustar el margen entre elementos */
          padding: 3px; /* Agregar un poco de padding a los elementos del menú desplegable */
        }

        .submenu a {
          text-decoration: none;
          color: white;
        }

        .dropdown.abierto .submenu {
          display: block;
          position: relative; /* Cambiar la posición a relativa para que aparezca debajo del dropdown */
          top: 0; /* Alinear el menú con el elemento padre */
          left: 0;
          background-color: #285599;
          z-index: 1;
        }

        /* Media query para tablet y pantallas más pequeñas */
        @media (max-width: 768px) {
          .hamburguesa {
            display: block;
          }

          .menu {
            display: none;
            position: absolute;
            top: 70px;
            right: 0;
            background-color: #285599;
            width: 100%;
            text-align: center;
          }

          .menu.abierto {
            display: flex;
            flex-direction: column; /* Cambiar la dirección del menú en dispositivos móviles */
          }

          .menu li {
            margin: 1rem 0;
          }

          .dropdown.abierto .submenu {
            display: block;
            position: relative; /* Cambiar la posición a relativa para que aparezca debajo del dropdown */
            top: 0; /* Alinear el menú con el elemento "Conócenos" */
            left: 0;
            background-color: #285599;
            z-index: 1;
          }
        }

        /* Media query para pantallas más grandes (escritorio) */
        @media (min-width: 769px) {
          .menu {
            position: relative; /* Cambiar la posición a relativa para que esté dentro del navbar */
            top: 0; /* Restablecer la posición */
          }

          .menu.abierto {
            display: flex;
            flex-direction: row; /* Mostrar los elementos en fila en modo escritorio */
            background-color: transparent; /* Quitar el fondo en modo escritorio */
            width: auto; /* Quitar el ancho fijo en modo escritorio */
          }

          .menu li {
            margin: 0 1rem;
          }

          .dropdown.abierto .submenu {
            display: block;
            position: absolute; /* Cambiar la posición a absoluta para que aparezca debajo del dropdown */
            top: 100%; /* Alinear el menú con el elemento "Conócenos" */
            left: 0;
            background-color: #285599;
            z-index: 1;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
