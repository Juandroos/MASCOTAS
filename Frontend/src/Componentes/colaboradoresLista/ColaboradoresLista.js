import React from "react"
import "./colaboradoresLista.css"
import logo from '../../Fotos/Favicon.png';
import img from '../../Fotos/Kiara.jpg';

const ColaboradoresLista = () => {
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
                    <h2 className="text-center m-4 txt-white">Colaboradores</h2>
                    {/* Card 1 */}
                    <div class="card">
                        <div class="card-header bg-secondary">
                            Juan Alejandro Hernandez Cruz
                        </div>
                        <div class="card-body bg-black">
                            <blockquote class="blockquote mb-0">
                            <p>juan1alejandro1@gmail.com</p>
                            <footer class="blockquote-footer">Colaborador <cite title="Source Title"> Activo </cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    
                    <br/>
                    {/* Card 2 */}
                    <div class="card">
                        <div class="card-header bg-secondary">
                        Roberto Carlos Mas G??lvez
                        </div>
                        <div class="card-body bg-black">
                            <blockquote class="blockquote mb-0">
                            <p>roberto1carlos1@gmail.com</p>
                            <footer class="blockquote-footer">Colaborador <cite title="Source Title"> Activo </cite></footer>
                            </blockquote>
                        </div>
                    </div>

                    <br/>
                    {/* Card 3 */}
                    <div class="card">
                        <div class="card-header bg-secondary">
                        Jiovanny Francisco Morales Hern??ndez
                        </div>
                        <div class="card-body bg-black">
                            <blockquote class="blockquote mb-0">
                            <p>jiovanny11francisco1@gmail.com</p>
                            <footer class="blockquote-footer">Colaborador <cite title="Source Title"> Activo </cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>

                
                <div className="col-3 div-der mb-4">
                

                <ul class="list-group list-group-flush">
                    <li class="list-group-item lista-act">Configuraci??n 
                        <p className="card-text"><small className="text-muted">Aspectos generales de Configuraci??n.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Privacidad
                        <p className="card-text"><small className="text-muted">Terminos de servicio.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Accesibilidad
                        <p className="card-text"><small className="text-muted">A los diferentes  servicio</small></p>
                    </li>
                    <li class="list-group-item lista-act">Cambio de Constrase??a
                        <p className="card-text"><small className="text-muted">Modificar la constrase??a actual.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Enviar Comentario
                        <p className="card-text"><small className="text-muted">Alguna sugerencia</small></p>
                    </li>
                   
                    <li class="list-group-item lista-act">Cerrar Sesi??n
                        <p className="card-text"><small className="text-muted">Terminar la sesi??n actual</small></p>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>
         
        
    )
}

export default ColaboradoresLista
