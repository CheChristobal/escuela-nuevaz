import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarouselComponent from './components/CarouselComponent';
import QuienesSomos from './components/QuienesSomos';
import Inicio from './components/Inicio';
import EventsComponent from './components/EventsComponent';
import NuestraMision from './components/NuestraMision';
import Vision from './components/Vision';
import Sellos from './components/Sellos';
import Valores from './components/Valores';
import Contacto from './components/Contacto';
import ListaProfesores from './components/ListaProfesores';
import DocumentList from './components/DocumentList'
import Headers from './components/Header'



function App() {
  return (
    <div className="App">
      <Headers/>
      
      <Navbar />

      <Inicio/>

      <CarouselComponent/>

      <EventsComponent/>

      <QuienesSomos/>

      <ListaProfesores/>

      <NuestraMision/>

      <Vision/>
      
      <Sellos/>

      <Valores/>

      <DocumentList/>

      <Contacto/>

      <Footer />

    </div>
  );
}

export default App;
