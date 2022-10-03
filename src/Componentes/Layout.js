import { makeStyles } from "@material-ui/core"

const Layout = ({children}) => {
    const classes = useStyles()
    return(
        <div className={classes.root }>
          {children}
        </div>
    )
}

export default Layout

const useStyles = makeStyles((theme) =>({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        margin: theme.spacing(2)

    
    }

}))

