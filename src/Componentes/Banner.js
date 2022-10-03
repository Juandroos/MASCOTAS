import { makeStyles, Paper } from "@material-ui/core"
import smart from "../Fotos/nombree.png"
import ListComponent from "./ListaGaleria"

const Banner = () => {
    const classes = useStyles()
    return(
        <>
          <Paper variant="outlined" square elevation={0} className={classes.Banner}>

          </Paper>
        </>
    )
}

export default Banner

const useStyles = makeStyles((theme) =>({
    Banner: {
        width: "inherit",
        height: "55vh",
        backgroundImage: `url(${smart})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center-center"

        
    }

}))