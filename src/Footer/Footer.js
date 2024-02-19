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
      <footer className="footer-container">
        <div className="left-content">
          <h4>Branding stuff</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="center-content">
          <img src="/logo512.png" alt="logo" />
        </div>
        <div className="right-content">
          <FontAwesomeIcon icon={faFacebook} id="facebook" />
          <FontAwesomeIcon icon={faTwitter} id="twitter" />
          <FontAwesomeIcon icon={faInstagram} id="instagram" />
          <FontAwesomeIcon icon={faPinterest} id="pinterest" />
        </div>
      </footer>
      <div className="copyright">2024 ©Copyright all rights reserved, AK</div>
    </>
  );
}

export default Footer;
