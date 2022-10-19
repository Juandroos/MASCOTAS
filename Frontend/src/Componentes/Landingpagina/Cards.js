import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>NUESTROS CONSENTIDOS EN BUSCA DE UNA FAMILIA</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='FotosProyecto/Max.png'
              text='Hasta que no hayas amado a un animal, una parte de tu alma permanecera dormida'
              label='MAX'
              path='/mascotas'
            />
            <CardItem
              src='FotosProyecto/BugsLola.jpg'
              text='Hasta que no hayas amado a un animal, una parte de tu alma permanecera dormida'
              label='BUGS & LOLA'
              path='/mascotas'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='FotosProyecto/PanaRabbit.jpeg'
              text='La mirada de una mascota, es el mejor espejo donde puedes comprobar, la grandeza de tu alma'
              label='PANA RABBIT'
              path='/mascotas'
            />
            <CardItem
              src='FotosProyecto/Danna.jpg'
              text='La mirada de una mascota, es el mejor espejo donde puedes comprobar, la grandeza de tu alma'
              label='Danna'
              path='/mascotas'
            />
            <CardItem
              src='FotosProyecto/Kiara.jpg'
              text='La mirada de una mascota, es el mejor espejo donde puedes comprobar, la grandeza de tu alma'
              label='KIARA'
              path='/mascotas'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
