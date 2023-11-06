import React from 'react';
import '../App.css';

const DocumentList = () => {
  const pdfFiles = [
    { title: "Plan Anual de Desarrollo de Educación Municipal de Independencia PADEM 2023", url: "/pdfs/PADEM_2023.pdf" },
    { title: "Proyecto Educativo 2022-2025", url: "/pdfs/pie actualizado.pdf" },
    { title: "REGLAMENTO DE EVALUACIÓN, CALIFICACIÓN Y PROMOCIÓN 2023-2024", url: "/pdfs/REGLAMENTO DE EVALUACIÓN 2023.pdf" },
    { title: "REGLAMENTO INTERNO DE CONVIVENCIA ESCOLAR ESCUELA NUEVA ZELANDIA 2023-2024", url: "/pdfs/RICE NZ 23-24.pdf" },
    // Agrega más documentos según sea necesario
  ];

  return (
    <div id="documentos" className="document-list">
      <h2>Documentos Institucionales</h2>
      <ul>
        {pdfFiles.map((pdf, index) => (
          <li key={index}>
            <a href={pdf.url} target="_blank" rel="noopener noreferrer">
              {pdf.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
