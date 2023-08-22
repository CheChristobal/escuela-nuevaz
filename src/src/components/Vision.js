import React from 'react';
import '../App.css';


function Vision() {
  return (
    <section id="vision">
      <div className="content">
        <h2>Visión</h2>
        <p>Aspiramos a constituirnos en una institución que forme en valores a través de la participación,
            que considere la riqueza sociocultural para promover la inclusión y que logre potenciar en los
            estudiantes habilidades personales, artísticas y deportivas como un medio para enfrentar los
            desafíos de la sociedad actual y aportar de manera consciente, activa y reflexiva en pro de su
            trasformación personal y social.</p>
        
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

