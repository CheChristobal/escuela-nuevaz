import React from 'react';
import fotoperfil from '../img/placeholderalumno.png';

import '../App.css';



function QuienesSomos() {

  const profesores = [
    {
      nombre: 'María García',
      logro: 'Profesora de Musica',
      foto: fotoperfil, // Ruta de la foto del alumno
    },
    {
      nombre: 'Juan Martínez',
      logro: 'Profesor de Lenguaje',
      foto: fotoperfil // Ruta de la foto del alumno
    },
    {
      nombre: 'Ana López',
      logro: 'Profesora de Ingles',
      foto: fotoperfil // Ruta de la foto del alumno
    },
    {
      nombre: 'María García',
      logro: 'Profesora de Musica',
      foto: fotoperfil, // Ruta de la foto del alumno
    },
    {
      nombre: 'Juan Martínez',
      logro: 'Profesor de Lenguaje',
      foto: fotoperfil // Ruta de la foto del alumno
    },
    
    // Agrega más profesores aquí
  ];
  
  const directiva = [
    {
      nombre: 'María García',
      logro: 'Profesora de Musica',
      foto: fotoperfil, // Ruta de la foto del alumno
    },
    {
      nombre: 'Juan Martínez',
      logro: 'Profesor de Lenguaje',
      foto: fotoperfil // Ruta de la foto del alumno
    },
    {
      nombre: 'Ana López',
      logro: 'Profesora de Ingles',
      foto: fotoperfil // Ruta de la foto del alumno
    },
    {
      nombre: 'María García',
      logro: 'Profesora de Musica',
      foto: fotoperfil, // Ruta de la foto del alumno
    },
    {
      nombre: 'Juan Martínez',
      logro: 'Profesor de Lenguaje',
      foto: fotoperfil // Ruta de la foto del alumno
    },
    
    // Agrega más profesores aquí
  ];
  
  return (
    <section id="quienes-somos">
      <div className="content">
        <h2>Quiénes Somos</h2>
        <p>Somos una institución educativa comprometida con la excelencia académica y el desarrollo integral de nuestros estudiantes. Nuestra misión es brindar educación de calidad y fomentar valores fundamentales para formar ciudadanos responsables y comprometidos con la sociedad.</p>
        <div className="image-container">
        <section>
      <div className="content">
        <h2>Profesores</h2>
        <p>¡Conoce a nuestros profesores !</p>
        <div className="alumnos-container">
          {profesores.map((profesores, index) => (
            <div key={index} className="alumno-card">
              <img src={profesores.foto} alt={profesores.nombre} />
              <h3>{profesores.nombre}</h3>
              <p>{profesores.logro}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        <h2>Directiva</h2>
        <p>¡Conoce a nuestra directiva !</p>
        <div className="alumnos-container">
          {directiva.map((directiva, index) => (
            <div key={index} className="alumno-card">
              <img src={directiva.foto} alt={directiva.nombre} />
              <h3>{directiva.nombre}</h3>
              <p>{directiva.logro}</p>
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
        </div>
      </div>
      
    </section>
  );
}

export default QuienesSomos;
