import React, { useState } from 'react';

const EventForm = ({ event, onSave }) => {
  const [editedEvent, setEditedEvent] = useState(event);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({ ...editedEvent, [name]: value });
  };

  const handleSave = () => {
    onSave(editedEvent);
  };

  return (
    <div>
      <label>Fecha:</label>
      <input type="text" name="date" value={editedEvent.date} onChange={handleChange} />
      <label>Título:</label>
      <input type="text" name="title" value={editedEvent.title} onChange={handleChange} />
      <label>Descripción:</label>
      <textarea name="description" value={editedEvent.description} onChange={handleChange} />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default EventForm;
