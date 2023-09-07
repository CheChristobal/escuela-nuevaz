import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const { eventId } = useParams();

  // Supongamos que tienes un arreglo de eventos con detalles, donde eventId es el índice del evento seleccionado
  const eventos = [
    {
      id: 1,
      titulo: 'Charla sobre ciencia',
      fecha: '10 de septiembre',
      descripcion: 'Únete a nosotros para una charla fascinante sobre avances científicos.',
      imagenes: ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'], // Agrega las rutas de tus imágenes
    },
    {
      id: 2,
      titulo: 'Torneo de deportes',
      fecha: '15 de septiembre',
      descripcion: '¡Participa en nuestro torneo anual de deportes y muestra tus habilidades!',
      imagenes: ['imagen4.jpg', 'imagen5.jpg', 'imagen6.jpg'], // Agrega las rutas de tus imágenes
    },
    // Agrega más eventos aquí
  ];

  // Encuentra el evento correspondiente al eventId
  const eventoSeleccionado = eventos.find((evento) => evento.id === parseInt(eventId));

  if (!eventoSeleccionado) {
    return <div>Evento no encontrado</div>;
  }

  return (
    <div className="event-detail">
      <h2>{eventoSeleccionado.titulo}</h2>
      <p>Fecha: {eventoSeleccionado.fecha}</p>
      <p>{eventoSeleccionado.descripcion}</p>
      <div className="imagen-container">
        {eventoSeleccionado.imagenes.map((imagen, index) => (
          <img key={index} src={imagen} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default EventDetailPage;
