import React,{ useContext }from 'react';
import "./inicio.css"
import logo from '../../Fotos/Favicon.png';
import img from '../../Fotos/Kiara.jpg';
import pet1 from '../../Fotos/Magnus.jpeg'
import pet2 from '../../Fotos/Max.png'
import Link from '@mui/material/Link';

const Inicio = () => {

    const onExit = () =>{
        localStorage.clear();
        window.location.href = "./";
    }

    return(
        
        <div className="containe-fluid div-inicio">
            <div className="row">
                <div className="col-3 div-izq">
                    <div className="text-center fondo-logo">
                <img src={logo} alt="Logo" className="logo-inicio"/>
                </div><br/>
                <ul class="list-group list-group-flush">
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./editarInfoPersonal" >
                    <li class="list-group-item lista-color row"><img src={img} alt="Usuario" className="logo-user"/> Editar perfil</li>
                    </Link>
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./inicio" >
                    <li class="list-group-item lista-color"><i class="fa-solid fa-house-chimney font-icon"></i> Inicio </li>
                    </Link>
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./nuevaActividad">
                    <li class="list-group-item lista-color"><i class="fa-solid fa-hashtag font-icon"></i> Actividades</li>
                    </Link>
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./informacionPersonal" >
                    <li class="list-group-item lista-color"><i class="fa-regular fa-user font-icon"></i>Perfil</li>
                    </Link>
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./historial" >
                    <li class="list-group-item lista-color"><i class="fa-solid fa-paw font-icon"></i>Adopciones</li>
                    </Link>
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./preguntas" >
                    <li class="list-group-item lista-color"><i class="fa-solid fa-question font-icon"></i>Preguntas</li>
                    </Link>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-info font-icon"></i>Informacion</li>
                    <button Style="background-color: transparent; text-align: left;" onClick={ () => onExit()}>
                        <li class="list-group-item lista-color"><i class="fa-solid fa-right-from-bracket font-icon"></i>Cerrar Sesion</li>
                    </button>
                </ul>
                </div>
                <div className="col-6 div-center">
                    <div className="card mb-3 border-primary color-card">
                        <img src={pet1} className="card-img-top img-mascotas" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Cachorros</h5>
                            <p className="card-text">Este amigo fue encontrado a la altura de Col. Las Brisas, en una tarde lluviosa bajo el puente.</p>
                            <p className="card-text"><small className="text-muted">Lunes 25 de septiembre</small></p>
                        </div>
                    </div>

                    <div className="card mb-3 border-primary color-card">
                        <img src={pet2} className="card-img-top img-mascotas" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Feliciti</h5>
                            <p className="card-text">Esta amiga fue encontrado a la altura de Col. del Carrizal, por unos  jovenes estudiantes de colegio. La misma se encontraba mal alimentada</p>
                            <p className="card-text"><small className="text-muted">Lunes 25 de agosto</small></p>
                        </div>
                    </div>
                </div>

                
                <div className="col-3 div-der">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Buscar</span>
                    <input type="text" className="form-control" placeholder="Actividades"/>
                </div><br/>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item lista-act">Entrenamiento 
                        <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./entrenamiento" >
                        <p className="card-text"><small className="text-muted">Que hacer con nuestro nuevo amigo.</small></p>
                        </Link>
                    </li>
                    <li class="list-group-item lista-act">Alimentacion
                        <p className="card-text"><small className="text-muted">Alimentos recomendados</small></p>
                    </li>
                    <li class="list-group-item lista-act">Recoleccion
                        <p className="card-text"><small className="text-muted">Voluntario en actividad de recaudacion</small></p>
                    </li>
                    <li class="list-group-item lista-act">Adopciones
                        <p className="card-text"><small className="text-muted">Beneficios de adoptar</small></p>
                    </li>
                    <li class="list-group-item lista-act">Fotos Actividades Realizadas
                        <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./Actsss" >
                        <p className="card-text"><small className="text-muted">Ven y sumate a nuestro programa</small></p>
                        </Link>
                    </li>
                    <li class="list-group-item lista-act">Veterinarios
                        <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./listadoveterinarios" >
                        <p className="card-text"><small className="text-muted">Listado de veterinarios...</small></p>
                        </Link>
                    </li>
                    <li class="list-group-item lista-act">Desaparecidos
                        <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./desaparecidos" >
                        <p className="card-text"><small className="text-muted">Mascotas desaparecidas.</small></p>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Inicio