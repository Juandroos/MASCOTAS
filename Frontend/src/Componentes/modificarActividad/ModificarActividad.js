import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel, MenuItem, Select } from '@mui/material';
import './modificarActividad.css';

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

  const suppliers = [
    {label: 'Mixta', value:'Mixta'},
    {label: 'Campo abierto', value:'Campo abierto'},
    {label: 'Techado', value:'Techado'},
  ]

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
  

export default function ModificarActividad() {

  return (
    <div className="containe-fluid div-modificaractividad">
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
            <Typography component="h1" variant="h7">
            Modificar Actividad
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    variant='filled'
                    name="titulo"
                    required
                    fullWidth
                    id="Cambiar titulo del evento"
                    label="Cambiar titulo del evento"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    variant='filled'
                    name="resumen"
                    required
                    fullWidth
                    id="Cambiar resumen"
                    label="Cambiar resumen"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    variant='filled'
                    name="direccion"
                    required
                    fullWidth
                    id="Cambiar dirección"
                    label="Cambiar dirección"
                    autoFocus
                  />
                </Grid>
                    <Grid item xs={12} spacing={2}>
                    <InputLabel>cambiar descripción de Área</InputLabel>
                    <Select variant='filled' label="Cambiar descripción de Área" focused>
                        <MenuItem value={0}>Mixta</MenuItem>
                        <MenuItem value={1}>Techada</MenuItem>
                        <MenuItem value={2}>Campo abierto</MenuItem>
                    </Select>
                    </Grid>
                    <Grid item xs={12} >
                  <TextField 
                    variant='filled'
                    name="fecha"
                    required
                    fullWidth
                    label="Cambiar fecha del evento"
                    type="date"
                    focused
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    variant='filled'
                    name="telefono"
                    required
                    fullWidth
                    id="Cambiar telefono del organizador"
                    label="Cambiar telefono del organizador"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    variant='filled'
                    name="organizador"
                    required
                    fullWidth
                    id="Cambiar organizador del evento"
                    label="Cambiar organizador del evento"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    variant='filled'
                    name="correo"
                    required
                    fullWidth
                    id="Cambiar correo electronico"
                    label="Cambiar correo electronico"
                    autoFocus
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    variant='filled'
                    name="beneficio"
                    required
                    fullWidth
                    id="Cambiar beneficio de"
                    label="Cambiar beneficio de"
                    autoFocus
                  />
                </Grid>
              <Grid  item xs={12} >
              </Grid>
              </Grid>
              <Button 
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >Guardar actividad</Button>
            </Box>
          </Box>
        </Container>
        <Copyright sx={{ mt: 5 } } />
      </ThemeProvider>
      </div>
  )
}
