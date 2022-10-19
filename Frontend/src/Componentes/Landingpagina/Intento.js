import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>NUESTRA MISIÓN Y VISIÓN COMO ALBERGUE DE ANIMALES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='FotosProyecto/vvv.png'
              text='NUEVO HOGAR dará nuevas oportunidades a los animalitos'
              label='MISION'
              path='/mision'
            />
            <CardItem
              src='FotosProyecto/mmm.png'
              text='NUEVO HOGAR siempre estará presente para ayudar'
              label='VISION'
              path='/mision'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
