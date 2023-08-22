import React from 'react';
import '../App.css';


function Sellos() {
  return (
    <section id="sellos">
      <div className="content">
        <h2>Sellos</h2>
        <p>Nuestro sello son...</p>
        <div className="card-container">
          <div className="card red expanded center">
            <h3>Identidad y Creatividad</h3>
            <p>
            La integrar la identidad y la creatividad en la educación implica crear un entorno en el que los estudiantes se sientan seguros para explorar sus raíces y expresar sus ideas de manera original. Esto no solo enriquece su aprendizaje, sino que también les ayuda a desarrollar habilidades importantes para su crecimiento personal y su contribución a la sociedad.
            </p>
          </div>
          <div className="card blue expanded">
            <h3>Conciencia Socioambiental</h3>
            <p>
                Fomentar la conciencia socioambiental en la escuela no solo contribuye a la formación integral de los estudiantes, sino que también prepara a las futuras generaciones para ser ciudadanos responsables y comprometidos con la protección del entorno y el bienestar de la sociedad en su conjunto.
            </p>
          </div>
          <div className="card red expanded">
            <h3>Interculturalidad</h3>
            <p>
            La interculturalidad no solo enriquece la educación de los estudiantes, sino que también contribuye a formar ciudadanos globales y conscientes, capaces de participar activamente en una sociedad diversa y multicultural, promoviendo la tolerancia, el diálogo y la cooperación entre personas de todas las procedencias.
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
          background-color: #3032b1;
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

export default Sellos;
