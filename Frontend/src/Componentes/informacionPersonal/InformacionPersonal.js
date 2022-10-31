import React from "react"
import "./informacionPersonal.css"
import logo from '../../Fotos/Favicon.png';
import img from '../../Fotos/Kiara.jpg';

const InformacionPersonal = () => {
    return(
        
        <div className="containe-fluid div-inicio">
            <div className="row">
                <div className="col-3 div-izq">
                    <div className="text-center fondo-logo">
                <img src={logo} alt="Logo" className="logo-inicio"/>
                </div><br/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item lista-color row"><img src={img} alt="Usuario" className="logo-user"/> Juan</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-house-chimney font-icon"></i> Inicio </li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-hashtag font-icon"></i> Actividades</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-paw font-icon"></i>Adopciones</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-question font-icon"></i>Preguntas</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-info font-icon"></i>Informacion</li>
                </ul>
                </div>
                <div className="col-6 div-center-info">
                    <h2 className="text-center m-4 txt-white">Información Personal</h2>
                <form>
                        <div className="mb-4 row">
                            <label htmlFor="nombre" className="col-sm-4 col-form-label fw-bold">Nombre Completo:
                            </label>
                            <div className="col-sm-8">
                                <input name="nombre" /* value={usuario.nombre} */ type="text" className="form-control input-infoPersonal" id="nombre" value="Jose Trinidad Reyes" ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="identidad" className="col-sm-4 col-form-label fw-bold">N. Identidad <abbr title="Documento Nacional de Identificacion"> DNI </abbr>:
                            </label>
                            <div className="col-sm-8">
                                <input name="identidad" /* value={usuario.identidad} */ type="text" className="form-control input-infoPersonal" id="identidad" value="0808 1996 00004"  ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="direccion" className="col-sm-4 col-form-label fw-bolder">Direccion:
                                
                            </label>
                            <div className="col-sm-8">
                                <input name="direccion"/*  value={usuario.direccion} */ type="text" className="form-control input-infoPersonal" id="direccion" value="Col. Universidad Norte, segunda calle"  ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="sexo" className="col-sm-4 col-form-label fw-bolder">Sexo:
                                
                            </label>
                            <div className="col-sm-8">
                                <select className="form-select input-infoPersonal" id="sexo" name="sexo" /* value={usuario.sexo}  */>
                                    <option hidden>Selecciona una opcion</option>
                                    <option value="1">Hombre</option>
                                    <option value="2">Mujer</option>
                                    <option value="3">Prefiero no decirlo</option>
                                </select>

                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="fNacimiento" className="col-sm-4 col-form-label fw-bolder">Fecha Nacimiento:
                                
                            </label>
                            <div className="col-sm-8">
                                <input name="fNacimiento"/*  value={usuario.fNacimiento}  */type="date" className="form-control input-infoPersonal" id="fNacimiento" ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="celular" className="col-sm-4 col-form-label fw-bolder">Telefono Celular:
                                
                            </label>
                            <div className="col-sm-8">
                                <input name="celular" /* value={usuario.celular} */ type="text" className="form-control input-infoPersonal" id="celular" value="9844-4518"  ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="telFijo" className="col-sm-4 col-form-label fw-bolder">Telefono Fijo:</label>
                            <div className="col-sm-8">
                                <input name="telFijo" /* value={usuario.telFijo}  */type="text" className="form-control input-infoPersonal" id="telFijo" value="2244-6567" ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="correoElectronico" className="col-sm-4 col-form-label fw-bolder">Correo Electronico
                                
                            </label>
                            <div className="col-sm-8">
                                <input name="correoElectronico" /* value={usuario.correoElectronico} */ type="text" className="form-control input-infoPersonal" id="correoElectronico" value="juan@correo.com"  ></input>
                            </div>
                        </div>

                        

                        <div className="text-center">
                                                      
                            <button className="btn btn-lg btn-success mt-4 col-6 button-editar" >Editar Información</button> 
                        </div>

                    </form>
                </div>

                
                <div className="col-3 div-der mb-4">
                

                <ul class="list-group list-group-flush">
                    <li class="list-group-item lista-act">Configuración 
                        <p className="card-text"><small className="text-muted">Aspectos generales de Configuración.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Privacidad
                        <p className="card-text"><small className="text-muted">Terminos de servicio.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Accesibilidad
                        <p className="card-text"><small className="text-muted">A los diferentes  servicio</small></p>
                    </li>
                    <li class="list-group-item lista-act">Cambio de Constraseña
                        <p className="card-text"><small className="text-muted">Modificar la constraseña actual.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Enviar Comentario
                        <p className="card-text"><small className="text-muted">Alguna sugerencia</small></p>
                    </li>
                   
                    <li class="list-group-item lista-act">Cerrar Sesión
                        <p className="card-text"><small className="text-muted">Terminar la sesión actual</small></p>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>
         
        
    )
}

export default InformacionPersonal