import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Videos/mascotass4.mp4' autoPlay loop muted />
      <h1>MASCOTAS</h1>
      <p>Merecen una segunda oportunidad</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'

 
        >
          INICIAR SESION
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
