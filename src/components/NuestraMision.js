import React from 'react';
import '../App.css';


function NuestraMision() {
  return (
    <section id="nuestra-mision">
      <div className="content">
        <h2>Nuestra Misión</h2>
        <p>Somos una escuela pública que garantiza los derechos y asegura la trayectoria educativa de los y
las estudiantes de manera inclusiva, valorando la diversidad en un ambiente de tolerancia y
respeto para aprender a vivir en comunidad de manera armónica.</p>
        
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
