import './usuario.css'
import React, { useState, useEffect } from 'react'
import Body from './body/Body'
import fotoPerfil from '../../Fotos/account.png'

const Usuario = () => {
     const [option, setOption] = useState();
     const [data, setData] = useState();
     const id = JSON.parse(localStorage.getItem('user'));
     // const usuario = JSON.parse(localStorage.getItem('user'));


     useEffect(() => {
          fetch(`http://localhost:7777/cliente/${id}`, {
               method: 'GET',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          })
          .then(res => res.json())
          .then(data => {
               setData(data)
          })
          .catch(res => console.log(res));
     },[]);


     const selectOption = (opt) =>{
          setOption(opt)
          // console.log(data)
     }


     const cerrarSesion = () =>{
          localStorage.clear();
          window.location.href = "./";
     }

     return (
          <div className='containe-fluid fondo'>
               <div className='flex'>
                    <div className='menu'>
                         <ul className='nav flex-column'>
                              <button className='btn option' onClick={ () => selectOption("actividades")}>
                                   <i className='fa-regular fa-clipboard font-icon'></i>
                                   <p>Actividades</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("perfil")}>
                                   <i className="fa-regular fa-user font-icon"></i>
                                   <p>Perfil</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("historial")}>
                                   <i className="fa-solid fa-paw font-icon"></i>
                                   <p>Historial</p>
                              </button>

                              <button className='btn option' onClick={ () => cerrarSesion()}>
                                   <i className="fa-solid fa-right-from-bracket font-icon"></i>
                                   <p>Cerrar Sesion</p>
                              </button>
                         </ul>
                    </div>
                    <Body option={option} info={data}/>
               </div>
          </div>
          
          
     )
}

export default Usuario