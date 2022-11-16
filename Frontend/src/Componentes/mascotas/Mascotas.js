import React, {useState, useEffect} from 'react'
import Mascota from './mascota/Card'
import './mascotas.css'

const Mascotas = () => {
     const [mascotas, setMascotas] = useState([]);

     useEffect(() => {
          // Obtenermos las mascotas de la base de datos
          fetch("http://localhost:7777/mascota", {
               method: 'GET',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          })
               .then(res => res.json())
               .then(data => {
                    setMascotas(data)
               })
               .catch(res => console.log(res));
     });

     const pet = (mascotaDetalles) => {
          localStorage.setItem('mascota', JSON.stringify(mascotaDetalles));
          window.location.href = "./modificarmascota";
     }

     return (
          <div className='container'>
               <br></br>
               <div className='info-mascotas'>
                    Actualizar Información
               </div><br></br>
               <div className='row'>
                         {mascotas.map(mascota =>{
                              return <div className='col-lg-3 col-md-5 col-12' onClick={ () => pet(mascota)}>
                                        <Mascota 
                                        key=           {mascota._id}
                                        imagen=        {mascota.imagen} 
                                        nombre=        {mascota.nombre}
                                        edad=          {mascota.edad}
                                        raza=          {mascota.raza}
                                        sexo=          {mascota.sexo}
                                        descripcion=   {mascota.descripcion}
                                   />
                                   {/* <button onSubmit={pet(mascota)}>Actualizar</button> */}
                                   </div>
                         })}
                    
               </div>
          </div>



     )
}









export default Mascotas