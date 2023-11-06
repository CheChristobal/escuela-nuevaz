import React from 'react';
import '../App.css';


function Vision() {
  return (
    <section id="vision">
      <div className="content">
        <h2>Visión</h2>
        <p>Aspiramos a constituirnos en una comunidad educativa democrática, tolerante y respetuosa, que considera la realidad sociocultural de estudiantes y familias, para promover la creatividad y el respeto por el entorno, mediante experiencias educativas innovadoras, desafiantes y contextualizadas, aportando a la formación subjetiva e identitaria de NNA.</p>
        
      </div>
      <style jsx>{`
        .content {
          text-align: center;
        }

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
          background-color: blue;
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

export default Vision;

