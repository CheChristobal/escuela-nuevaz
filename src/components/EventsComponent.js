import React from 'react';
import '../App.css'; // Asegúrate de crear este archivo de estilos
import diadelprofesor from '../img/diadelprofesor.jpg';
import feriacientifica from '../img/Aficheferia.jpeg';

const EventsComponent = () => {
  const eventsData = [
    {
      id: 1,
      date: '26 de octubre',
      title: 'Feria Cientifica ',
      description: 'Te invitamos a ser parte de la tercera versión de esta feria, a realizarse en nuestra Escuela a partir de las 09:00 hrs.',
      imageUrl: feriacientifica, // Agrega la ruta de la imagen correspondiente
    },
    {
      id: 2,
      date: '16 de octubre',
      title: 'Dia del Profesor ',
      description: 'El Día del Profesor, también conocido como el Día del Maestro o Día del Docente, es una celebración dedicada a honrar y reconocer la labor de los educadores y maestros en todo el mundo.',
      imageUrl: diadelprofesor, // Agrega la ruta de la imagen correspondiente
    },
    // Agrega más eventos aquí
  ];

  return (
    <div id="events-component" className="events-component">
      <h2> Informaciones</h2>
      <div className="event-cards-container">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-date">{event.date}</div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <div className="event-description">
                
              </div>
              <p>{event.description}</p>
                <img src={event.imageUrl} alt={event.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
