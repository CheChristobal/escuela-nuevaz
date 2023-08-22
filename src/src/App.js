import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuienesSomos from './components/QuienesSomos';
import AlumnosDestacados from './components/AlumnosDestacados';
import Inicio from './components/Inicio';
import Contacto from './components/EventsComponent ';
import NuestraMision from './components/NuestraMision';
import Vision from './components/Vision';
import Sellos from './components/Sellos';
import Valores from './components/Valores';
import Contacto from './components/Contacto';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Inicio/>

      <EventsComponent/>

      <QuienesSomos/>

      <AlumnosDestacados/>

      <NuestraMision/>

      <Vision/>
      
      <Sellos/>

      <Valores/>

      <Contacto/>

      <Footer />
    </div>
  );
}

export default App;
