import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from  '../../Fotos/Logo_2.png'
import foto from  '../../Fotos/user.png'
// import UserContext from '../../state/user/UserContext';

function Navbar() {
  useEffect(() => {
    userLS();
    showButton();
  }, []);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [userName, setuserName] = useState();
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // const { user, getUser } = useContext(UserContext)

  const loadUser = () =>{
    // console.log()
    if (localStorage.getItem('user') == null){window.location.href = "./login";}
    if (localStorage.getItem('user') != null){window.location.href = "./inicio";}
  }

  const userLS = () => {
    // console.log('navbar')
    if (localStorage.getItem('user') == null){
      setuserName('Usuario')
      // console.log(userActual.nombre)
    }else {
      const userActual = JSON.parse(localStorage.getItem('user'));
      setuserName(userActual.nombre)
    }
  }
  


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
            <li className='nav-item user'>
              <Link
                // to='/login'
                className='nav-links'
                onClick={ () => loadUser()}
              >
                <img src={ foto} className='photo-perfil'></img>
                {userName}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
