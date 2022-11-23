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
    // console.log(fotoPerfil)
  }, []);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [userName, setuserName] = useState();
  const [fotoPerfil, setfotoPerfil] = useState();
  // const { user, getUser } = useContext(UserContext)
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  // Redireccionar dependiendo si el usuario esta o no logeado
  const loadUser = () =>{
    if (userName == null){window.location.href = "./login";}
    if (userName != null){window.location.href = "./inicio";}
  }

  const userLS = () => {
      const id = JSON.parse(localStorage.getItem('user'))
      // console.log(fotoPerfil)

    fetch(`http://localhost:7777/cliente/${id}`, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
    })
      .then(res => res.json())
      .then(data => {
          setuserName(data[0].nombre)
          setfotoPerfil(data[0].fotoPerfil)
          // console.log(data[0].fotoPerfil)
      })
      .catch(res => console.log(res));

    // if (localStorage.getItem('user') !== null){
    //   const userActual = JSON.parse(localStorage.getItem('user'));
    //   setuserName(userActual.nombre)
    //   setfotoPerfil(userActual.fotoPerfil)
    // }
  }
  
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
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
                className='nav-links'
                onClick={ () => loadUser()}
              >
                {(() => {
                    if (userName === undefined){
                      return (
                        <div>
                          <img src={foto} className='photo-perfil'></img>
                          Usuario
                        </div>)
                    }
                    else if (userName !== undefined) {
                      if (fotoPerfil === undefined){
                        return (
                          <div>
                            <img src={foto} className='photo-perfil'></img>
                            {userName}
                          </div>)
                      }else{
                        return(
                          <div>
                            <img src={fotoPerfil} className='photo-perfil'></img>
                            {userName}
                          </div>)
                      }
                    }
                })()}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
