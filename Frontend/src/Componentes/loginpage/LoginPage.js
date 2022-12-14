import React,{ useContext }from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import './loginpage.css';

// import UserContext from '../../state/user/UserContext';


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

//Pie de pagina para el copyright
function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
      NuevoHogar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LoginPage() {
  // const { user, setUser } = useContext(UserContext)

  const login = (e) => {
    const data = new FormData(e.currentTarget);
    const usuario = {
      correo: data.get('correo'),
      contrasenia: data.get('contrasenia'),
    }
    fetch("http://localhost:7777/cliente/login", {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('user', JSON.stringify(data));
        window.location.href = "./usuario"; 
      })
      .catch(res => console.log(res));
    e.preventDefault();
  }

    return (
    <div className="containe-fluid div-loginpage" >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
        {/* Inicio de caja */}
          <Box
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          ><br></br>
            <Typography component="h1" variant="h7">
              Iniciar sesion
            </Typography>
            <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
              <TextField 
                margin="normal"
                required
                fullWidth
                id="correo"
                bgcolor="white"
                label="Correo electronico"
                name="correo"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="contrasenia"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                type="send"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // href= "./inicio"
              >
                Iniciar sesion
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href= "./cambiarContrasena" variant="body2">
                    Cambiar contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="./sign-up" variant="body2">
                    {"No tiene cuenta? Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
      </div>
    )
}


