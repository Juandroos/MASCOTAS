import {List, Button, ListItemIcon, ListItemText, ListSubheader} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import data from "../listData"
import ListItem from '@material-ui/core/ListItem';


const ListaComponentes =() => {
    const classes= useStyles();
    return(
     <><List component="nav" aria-labelledby='nested-list-subheader'
            subheader={<ListSubheader component='div' id='nested-list-subheder'>

            </ListSubheader>} className={classes.listRoot}>
            {data.map(item => (
                <ListItem key={item.text}>
                    <ListItemIcon className={classes.Icon}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>

            ))}
        </List>
        <br/>
        <br/>
        <Button variant="outlined" color="primary">Iniciar Sesion</Button>
        <Button variant="outlined" color="secondary">Registrarse</Button>
      </>
    )
}

export default ListaComponentes

const useStyles = makeStyles(()=>({}))