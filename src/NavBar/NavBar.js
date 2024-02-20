import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "./SearchBar";

import "./navbar.css";

export function NavBar() {
  const location = useLocation(); // Use useLocation hook

  // Conditionally render the search bar only on the catalog page
  const showSearchBar = location.pathname === "/catalog";

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
          {showSearchBar && <SearchBar />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
