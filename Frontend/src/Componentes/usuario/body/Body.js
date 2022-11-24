import React from 'react'
import './body.css'

// Componentes
import Actividades from '../pages/actividades/Actividades'
import Perfil from '../pages/perfil/Perfil'
import Historial from '../pages/historial/Historial'


const Body = (props) => {
     return (
          <div className='body'>
               {(() => {
                    switch (props.option) {
                         case 'actividades':
                              return <Actividades/>
                         case 'perfil':
                              return <Perfil user={props.info}/>
                         case 'historial':
                              return <Historial/>
                         default:
                              return <Actividades/>
                    }
               })()}
          </div>
     )
}

export default Body