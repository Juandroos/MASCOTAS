import { Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import GaleriaComponentes from "./GaleriaComponentes";
import ListaComponentes from "./ListaComponentes";

const ListaGaleria = () => {
    const classes = useStyles();
    return(
        <div className={classes.gridRoot}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <ListaComponentes/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <GaleriaComponentes/>
                    
                </Grid>
            </Grid>
          
        </div>
    )
}

export default ListaGaleria

const useStyles = makeStyles((theme) =>({}))