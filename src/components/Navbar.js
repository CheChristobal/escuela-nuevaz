import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import FloatingButton from './FloatingButton'; // Asegúrate de ajustar la ruta correcta
import Logo from '../components/Logo'; // Asegúrate de ajustar la ruta correcta para el archivo del logotipo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [conocenosOpen, setConocenosOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleConocenos = () => {
    setConocenosOpen(!conocenosOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setConocenosOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${menuOpen ? 'abierto' : ''}`} ref={navbarRef}>
      <div className="logo-container">
        {/* <Logo /> */}
      </div>
      <div className="hamburguesa" onClick={toggleMenu}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>
      <ul className={`menu ${menuOpen ? 'abierto' : ''}`}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#events-component">Informaciones</a></li>
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
        <li><a href="#documentos">Documentos Institucionales</a></li>
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
          background: linear-gradient(to bottom, #285599, #002a5c); /* Agrega el degradado deseado */

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
          top: 100%;
          left: 0;
          background-color: #285599;
          z-index: 1;
          padding: 0.5rem;
        }

        .submenu li {
          margin: 0.5rem 0;
          padding: 3px;
        }

        .submenu a {
          text-decoration: none;
          color: white;
        }

        .dropdown.abierto .submenu {
          display: block;
          position: relative;
          top: 0;
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
            top: 90px;
            right: 0;
            background-color: #285599;
            width: 100%;
            text-align: center;
          }

          .menu.abierto {
            display: flex;
            flex-direction: column;
          }

          .menu li {
            margin: 1rem 0;
          }

          .dropdown.abierto .submenu {
            display: block;
            position: relative;
            top: 0;
            left: 0;
            background-color: #285599;
            z-index: 1;
          }
        }

        /* Media query para pantallas más grandes (escritorio) */
        @media (min-width: 769px) {
          .menu {
            position: relative;
            top: 0;
          }

          .menu.abierto {
            display: flex;
            flex-direction: row;
            background-color: transparent;
            width: auto;
          }

          .menu li {
            margin: 0 1rem;
          }

          .dropdown.abierto .submenu {
            display: block;
            position: absolute;
            top: 100%;
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
