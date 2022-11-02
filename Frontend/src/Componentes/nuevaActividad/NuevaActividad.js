import React, { useState } from "react"
import "./nuevaActividad.css"
// import axios from "axios"
// import {useHistory} from "react-router-dom"

const NuevaActividad = () => {
    // const historial = useHistory()

    const [ actividad, setactividad] = useState({
        titulo:"",
        resumen:"",
        direccion:"",
        descripcion:"",
        fecha:"",
        celular:"",
        organizador:"",
        correoElectronico:"",
        beneficio:""
    });  

    const handleChange = e =>{
        const {name, value} = e.target
        setactividad({
            ...actividad,
            [name]:value
        })
    }

    const url ="http://localhost:9002/"
    const registro = () =>{
        const {titulo, resumen, direccion, descripcion, fecha, celular, organizador, correoElectronico, beneficio} = actividad
        
        if( titulo &&  resumen && direccion && descripcion && fecha && celular && correoElectronico && beneficio){
            console.log("Enviada")
            // axios.post(url+"registro", actividad).then(res=> console.log(res))
        }else{
            console.log("La informacion no es valida")
        }
    }


    return (
        <div className="containe-fluid div-master">
            {/* {console.log("actividad", actividad)} */}
            <div className="row div-row">
                <div className="col-8 div-formulario">
                    <h2 className="text-center mb-2"> Crear una Actividad </h2>
                    <h6 className="text-center mb-5"> Las mismas seran desarrolladas para ayudar la casa Hogar
                    {/* <p className="text-danger" onClick={() => historial.push("/login")}>INICIAR SESIÓN</p> */}
                    </h6>
                    <form>
                        <div className="mb-4 row">
                            <label htmlFor="titulo" className="col-sm-4 col-form-label fw-bold">Titulo del Evento:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> * </abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="titulo" value={actividad.titulo} type="text" className="form-control input-actividad" id="titulo" placeholder="Caminata de Mascotas"  onChange={ handleChange }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="resumen" className="col-sm-4 col-form-label fw-bold">Resumen:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> * </abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="resumen" value={actividad.resumen} type="text" className="form-control input-actividad" id="resumen" placeholder="Colecta de Alimentos"  onChange={ handleChange }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="direccion" className="col-sm-4 col-form-label fw-bolder">Direccion:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="direccion" value={actividad.direccion} type="text" className="form-control input-actividad" id="direccion" placeholder="Col. Universidad Norte, segunda calle"  onChange={ handleChange }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="descripcion" className="col-sm-4 col-form-label fw-bolder">Descripcion de Area:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <select className="form-select input-actividad" id="descripcion" name="descripcion" value={actividad.descripcion}  onChange={ handleChange }>
                                    <option hidden>Selecciona una opcion</option>
                                    <option value="1">Campo abierto</option>
                                    <option value="2">Techada</option>
                                    <option value="3">Mixta</option>
                                </select>

                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="fecha" className="col-sm-4 col-form-label fw-bolder">Fecha del evento:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="fecha" value={actividad.fecha} type="date" className="form-control input-actividad" id="fecha"  onChange={ handleChange }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="celular" className="col-sm-4 col-form-label fw-bolder">Telefono del organizador:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="celular" value={actividad.celular} type="text" className="form-control input-actividad" id="celular" placeholder="9844-4518"  onChange={ handleChange }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="organizador" className="col-sm-4 col-form-label fw-bolder">Organizador del evento:</label>
                            <div className="col-sm-8">
                                <input name="organizador" value={actividad.organizador} type="text" className="form-control input-actividad" id="organizador" placeholder="Ricardo Maduro"  onChange={ handleChange }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="correoElectronico" className="col-sm-4 col-form-label fw-bolder">Correo Electronico
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="correoElectronico" value={actividad.correoElectronico} type="text" className="form-control input-actividad" id="correoElectronico" placeholder="juan@correo.com"  onChange={ handleChange }></input>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="beneficio" className="col-sm-4 col-form-label fw-bolder">Beneficio de:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="beneficio" value={actividad.beneficio} type="beneficio" className="form-control input-actividad" id="beneficio" placeholder="Nuestro Hogar de Mascotas" onChange={ handleChange }></input>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="col-6 mt-5 text-center margen-centrado">Al hacer clic en "Guardar actividad"</div>
                            {/* <button className="btn btn-lg btn-success mt-4 col-6 button-registro" onClick={registro}>Regístrate</button> */}
                            
                            <button className="btn btn-lg btn-success mt-4 col-6 button-registro" onClick={registro}>Guardar Actividad</button> 
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default NuevaActividad
