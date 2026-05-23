import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import TablaInfo from './components/TablaInfo';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Nosotros />
      <Servicios />
      <Galeria />
      <TablaInfo />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;