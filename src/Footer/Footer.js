import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export function Footer() {
  return (
    <>
      <AppBar position="static" className="footer-container">
        <Toolbar>
          <div className="left-content">
            <Typography variant="h6">Branding stuff</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Typography>
          </div>
          <div className="center-content">
            <img src="/logo512.png" alt="logo" className="footer-logo" />
          </div>
          <div className="right-content">
            <IconButton>
              <FontAwesomeIcon icon={faFacebook} id="facebook" />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon icon={faTwitter} id="twitter" />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon icon={faInstagram} id="instagram" />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon icon={faPinterest} id="pinterest" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className="copyright">2024 ©Copyright all rights reserved, AK</div>
    </>
  );
}

export default Footer;
