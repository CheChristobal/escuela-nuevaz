import React, { useState } from 'react';

function ListaProfesores() {
  // Estado para mantener la lista de profesores
  const [profesores, setProfesores] = useState([
    
    {
      nombre: 'Ruth Milagros Gutierrez',
      cargo: 'Prekinder',
      correo: 'rguitierrez@nzelandia.cl',
      ciclo: 1,
    },
    {
      nombre: 'Rosa Verónica Rojas',
      cargo: 'Kinder',
      correo: 'vrojas@nzelandia.cl',
      ciclo: 1,
    },
    {
      nombre: 'Pamela Andrea Jorquera',
      cargo: '1° basico',
      correo: 'pjorquera@nzelandia.cl',
      ciclo: 1,
    },
    {
      nombre: 'Francisca Paz Briceño',
      cargo: '2° basico',
      correo: 'fbriceno@nzelandia.cl',
      ciclo: 1,
    },
    {
      nombre: 'Sylvia Elena Catalán',
      cargo: '3° basico',
      correo: 'scatalan@nzelandia.cl',
      ciclo: 1,
    },
    {
      nombre: 'Karina Dalia Echeverria',
      cargo: '4° basico',
      correo: 'kecheverria@nzelandia.cl',
      ciclo: 1,
    },
    {
      nombre: 'Melina Marcela Cabrera',
      cargo: '5° basico',
      correo: 'mcabrera@nzelandia.cl',
      ciclo: 2,
    },
    {
      nombre: 'Luis Alberto Morales',
      cargo: '6° basico',
      correo: 'lmorales@nzelandia.cl',
      ciclo: 2,
    },  
    
    
    {
      nombre: 'Cristina Catalina Marín',
      cargo: '7° basico',
      correo: 'cmarin@nzelandia.cl',
      ciclo: 2,
    },
    
    {
      nombre: 'Claudia Andrea Guerra',
      cargo: '8° basico',
      correo: 'cguerra@nzelandia.cl',
      ciclo: 2,
    },
    {
      nombre: 'Rafael Leonidas Trujillo',
      cargo: 'Profesor Coordinador',
      correo: 'rtrujillo@nzelandia.cl',
      ciclo: "Centro de Innovación",
    },  
    {
      nombre: 'Giovanni Mauricio Neira',
      cargo: 'Encargado de Enlaces',
      correo: 'gneira@nzelandia.cl',
      ciclo: "Centro de Innovación",
    }, 
    {
      nombre: 'José Manuel González',
      cargo: 'Profesor Coordinador CRA',
      correo: 'jmgonzalez@nzelandia.cl',
      ciclo: "CRA",
    }, 
    {
      nombre: 'Alejandra Ximena Flores',
      cargo: 'Encargada CRA',
      correo: 'Axflores@nzelandia.cl',
      ciclo: "CRA",
    }, 
    {
      nombre: 'Andrea Soledad Zirpel',
      cargo: 'Fonoaudiologia',
      correo: 'azirpel@nzelandia.cl',
      ciclo: "Equipo PIE",
    },  
    {
      nombre: 'Lorena Guisel Díaz',
      cargo: 'Psicologa',
      correo: 'ldiaz@nzelandia.cl',
      ciclo: "Equipo PIE",
    },
    {
      nombre: 'Susana Rita Sasso',
      cargo: 'Coordinadora PIE',
      correo: 'ssasso@nzelandia.cl',
      ciclo: "Equipo PIE",
    },
    {
      nombre: 'Pamela Denisse Vidal',
      cargo: 'Docente PIE',
      correo: 'pvidal@nzelandia.cl',
      ciclo: "Equipo PIE",
    },
    {
      nombre: 'Maria José Astorga',
      cargo: 'Docente PIE',
      correo: 'mastorga@nzelandia.cl',
      ciclo: "Equipo PIE",
    },
    {
      nombre: 'Efren Vicente Ramirez',
      cargo: 'Docente PIE',
      correo: 'eramirez@nzelandia.cl',
      ciclo: "Equipo PIE",
    },
    {
      nombre: 'Pablo Ingacio Carreño',
      cargo: 'Profesor Diferencial PIE',
      correo: 'pcarreno@nzelandia.cl',
      ciclo: "Equipo PIE",
    },
    
    
    // Agregar más profesores con diferentes ciclos
  ]);

  // Estado para mantener la lista de profesores de asignatura
  const [profesoresAsignatura, setProfesoresAsignatura] = useState([
      {
        nombre: 'Claudia Alejandra Aracena',
        cargo: 'Lenguaje',
        correo: 'caracena@nzelandia.cl',
        ciclo: 1,
      },
      
      {
        nombre: 'Claudia Andrea Guerra',
        cargo: 'Historia',
        correo: 'cguerra@nzelandia.cl',
        ciclo: 1,
      },
      {
        nombre: 'Yenny Andrea Arriagada',
        cargo: 'Ingles',
        correo: 'yarriagada@nzelandia.cl',
        ciclo: 2,
      },
      {
        nombre: 'Luis Alberto Morales',
        cargo: 'Educacion Fisica',
        correo: 'lmorales@nzelandia.cl',
        ciclo: 2,
      },
      
      {
        nombre: 'Nicolas Andre Jiménez',
        cargo: 'Ciencias Naturales',
        correo: 'njimenez@nzelandia.cl',
        ciclo: 2,
      },
      {
        nombre: 'Cristina Catalina Marín',
        cargo: 'Matematicas',
        correo: 'cmarin@nzelandia.cl',
        ciclo: 2,
      },
      {
        nombre: 'Gregory Wilfredo Arias',
        cargo: 'Música',
        correo: 'garias@nzelandia.cl',
        ciclo: 2,
      },

    // Agregar más profesores de asignatura con diferentes ciclos
  ]);

  // Función para obtener los profesores de un ciclo específico
  const obtenerProfesoresPorCiclo = (ciclo, listaProfesores) => {
    return listaProfesores.filter((profesor) => profesor.ciclo === ciclo);
  };

  return (
    <div className="lista-profesores">
      <h2>Lista de Profesores por Ciclo</h2>
  <div className="columnas">
    {[1, 2].map((ciclo) => (
      <div key={ciclo} className="columna">
        <h3>{typeof ciclo === "string" ? ciclo : `Ciclo ${ciclo}`}</h3>
        <ul>
          {obtenerProfesoresPorCiclo(ciclo, profesores).map((profesor, index) => (
            <li key={index} className="profesor-item">
              <strong>Nombre:</strong> {profesor.nombre} <br />
              <strong>Profesor(a) Jefe de:</strong> {profesor.cargo} <br />
              <strong>Correo:</strong>{" "}
              <span style={{ userSelect: "none" }}>{profesor.correo}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  <h2>Centro de Innovacion, PIE y CRA</h2>
  <div className="columnas">
    {[ "Centro de Innovación", "Equipo PIE" , "CRA"].map((ciclo) => (
      <div key={ciclo} className="columna">
        <h3>{typeof ciclo === "string" ? ciclo : `Ciclo ${ciclo}`}</h3>
        <ul>
          {obtenerProfesoresPorCiclo(ciclo, profesores).map((profesor, index) => (
            <li key={index} className="profesor-item">
              <strong>Nombre:</strong> {profesor.nombre} <br />
              <strong></strong> {profesor.cargo} <br />
              <strong>Correo:</strong>{" "}
              <span style={{ userSelect: "none" }}>{profesor.correo}</span>            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>

      <h2>Lista de Profesores de Asignatura</h2>
      <div className='columna'>
      <ul>
        {profesoresAsignatura.map((profesor, index) => (
          <li key={index} className="profesor-item">
            <strong>Nombre:</strong> {profesor.nombre} <br />
            <strong>Profesor(a) de</strong> {profesor.cargo} <br />
            <strong>Correo:</strong>{" "}
            <span style={{ userSelect: "none" }}>{profesor.correo}</span>          </li>
        ))}
      </ul>
      </div>
      <style jsx>{`
        .lista-profesores {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f7f7f7;
        }

        h2 {
          font-size: 24px;
          margin-top: 20px;
          color: #333;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        .columnas {
          display: flex;
          justify-content: space-between;
        }

        .columna {
          flex: 1;
          padding: 10px;
          border: 1px solid #e1e1e1;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .profesor-item {
          padding: 10px;
          text-align: center; /* Centra el texto dentro de los elementos */

        }
        /* Agrega una clase para la animación */
        .columna:hover {
          transform: scale(1.05); /* Aumenta el tamaño en un 5% al poner el cursor encima */
          transition: transform 0.3s ease; /* Agrega una transición suave de 0.3 segundos */
        }
        .profesor-item:hover {
          transform: scale(1.05); /* Aumenta el tamaño en un 5% al poner el cursor encima */
          transition: transform 0.3s ease; /* Agrega una transición suave de 0.3 segundos */
        }
        @media (max-width: 768px) {
          .lista-profesores {
            padding: 10px;
          }

          h2 {
            font-size: 20px;
          }

          .columnas {
            flex-direction: column; /* Cambia la dirección a columna en dispositivos móviles */
          }

          .columna {
            margin-top: 20px; /* Agrega espacio entre columnas en dispositivos móviles */
          }
        }
        
      `}</style>
    </div>
  );
}

export default ListaProfesores;
