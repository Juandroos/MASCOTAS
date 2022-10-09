import Banner from "./Componentes/Banner";
import Mision from "./Componentes/Mision";
import Presentacion from "./Componentes/Presentacion";
import Galeria from "./Componentes/Galeria";
import Layout from "./Componentes/Layout";

function App() {
  return (
   <Layout>
    <Banner/>
    <Mision/>
    <Presentacion/>
    <Galeria/>
   </Layout>
  );
}

export default App;
