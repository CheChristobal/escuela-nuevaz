import React, { useState } from 'react';
import fotoperfil from '../img/placeholderalumno.png';

import '../App.css';

function QuienesSomos() {
  const [selectedCard, setSelectedCard] = useState(null);

  const profesores = [
    {
      nombre: 'María García',
      logro: 'Profesora de Música',
      foto: fotoperfil, // Ruta de la foto del alumno
      correo: 'Correo: maria3.garcia@example.com', // Texto del correo electrónico
    },
    {
      nombre: 'Juan Martínez',
      logro: 'Profesor de Lenguaje',
      foto: fotoperfil, // Ruta de la foto del alumno
      correo: 'Correo: juan2.martinez@example.com', // Texto del correo electrónico
    },
    {
      nombre: 'Ana López',
      logro: 'Profesora de Inglés',
      foto: fotoperfil, // Ruta de la foto del alumno
      correo: 'Correo: ana2.lopez@example.com', // Texto del correo electrónico
    },
    {
      nombre: 'María García',
      logro: 'Profesora de Música',
      foto: fotoperfil, // Ruta de la foto del alumno
      correo: 'Correo: maria2.garcia@example.com', // Texto del correo electrónico
    },
    {
      nombre: 'Juan Martínez',
      logro: 'Profesor de Lenguaje',
      foto: fotoperfil, // Ruta de la foto del alumno
      correo: 'Correo: juan3.martinez@example.com', // Texto del correo electrónico
    },
    // Agrega más profesores aquí
  ];

  const directiva = [
    {
      nombre: 'Williams José Carrero Contreras',
      cargo: 'Inspector General',
      foto: fotoperfil, // Ruta de la foto del alumno
      correo: 'Correo: wcarrero@nzelandia.cl', // Texto del correo electrónico
    },
    {
      nombre: 'Nelsol Bobadilla Rodríguez',
      cargo: 'Director',
      foto: fotoperfil, // Ruta de la foto del alumno
      correo: 'Correo: nbobadilla@nzelandia.cl', // Texto del correo electrónico
    },
    {
      nombre: 'Paulina Andrea Canelo Flores',
      cargo: 'UTP',
      foto: fotoperfil, // Ruta de la foto del alumno
      correo: 'Correo: pcanelo@nzelandia.cl', // Texto del correo electrónico
    },
    {
      nombre: 'Sonia Véronica Espejo Silva',
      cargo: 'Convivencia Escolar',
      foto: fotoperfil, // Ruta de la foto del alumno
      correo: 'Correo: sespejo@nzelandia.cl', // Texto del correo electrónico
    },
    // Agrega más profesores aquí
  ];

  const handleCardClick = (correo) => {
    setSelectedCard(correo);
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  return (
    <section id="quienes-somos">
      <div className="content">
        <h2>Quiénes Somos</h2>
        <p>
          Somos una institución educativa comprometida con la excelencia académica y el desarrollo integral de nuestros estudiantes. Nuestra misión es brindar educación de calidad y fomentar valores fundamentales para formar ciudadanos responsables y comprometidos con la sociedad.
        </p>
        <div className="image-container">
          <section>
            <div className="content">
              <h2>Equipo de Gestion</h2>
              <p>¡Conoce a nuestro Equipo directivo !</p>
              <div className="alumnos-container">
                {directiva.map((directivo, index) => (
                  <div
                    key={index}
                    className={`alumno-card ${selectedCard === directivo.correo ? 'active' : ''}`}
                    onClick={() => handleCardClick(directivo.correo)}
                  >
                    <img src={directivo.foto} alt={directivo.nombre} />
                    <h3>{directivo.nombre}</h3>
                    <p>{directivo.cargo}</p>
                    {selectedCard === directivo.correo && (
                      <div className="correo">
                        <h5>{directivo.correo}</h5>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="content">
              <h2>Profesores</h2>
              <p>¡Conoce a nuestros profesores !</p>
              <div className="alumnos-container">
                {profesores.map((profesor, index) => (
                  <div
                    key={index}
                    className={`alumno-card ${selectedCard === profesor.correo ? 'active' : ''}`}
                    onClick={() => handleCardClick(profesor.correo)}
                  >
                    <h3>{profesor.nombre}</h3>
                    <p>{profesor.logro}</p>
                    {selectedCard === profesor.correo && (
                      <div className="correo">
                        <h5>{profesor.correo}</h5>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <style jsx>{`
        /* Estilos anteriores... */

        .alumnos-container {
          display: flex;
          justify-content: center; /* Alinear las tarjetas al centro horizontalmente */
          flex-wrap: wrap; /* Esto permite que las tarjetas se envuelvan si no caben en la pantalla */
          gap: 20px;
        }

        .alumno-card {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          background-color: #f7f7f7;
          transition: transform 0.2s, box-shadow 0.2s;
          width: 220px; /* Ancho de cada tarjeta */
          cursor: pointer;
        }

        .alumno-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }

        /* Estilos para la tarjeta activa (con correo visible) */
        .alumno-card.active {
          transform: translateY(0);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }

        .alumno-card img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .correo {
          margin-top: 10px;
          font-weight: bold;
          
        }
        h5{
          font-size: 15px;
        }

        /* Resto de los estilos... */
      `}</style>
    </section>
  );
}

export default QuienesSomos;
