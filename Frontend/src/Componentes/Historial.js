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
import Kiara from "../Fotos/Kiara.jpg";
import './historial.css';
/*import Img_historial from './Img_historial';
import Magnus from "../Fotos/Magnus.jpeg"
import Max from "../Fotos/Max.png"
import BugsLola from "../Fotos/BugsLola.jpg"
import PanaRabbit from "../Fotos/PanaRabbit.jpeg"*/

 
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

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3000/">
          Nuevo Hogar
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const cards = [1, 2, 3];

  const theme = createTheme();
  return (
    <div className="containe-fluid div-historial" bgcolor="transparent">
        <div>
        <div bgcolor="transparent">
        <Box
            sx={{ mt: 1 }}>
               <ThemeProvider theme={theme}>
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
        <Container sx={{ py: 0 }} maxWidth="md" >
          {/* End hero unit */}
          <Grid container spacing={3} >
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column',bgcolor:"transparent" }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image = {Kiara}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nombre de Mascota
                    </Typography>
                    <Typography>
                      Descripción
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">ver</Button>
                    <Button size="small">editar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>  
            </Box>
        </div>
        </div>
    </div>
  )
}
