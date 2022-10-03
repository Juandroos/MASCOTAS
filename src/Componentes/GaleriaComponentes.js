import { makeStyles, Paper } from "@material-ui/core"
import { GridList } from "@material-ui/core";
import { GridListTile } from "@material-ui/core"
import { GridListTileBar } from "@material-ui/core"
import tileData from "../tileData";

const GaleriaComponentes =() =>{
    const classes = useStyles();    
    return(
        <Paper variant="outlined" square elevation={0} className={classes.galleryRoot}>
                <div className={classes.mosaic}>
                <GridList cellHeight={140} className={classes.GridList}>
                    {
                        tileData.map(tile => (
                            <GridListTile key={tile.title}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar title={tile.title }/>


                            </GridListTile>
                        ))
                    }
                </GridList>
                </div>
        </Paper>


    )
}

export default GaleriaComponentes

const useStyles = makeStyles(theme =>({
    galleryRoot: {
        height: "auto",

    },
    mosaic: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    GridList: {
        width: 570,
        height: 400,
        "&::-webkit-scrollbar": {
            display: "none"
        }
       
    }

}))

