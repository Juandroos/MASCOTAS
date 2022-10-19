import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Banner from "./Componentes/Banner";
import Mision from "./Componentes/Mision";
import Presentacion from "./Componentes/Presentacion";
import Galeria from "./Componentes/Galeria";
import Layout from "./Componentes/Layout";
import LoginPage from "./Componentes/LoginPage";
import ChangePassword from "./Componentes/ChangePassword";
import Registro from "./Componentes/registro/Registro";
import Confirmacion from './Componentes/confirmacion/Confirmacion';
import Historial from "./Componentes/Historial";
import CambiarContrasena from './Componentes/cambioContrasena/CambiarContrasena';
import Inicio from './Componentes/inicio/Inicio'
import Login from './Componentes/login/Login'
function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={
            <Layout>
            <Banner/>
            <Mision/>
            <Presentacion/>
            <Galeria/>
      </Layout>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/confirmacion' element={<Confirmacion/>}/>
      <Route path='/historial' element={<Historial/>}/>
      <Route path='/cambiarContrasena' element={<CambiarContrasena/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/inicioSesion' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
