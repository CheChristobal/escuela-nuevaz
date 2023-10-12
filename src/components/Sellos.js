import React from 'react';
import '../App.css';
import sello1 from '../img/creatividad.png';
import sello2 from '../img/socioambiental.png';
import sello3 from '../img/cultural.png';

function Sellos() {
  return (
    <section id="sellos">
      <div className="content">
        <h2>Sellos</h2>
        <p>Nuestro sello son...</p>
        <div className="card-container">
          <div className="card red expanded center">
            <h1>Identidad y Creatividad</h1>
            <img src={sello1} alt="Sello 1" className="icon" />
            <p>
              La integrar la identidad y la creatividad en la educación implica crear un entorno en el que los estudiantes se sientan seguros para explorar sus raíces y expresar sus ideas de manera original. Esto no solo enriquece su aprendizaje, sino que también les ayuda a desarrollar habilidades importantes para su crecimiento personal y su contribución a la sociedad.
            </p>
          </div>
          <div className="card blue expanded">
            <h1>Conciencia Socioambiental</h1>
            <img src={sello2} alt="Sello 2" className="icon" />
            <p>
              Fomentar la conciencia socioambiental en la escuela no solo contribuye a la formación integral de los estudiantes, sino que también prepara a las futuras generaciones para ser ciudadanos responsables y comprometidos con la protección del entorno y el bienestar de la sociedad en su conjunto.
            </p>
          </div>
          <div className="card red expanded">
            <h1>Interculturalidad</h1>
            <img src={sello3} alt="Sello 3" className="icon" />
            <p>
              La interculturalidad no solo enriquece la educación de los estudiantes, sino que también contribuye a formar ciudadanos globales y conscientes, capaces de participar activamente en una sociedad diversa y multicultural, promoviendo la tolerancia, el diálogo y la cooperación entre personas de todas las procedencias.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
        }

        .card {
          border: 1px solid #ccc;
          padding: 20px;
          width: calc(33.33% - 20px);
          box-sizing: border-box;
          color: #333;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .blue {
          background-color: #03318c;
          color: white;
        }

        .red {
          background-color: #f20519;
          color: white;
        }

        .white {
          background-color: white;
        }

        h3 {
          margin-top: 0;
        }

        .icon {
          height: 100px;
          width: auto;
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
}

export default Sellos;
