import React,{ Component }from 'react';
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
import Banner from './Banner';
import Grid from '@mui/material/Grid';


//Pie de pagina para el copyright
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
      NuevoHogar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

class LoginPage extends Component{
 
  constructor() {
    super();
    this.state = {
      correo:'',
      contrasenia:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask(e){
    fetch("http://localhost:7777/cliente/login", {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(res => console.log(res));
    e.preventDefault();
  }

  handleChange(e){
    const { name, value }= e.target;
    this.setState({
      [name]: value
    });
  }
 
 render(){
  return (
    <ThemeProvider theme={theme}>
      <Banner/>
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
        >
          <Typography component="h1" variant="h7">
            Iniciar sesion
          </Typography>
          <Box component="form" onSubmit={this.addTask} noValidate sx={{ mt: 1 }}>
            <TextField 
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="correo"
              onChange={this.handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contrasenia"
              onChange={this.handleChange}
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
                <Link href="./registro" variant="body2">
                  {"No tiene cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
        }
}

export default LoginPage;
