import React from 'react';
import '../App.css'; // Asegúrate de crear este archivo de estilos

const EventsComponent = () => {
  return (
    <div className="events-component">
      <h2>Próximos eventos</h2>
      <ul className="event-list">
        <li className="event">
          <div className="event-date">10 de septiembre</div>
          <div className="event-details">
            <h3>Charla sobre ciencia</h3>
            <p>Únete a nosotros para una charla fascinante sobre avances científicos.</p>
          </div>
        </li>
        <li className="event">
          <div className="event-date">15 de septiembre</div>
          <div className="event-details">
            <h3>Torneo de deportes</h3>
            <p>¡Participa en nuestro torneo anual de deportes y muestra tus habilidades!</p>
          </div>
        </li>
        {/* Agrega más eventos aquí */}
      </ul>
    </div>
  );
};

export default EventsComponent;
