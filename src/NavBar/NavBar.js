import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "./navbar.css";

export function NavBar() {
  return (
    <div>
      <AppBar position="static">
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
