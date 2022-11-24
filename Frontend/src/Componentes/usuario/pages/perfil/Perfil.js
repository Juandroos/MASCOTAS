import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './perfil.css';
import foto from '../../../../Fotos/account.png'


export default function Perfil(props) {
     const user = props.user
     const [imagen, setimagen] = useState(user.fotoPerfil);
     const id = JSON.parse(localStorage.getItem('user'));

  // Capturar Imagen y convertirla a Base64
     const convertirImagen = (e) => {
          let reader = new FileReader();
          reader.readAsDataURL(e.target.files[0])
          reader.onload = () => {
               // previsualizacion (reader.result)
               // console.log(reader.result);
               setimagen(reader.result)
          } 
     };

  // Actualizacion de la informacion de la mascota y Conexion a la base de datos
     const actualizarInformacion = (event) => {
          const data = new FormData(event.currentTarget);
          const usuarioForm = {
               nombre: data.get('nombre'),
               identidad: data.get('identidad'),
               celular: data.get('celular'),
               direccion: data.get('direccion'),
               fechaNacimiento: data.get('fechaNacimiento'),
               sexo: data.get('sexo'),
               fotoPerfil: imagen
          }
          // console.log(`http://localhost:7777/cliente/actualizar/${id}`)
          // event.preventDefault();

          fetch(`http://localhost:7777/cliente/actualizar/${id}`, {
               method: 'PUT',
               body: JSON.stringify(usuarioForm),
               headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
               }
               })
          .then(res => res.json())
          .then(data => {
               // console.log(data)
               alert("Usuario actualizado con exito, Los datos se actualizaran cuando vuelva a iniciar Sesion")
               // window.location.href = "./mascotasAdmin"; 
          })
          .catch(res => console.log(res));
          event.preventDefault();
     };

     return (
          <div className="containe-fluid div-perfil">
          <p className='titulo'>Informacion de Perfil</p>
          <hr></hr>
          <Container component="main" maxWidth="xs">
               <CssBaseline/>
               <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                    >
                    <Box component="form" noValidate onSubmit={actualizarInformacion} sx={{ mt: 3 }}>
                         <Grid container spacing={2} className="contenedor">
                         
                              <Grid  item xs={12} >
                                   <div className="container-fluid">
                                   <div className='fotoPerfil'>
                                        <img className="fotoPerfil" src={imagen || foto}></img>
                                        <br></br>
                                        <label className="btn btn-warning">
                                             <span>Actualizar Foto</span>
                                             <input hidden type="file" multiple onChange={convertirImagen}></input>
                                        </label><br></br>
                                   </div>
                                   </div>
                              </Grid>

                              <Grid item xs={12}>
                                   <TextField
                                        className = "textField"
                                        autoComplete="given-name"
                                        variant="outlined"
                                        defaultValue={user.nombre}
                                        name="nombre"
                                        required
                                        fullWidth
                                        id="Nuevo Nombre"
                                        label="Nombre"
                                        autoFocus
                                   />
                              </Grid>

                              <Grid item xs={12}>
                                   <TextField
                                        className = "textField"
                                        autoComplete="given-name"
                                        variant="outlined"
                                        defaultValue={user.identidad}
                                        name="identidad"
                                        required
                                        multiline
                                        fullWidth
                                        id="Identidad"
                                        label="Identidad"
                                        autoFocus
                                   />
                              </Grid>

                              <Grid item xs={12}>
                                   <TextField
                                        className = "textField" 
                                        variant="outlined"
                                        defaultValue={user.celular}
                                        name="celular"
                                        required
                                        fullWidth
                                        id="Celular"
                                        label="Celular"
                                        autoFocus
                                   />
                              </Grid>

                              <Grid item xs={12}>
                                   <TextField
                                        className = "textField" 
                                        variant="outlined"
                                        defaultValue={user.telefono}
                                        name="telefono"
                                        required
                                        fullWidth
                                        id="Telefono"
                                        label="Telefono"
                                        autoFocus
                                   />
                              </Grid>

                              <Grid item xs={12} >
                                   <TextField
                                        className = "textField" 
                                        variant="outlined"
                                        defaultValue={user.direccion}
                                        name="direccion"
                                        required
                                        fullWidth
                                        id="Direccion"
                                        label="Direccion"
                                        autoFocus
                                   />
                              </Grid>

                              <Grid item xs={12} >
                                   <TextField
                                        className = "textField" 
                                        variant="outlined"
                                        defaultValue={user.fechaNacimiento}
                                        name="fechaNacimiento"
                                        required
                                        fullWidth
                                        id="Fecha de Nacimiento"
                                        label="Fecha de Nacimiento"
                                        autoFocus
                                        min="2018-01-01"
                                        max="2018-12-31"
                                        // type="date"
                                        
                                   />
                              </Grid>

                              <Grid item xs={12}>
                                   <TextField
                                        autoComplete="given-name"
                                        variant="outlined"
                                        defaultValue={user.sexo}
                                        name="sexo"
                                        required
                                        fullWidth
                                        id="Sexo"
                                        label="Sexo"
                                        autoFocus
                                   />
                              </Grid>
                         </Grid>
                         <br></br>
                         <div className='buttons'>
                              <Button
                                   className='btn-color' 
                                   type="submit"
                                   fullWidth
                                   variant="contained"
                                   // sx={{ mt: 3, mb: 2 }}
                                   >Actualizar
                              </Button>

                              {/* <Button
                                   className='btn-color'
                                   onClick={ () => atras()}
                                   fullWidth
                                   variant="contained"
                                   // sx={{ mt: 3, mb: 2 }}
                                   >Atras
                              </Button> */}
                         </div>
               </Box>
          </Box>
          </Container>
     </div>
     );  
}