import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const EventsComponent = () => {
  // ...

  return (
    <div id="events-component" className="events-component">
      <h2>Próximas noticias</h2>
      <ul className="event-list">
        <li className="event">
          <div className="event-date">10 de septiembre</div>
          <div className="event-details">
            <h3>
              <Link to="/event/1">Charla sobre ciencia</Link>
            </h3>
            <p>Únete a nosotros para una charla fascinante sobre avances científicos.</p>
          </div>
        </li>
        <li className="event">
          <div className="event-date">15 de septiembre</div>
          <div className="event-details">
            <h3>
              <Link to="/event/2">Torneo de deportes</Link>
            </h3>
            <p>¡Participa en nuestro torneo anual de deportes y muestra tus habilidades!</p>
          </div>
        </li>
        {/* Agrega más eventos aquí */}
      </ul>
    </div>
  );
};

export default EventsComponent;
