import React from 'react';
import Navbar from './Componentes/Landingpagina/Navbar';
import './App.css';
import Home from './Componentes/pages/Home';
import Mascotas from './Componentes/pages/Mascotas';
import Misionn from './Componentes/pages/Misionn';
import SignUp from './Componentes/pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./Componentes/LoginPage";
import ChangePassword from "./Componentes/ChangePassword";
import Registro from "./Componentes/registro/Registro";
import Confirmacion from './Componentes/confirmacion/Confirmacion';
import Historial from "./Componentes/Historial";
import CambiarContrasena from './Componentes/cambioContrasena/CambiarContrasena';


function App() {
  return (
    <>
      <Router>
       <Navbar />
       
       <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/mascotas' element={<Mascotas/>} />
      <Route path='/mision' element={<Misionn/>} />
      <Route path='/sign-up' element={<Registro/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>

      <Route path='/confirmacion' element={<Confirmacion/>}/>
      <Route path='/historial' element={<Historial/>}/>
      <Route path='/cambiarContrasena' element={<CambiarContrasena/>}/>
       </Routes>
      </Router>

    </>
  );
}

export default App;
