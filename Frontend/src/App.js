import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Banner from "./Componentes/Banner";
import Mision from "./Componentes/Mision";
import Presentacion from "./Componentes/Presentacion";
import Galeria from "./Componentes/Galeria";
import Layout from "./Componentes/Layout";
import LoginPage from "./Componentes/LoginPage";
import ChangePassword from "./Componentes/ChangePassword";
import Registro from "./Componentes/registro/Registro";

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
        </Routes>
      </BrowserRouter>
  );
}

export default App;
