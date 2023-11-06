import React, { useState } from 'react';

import '../App.css';

function QuienesSomos() {
  const [selectedCard, setSelectedCard] = useState(null);

  

  const directiva = [
    {
      nombre: 'Nelsol Bobadilla Rodríguez',
      cargo: 'Director',
      correo: 'Correo: nbobadilla@nzelandia.cl', // Texto del correo electrónico
    },
    {
      nombre: 'William José Carrero Contreras',
      cargo: 'Inspector General',
      correo: 'Correo: wcarrero@nzelandia.cl', // Texto del correo electrónico
    },
    
    {
      nombre: 'Paulina Andrea Canelo Flores',
      cargo: 'UTP',
      correo: 'Correo: pcanelo@nzelandia.cl', // Texto del correo electrónico
    },
    {
      nombre: 'Sonia Véronica Espejo Silva',
      cargo: 'Convivencia Escolar',
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
        Somos una escuela pública, de educación Parvularia y Básica, que fue fundada el año 1966 en el marco de la reforma educativa de 1965. En la actualidad depende la administración comunal de la Municipalidad de Independencia la cual, según la ley 18.695, tiene por función satisfacer las necesidades de la comunidad local y asegurar su participación en el progreso económico, social y cultural de las respectivas comunas. Nos encontramos ubicados en el sector norte de la Región Metropolitana en la ciudad de Santiago, comuna de Independencia y específicamente en la población Juan Antonio Ríos. Esta terminó de ser edificada hacia la década del 70, por lo cual diversas generaciones del barrio y sus alrededores han estudiado en la escuela que hoy conocemos con el nombre de Nueva Zelandia.        </p>
        <div className="image-container">
          <section>
            <div className="content">
              <h2>Equipo de Gestion</h2>
              <p>¡Conoce a nuestro Equipo directivo !</p>
              
              {/* <img src={fotoquienesomos} /> */}
              <div className="alumnos-container">
                {directiva.map((directivo, index) => (
                  <div
                    key={index}
                    className={`alumno-card ${selectedCard === directivo.correo ? 'active' : ''}`}
                    onClick={() => handleCardClick(directivo.correo)}
                  >
                   
                    <h3>{directivo.nombre}</h3>
                    <p>{directivo.cargo}</p>
                    {selectedCard === directivo.correo && (
                    <div className="correo" style={{ userSelect: 'none' }}>
                    <h5>{directivo.correo}</h5>
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
