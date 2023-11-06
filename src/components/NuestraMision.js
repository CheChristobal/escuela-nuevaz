import React from 'react';
import '../App.css';


function NuestraMision() {
  return (
    <section id="nuestra-mision">
      <div className="content">
        <h2>Nuestra Misión</h2>
        <p>Somos una escuela pública, con un trabajo pedagógico que posibilita el desarrollo de habilidades artísticas, deportivas y de pensamiento crítico de las y los estudiantes, desde un enfoque socio-constructivista, asegurando la trayectoria educativa de los y las estudiantes mediante la construcción de ambientes de tolerancia y respeto, para aprender a vivir con un sentido de protección y cuidado personal y social. Finalmente, por un tema estético, cambiar las letras de los textos, no sé si están en negrita, pero resaltan más que los títulos, idealmente invertir ese problema.</p>
        
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          width: calc(33.33% - 20px);
          box-sizing: border-box;
          color: #333;
        }

        .blue {
          background-color: #3498db;
          color: white;
        }

        .red {
          background-color: #e74c3c;
          color: white;
        }

        .white {
          background-color: white;
        }
        
        h3 {
          margin-top: 0;
        }
      `}</style>
    </section>
  );
}

export default NuestraMision;
