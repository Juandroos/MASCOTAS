import { Button, Divider, makeStyles, Paper, Typography } from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"

const Mision = () => {
    const classes = useStyles()
    return(
        <Paper variant="outlined" elevation="10" square className={classes.mision}>
          <Typography>
            MISION: Brindar un lugar donde los animales puedan encontrar un lugar seguro, cuidados, comida, y se familiaricen con animales 
            que han estado en siticuaciones similares con la finalidad de encontrar una persona amorosa que les ayude a conocer 
            el significado de familia.
          </Typography>
          <Divider/>
          <Typography>
            VISION: Profesionalidad nuestra carta de presentacion. A pesar de disponer de pocos recursos, nuestro refugio 
            se caracteriza por el amor, es por ello que dia a dia luchamos con los retos que se presentan, intentando dar
            la mejor calidad de vida a nuestros aniamles.
          </Typography>
          <Divider/>
          <Typography>
            VALORES: Fomentar cariño a los animales. Consideramos que el castigo agrava los traumas y frudta el proceso 
            de rehabilitacion de los animales, es por ello que educamos y procuramos que nuestras animales sientan el amor 
            que transmitimos sobre ellos y se sientan protegidos.
          </Typography>
          <Divider/>
          <Typography>
          <div className={classes.action}>
            <Button variant="Contained" startIcon={<EmailIcon/>} style={{margin: "1rem 0", backgroundColor: "#ea5933" }}>Send me an email <span className={classes.extendText}>to lern more....</span></Button>
            <Typography variant="h10">
        
            </Typography>


          </div>
          </Typography>
        </Paper>
    )
}

export default Mision

const useStyles = makeStyles((theme) =>({
    mision: {
        width: "inherit",
        height: "auto",
        panding:theme.spacing(2)
       
    },

    action: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& button:hover":{
            backgroundColor: "#ccc !important"
        }
    }

}))