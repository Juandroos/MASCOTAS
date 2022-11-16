import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './modificarMascota.css';



const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#171717',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" background-attachment= "fixed" {...props} >
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Nuevo Hogar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function ModificarMascota() {
  // Aqui se guardara el base64 de la imagen de la mascota
  const pet = JSON.parse(localStorage.getItem('mascota'));
  const [imagen, setimagen] = useState(pet.imagen);


  // Capturar Imagen y convertirla a Base64
  const changeInput = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      // previsualizacion (reader.result)
      // console.log(reader.result);
    setimagen(reader.result)
    }    };

  // Actualizacion de la informacion de la mascota y Conexion a la base de datos
  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    const mascota = {
      nombre: data.get('nombre'),
      edad: data.get('edad'),
      raza: data.get('raza'),
      sexo: data.get('sexo'),
      descripcion: data.get('descripcion'),
      imagen: imagen
    }
    // console.log(mascota)
    // event.preventDefault();
    
    fetch(`http://localhost:7777/mascota/actualizar/${pet._id}`, {
      method: 'PUT',
      body: JSON.stringify(mascota),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      alert(data.mensaje)
      window.location.href = "./mascotasAdmin"; 
    })
    .catch(res => console.log(res));
    event.preventDefault();
  };

  const atras = () =>{
    localStorage.clear();
    window.location.href = "./mascotasAdmin";
  }

  return (
    <div className="containe-fluid div-modificarmascota">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2} >

                  {/* IMAGEN */}
                  <Grid  item xs={12} >
                    <div className="container-fluid">
                    <br></br>
                      {/* VIEW IMAGES */}
                      <div className='fotoPerfil' >
                          <img className="fotoPerfil" src={imagen}></img><br></br>
                          {/* INPUT IMAGES */}
                          <label className="btn btn-warning">
                            <span>Cambiar foto</span>
                            <input hidden type="file" multiple onChange={changeInput}></input>
                          </label>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      variant="outlined"
                      defaultValue={pet.nombre}
                      name="nombre"
                      required
                      fullWidth
                      id="Nuevo Nombre"
                      label="Nombre"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12} >
                    <TextField 
                      variant="outlined"
                      defaultValue={pet.edad}
                      name="edad"
                      required
                      fullWidth
                      id="Nueva Edad"
                      label="Nueva Edad"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12} >
                    <TextField 
                      variant="outlined"
                      defaultValue={pet.raza}
                      name="raza"
                      required
                      fullWidth
                      id="Nueva Raza"
                      label="Nueva Raza"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField 
                      variant="outlined"
                      defaultValue={pet.sexo}
                      name="sexo"
                      required
                      fullWidth
                      id="Nuevo sexo"
                      label="Nuevo sexo"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      variant="outlined"
                      defaultValue={pet.descripcion}
                      name="descripcion"
                      required
                      multiline
                      rows={4}
                      fullWidth
                      id=" Nueva Descripción"
                      label="Nueva Descripción"
                      autoFocus
                    />
                  </Grid>

                </Grid>
                <div className='buttons'>
                  <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    // sx={{ mt: 3, mb: 2 }}
                    >Actualizar</Button>
                  <Button
                    onClick={ () => atras()}
                    fullWidth
                    variant="contained"
                    // sx={{ mt: 3, mb: 2 }}
                    >Atras
                  </Button>
                </div>
            </Box>
          </Box>
        </Container>
        <Copyright sx={{ mt: 5 } } />
      </ThemeProvider>
    </div>
  );  
}
