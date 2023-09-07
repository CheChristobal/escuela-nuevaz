import React from 'react';
import '../App.css';


function Valores() {
  return (
    <section id="valores">
      <div className="content">
        <h2>Valores</h2>
        <p>Nuestro Valores son...</p>
        <div className="card-container">
          <div className="card red expanded center">
            <h1>Respeto</h1>
            <p>
            Fomentar el respeto en la escuela contribuye a crear un ambiente seguro y armonioso, donde los estudiantes pueden desarrollarse académica y personalmente. Además, prepara a los jóvenes para ser ciudadanos responsables y conscientes de su rol en la sociedad, promoviendo valores de igualdad, convivencia y aprecio por la diversidad.
            </p>
          </div>
          <div className="card blue expanded">
            <h1>Tolerancia</h1>
            <p>
            Promover la tolerancia en la escuela ayuda a crear un ambiente de respeto mutuo y comprensión, donde los estudiantes pueden crecer académica y personalmente. Además, les brinda herramientas para enfrentar situaciones desafiantes en la vida real, y contribuye a formar ciudadanos responsables y comprometidos con la convivencia armoniosa en una sociedad diversa.
            </p>
          </div>
          <div className="card red expanded">
            <h1>Compromiso</h1>
            <p>
            Fomentar el compromiso en la escuela ayuda a crear un ambiente dinámico y motivador, donde el aprendizaje es significativo y gratificante. Además, forma estudiantes y profesionales comprometidos con su desarrollo personal y con la construcción de una sociedad responsable y participativa.
            </p>
          </div>
        </div>
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

export default Valores;
