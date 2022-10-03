import { makeStyles, Paper, Typography } from "@material-ui/core"
import ListaGaleria from "./ListaGaleria"

const Presentacion = () => {
    const classes = useStyles()
    return(
        <Paper 
        variant="outlined" 
        square
        elevation="10"  
        className={classes.Presentacion}>

          <Typography variant="h4">Nuestras Mascotas</Typography>
          <ListaGaleria/>

        
        </Paper>
    )
}

export default Presentacion

const useStyles = makeStyles((theme) =>({
    root: {
       

    
    }

}))