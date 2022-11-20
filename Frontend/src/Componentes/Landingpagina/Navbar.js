import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from  '../../Fotos/Logo_2.png'
import foto from  '../../Fotos/user.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* NUEVO HOGAR */}
            {/* <i class='fab fa-typo3' /> */}
            <img src={logo}></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/mascotas'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mascotas
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/mision'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nosotros
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/inicio'
                className='nav-links'
                onClick={closeMobileMenu}
              >Usuario</Link>
            </li> */}

            <li className='nav-item user'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <img src={foto} className='photo-perfil'></img>
                Usuario
              </Link>
            </li>

            {/* <li class="nav-item dropdown">
              <a class="nav-links dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Usuario
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/login">Iniciar Sesion</a></li>
                <li><a class="dropdown-item" href="/sign-up">Registrarme</a></li>
              </ul>
            </li> */}

            {/* <li className='nav-item'>
              <Link
                to='/registro'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                prueba
              </Link>
            </li> */}
          </ul>
          {/* {<Link to ='/sign-up' ><button className='btn-mobile' buttonStyle='btn--outline'>REGISTRARSE</button></Link>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
