import React from "react"
import "./confirmacion.css"
import logo from '../../Fotos/Logo_2.png';

const Confirmacion = () => {
    return(
        <div className="containe-fluid div-confirmacion">
            <div className="div-confirmacion-front">
            <div className="div-informacion col-8">
            <img src={logo} alt="Logo" className="logo"/>
            <h1 className="txt-white text-center text-uppercase titulo-principal">Casi terminamos...</h1>
            <h5 className="text-center ">Verifica tu correo electrónico, con el correo que te enviamos a tu bandeja de entrada o en la carpeta de spam.</h5>
            <div className="text-center"><br/>
                <button class="btn btn-primary text-center button-confirmacion" type="button">Ir a pagina de inicio</button>
            </div>
            </div>
            </div>
            
        </div>
         
        
    )
}

export default Confirmacion