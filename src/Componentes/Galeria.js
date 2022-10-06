import { makeStyles } from "@material-ui/core"
import { Container, Typography} from "@material-ui/core"

const Galeria = () => {
    const classes = useStyles()
    return(
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body2">
                    Queremos e intentamos brindarles una segunda oportunidad a los animalitos
                </Typography>
            </Container>
        </footer>
    )
}

export default Galeria

const useStyles = makeStyles((theme) =>({
    root: {
       

    
    }

}))