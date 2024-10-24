import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import AreaInterna from './pages/interno/AreaInterna';
import Formularios from './pages/interno/Formularios';
import GestionClientes from './pages/interno/GestionClientes';
import ProyectosInternos from './pages/interno/ProyectosInternos';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/interno" element={<AreaInterna />} />
          <Route path="/interno/formularios" element={<Formularios />} />
          <Route path="/interno/clientes" element={<GestionClientes />} />
          <Route path="/interno/proyectos" element={<ProyectosInternos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;