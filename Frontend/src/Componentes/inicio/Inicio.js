import React from "react"
import "./inicio.css"
import logo from '../../Fotos/Favicon.png';

const Inicio = () => {
    return(
        <div className="containe-fluid div-inicio">
            <div className="row">
                <div className="col-3 div-izq">
                    <div className="text-center fondo-logo">
                <img src={logo} alt="Logo" className="logo-inicio"/>
                </div>
                
                </div>
                <div className="col-6 div-center">j</div>
                <div className="col-3 div-der">j</div>
            </div>
            
        </div>
         
        
    )
}

export default Inicio