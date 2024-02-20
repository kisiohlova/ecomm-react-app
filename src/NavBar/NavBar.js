import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

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
                <Link to="/">Home</Link>
              </Typography>
            </li>
            <li className="navbar-link">
              <Typography variant="h6">
                <Link to="/catalog">Catalog</Link>
              </Typography>
            </li>
            <li className="navbar-link">
              <Typography variant="h6">
                <Link to="/cart">Cart</Link>
              </Typography>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
