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
import './nuevamascota.css';
import photo from '../../Fotos/pet2.png'
// import "bootstrap/dist/css/bootstrap.min.css";



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


export default function Nuevamascota() {
  // Aqui se guardara el base64 de la imagen de la mascota
  const [imagen, setimagen] = useState("");
  let abrirModal = false


  // Capturar Imagen y convertirla a Base64
  const changeInput = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      // previsualizacion (reader.result)
      // console.log(reader.result);
    setimagen(reader.result)
    }    };

  // Captura de la informacion d ela mascota y Conexion a la base de datos
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
    
    fetch("http://localhost:7777/mascota/agregar", {
      method: 'POST',
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
      window.location.href = "./nuevamascota"; 
    })
    .catch(res => console.log(res));
    event.preventDefault();
  };

  return (
    <div className="containe-fluid div-crearmascota" bgcolor="transparent">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
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
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    variant='filled'
                    name="nombre"
                    required
                    fullWidth
                    id="Nombre"
                    label="Nombre"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    variant='filled'
                    name="edad"
                    required
                    fullWidth
                    id="Edad"
                    label="Edad"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    variant='filled'
                    name="raza"
                    required
                    fullWidth
                    id="Raza"
                    label="Raza"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    variant='filled'
                    name="sexo"
                    required
                    fullWidth
                    id="sexo"
                    label="sexo"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    variant='filled'
                    name="descripcion"
                    required
                    multiline
                    rows={1}
                    fullWidth
                    id="Descripción"
                    label="Descripción"
                    autoFocus
                  />
                </Grid>
              <Grid  item xs={12} >
              <div className="container-fluid">
        <br></br>
    

        {/* VIEW IMAGES */}
        <div className="foto">
            <img src={imagen || photo}></img><br></br>
            {/* INPUT IMAGES */}
            <label className="btn btn-warning">
              <span>Añadir Foto de Perfil </span>
              <input hidden type="file" multiple onChange={changeInput}></input>
            </label>
        </div>

      </div>
              </Grid>
              </Grid>
              <Button 
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >Añadir Mascota</Button>
            </Box>
          </Box>
        </Container>
        <Copyright sx={{ mt: 5 } } />
      </ThemeProvider>
    </div>
  );  
}
