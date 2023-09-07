import React, { useState } from 'react';
import '../App.css'; // Asegúrate de crear este archivo de estilos
import evento1 from '../img/carrusel3.jpg';

const EventsComponent = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Datos de eventos (esto puede provenir de una fuente de datos externa o una API)
  const eventsData = [
    {
      id: 1,
      date: '10 de septiembre',
      title: 'Charla sobre ciencia',
      description: 'Únete a nosotros para una charla fascinante sobre avances científicos.',
      imageUrl: evento1, // Agrega la ruta de la imagen correspondiente
    },
    {
      id: 2,
      date: '15 de septiembre',
      title: 'Torneo de deportes',
      description: '¡Participa en nuestro torneo anual de deportes y muestra tus habilidades!',
      imageUrl: evento1, // Agrega la ruta de la imagen correspondiente
    },
    // Agrega más eventos aquí
  ];

  // Función para manejar el clic en un evento
  const handleEventClick = (eventId) => {
    // Verifica si el evento seleccionado ya está abierto o cerrado
    if (selectedEvent === eventId) {
      setSelectedEvent(null); // Si está abierto, ciérralo al hacer clic nuevamente
    } else {
      setSelectedEvent(eventId); // Si está cerrado, ábrelo al hacer clic
    }
  };

  return (
    <div id="events-component" className="events-component">
      <h2>Próximas noticias</h2>
      <div className="event-cards-container">
        {eventsData.map((event) => (
          <div key={event.id} className={`event-card ${selectedEvent === event.id ? 'active' : ''}`}>
            <div className="event-date">{event.date}</div>
            <div className="event-details">
              <h3 onClick={() => handleEventClick(event.id)}>{event.title}</h3>
              {selectedEvent === event.id && ( // Muestra los detalles si el evento está seleccionado
                <div className="event-description">
                  <p>{event.description}</p>
                  <img src={event.imageUrl} alt={event.title} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
