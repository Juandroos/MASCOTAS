import React from 'react'
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
export default function Historial() {
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

  //Pie de pagina para el copyright
function Copyright(props) {
  return (
    <Typography variant="body2" color= "white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
      NuevoHogar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

  const cards = [1, 2, 3,4];
  return (
    <div className="containe-fluid div-historial" >
        <div>
        
        <Box
        
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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{ maxWidth:345}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height:140
                    }}
                    image = {Kiara}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1, bgcolor:'black'}} >
                    <Typography gutterBottom variant="h5" component="h2" color="white">
                      Nombre de Mascota
                    </Typography>
                    <Typography color="white">
                      Descripción
                    </Typography>
                  </CardContent>
                  <CardActions sx={{bgcolor:'black'}}>
                    <Button size="small" color="secondary">ver</Button>
                    <Button size="small" color="secondary">editar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </ThemeProvider>
      </main>
      {/* Footer */}
      <Copyright sx={{ mt: 8, mb: 4 }} />
      {/* End footer */}
   
            </Box>
              
        </div>
    </div>
  )
}
