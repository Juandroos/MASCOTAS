import React from 'react'
import './card.css'

const mascota = (props) => {
     return (
               <div className='card shadow'>
                    <img src={props.imagen} className='card-img-top'></img>
                         <h5 className="texto">{props.nombre}</h5>

                         {/* <div className='texto'>Edad: {props.edad}</div> */}
                         {/* <div className='texto'>Raza: {props.raza}</div> */}
                         {/* <div className='texto'>Sexo: {props.sexo}</div> */}
                         {/* <div className='texto'>Descripción: {props.descripcion}</div> */}
               </div>
     )    
}

export default mascota