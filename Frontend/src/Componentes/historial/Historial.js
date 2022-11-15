import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Kiara from "../../Fotos/Kiara.jpg";
import './historial.css';
import Mascotas from '../pages/Mascotas';
/*import Img_historial from './Img_historial';
import Magnus from "../Fotos/Magnus.jpeg"
import Max from "../Fotos/Max.png"
import BugsLola from "../Fotos/BugsLola.jpg"
import PanaRabbit from "../Fotos/PanaRabbit.jpeg"*/


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
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
export default function Historial() {
  const [mascotas, setPersons] = useState([
    {
      id: 1,
      nombre: "Kevin",
      descripcion: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      nombre: "Alex",
      descripcion: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      nombre: "Ben",
      descripcion: "Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 4,
      nombre: "David",
      descripcion: "Designer 1",
      img: "https://bootdey.com/img/Content/avatar/avatar5.png",
    },
  ]);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="containe-fluid div-historial" bgcolor="transparent">
        <Box
          marginTop={25}
            sx={{ mt: 1 }}>
              
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor:"transparent",
            pt: 1,
            pb: 1,
          }}
        >
          <Container maxWidth="md"  >
            <Typography
            marginTop={4}
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Historial de Mascotas
            </Typography>
          </Container>
          
        </Box>
        <ThemeProvider theme={theme}>
        <Container sx={{ py: 0  }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {mascotas.map((mascotas) => (
              <Grid item key={mascotas.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{ maxWidth:345}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height:140
                    }}
                    image = {mascotas.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1, bgcolor:'black'}} >
                    <Typography gutterBottom variant="h5" component="h2" color="white">
                      {mascotas.nombre}
                    </Typography>
                    <Typography color="white">
                      {mascotas.descripcion}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{bgcolor:'black'}}>
                    <Button size="small" color="secondary">ver</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </ThemeProvider>
      
      {/* Footer */}
      <Copyright sx={{ mt: 8, mb: 4 }} />
      {/* End footer */}
      </main>
            </Box> 
        </div>
  )
}
