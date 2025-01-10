
//import './css/App.css';
import React from 'react';
import Navegacion from './componentes/Navegacion';
import Home from './componentes/Home';
import Formulario from './componentes/Formulario';
import Usuarios from './componentes/Usuarios';
import Error from './componentes/Error';
import FormEditar from './componentes/FormEditar';
import { Routes, Route } from 'react-router-dom';
import Productos from './componentes/Productos';
import Alta from './componentes/Alta';
import Contacto from './componentes/Contacto';
import Nosotros from './componentes/Nosotros';
import Login from './componentes/Login';
import Footer from './componentes/Footer';

function App() {
  return (

    <>

      <Navegacion />

      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/formulario' element={ <Formulario /> }></Route>
        <Route path='/usuarios' element={ <Usuarios /> }></Route>
        <Route path='/editar/:id' element={ <FormEditar /> }></Route>
        <Route path='*' element={ <Error /> }></Route>
        <Route path="/productos" element={<Productos />} />
        <Route path="/alta" element={<Alta />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>


  );
}

export default App;
