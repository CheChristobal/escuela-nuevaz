import React, { useState, useEffect } from 'react';
import { database } from '../firebase'; // Asegúrate de que la ruta sea correcta

function AdminPanel() {
  const [dataList, setDataList] = useState([]);
  const [newData, setNewData] = useState('');

  // Cargar datos desde Realtime Database al cargar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = database.ref('data'); // Cambia la referencia según tu estructura
        const snapshot = await dbRef.once('value');

        const data = [];
        snapshot.forEach((childSnapshot) => {
          data.push({ id: childSnapshot.key, value: childSnapshot.val() });
        });

        setDataList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Agregar un nuevo dato a Realtime Database
  const handleAddData = async () => {
    try {
      const dbRef = database.ref('data'); // Cambia la referencia según tu estructura
      await dbRef.push(newData);
      setNewData('');

      // Actualizar la lista
      const snapshot = await dbRef.once('value');
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push({ id: childSnapshot.key, value: childSnapshot.val() });
      });

      setDataList(data);
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <h2>Administrar Datos</h2>
      <div>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="Nuevo dato"
        />
        <button onClick={handleAddData}>Agregar</button>
      </div>
      <ul>
        {dataList.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
