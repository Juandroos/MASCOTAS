import React from 'react';
import Navbar from './Componentes/Landingpagina/Navbar';
import './App.css';
import Home from './Componentes/pages/Home';
import Mascotas from './Componentes/pages/Mascotas';
import MascotasAdmin from './Componentes/mascotas/Mascotas';
import Misionn from './Componentes/pages/Misionn';
import SignUp from './Componentes/pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./Componentes/loginpage/LoginPage";
import ChangePassword from "./Componentes/ChangePassword";
import Registro from "./Componentes/registro/Registro";
import Confirmacion from './Componentes/confirmacion/Confirmacion';
import Historial from "./Componentes/historial/Historial";
import CambiarContrasena from './Componentes/cambioContrasena/CambiarContrasena';
import Inicio from "./Componentes/inicio/Inicio";
import InformacionPersonal from "./Componentes/informacionPersonal/InformacionPersonal";
import EditarInfoPersonal from './Componentes/editarInfoPersonal/EditarInfoPersonal';
import Nuevamascota from './Componentes/nuevaMascota/Nuevamascota';
import NuevaActividad from './Componentes/nuevaActividad/NuevaActividad';
import ModificarMascota from './Componentes/modificarMascota/ModificarMascota';
import ModificarActividad from './Componentes/modificarActividad/ModificarActividad';
import ColaboradorLista from './Componentes/colaboradoresLista/ColaboradoresLista';
import ColaboradorBuscar from './Componentes/colaboradorBuscar/ColaboradorBuscar'
import Actss from './Componentes/pages/Actss';
import Desaparecidoss from './Componentes/pages/Desaparecidoss';
import Questions from './Componentes/pages/Questions'
import Usuario from './Componentes/usuario/Usuario'
import Ap from './Componentes/pages/Ap'
import Ejecutar from './Componentes/Entrenamiento/Ejecutar';
import WSPGallery from './Componentes/Listadovet/WSPGallery';

function App() {
  return (
      <>
        <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/mascotas' element={<Mascotas/>} />
            <Route path='/mascotasAdmin' element={<MascotasAdmin/>} />
            <Route path='/mision' element={<Misionn/>} />
            <Route path='/sign-up' element={<Registro/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/changepassword' element={<ChangePassword/>}/>
            <Route path='/confirmacion' element={<Confirmacion/>}/>
            <Route path='/historial' element={<Historial/>}/>
            <Route path='/cambiarContrasena' element={<CambiarContrasena/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/informacionPersonal' element ={<InformacionPersonal/>}/>
            <Route path='/editarInfoPersonal' element ={<EditarInfoPersonal/>}/>
            <Route path='/nuevamascota' element ={<Nuevamascota/>}/>      
            <Route path='/nuevaActividad' element ={<NuevaActividad/>}/>
            <Route path='/modificaractividad' element ={<ModificarActividad/>}/>
            <Route path='/modificarmascota' element ={<ModificarMascota/>}/>
            <Route path='/colaboradorLista' element ={<ColaboradorLista/>}/>
            <Route path='/colaboradorBuscar' element ={<ColaboradorBuscar/>}/>
            <Route path='/Actsss' element ={<Actss/>}/>
            <Route path='/desaparecidos' element ={<Desaparecidoss/>}/>
            <Route path='/preguntas' element ={<Questions/>}/>
            <Route path='/usuario' element ={<Usuario/>}/>
            <Route path='/listadoveterinarios' element ={<Ap/>}/>
            <Route path='/Entrenamiento' element ={<Ejecutar/>}/>

          </Routes>
      </Router>
    </>
  );
}

export default App;
