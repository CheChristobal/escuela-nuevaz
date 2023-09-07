import React, { useState } from 'react';
import { storage, database } from './firebase'; // Asegúrate de que la ruta sea correcta

function UploadFile() {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`uploads/${file.name}`);
        await fileRef.put(file);

        const url = await fileRef.getDownloadURL();
        setDownloadUrl(url);

        // Guardar la URL en Realtime Database
        const dbRef = database.ref('files');
        dbRef.push({ url });
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir archivo</button>
      {downloadUrl && <img src={downloadUrl} alt="Archivo subido" />}
    </div>
  );
}

export default UploadFile;
