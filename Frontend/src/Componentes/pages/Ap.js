import WSPGallery from '../Listadovet/WSPGallery';
import lis1 from '../../listvete/lis1.jpg'
import lis2 from '../../listvete/lis2.jpg'
import lis3 from '../../listvete/lis3.jpg'
import lis4 from '../../listvete/lis4.jpg'
import lis5 from '../../listvete/lis5.jpg'
import lis6 from '../../listvete/lis6.jpg'
import lis7 from '../../listvete/lis7.jpg'
import lis8 from '../../listvete/lis8.jpg'
import lis9 from '../../listvete/lis9.jpg'
import lis10 from '../../listvete/lis10.jpg'
import lis11 from '../../listvete/lis11.jpg'
import lis12 from '../../listvete/lis12.jpg'
import lis13 from '../../listvete/lis13.jpg'
import Footer from '../Landingpagina/Footer';





function Ap() {

  const galleryImages = [
    {
      img: lis1
    },
    {
      img: lis2
    },
    {
      img: lis3
    },
    {
      img: lis4
    },
    {
      img: lis5
    },
    {
      img: lis6
    },
    {
      img: lis7
    },
    {
      img: lis8
    },
    {
      img: lis9
    },
    {
      img: lis10
    },
    {
      img: lis11
    },
    {
      img: lis12
    },
    {
      img: lis13
    }
  ]

  return (
    <>
    <div className="container App">

    <br /><br />
    <h2>LISTADO DE MEDICOS VETERINARIOS REGISTRADOS (HONDURAS)</h2>
    <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />
     </div>

     </>
  );
}

export default Ap;
