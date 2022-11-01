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
  const [images, setimages] = useState([]);

  const changeInput = (e) => {
    //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
    let indexImg;

    //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);

    console.log(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;

    //el array con las imagenes nuevas
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);

      //console.log(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file
      });

      indexInicial++;
    });

    //despues de haber concluido el ciclo retornamos las nuevas imagenes
    return arrayImages;
  }

  function deleteImg(indice) {
    //console.log("borrar img " + indice);

    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setimages(newImgs);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
                  name="Name"
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
                  name="age"
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
                  name="race"
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
                  name="description"
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

      {/* INPUT IMAGES */}
      <label className="btn btn-warning">
        <span>Seleccionar imagen </span>
        <input hidden type="file" multiple onChange={changeInput}></input>
      </label>

      {/* VIEW IMAGES */}
      <div className="row">
        {images.map((imagen) => (
          <div className="col-6 col-sm-4 col-lg-3 square" key={imagen.index}>
            <div className="content_img">
              <button
                className="position-absolute btn btn-danger"
                onClick={deleteImg.bind(this, imagen.index)}
              >
                x
              </button>
              <img
                alt="algo"
                src={imagen.url}
                data-toggle="modal"
                data-target="#ModalPreViewImg"
                className="img-responsive"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Mascota
            </Button>
          </Box>
        </Box>
      </Container>
      <Copyright sx={{ mt: 5 } } />
    </ThemeProvider>
    </div>
  );
}
