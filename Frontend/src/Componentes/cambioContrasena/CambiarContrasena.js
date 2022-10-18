import React from "react"
import "./cambiarContrasena.css"
import logo from '../../Fotos/Logo_2.png';

const CambiarContrasena = () => {
    return(
        <div className="containe-fluid div-cambio-contrasena">
                <div className="row">
                    
                    <div className="col-6 cambio-contrasena text-center">
                    <img src={logo} alt="Logo" className="logo-cambio"/>
                    <h2 className="titulo-contrasena">Actualización de contraseña</h2>
                    <br/>
                    <form>
                        <div className="mb-3">
                            <label for="contrasenaAnterior" className="form-label">Ingrese su contraseña actual.</label>
                            <input type="email" className="form-control" id="contrasenaAnterior" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">No debes compartir tu contraseña con nadie.</div>
                        </div>
                        <div className="mb-3">
                            <label for="contrasenaNueva" className="form-label">Ingrese su nueva contraseña.</label>
                            <input type="password" className="form-control" id="contrasenaNueva"/>
                        </div>
                        <div className="mb-3">
                            <label for="contrasenaValidacion" className="form-label">Repita su nueva contraseña.</label>
                            <input type="password" className="form-control" id="contrasenaValidacion"/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary btn-success btn-lg m-3">Actualizar</button>
                        </form>
                    </div>
                </div>    
        </div>
         
        
    )
}

export default CambiarContrasena