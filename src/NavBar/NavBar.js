import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#1976d2", // Set the background color to match the footer
  },
}));

export function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src="/logo512.png" alt="logo" className="logo" />
          <ul className="navbar-links">
            <li className="navbar-link">
              <Typography variant="h6">
                <a href="#">Home</a>
              </Typography>
            </li>
            <li className="navbar-link">
              <Typography variant="h6">
                <a href="#">Catalog</a>
              </Typography>
            </li>
            <li className="navbar-link">
              <Typography variant="h6">
                <a href="#">Cart</a>
              </Typography>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
