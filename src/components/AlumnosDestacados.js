import React from 'react';
import fotoperfil from '../img/placeholderalumno.png';

function AlumnosDestacados() {
  const alumnos = [
    {
      nombre: 'María García',
      logro: 'Primer Lugar en Olimpiada de Matemáticas',
      foto: fotoperfil, // Ruta de la foto del alumno
    },
    {
      nombre: 'Juan Martínez',
      logro: 'Reconocimiento por Liderazgo Estudiantil',
      foto: fotoperfil // Ruta de la foto del alumno
    },
    {
      nombre: 'Ana López',
      logro: 'Destacada en Arte y Creatividad',
      foto: fotoperfil // Ruta de la foto del alumno
    },
    // Agrega más estudiantes destacados aquí
  ];

  return (
    <section id="alumnos-destacados">
      <div className="content">
        <h2>Alumnos Destacados</h2>
        <p>¡Conoce a nuestros brillantes estudiantes que han logrado grandes logros!</p>
        <div className="alumnos-container">
          {alumnos.map((alumno, index) => (
            <div key={index} className="alumno-card">
              <img src={alumno.foto} alt={alumno.nombre} />
              <h3>{alumno.nombre}</h3>
              <p>{alumno.logro}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Estilos para la sección de Alumnos Destacados */
        .alumnos-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
        }

        .alumno-card {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          margin: 10px;
          text-align: center;
          background-color: #f7f7f7;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .alumno-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }

        .alumno-card img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
      `}</style>
    </section>
  );
}

export default AlumnosDestacados;
